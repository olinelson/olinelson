// Schema.org / JSON-LD builders. These objects are what Google's rich results
// AND AI agents (ChatGPT, Claude, Perplexity) extract first — keep them in sync
// with src/data/profile.ts. Each page wires the relevant builders into its <Seo>.

import { profile, links } from '../data/profile'

export const SITE = 'https://olinelson.com'
export const PERSON_ID = `${SITE}/#oli`
const WEBSITE_ID = `${SITE}/#website`

// External profiles only (drop the in-site blog link) — the `sameAs` graph that
// ties this identity to GitHub/LinkedIn/X/etc.
const sameAs = links.map((l) => l.href).filter((href) => href.startsWith('http'))

const description =
  'Oli Nelson builds custom AI software for small businesses and trades — based in ' +
  'Australia, working with clients anywhere. Advice first, software second: he recommends ' +
  'the simplest fix, whether that is existing software, a custom build, or both, then builds ' +
  'it and keeps it running. Practical, affordable AI for missed-call and after-hours enquiry ' +
  'handling, instant quoting, automated follow-ups, paperwork and compliance from a voice ' +
  'note, and clear financial reporting. The first consult is free, with a fixed quote before ' +
  'any work starts and free bug fixes after.'

const knowsAbout = [
  'Artificial intelligence',
  'AI for small business',
  'AI automation',
  'AI agents',
  'Custom software development',
  'AI customer enquiry handling',
  'Automated quoting and estimates',
  'Business process automation',
  'Large language model applications',
  'Computer vision',
  'Anthropic API',
  'OpenAI API',
  'Full-stack web development',
  'iPhone app development',
  'Software for trades and small business',
]

export function personSchema(imageUrl: string) {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: profile.name,
    alternateName: 'Oliver Nelson',
    url: SITE,
    image: imageUrl,
    jobTitle: 'AI Consultant & Software Developer',
    description,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneHref,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coffs Harbour',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    knowsAbout,
    knowsLanguage: 'en',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Sydney Conservatorium of Music, University of Sydney',
    },
    worksFor: { '@type': 'Organization', name: 'Uscreen', url: 'https://www.uscreen.tv' },
    sameAs,
    seeks: {
      '@type': 'Demand',
      name: profile.available,
    },
  }
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE,
    name: 'Oli Nelson',
    description,
    inLanguage: 'en',
    publisher: { '@id': PERSON_ID },
  }
}

export function profilePageSchema() {
  return {
    '@type': 'ProfilePage',
    '@id': `${SITE}/#profilepage`,
    url: SITE,
    name: 'Oli Nelson — Custom AI software for small business',
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID },
    inLanguage: 'en',
  }
}

type PostMeta = { title: string; preview: string; published: Date }

export function blogPostingSchema(post: PostMeta, url: string, imageUrl: string) {
  const iso = post.published.toISOString()
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    name: post.title,
    description: post.preview,
    datePublished: iso,
    dateModified: iso,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    image: imageUrl,
    url,
    mainEntityOfPage: url,
    inLanguage: 'en',
  }
}

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  }
}

export function serviceSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE}/#service`,
    name: 'Custom AI Software for Small Business',
    description,
    provider: { '@id': PERSON_ID },
    areaServed: [
      { '@type': 'City', name: 'Coffs Harbour' },
      { '@type': 'Place', name: 'Mid North Coast, NSW' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Place', name: 'Worldwide (remote)' },
    ],
    serviceType: [
      'Custom AI software for small business',
      'AI automation for trades and small business',
      'After-hours and missed-call enquiry handling',
      'Automated quoting and estimates',
      'AI agent and LLM integration',
      'Business reporting and dashboards',
    ],
    offers: {
      '@type': 'Offer',
      description:
        'The first consult is free. You get a fixed quote before any work starts, with no monthly fee after — bug fixes are free, and you only pay the actual running costs (hosting and any AI usage) at cost. Fixes range from setting up an existing tool to a full custom build.',
    },
    url: SITE,
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}
