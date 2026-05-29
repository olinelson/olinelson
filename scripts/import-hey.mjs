// One-time importer: pulls posts from the hey.com Atom feed, converts each
// post body from HTML to Markdown, downloads images locally, and writes a
// Markdown file per post into src/data/words/. Run with: bun scripts/import-hey.mjs
import { parseFeed } from '@rowanmanning/feed-parser'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const FEED = 'https://world.hey.com/olivernelson/feed.atom'
const WORDS_DIR = 'src/data/words'
const IMG_PUBLIC = 'public/words'

const td = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '_',
})
td.use(gfm)

const decodeEntities = (s) =>
  s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')

// hey wraps code in <pre language="..."> with syntax-highlight <span>s and no
// <code> child, so turndown's default fenced-code rule never fires. Read the
// innerHTML, strip only the highlight spans (so example tags like <img> survive
// as literal text), decode entities, and emit a real fenced block (no escaping).
td.addRule('heyPreCode', {
  filter: 'pre',
  replacement: (_content, node) => {
    const lang = node.getAttribute('language') || ''
    const code = decodeEntities(
      node.innerHTML
        .replace(/<\/?span[^>]*>/gi, '')
        .replace(/<br\s*\/?>/gi, '\n'),
    )
      .replace(/^\n+/, '')
      .replace(/\n+$/, '')
    return `\n\n\`\`\`${lang}\n${code}\n\`\`\`\n\n`
  },
})

const slugFromUrl = (url) =>
  url.replace(/\/+$/, '').split('/').pop().replace(/-[0-9a-f]{6,}$/, '')

const plainPreview = (html, max = 160) => {
  const text = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  return cut.slice(0, cut.lastIndexOf(' ')) + '…'
}

const extFromType = (type = '') => {
  if (type.includes('png')) return 'png'
  if (type.includes('jpeg') || type.includes('jpg')) return 'jpg'
  if (type.includes('gif')) return 'gif'
  if (type.includes('webp')) return 'webp'
  if (type.includes('svg')) return 'svg'
  return 'png'
}

const res = await fetch(FEED)
const feed = parseFeed(await res.text())

console.log(`Found ${feed.items.length} posts.\n`)

for (const item of feed.items) {
  const slug = slugFromUrl(item.url)
  let html = item.content ?? ''

  // Download every <img> and rewrite its src to a local path. Skip <pre> blocks
  // so <img> tags shown inside code examples aren't treated as real images.
  const scanHtml = html.replace(/<pre[\s\S]*?<\/pre>/gi, '')
  const srcs = [...scanHtml.matchAll(/<img[^>]+src="([^"]+)"/gi)].map((m) => m[1])
  const unique = [...new Set(srcs)]
  let n = 0
  for (const src of unique) {
    n += 1
    try {
      const img = await fetch(src)
      const buf = Buffer.from(await img.arrayBuffer())
      const ext = extFromType(img.headers.get('content-type'))
      const file = `image-${n}.${ext}`
      await mkdir(join(IMG_PUBLIC, slug), { recursive: true })
      await writeFile(join(IMG_PUBLIC, slug, file), buf)
      html = html.split(src).join(`/words/${slug}/${file}`)
      console.log(`  ↓ ${slug}/${file}`)
    } catch (err) {
      console.warn(`  ! failed image ${src}: ${err.message}`)
    }
  }

  const markdown = td.turndown(html)
  const published = new Date(item.published).toISOString().slice(0, 10)
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(item.title)}`,
    `published: ${published}`,
    'public: true',
    `preview: ${JSON.stringify(plainPreview(html))}`,
    '---',
    '',
    '',
  ].join('\n')

  await mkdir(WORDS_DIR, { recursive: true })
  await writeFile(join(WORDS_DIR, `${slug}.md`), frontmatter + markdown + '\n')
  console.log(`✓ ${slug}.md (${published})\n`)
}

console.log('Done.')
