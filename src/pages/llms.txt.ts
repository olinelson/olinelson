import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import {
  profile,
  services,
  trust,
  flow,
  pricing,
  work,
  experience,
  skills,
  personal,
  links,
} from '../data/profile'

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

  const servicesLines = services.groups
    .map((g) => {
      const items = g.items.map((s) => `  - **${s.title}:** ${s.body}`).join('\n')
      return `### ${g.label}\n${items}`
    })
    .join('\n\n')

  const trustLines = trust.items.map((t) => `- **${t.title}:** ${t.body}`).join('\n')

  const flowLines = flow.steps
    .map((s) => `${s.n}. **${s.title}${s.free ? ' (free)' : ''}** — ${s.body}`)
    .join('\n')

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

> ${profile.role}, based in ${profile.location}. ${profile.headline}

${profile.subhead}

Contact: ${profile.email} · ${profile.phone}
Enquire: ${profile.enquireUrl}
Website: ${SITE}

## About

Oli Nelson uses AI to help businesses make more money and save time. He runs a solo AI
studio for small businesses and trades — owner-operators and the kind of company custom
software was never worth it for, until AI changed the economics. He finds what's costing
an owner revenue or hours, then builds the simplest thing that fixes it, supports it, and
keeps it running. One real person the whole way through: no agency, no offshore team, no
hand-offs. He has shipped AI to production for his own products and for other companies,
and runs two of his own products for paying customers.

${personal.body}

**Based in** Coffs Harbour on the NSW Mid North Coast, Australia — working with local
businesses and clients anywhere. ${profile.available}

## What Oli offers

${services.title} — ${services.intro}

${servicesLines}

${services.proof}

${services.closer} ${services.closerCta}: ${profile.enquireUrl}

## How Oli works

${flow.heading} — ${flow.intro}

${flowLines}

${flow.closer.lead} ${flow.closer.body}

## How Oli takes the risk out of it

${trustLines}

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

To work with Oli, send an enquiry at ${profile.enquireUrl}, email ${profile.email}, or call
${profile.phone}. The first consult is free, and you get a fixed price before any work starts.
Full text of every article is available at ${SITE}/llms-full.txt and ${SITE}/feed.xml.
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
