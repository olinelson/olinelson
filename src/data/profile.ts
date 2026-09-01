// Single source of truth for the site's content.

export const profile = {
  name: 'Oli Nelson',
  role: 'AI consultant & software engineer',
  headline: 'I run a solo software development agency.',
  subhead:
    'I handle everything from the initial chat to your own app up and running, saving you time and money.',
  location: 'Coffs Harbour, NSW · working anywhere',
  enquireUrl: 'https://bosun.olinelson.com/enquire/work-with-me',
  email: 'olivernelson@hey.com',
  phone: '0458 341 473',
  phoneHref: '+61458341473',
  available: 'The first call is free. I’ll say if I can help.',
  priceLine:
    'A one-off fee to get live, then keep the lights on or keep building.',
}

export type Service = { title: string; body: string }
export type ServiceGroup = { label: string; items: Service[] }

// What I offer, in the buyer's language — outcomes, not features.
// Grouped under the two promises in the hero (more money / save time).
export const services = {
  heading: 'What I offer',
  title: 'More money in. Less time burned.',
  intro: 'Where AI usually pays for itself.',
  groups: [
    {
      label: 'More money',
      items: [
        {
          title: 'Catch every enquiry',
          body: 'Calls, texts, and website enquiries answered the moment they land — day or night — so work stops walking away while you’re on a job or asleep.',
        },
        {
          title: 'Quotes in minutes',
          body: 'Photos, a voice note, or a short description become a draft quote on the spot. Stop losing evenings to admin — and jobs to whoever replied first.',
        },
        {
          title: 'Follow-ups that close',
          body: 'Automatic chases on quotes, reminders before jobs, and review requests after — the revenue that usually falls through the gaps.',
        },
      ],
    },
    {
      label: 'Save time',
      items: [
        {
          title: 'Paperwork that writes itself',
          body: 'Invoices, job reports, and compliance docs from a quick voice note. You speak; it writes.',
        },
        {
          title: 'Numbers you can trust',
          body: 'Bank, accounting, and job records pulled into one clear picture of how the business is tracking — no spreadsheet wrestling.',
        },
      ],
    },
  ] satisfies ServiceGroup[],
  proof:
    'Built the same class of tools for an industrial safety company, a video platform, and my own products.',
  closer: 'Not sure which is yours? Free call — I’ll say if AI is worth it.',
  closerCta: 'Book a free consult',
}

// Risk reversal — the exact fears a first-time software buyer has, answered head-on.
export const trust = {
  heading: 'How I take the risk out of it',
  items: [
    {
      title: 'You own everything',
      body: 'The software, the code, the accounts — all yours. No black boxes, no being held hostage by your developer.',
    },
    {
      title: 'A fixed price, agreed up front',
      body: 'You know exactly what it costs before any work starts. No open-ended bills, no nasty surprises at the end.',
    },
    {
      title: 'Plain English, no lock-in',
      body: 'I explain things in words that make sense, and you’re never trapped. If it’s not working for you, you walk.',
    },
    {
      title: 'I don’t disappear',
      body: 'Bug fixes are free, for as long as you want me around — no monthly fee. The only ongoing cost is the actual running cost (hosting, and any AI usage), passed straight on with no markup.',
    },
  ] satisfies Service[],
}

// Pricing, shown plainly. Anchors the credible number; small jobs stay welcome.
export const pricing = {
  heading: 'What it costs',
  tiers: [
    {
      label: 'A typical build',
      amount: 'Fixed price',
      unit: 'agreed up front',
      note: 'Designed, built, and live — a real piece of software solving a real problem in your business. You get a fixed quote before any work starts.',
    },
    {
      label: 'Keeping it running',
      amount: 'At cost',
      unit: 'no markup',
      note: 'Bug fixes are free — no monthly fee. You only ever pay the actual running cost (hosting, and any AI usage), passed straight through. New features or changes are quoted separately, so you decide what’s worth it.',
    },
  ],
  note: 'Got something smaller? A focused automation can cost less — just ask. The first call is free, and you’ll have a fixed price before anything starts.',
}

