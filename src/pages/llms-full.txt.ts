import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { profile } from '../data/profile'

// /llms-full.txt — every public post's full Markdown source concatenated, so an
// AI agent can ingest the complete corpus in one fetch.
export const GET: APIRoute = async () => {
  const SITE = 'https://olinelson.com'

  const posts = (await getCollection('blog', ({ data }) => data.public !== false)).sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
  )

  const sections = posts
    .map((p) => {
      const date = p.data.published.toISOString().slice(0, 10)
      return `# ${p.data.title}

Source: ${SITE}/words/${p.id}.html
Published: ${date}
Author: ${profile.name}

${p.body?.trim() ?? ''}`
    })
    .join('\n\n---\n\n')

  const body = `# Oli Nelson — Complete Writing

> Full text of every public article by ${profile.name} (${profile.role}). Contact: ${profile.email}

${sections}
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
