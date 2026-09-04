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
  'Oli Nelson builds software for small businesses from Coffs Harbour, Australia, working with ' +
  'clients anywhere. He handles the work from the first chat to an app live on the client’s domain: ' +
  'one person, no hand-offs. A one-off fee depends on size (Small $5,000, Medium $10,000, Large from ' +
  '$15,000) and most projects are live in about a month. After launch, clients keep the lights on or ' +
  'keep building, from about $60 a month to $10,000 a month. Every plan includes unlimited bug fixes. ' +
  'Lights-on is at cost, plus 20% for those fixes. The software and data belong to the client from ' +
  'day one. He also works by the day inside businesses that are already running, fixing where work ' +
  'gets stuck — the process, the software, or both. The first call is free.'

const knowsAbout = [
  'Artificial intelligence',
  'AI for small business',
  'AI automation',
  'AI agents',
  'Custom software development',
  'AI customer enquiry handling',
  'Automated quoting and estimates',
  'Business process automation',
  'Business process improvement',
  'Software and technology consulting',
  'Contract software engineering',
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
    jobTitle: 'AI Consultant & Software Engineer',
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
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Flatiron School',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Sydney Conservatorium of Music, University of Sydney',
      },
    ],
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
    name: 'Oli Nelson — Software for small businesses',
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
    name: 'Custom software for small business',
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
        'The first call is free. A one-off fee gets the app live. After that you keep the lights on or keep building. Every plan includes unlimited bug fixes. Lights-on is at cost, plus 20% for those fixes. Software and data are yours from day one. Stop any month with nothing extra to pay.',
    },
    url: SITE,
  }
}

export function consultingSchema() {
  return {
    '@type': 'Service',
    '@id': `${SITE}/#consulting`,
    name: 'Business and software consulting, by the day',
    description:
      'Oli Nelson works by the day inside businesses that are already running, finding where work gets ' +
      'stuck and fixing it — the process, the software, or both. He writes the code himself, so there is ' +
      'no hand-off between working out the solution and building it. He also drops into existing ' +
      'development teams to take on a hard feature, a technical decision, or an AI feature nobody has ' +
      'shipped. The rate is quoted per engagement, in Australian dollars plus GST, with two days the ' +
      'smallest engagement. Work that can be defined properly gets a fixed price instead.',
    provider: { '@id': PERSON_ID },
    areaServed: [
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Place', name: 'Worldwide (remote)' },
    ],
    serviceType: [
      'Business process improvement',
      'Software consulting',
      'AI consulting',
      'Contract software engineering',
      'Technical advisory',
    ],
    url: `${SITE}/consulting.html`,
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
