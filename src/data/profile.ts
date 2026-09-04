// Single source of truth for the site's content.

export const profile = {
  name: 'Oli Nelson',
  role: 'AI consultant & software engineer',
  headline: 'I build software for small businesses.',
  subhead:
    'You tell me what your business needs. We work it out together, then I design, build and deploy it.',
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
          body: 'Calls, texts, and website enquiries answered the moment they land — day or night — so work stops leading away while you’re on a job or asleep.',
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
    role: 'Founder',
    company: 'Ricordi & Maestrocast',
    period: '2025 — now',
    blurb:
      'Founded and built two of my own products from nothing — the software, the AI, the brand, the support — and put them in front of real paying users.',
  },
  {
    role: 'Product Engineer',
    company: 'Uscreen',
    period: '2025 — 2026',
    blurb:
      'Built new features end-to-end for a video platform used by thousands of creators — including its AI tools — and led the team’s use of AI to build faster.',
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

export type Client = {
  name: string
  role: string
  business: string
  href: string
  logo: 'ccbpi' | 'vault' | 'gosling'
  built: string
  quote: string
  // ISO date of the email or message the quote came from.
  date?: string
  // A draft in the client's voice, not yet approved by them. Do not publish
  // while this is set.
  pending?: boolean
}

export const clients: Client[] = [
  {
    name: 'Ben Nyhuis',
    role: 'Owner',
    business: 'Coffs Coast Building & Pest Inspections',
    href: 'https://ccbpi.com.au',
    logo: 'ccbpi',
    built: 'An app that turns a day of inspection photos and notes into a print-ready report.',
    quote: 'Love the new features. Once again my time will be reduced in processing these reports.',
    date: '2026-08-23',
  },
  {
    name: 'Sam Johnston',
    role: 'Managing Director',
    business: 'Vault Moving & Storage',
    href: 'https://www.vaultmoving.com.au',
    logo: 'vault',
    built: 'One feed of every tender from three broker portals, with the jobs that fit a truck matched up.',
    quote: 'Every tender from every portal lands in one place now. I open it in the morning and I can see what to bid on.',
    pending: true,
  },
  {
    name: 'Matt Gosling',
    role: 'CEO',
    business: 'Gosling Group',
    href: 'https://www.goslinggroup.com.au',
    logo: 'gosling',
    built: 'Revenue forecasts per job for an electrical contractor, synced from three Simpro accounts.',
    quote: 'Oli sat with our project managers and quoters, worked out how the business actually runs, and built the thing that replaced the spreadsheets.',
    pending: true,
  },
]

// ── Homepage: the tier sheet ──────────────────────────────────────────────────
// Every string the homepage renders. An essay paragraph is a `lead` sentence set
// in ink, followed by `rest` set in #c7c7c7.
export type Essay = { lead: string; rest?: string }
export type Size = {
  label: string
  note: string
  price: string
  body: string
  from?: boolean
  // Three month pips: how much of a quarter the build takes.
  pips: ('on' | 'off' | 'onward')[]
}
export type Scene = 'feeding' | 'leading' | 'riding' | 'racing'
export type Speed = {
  label: string
  price: string
  major: string
  small: string
  note: string
  body: string
  scene: Scene
  invert?: boolean
}

export const home = {
  headline: 'Your app, live in about a month.',
  intro: {
    lead: 'I’m Oli. I build software for small businesses.',
    rest: 'You tell me what your business needs. We work it out together, then I design, build and deploy it.',
  } satisfies Essay,
  punch: {
    lead: 'One person, from the first conversation to live software.',
    rest: 'No sales guy. No project manager. No hand-offs.',
  } satisfies Essay,
  kickoff: {
    lead: 'Most projects are live in about a month, for a fixed one-off fee.',
    rest: 'It depends on the size. Most are Small.',
  } satisfies Essay,
  sizes: [
    {
      label: 'Small',
      note: 'Live in about a month.',
      price: '$5,000',
      body: 'A focused app that solves a specific problem in your business.',
      pips: ['on', 'off', 'off'],
    },
    {
      label: 'Medium',
      note: 'Live in about two months.',
      price: '$10,000',
      body: 'A larger workflow, with more screens, more automation, or more moving parts.',
      pips: ['on', 'on', 'off'],
    },
    {
      label: 'Large',
      note: 'Three months or more.',
      price: '$15,000',
      from: true,
      body: 'For substantial systems that need more time to design, build and test properly.',
      pips: ['on', 'on', 'onward'],
    },
  ] satisfies Size[],
  live: {
    lead: 'Once your app is live, you choose what happens next.',
    rest: 'Keep the lights on, or keep building.',
  } satisfies Essay,
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
      body: 'Hosting, services, and the bits that keep the app running. That’s it.',
      scene: 'feeding',
    },
    {
      label: 'Steady',
      price: '$1,000',
      major: '2',
      small: '4',
      note: 'Two major features and four small changes each month.',
      body: 'For a business that wants the software to keep getting better, without going all in.',
      scene: 'leading',
    },
    {
      label: 'Brisk',
      price: '$5,000',
      major: '10',
      small: '20',
      note: 'Ten major features and twenty small changes each month.',
      body: 'For a business with a lot to build.',
      scene: 'riding',
      invert: true,
    },
    {
      label: 'Hammer and tongs',
      price: '$10,000',
      major: '20',
      small: '40',
      note: 'Twenty major features and forty small changes each month.',
      body: 'Building flat out, with a major feature going live every working day.',
      scene: 'racing',
    },
  ] satisfies Speed[],
  terms: {
    lead: 'Bug fixes are unlimited on every plan.',
    rest: 'You pay at the start of each month and stop when you want. The software and your data are yours from day one.',
  } satisfies Essay,
  consulting: {
    ask: 'Already running, and something isn’t working?',
    link: 'I fix businesses by the day.',
  },
  clients: {
    lead: 'Some of the people I build for.',
  } satisfies Essay,
  experience: {
    start: '2019-01-01',
    before: 'I’ve been building software for',
    after: 'years. Before software, I was a professional jazz drummer.',
    places: [
      { name: 'Uscreen', href: 'https://www.uscreen.tv', logo: 'uscreen' },
      { name: 'Rapid Global', href: 'https://www.rapidglobal.com', logo: 'rapidglobal' },
      { name: 'Nirovision', href: 'https://www.nirovision.com', logo: 'nirovision' },
      { name: 'WithYouWithMe', href: 'https://withyouwithme.com', logo: 'withyouwithme' },
      { name: 'iCare OCULO', href: 'https://www.oculo.com.au', logo: 'oculo' },
      { name: 'Ricordi', href: 'https://ricordi.ai', logo: 'ricordi' },
      { name: 'Maestrocast', href: 'https://maestrocast.com', logo: 'maestrocast' },
    ],
  },
  bothSides: {
    lead: 'I’ve built for startups and established businesses, and I’ve built and run my own products.',
    rest: 'So I know both sides: building software for a business, and being the person whose business depends on it.',
  } satisfies Essay,
  direct: {
    lead: 'These days I work directly with the people who use the software.',
    rest: 'No layers between you and the person writing the code.',
  } satisfies Essay,
  unsure: {
    lead: 'Not sure you need an app? That’s fine.',
    rest: 'Tell me what’s annoying you, what takes too long, or what your team keeps doing by hand. We’ll work out whether software is actually the answer.',
  } satisfies Essay,
  honest: {
    lead: 'If it’s not a good fit, I’ll say so.',
    rest: 'I won’t sell you.',
  } satisfies Essay,
  start: {
    ask: 'Tell me what you need.',
    rest: 'I reply within a day, usually faster.',
    cta: 'Get in touch',
  },
  footer: {
    name: 'Oli Nelson',
    tagline: 'Software for small business',
    place: 'Coffs Harbour, NSW — working anywhere',
    placeShort: 'Coffs Harbour, NSW',
  },
}

