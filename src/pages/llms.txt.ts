import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { profile, work, experience, skills, links } from '../data/profile'

// /llms.txt — the llmstxt.org convention: a clean, structured Markdown brief that
// lets AI agents understand who Oli is, what he offers, and where to read more,
// without parsing the rendered HTML. Full post text lives at /llms-full.txt.
export const GET: APIRoute = async () => {
  const SITE = 'https://olinelson.com'

  const posts = (await getCollection('blog', ({ data }) => data.public !== false)).sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
  )

  const caseStudies = (await getCollection('work', ({ data }) => data.public !== false)).sort(
    (a, b) => a.data.order - b.data.order,
  )
  const caseStudyLines = caseStudies
    .map((c) => `- [${c.data.title}](${SITE}/work/${c.id}.html) — ${c.data.tag}: ${c.data.summary}`)
    .join('\n')

  const workLines = work
    .map((p) => {
      const link = p.href ? ` (${p.href})` : ''
      return `- **${p.title}** — ${p.tag}${link}: ${p.blurb}`
    })
    .join('\n')

  const experienceLines = experience
    .map((j) => `- **${j.role}, ${j.company}** (${j.period}): ${j.blurb}`)
    .join('\n')

  const skillsLines = skills.map((s) => `- **${s.label}:** ${s.items}`).join('\n')

  const postLines = posts
    .map((p) => `- [${p.data.title}](${SITE}/words/${p.id}.html): ${p.data.preview}`)
    .join('\n')

  const linkLines = links
    .map((l) => `- [${l.label}](${l.href.startsWith('http') ? l.href : SITE + l.href})`)
    .join('\n')

  const body = `# Oli Nelson

> ${profile.role} based in ${profile.location}. ${profile.subhead} ${profile.available}

Contact: ${profile.email}
Website: ${SITE}

## About

Oli Nelson is a product engineer and founder who ships AI-native products end-to-end —
discovery, design, full-stack build, branding, and deploy. He has founded multiple 0→1
products and brings that same ownership to teams. Before software he was a professional
jazz drummer (Bachelor of Jazz Performance, Sydney Conservatorium of Music; James Morrison
Jazz Scholarship). Currently a Product Engineer at Uscreen and founder of Ricordi and
Maestrocast.

**Open to:** technical-cofounder roles, product-engineer roles, and freelance/contract work.
Available remotely worldwide.

## Selected work

${workLines}

## Case studies (in depth)

${caseStudyLines}

## Experience

${experienceLines}

## Skills

${skillsLines}

## Writing

${postLines}

## Links

${linkLines}

## Hire

To work with Oli, email ${profile.email} or see ${SITE}/hire.html.
Full text of every article is available at ${SITE}/llms-full.txt and ${SITE}/feed.xml.
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