// ── Homepage: how I work — the Consult → Diagnose → Fix flow ───────────────────
// The step-by-step visual. The closer carries the "I build & run it, not just
// advise" differentiator that the old two-column split used to hold.
export type Step = { n: string; title: string; body: string; free?: boolean }
export const flow = {
  eyebrow: 'How I work',
  heading: 'Advice first. Software second.',
  intro:
    'The goal isn’t “add AI.” It’s more money in, less time burned. One person the whole way through: no hand-offs, no team of strangers, no PDF that leaves you to do the hard part alone.',
  steps: [
    {
      n: '01',
      title: 'Consult',
      free: true,
      body: 'A free first call. I learn how your business actually runs — the calls, the quotes, the admin that quietly eats your week.',
    },
    {
      n: '02',
      title: 'Diagnose',
      body: 'I find and price what’s slowing you down, and hand you a plain-English plan — biggest wins first. Yours to keep, whether or not I build it.',
    },
    {
      n: '03',
      title: 'Fix',
      body: 'I put it in place — an off-the-shelf tool, a custom build, or the right mix. Whatever solves it for the least to run.',
    },
  ] satisfies Step[],
  closer: {
    lead: 'And here’s the part most won’t do —',
    body: 'I build the fix myself, move you onto it, train your team, and stay while it beds in. I run two of my own products for paying customers, so I don’t just ship and vanish.',
  },
}

export type Project = {
  title: string
  tag: string
  blurb: string
  bullets: string[]
  stack: string[]
  href?: string
  hrefLabel?: string
  // Keys a real product screenshot in selectedWork.astro's `shots` map.
  shot?: 'ricordi' | 'maestrocast'
  shotAlt?: string
}

// Proof, reframed in outcomes. Lead with the trades-adjacent safety agent and the
// product I built solo — the two that best tell a small-business owner "he can do this."
export const work: Project[] = [
  {
    title: 'A real-time safety agent',
    tag: 'Built for an industrial-compliance company',
    blurb:
      'AI that watches live site camera feeds and flags hazards and accidents the moment they happen — alerting the team in real time, before a near-miss becomes an incident.',
    bullets: [
      'Built and shipped to production in two weeks.',
      'Paired it with a plain-language assistant that answers “what’s happening on site right now?” — status, compliance, who’s checked in.',
    ],
    stack: ['Live video', 'Computer vision', 'AI agents'],
  },
  {
    title: 'Ricordi',
    tag: 'My own AI product — built solo',
    blurb:
      'An AI platform for music teachers: record a lesson and it becomes a timestamped practice plan automatically. I built the whole thing alone — the AI, the web app, the iPhone app, the brand.',
    bullets: [
      'AI that turns a lesson recording into a structured, time-stamped practice plan.',
      'Live on web and as an iPhone app — proof I take an idea from a blank page all the way to in people’s hands.',
    ],
    stack: ['AI lesson analysis', 'Web + iPhone app'],
    href: 'https://ricordi.ai',
    hrefLabel: 'ricordi.ai',
    shot: 'ricordi',
    shotAlt: 'The Ricordi app: a lesson recording turned into a timestamped, chat-style practice plan.',
  },
  {
    title: 'Automatic thumbnail generator',
    tag: 'Built for a video platform',
    blurb:
      'A system that turns any video into eye-catching, on-brand thumbnails automatically — the kind of repetitive busywork that used to eat hours, done in seconds.',
    bullets: [
      'Built the whole pipeline end-to-end, and made it cheap enough to run at scale.',
      'Shipped as a brand-new feature, used right across the platform.',
    ],
    stack: ['AI vision', 'Automation'],
  },
  {
    title: 'Maestrocast',
    tag: 'My own product — live & paying',
    blurb:
      'A video platform built for online music lessons. A paying studio runs about 30 lessons a week on it. I built all of it — the product, the software, and the support behind it.',
    bullets: [
      'Designed and built it from scratch, then looked after real paying customers on it.',
      'Proof I don’t just ship and vanish — I keep the thing running.',
    ],
    stack: ['Live video', 'Full product'],
    href: 'https://maestrocast.com',
    hrefLabel: 'maestrocast.com',
    shot: 'maestrocast',
    shotAlt: 'The Maestrocast lesson room: sheet music annotated live during an online music lesson.',
  },
]

