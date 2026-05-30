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
  'Product engineer and founder based in Australia, working remotely worldwide. ' +
  'I ship AI-native products end-to-end — discovery, design, full-stack build, and deploy. ' +
  'Open to technical-cofounder, product-engineer, and freelance work.'

const knowsAbout = [
  'Artificial intelligence',
  'AI product engineering',
  'AI agents',
  'Large language model applications',
  'OpenAI API',
  'Anthropic API',
  'Ruby on Rails',
  'Hotwire',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Full-stack web development',
  'Product engineering',
  'WebRTC',
  'Startup founding',
]

export function personSchema(imageUrl: string) {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: profile.name,
    alternateName: 'Oliver Nelson',
    url: SITE,
    image: imageUrl,
    jobTitle: 'Product Engineer & Founder',
    description,
    email: `mailto:${profile.email}`,
    address: { '@type': 'PostalAddress', addressCountry: 'AU' },
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
    name: 'Oli Nelson — Product Engineer & Founder',
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
    '@id': `${SITE}/hire.html#service`,
    name: 'Freelance AI Product Engineering & Technical Cofounding',
    description,
    provider: { '@id': PERSON_ID },
    areaServed: { '@type': 'Place', name: 'Worldwide (remote)' },
    serviceType: [
      'AI product engineering',
      'Technical cofounder',
      'Full-stack development',
      'MVP and 0-to-1 product builds',
      'AI agent and LLM integration',
    ],
    url: `${SITE}/hire.html`,
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
