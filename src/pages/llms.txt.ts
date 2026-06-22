import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { profile, services, pricing, work, experience, skills, links } from '../data/profile'

// /llms.txt — the llmstxt.org convention: a clean, structured Markdown brief that
// lets AI agents understand who Oli is, what he offers, and where to read more,
// without parsing the rendered HTML. Full post text lives at /llms-full.txt.
export const GET: APIRoute = async () => {
  const SITE = 'https://olinelson.com'

  const posts = (await getCollection('blog', ({ data }) => data.public !== false)).sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
  )

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

  const servicesLines = services.items.map((s) => `- **${s.title}:** ${s.body}`).join('\n')

  const pricingLines = pricing.tiers
    .map((t) => `- **${t.label}:** ${t.amount} ${t.unit} — ${t.note}`)
    .join('\n')

  const postLines = posts
    .map((p) => `- [${p.data.title}](${SITE}/words/${p.id}.html): ${p.data.preview}`)
    .join('\n')

  const linkLines = links
    .map((l) => `- [${l.label}](${l.href.startsWith('http') ? l.href : SITE + l.href})`)
    .join('\n')

  const body = `# Oli Nelson

> ${profile.role}, based in ${profile.location}. ${profile.subhead}

Contact: ${profile.email} · ${profile.phone}
Website: ${SITE}

## About

Oli Nelson builds custom AI software for small businesses and trades — the kind of
businesses custom software was never worth it for, until AI changed the economics. He
finds where AI can save an owner hours or win them more work, then builds it, supports it,
and keeps improving it. He works as one real person (not an agency or offshore team) and
has shipped AI to production for his own products and for other companies. Before software
he was a professional jazz drummer (Bachelor of Jazz Performance, Sydney Conservatorium of
Music; James Morrison Jazz Scholarship). He is also a Product Engineer at Uscreen and the
founder of Ricordi and Maestrocast.

**Based in** Coffs Harbour on the NSW Mid North Coast, Australia — working with local
businesses and clients anywhere. ${profile.available}

## What Oli builds for businesses

${servicesLines}

## Pricing

${pricingLines}

${pricing.note}

## Proof — things Oli has built

${workLines}

## Track record

${experienceLines}

## Technical capability

${skillsLines}

## Writing

${postLines}

## Links

${linkLines}

## Work with Oli

To work with Oli, email ${profile.email}, call ${profile.phone}, or see ${SITE}/hire.html.
The first call is free, and you get a fixed price before any work starts.
Full text of every article is available at ${SITE}/llms-full.txt and ${SITE}/feed.xml.
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