export type Job = {
  role: string
  company: string
  period: string
  blurb: string
}

// Light credibility — where I've worked, in plain terms. Not a résumé; a "this is a
// real, experienced engineer" reassurance for anyone who reads this far.
export const experience: Job[] = [
  {
    role: 'Product Engineer',
    company: 'Uscreen',
    period: '2025 — Present',
    blurb:
      'Build new features end-to-end for a video platform used by thousands of creators — including its AI tools — and lead the team’s use of AI to build faster.',
  },
  {
    role: 'Founder',
    company: 'Maestrocast & Ricordi',
    period: '2024 — Present',
    blurb:
      'Founded and built two of my own products from nothing — the software, the AI, the brand, the support — and put them in front of real paying users.',
  },
  {
    role: 'Software Engineer',
    company: 'Rapid Global',
    period: '2023 — 2025',
    blurb:
      'Shipped AI to production fast for an industrial safety-and-compliance company — a live safety-monitoring agent and a plain-language site assistant among them.',
  },
  {
    role: 'Software Engineer',
    company: 'Nirovision',
    period: '2020 — 2023',
    blurb:
      'Built the systems that connected a security product to the accounting and payroll tools its customers already used, and automated their billing.',
  },
]

// Kept for /llms.txt and AI-citation context — not rendered as a section on the site
// (the jargon scares the people I'm actually selling to). Outcomes do the selling now.
export const skills: { label: string; items: string }[] = [
  {
    label: 'AI & automation',
    items:
      'LLM apps · AI agents · computer vision · voice & transcription · Anthropic API · OpenAI API · retrieval (RAG) · AI-assisted development',
  },
  {
    label: 'Building software',
    items:
      'Full-stack web apps · iPhone apps · real-time video · automations & integrations · payments & billing · dashboards',
  },
  {
    label: 'Under the hood',
    items:
      'TypeScript · Ruby on Rails · Node.js · Python · React · Hotwire · PostgreSQL · AWS · Stripe',
  },
]

// The human bit — a real, trustworthy person, not a faceless agency or offshore team.
export const personal = {
  heading: 'The person you’d actually be working with',
  body:
    'Before software I was a professional jazz drummer — a Bachelor of Jazz Performance from the Sydney Conservatorium, the James Morrison Jazz Scholarship, a podium finish at the Australian National Jazz Awards, and albums reviewed in the Sydney Morning Herald. What that taught me: theory only matters when it actually changes what happens in the room. You’d be working with one real person who picks up the phone — not a sales team, not an offshore shop, not someone who vanishes after the invoice clears.',
}

export type Link = { label: string; href: string; icon: string }

export const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/olinelson', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oli-nelson/', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/o_j_nelson', icon: 'x' },
  { label: 'Blog', href: '/words.html', icon: 'article' },
  {
    label: 'Music',
    href: 'https://open.spotify.com/playlist/02iL2Vi9ONfgVKVG5DfGYz?si=bd53fa2abd8d4f5a',
    icon: 'spotify',
  },
  { label: 'Instagram', href: 'https://www.instagram.com/olinelson__', icon: 'instagram' },
]

// ── Homepage: the tier sheet ──────────────────────────────────────────────────
// Every string the homepage renders. An essay paragraph is a `lead` sentence set
// in ink, followed by `rest` set in #c7c7c7.
export type Essay = { lead: string; rest?: string }
export type Size = {
  label: string
  note: string
  price: string
  from?: boolean
  // Three month pips: how much of a quarter the build takes.
  pips: ('on' | 'off' | 'onward')[]
}
export type Speed = {
  label: string
  price: string
  major: string
  small: string
  note: string
  ships: number[]
  invert?: boolean
}

