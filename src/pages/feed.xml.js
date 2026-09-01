import rss from '@astrojs/rss'
import { getCollection, render } from 'astro:content'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import sanitizeHtml from 'sanitize-html'

export async function GET(context) {
  const base = String(context.site).replace(/\/$/, '')

  const posts = (await getCollection('blog', ({ data }) => data.public !== false)).sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
  )

  const container = await AstroContainer.create()

  const items = []
  for (const post of posts) {
    const { Content } = await render(post)
    const rendered = await container.renderToString(Content)
    // Make image/links absolute so they resolve inside feed readers.
    const absolute = rendered.replace(/(src|href)="\//g, `$1="${base}/`)
    const content = sanitizeHtml(absolute, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'img',
        'h1',
        'h2',
        'figure',
        'figcaption',
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ['src', 'alt'],
      },
    })

    items.push({
      title: post.data.title,
      pubDate: post.data.published,
      description: post.data.preview,
      link: `/words/${post.id}.html`,
      content,
    })
  }

  return rss({
    title: 'Oli Nelson — Words',
    description:
      'Writing by Oli Nelson on software, AI, building products, and music.',
    site: context.site,
    items,
  })
}
