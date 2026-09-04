import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import {
  profile,
  home,
  consulting,
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
    .map((s) => `- **${s.label}:** ${s.from ? 'from ' : ''}${s.price} — ${s.note} ${s.body}`)
    .join('\n')

  const speedLines = home.speeds
    .map((s) => `- **${s.label}:** ${s.price} per month — ${s.note} ${s.body}`)
    .join('\n')

  const kindLines = consulting.kinds.map((k) => `- **${k.label}:** ${k.note}`).join('\n')

  const years = ((Date.now() - Date.parse(home.experience.start)) / (365.2425 * 24 * 60 * 60 * 1000)).toFixed(1)

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

${home.headline} ${home.intro.lead} ${home.intro.rest} ${home.punch.lead} ${home.punch.rest}

${personal.body}

**Based in** Coffs Harbour on the NSW Mid North Coast, Australia — working with local
businesses and clients anywhere. ${profile.available}

## Sizes

${home.kickoff.lead} ${home.kickoff.rest}

${sizeLines}

## After the app is live

${home.live.lead} ${home.live.rest}

${speedLines}

## Terms

${home.terms.lead} ${home.terms.rest}

## Consulting, by the day

Separate from the fixed-price builds above. ${consulting.headline} ${consulting.intro.lead}
${consulting.intro.rest} ${consulting.together.lead} ${consulting.together.rest}

${consulting.byTheDay.lead} ${consulting.byTheDay.rest} ${consulting.method.lead}
${consulting.method.rest}

${kindLines}

${consulting.team.lead} ${consulting.team.rest} ${consulting.teamProof.lead}
${consulting.teamProof.rest}

${consulting.rate.lead} ${consulting.rate.rest}

${consulting.why.lead} ${consulting.why.rest}

${consulting.honest.lead} ${consulting.honest.rest}

Read more: ${SITE}/consulting.html

## Experience

${home.experience.before} ${years} ${home.experience.after}

${home.bothSides.lead} ${home.bothSides.rest} ${home.direct.lead} ${home.direct.rest}

${home.experience.places.map((p) => `- [${p.name}](${p.href})`).join('\n')}

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
${profile.phone}. ${home.unsure.lead} ${home.unsure.rest} ${home.honest.lead} ${home.honest.rest} ${home.start.ask} ${home.start.rest}
Full text of every article is available at ${SITE}/llms-full.txt and ${SITE}/feed.xml.
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
