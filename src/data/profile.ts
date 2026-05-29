// Single source of truth for the site's content.
// Sourced from the resume, with internal $ figures softened to multipliers and
// PII (phone, precise address) deliberately omitted from the public site.

export const profile = {
  name: 'Oli Nelson',
  // Headline is the highest-leverage line on the page — easy to swap here.
  role: 'Product engineer & founder',
  headline: 'Founder’s instincts, engineer’s hands — blank page to shipped product.',
  subhead:
    'I’ve founded and shipped my own products end-to-end — discovery, design, full stack, deploy — and I bring that same ownership to great teams.',
  location: 'Australia · working remotely worldwide',
  email: 'olivernelson@hey.com',
  available:
    'Open to technical-cofounder, product-engineer, and freelance work.',
}

export type Metric = { value: string; label: string }

export const metrics: Metric[] = [
  { value: '4+', label: 'AI products shipped to production' },
  { value: '4', label: 'products founded, 0→1' },
  { value: '~28×', label: 'cheaper AI image generation' },
  { value: '2×', label: 'day-one creator activation' },
]

export type Project = {
  title: string
  tag: string
  blurb: string
  bullets: string[]
  stack: string[]
  href?: string
  hrefLabel?: string
}

export const work: Project[] = [
  {
    title: 'Ricordi',
    tag: 'Founder · AI-native',
    blurb:
      'An AI-native platform for music lessons — record a lesson and “Bartók” turns it into a timestamped practice plan automatically.',
    bullets: [
      'Built the full product end-to-end: AI lesson analysis (recording → timestamped practice plans), a shared student workspace, and a unified teacher/student/parent chat thread.',
      'Shipped web and native — in invite-only beta, with a Hotwire Native iOS app in App Store review.',
      'Own everything: product, the AI pipeline, full-stack build, branding, and pricing.',
    ],
    stack: ['Ruby on Rails', 'Anthropic', 'Hotwire', 'Hotwire Native', 'iOS'],
    href: 'https://ricordi.ai',
    hrefLabel: 'ricordi.ai',
  },
  {
    title: 'AI Thumbnail Generator',
    tag: 'Uscreen · 0→1',
    blurb:
      'An end-to-end system that turns any video into high-converting, on-brand thumbnails — automatically.',
    bullets: [
      'Built the full pipeline: Mux frame extraction → GPT vision scoring → industry-aware templates.',
      'Drove cost per thumbnail down roughly 28× through model and pipeline optimisation.',
      'Shipped as a net-new product surface, owned end-to-end.',
    ],
    stack: ['Ruby on Rails', 'Python', 'OpenAI', 'Mux', 'React'],
  },
  {
    title: 'Maestrocast',
    tag: 'Founder · live product',
    blurb:
      'A real-time video platform built specifically for online music teaching — control student cameras, annotate sheet music live, share handouts, and manage lessons in one place. The product whose lessons led to Ricordi.',
    bullets: [
      'Designed and built a low-latency video platform from scratch: live annotation, high-fidelity audio, recording.',
      'Owned everything — full-stack, UX, branding, and pricing — and put it in front of real users: a paying studio runs ~30 lessons a week on it.',
      'Ran customer discovery directly with music teachers and iterated around their workflow.',
    ],
    stack: ['Ruby on Rails', 'WebRTC', 'Hotwire'],
    href: 'https://maestrocast.com',
    hrefLabel: 'maestrocast.com',
  },
  {
    title: 'Safety Agent',
    tag: 'Rapid Global · shipped in 2 weeks',
    blurb:
      'A multi-modal AI agent that watches real-time video feeds to detect on-site hazards and accidents, alerting customers the moment something goes wrong.',
    bullets: [
      'Built and shipped to production in two weeks.',
      'Paired with a conversational AI surfacing site status, compliance, and attendance insights.',
    ],
    stack: ['Scala', 'Node.js', 'TypeScript', 'AWS', 'React'],
  },
]

export type MoreProject = { title: string; tag: string; blurb: string; stack: string[] }