// ── /consulting: day-rate work fixing what is stuck in a working business ────
// Its own page on purpose. The homepage prices packages, not time — a day rate
// sitting beside those numbers invites a reader to divide one by the other.
export const consulting = {
  headline: 'I help fix businesses.',
  intro: {
    lead: 'Not in the management-consultant sense.',
    rest: 'I mean I get inside the business, work out where things are getting stuck, and fix them.',
  } satisfies Essay,
  stuck: {
    lead: 'Maybe the problem is a spreadsheet that everyone hates.',
    rest: 'Maybe information gets entered three times. Maybe a quoting process takes two days when it should take twenty minutes. Maybe the software is the problem. Maybe the software isn’t the problem at all.',
  } satisfies Essay,
  together: {
    lead: 'We work it out together. Then I fix what needs fixing.',
    rest: 'Sometimes that means changing a process. Sometimes it means writing some software. Usually it’s a bit of both.',
  } satisfies Essay,
  byTheDay: {
    lead: 'I work by the day.',
    rest: 'You get me inside the business, not a slide deck.',
  } satisfies Essay,
  method: {
    lead: 'I’ll sit with the people doing the work, follow the process from beginning to end, find the unnecessary steps and bottlenecks, and work out what to change. Then I’ll make the change.',
    rest: 'I can write the code myself, so there isn’t a hand-off between figuring out the solution and building it.',
  } satisfies Essay,
  kinds: [
    {
      label: 'Fix the process',
      scene: 'process',
      alt: 'A watercolour tangle of rope beside a neat coil on a timber dock',
      note: 'I’ll spend time with the people doing the work and find where it’s slow, repetitive or needlessly manual. Then we’ll simplify it.',
    },
    {
      label: 'Fix the software',
      scene: 'software',
      alt: 'A watercolour wooden boat hull on a timber cradle, a plane and chisel beside it',
      note: 'If the answer is software, I’ll build it. A new feature, an integration, an automation, or a small internal tool.',
    },
    {
      label: 'Fix the whole thing',
      scene: 'whole',
      alt: 'A watercolour sailing boat up in a boatyard cradle, hull and rigging both being worked on',
      note: 'Sometimes it’s all of it: the process, the software, and the way people work. I’ll keep fixing until the business runs better.',
    },
  ] satisfies { label: string; scene: string; alt: string; note: string }[],
  team: {
    lead: 'I can also drop into an existing software team.',
    rest: 'If you’ve already got a product and a development team, I can work inside it too. I can take on a difficult feature, fix something that’s been sitting around too long, help make a technical decision, or build the AI feature that everyone has been talking about but nobody has shipped.',
  } satisfies Essay,
  teamProof: {
    lead: 'I’ve spent most of my career working inside other people’s teams and codebases.',
    rest: 'I don’t need to own the project to be useful.',
  } satisfies Essay,
  rate: {
    lead: 'The rate depends on the work.',
    rest: 'Tell me what is going wrong, what you’d like to improve, or what you’re trying to get done. I’ll work out the shape of the engagement and come back with a day rate in Australian dollars plus GST. Two days is the smallest engagement worth either of our time.',
  } satisfies Essay,
  why: {
    lead: 'A day rate makes sense when we don’t know exactly what we’re going to find yet.',
    rest: 'If we can define the work properly, I’ll usually give you a fixed price instead.',
  } satisfies Essay,
  honest: {
    lead: 'No consulting theatre.',
    rest: 'I’ll get into the business, understand what’s actually happening, and help fix it. If the answer is a process change, we’ll change the process. If it’s software, I’ll build the software. If it’s both, we’ll do both. The goal is to make the business work better — not to find a reason to keep me around.',
  } satisfies Essay,
  proof: {
    lead: 'I’ve worked inside businesses of all sizes.',
  } satisfies Essay,
  bothSides: {
    lead: 'I’ve also built and run my own SaaS products, including Ricordi and Maestrocast.',
    rest: 'So I know what it feels like to be on both sides of the problem: the person trying to run the business, and the person building the thing that makes it work.',
  } satisfies Essay,
  close: {
    ask: 'Tell me what’s not working.',
    rest: 'I reply within a day, usually faster.',
  },
  back: 'Looking to have a new app built instead?',
  backLink: 'Start here.',
}
