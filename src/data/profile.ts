// Single source of truth for the site's content.
// Sourced from the resume, with internal $ figures softened to multipliers and
// PII (phone, precise address) deliberately omitted from the public site.

export const profile = {
  name: 'Oli Nelson',
  // Headline is the highest-leverage line on the page — easy to swap here.
  role: 'Product engineer & founder',
  headline: 'I ship products end-to-end — discovery, design, full stack, deploy.',
  subhead:
    'Product engineer with a founder’s instincts. I take ideas from a blank page to shipped software that moves the numbers — fast, and without sacrificing craft.',
  location: 'Australia · working remotely worldwide',
  email: 'olivernelson@hey.com',
  available:
    'Open to technical-cofounder, product-engineer, and freelance work.',
}

export type Metric = { value: string; label: string }

export const metrics: Metric[] = [
  { value: '2×', label: 'day-one creator activation' },
  { value: '~28×', label: 'lower cost per AI thumbnail' },
  { value: '6', label: 'net-new product surfaces in 8 months' },
  { value: '1', label: 'video platform founded solo' },
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
      'A real-time video platform built specifically for online music teaching — control student cameras, annotate sheet music live, share handouts, and manage lessons in one place.',
    bullets: [
      'Designed and built a low-latency video platform from scratch: live annotation, high-fidelity audio, recording.',
      'Owned everything — full-stack, UX, branding, and pricing — to strong early adoption.',
      'Ran customer discovery directly with music teachers and iterated around their workflow.',
    ],
    stack: ['TypeScript', 'WebRTC', 'Node.js', 'React'],
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
    stack: ['Python', 'Computer vision', 'AWS'],
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
      'TypeScript · Ruby on Rails · Node.js · Python · React · Svelte · Vue · Hotwire',
  },
  {
    label: 'AI & product',
    items:
      'OpenAI API · GPT vision · AI agent design · AI-assisted dev workflows · activation analytics · A/B testing',
  },
  {
    label: 'Infra & services',
    items:
      'AWS · PostgreSQL · Redis · Sidekiq · Stripe · Mux · WebRTC · Zoom & Google Calendar APIs',
  },
]

// The human bit — differentiator, not headline.
export const personal = {
  heading: 'The other half',
  body:
    'Before software I was a jazz drummer — a Bachelor of Jazz Performance from the Sydney Conservatorium, a James Morrison Jazz Scholarship, a podium finish at the Australian National Jazz Awards, and albums reviewed in the Sydney Morning Herald. I think the discipline of playing in a band — listening hard, shipping live, no second takes — is most of why I build the way I do.',
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