// The breadth reel — smaller or earlier work shown as one-liners.
export const moreWork: MoreProject[] = [
  {
    title: 'Welcome App V2',
    tag: 'Rapid Global',
    blurb:
      'Collapsed 3+ microservices into a single full-stack React Router app handling thousands of facial-recognition events daily.',
    stack: ['TypeScript', 'React', 'Node.js'],
  },
  {
    title: 'Uscreen product surfaces',
    tag: 'Uscreen',
    blurb:
      'Link in Bio, bookable Coaching Events (Zoom + Google Calendar), a Starter tier, and a rebuilt onboarding flow.',
    stack: ['Ruby on Rails', 'Hotwire', 'React'],
  },
  {
    title: 'Real-time AI Chat',
    tag: 'Rapid Global',
    blurb:
      'A conversational AI surfacing live site status, compliance, check-ins, and attendance insights.',
    stack: ['Node.js', 'TypeScript', 'React'],
  },
  {
    title: 'Integrations platform',
    tag: 'Nirovision',
    blurb:
      'A business-critical platform syncing customer data across MYOB, Employment Hero, and other external systems.',
    stack: ['Scala', 'Node.js', 'TypeScript', 'React'],
  },
  {
    title: 'Diagnostics viewer',
    tag: 'iCare',
    blurb:
      'A performant, visually-synced multi-image viewer for eye-care clinicians — filters, zoom, pan, and compare.',
    stack: ['Kotlin', 'React'],
  },
  {
    title: 'Billing automation',
    tag: 'Nirovision',
    blurb:
      'Automated Stripe + Xero billing with guided checkout and account setup, removing manual work for finance.',
    stack: ['Node.js', 'TypeScript'],
  },
  {
    title: 'Recruiter Flow',
    tag: 'WithYouWithMe',
    blurb:
      'A guided workflow walking recruiters through the applicant process end-to-end.',
    stack: ['JavaScript', 'React'],
  },
  {
    title: 'Freelance builds',
    tag: '2019–2020',
    blurb:
      'A psychologist booking platform, a podcast transcription + search app, and a Bitcoin music marketplace.',
    stack: ['Ruby on Rails', 'Node.js', 'TypeScript', 'Svelte', 'React'],
  },
]

export type Job = {
  role: string
  company: string
  period: string
  blurb: string
}

export const experience: Job[] = [
  {
    role: 'Product Engineer',
    company: 'Uscreen',
    period: '2025 — Present',
    blurb:
      'Ship net-new product surfaces end-to-end for a creator video platform — Link in Bio, AI Thumbnails, bookable coaching events (Zoom + Google Calendar), a Starter tier, a rebuilt onboarding flow — and lead the team’s adoption of AI-assisted development.',
  },
  {
    role: 'Founder',
    company: 'Maestrocast',
    period: '2025 — Present',
    blurb:
      'Founded and built a real-time video platform for online music teaching, from product and brand through to infrastructure.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Rapid Global',
    period: '2023 — 2025',
    blurb:
      'Delivered AI features to production fast — a multi-modal safety agent, real-time AI chat, and a rebuilt site-compliance system — across a diverse set of services and stacks.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Nirovision',
    period: '2020 — 2023',
    blurb:
      'Architected a modular integrations platform (MYOB, Employment Hero, and more) and an automated Stripe + Xero billing flow that removed manual work for finance.',
  },
]

export const skills: { label: string; items: string }[] = [
  {
    label: 'Languages & frameworks',
    items:
      'TypeScript · Node.js · Ruby on Rails · Python · Scala · React · Svelte · Vue · Hotwire',
  },
  {
    label: 'AI & product',
    items:
      'OpenAI API · GPT vision · AI agent design · AI-assisted dev workflows · activation analytics · A/B testing',
  },
  {
    label: 'Infra & services',
    items:
      'AWS Lambda · Kinesis · SQS · PostgreSQL · Redis · Sidekiq · Stripe · Xero · Mux · WebRTC · Zoom API · Google Calendar API',
  },
]

// The human bit — differentiator, not headline.
export const personal = {
  heading: 'The other half',
  body:
    'Before software I was a professional drummer. I hold a Bachelor of Jazz Performance from the Sydney Conservatorium of Music, received the James Morrison Jazz Scholarship, finished on the podium at the Australian National Jazz Awards, and recorded albums reviewed in the Sydney Morning Herald. Being a musician implicitly taught me how theory and embodied knowledge must combine to really affect the world around you.',
}

export type Link = { label: string; href: string; icon: string }

export const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/olinelson', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oli-nelson/', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/o_j_nelson', icon: 'x' },
  { label: 'Blog', href: 'https://world.hey.com/olivernelson', icon: 'article' },
  {
    label: 'Music',
    href: 'https://open.spotify.com/playlist/02iL2Vi9ONfgVKVG5DfGYz?si=bd53fa2abd8d4f5a',
    icon: 'spotify',
  },
  { label: 'Instagram', href: 'https://www.instagram.com/olinelson__', icon: 'instagram' },
]
