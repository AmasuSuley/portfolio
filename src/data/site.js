export const site = {
  name: 'Amasu Suley',
  brand: 'Amasu',
  role: 'Software Developer',
  rotatingRoles: [
    'Full-Stack Engineer',
    'Spring Boot Developer',
    'React Specialist',
    'Product Builder',
  ],
  tagline:
    'I design and ship resilient web and mobile products — from polished interfaces to Spring Boot APIs that scale.',
  availability: 'Open to freelance & full-time roles',
  now: 'Deepening Spring Boot backends and shipping production-ready React experiences.',
  email: 'ammarmassoud46@gmail.com',
  phone: '+255 629 289 071',
  phoneE164: '+255629289071',
  phoneDigits: '255629289071',
  location: 'Dar es Salaam, Tanzania',
  profileImage: './images/amasu-6.jpeg',
  aboutImage: './images/amasu-6.jpeg',
  resumeUrl: './Amasu-Suley-CV.pdf',
  get whatsappUrl() {
    return `https://wa.me/${this.phoneDigits}?text=${encodeURIComponent(
      'Hello Amasu, I saw your portfolio and would like to connect.'
    )}`
  },
  get callUrl() {
    return `tel:${this.phoneE164}`
  },
  get smsUrl() {
    return `sms:${this.phoneE164}?body=${encodeURIComponent(
      'Hello Amasu, I saw your portfolio and would like to connect.'
    )}`
  },
  /** Add your real LinkedIn profile URL here (shown in footer/contact when set) */
  socials: {
    github: 'https://github.com/AmasuSuley',
    linkedin: '',
    twitter: '',
  },
  stats: [
    { value: 3, suffix: '+', label: 'Years building' },
    { value: 10, suffix: '+', label: 'Shipped projects' },
    { value: 4, suffix: '', label: 'Core stacks' },
  ],
  nav: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  about: {
    title: 'Code with craft. Products with purpose.',
    paragraphs: [
      "I'm a software developer based in Dar es Salaam who turns complex ideas into clean, usable products. Over the last 3+ years I've built everything from AI-assisted mobile apps to farm-management platforms and institutional websites.",
      'My sweet spot sits between modern frontend (React, Tailwind) and solid backends — Spring Boot, Laravel, Django, and Node — with an eye for UX that actually helps people get work done.',
    ],
    focuses: [
      { label: 'Frontend', value: 'React, Tailwind CSS, Vite' },
      { label: 'Backend', value: 'Spring Boot, Laravel, Django, Node.js' },
      { label: 'Tools', value: 'Git, Docker, AWS, REST APIs' },
      { label: 'UX / UI', value: 'Figma, Prototyping, Motion' },
    ],
  },
  contactBlurb:
    'Ready to build something ambitious? Tell me about your product, timeline, and goals — I usually reply within a day.',
}

export const experience = [
  {
    id: 1,
    role: 'Software Developer',
    org: 'Independent / Client projects',
    location: 'Dar es Salaam, Tanzania',
    period: '2023 — Present',
    highlights: [
      'Shipped PoultryGuard, an offline-capable Flutter + TensorFlow Lite disease detection app for farmers.',
      'Built FarmLink end-to-end with React + Laravel: auth, farm profiles, and service approval workflows.',
      'Delivered the Nuur-din institutional site with news admin, gallery, and contact intake.',
    ],
  },
  {
    id: 2,
    role: 'Full-Stack Product Builder',
    org: 'Personal product R&D',
    location: 'Remote / Tanzania',
    period: '2022 — 2023',
    highlights: [
      'Prototyped REST APIs and dashboards across PHP/Laravel, Django, and Spring Boot.',
      'Focused on mobile-first UX for users with unreliable connectivity.',
      'Practiced production habits: Git hygiene, environment config, and demo-ready deploys.',
    ],
  },
  {
    id: 3,
    role: 'Frontend & UX Craft',
    org: 'Portfolio & open learning',
    location: 'Dar es Salaam',
    period: '2021 — 2022',
    highlights: [
      'Mastered React + Tailwind component systems and responsive layouts.',
      'Studied design-to-code workflows with Figma prototyping.',
      'Built foundational projects that evolved into client-ready case studies.',
    ],
  },
]

export const testimonials = [
  {
    id: 1,
    quote:
      'PoultryGuard made disease checks practical in the field — upload a photo, get a confidence score, and understand next steps without waiting for a specialist visit.',
    author: 'Agricultural pilot feedback',
    role: 'PoultryGuard field testing',
  },
  {
    id: 2,
    quote:
      'FarmLink clarified how farmers request services and how providers approve them. The workflow was easier to explain to stakeholders because the product itself was clear.',
    author: 'Product walkthrough feedback',
    role: 'FarmLink demo sessions',
  },
  {
    id: 3,
    quote:
      'The Nuur-din site gave the institution a modern public presence — courses, news, and gallery in one responsive experience that staff could update through admin tools.',
    author: 'Stakeholder review',
    role: 'Nuur-din website delivery',
  },
]