const everyDay = Array.from({ length: 20 }, (_, i) => i)

export const home = {
  greeting: 'Hi. I’m Oli',
  intro: {
    lead: 'I run a solo software development agency.',
    rest: 'I handle everything from the initial chat to your own app up and running, saving you time and money.',
  } satisfies Essay,
  chat: {
    lead: 'How this usually goes.',
    rest: 'We have a chat. You tell me what’s slowing your business down, eating time and money.',
  } satisfies Essay,
  kickoff: {
    lead: 'To kick things off, there is a one-off fee.',
    rest: 'It depends on how big a solution you need. Most solutions are Small.',
  } satisfies Essay,
  sizes: [
    {
      label: 'Small',
      note: 'About a month, then you’re live.',
      price: '$5,000',
      pips: ['on', 'off', 'off'],
    },
    {
      label: 'Medium',
      note: 'About two months.',
      price: '$10,000',
      pips: ['on', 'on', 'off'],
    },
    {
      label: 'Large',
      note: 'Three months or more.',
      price: '$15,000',
      from: true,
      pips: ['on', 'on', 'onward'],
    },
  ] satisfies Size[],
  live: {
    lead: 'Once the app is live, you choose.',
    rest: 'Just keep the lights on, or keep building.',
  } satisfies Essay,
  speedHeader: { left: 'ONE MONTH', right: 'PER MONTH' },
  speedColumns: {
    name: 'Name',
    price: 'Price',
    major: 'Major features',
    small: 'Small changes',
  },
  speeds: [
    {
      label: 'Lights-on',
      price: '~$60',
      major: '—',
      small: '—',
      note: 'At cost, plus 20%. Bug fixes only.',
      ships: [],
    },
    {
      label: 'Steady',
      price: '$1,000',
      major: '2',
      small: '4',
      note: '2 major features, 4 small changes.',
      ships: [4, 14],
    },
    {
      label: 'Brisk',
      price: '$5,000',
      major: '10',
      small: '20',
      note: '10 major features, 20 small changes.',
      ships: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
      invert: true,
    },
    {
      label: 'Hammer and tongs',
      price: '$10,000',
      major: '20',
      small: '40',
      note: '20 major features, 40 small changes.',
      ships: everyDay,
    },
  ] satisfies Speed[],
  log: {
    lead: 'The ticks are the twenty working days in a month.',
    rest: 'A ringed mark is a day when a major feature goes live.',
  } satisfies Essay,
  bugs: {
    lead: 'Bug fixes are unlimited on every plan.',
    rest: 'Lights-on is at cost, plus 20% for those fixes. The others add new work on top.',
  } satisfies Essay,
  billing: {
    lead: 'You pay at the start of each month.',
    rest: 'Stop when you want. Nothing extra is due when you leave.',
  } satisfies Essay,
  ownership: {
    lead: 'The software and your data are yours from day one.',
    rest: 'If we stop, you keep the app.',
  } satisfies Essay,
  experience: {
    lead: 'I have been a software engineer since 2020.',
    rest: 'I build product and AI at Uscreen, a video platform for creators. Before that I shipped live camera AI for Rapid Global, an industrial safety company. I was a professional jazz drummer first.',
  } satisfies Essay,
  products: {
    lead: 'I also run two of my own.',
    items: [
      {
        name: 'Ricordi',
        href: 'https://ricordi.ai',
        gloss: 'turns a music lesson into a practice plan',
      },
      {
        name: 'Maestrocast',
        href: 'https://maestrocast.com',
        gloss: 'is a video platform for online lessons — a studio runs about 30 a week on it',
      },
    ],
  },
  close: {
    title: 'Tell me what you need.',
    body: 'The first call is free. I’ll say if I can help.',
    start: 'Get in touch',
  },
  footer: {
    name: 'Oli Nelson',
    place: 'Coffs Harbour, NSW — working anywhere',
    placeShort: 'Coffs Harbour, NSW',
  },
}
