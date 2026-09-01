import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import {
  profile,
  home,
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

  const sizeLines = home.sizes
    .map((s) => `- **${s.label}:** ${s.from ? 'from ' : ''}${s.price} — ${s.note}`)
    .join('\n')

  const speedLines = home.speeds
    .map((s) => `- **${s.label}:** ${s.price} per month — ${s.note}`)
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

${home.intro.lead} ${home.intro.rest} ${home.chat.lead} ${home.chat.rest} ${home.kickoff.lead} ${home.kickoff.rest}

${personal.body}

**Based in** Coffs Harbour on the NSW Mid North Coast, Australia — working with local
businesses and clients anywhere. ${profile.available}

## Sizes

${home.kickoff.lead} ${home.kickoff.rest}

${sizeLines}

## After the app is live

${home.live.lead} ${home.live.rest}

${speedLines}

${home.log.lead} ${home.log.rest}

${home.bugs.lead} ${home.bugs.rest}

## Billing and ownership

${home.billing.lead} ${home.billing.rest} ${home.ownership.lead} ${home.ownership.rest}

## Experience

${home.experience.lead} ${home.experience.rest}

${home.products.lead} ${home.products.items.map((p) => `[${p.name}](${p.href}) ${p.gloss}`).join('. ')}.

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
${profile.phone}. ${home.close.body}
Full text of every article is available at ${SITE}/llms-full.txt and ${SITE}/feed.xml.
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
