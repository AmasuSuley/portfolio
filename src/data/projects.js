export const projectFilters = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
]

export const projects = [
  {
    id: 1,
    title: 'PoultryGuard: AI Chicken Disease Detection',
    description:
      'Mobile app using computer vision to identify common poultry diseases from field photos.',
    problem:
      'Rural poultry farmers often lack fast access to veterinary diagnosis, so treatable diseases spread before help arrives.',
    approach:
      'Built a Flutter mobile client with an on-device TensorFlow Lite CNN and a Django backend for model/education content — optimized for offline-first use.',
    challenges: [
      'Training and compressing a CNN for mobile without killing accuracy',
      'Designing a low-literacy, camera-first UI for field conditions',
      'Providing treatment guidance that remains useful offline',
    ],
    outcome:
      'Farmers can capture or upload an image, receive a confidence-scored preliminary diagnosis, and review prevention/treatment guidance with diagnosis history tracking.',
    fullDescription:
      'PoultryGuard helps farmers identify diseases such as Newcastle, avian influenza indicators, coccidiosis, and infectious bronchitis through image recognition, with educational resources and flock diagnosis history.',
    image: './images/kuku.png',
    tags: ['Flutter', 'TensorFlow Lite', 'Django', 'AI/ML', 'Image Processing'],
    category: 'mobile',
    features: [
      'AI-powered disease detection from chicken images',
      'Treatment recommendations and prevention tips',
      'Diagnosis history tracking',
      'Educational resources on poultry health',
    ],
    github: 'https://github.com/AmasuSuley/kukuApp.git',
    youtubeUrl: 'https://youtu.be/x3y6MVXODqs',
    liveDemo: 'https://youtu.be/x3y6MVXODqs',
    demoLabel: 'Watch demo',
  },
  {
    id: 2,
    title: 'FarmLink: Farm Management & Service Platform',
    description:
      'Web platform connecting farmers with agricultural services through request and approval flows.',
    problem:
      'Farmers struggled to discover, request, and track agricultural services across fragmented, informal channels.',
    approach:
      'Designed a multi-step React frontend with Laravel/JWT backend covering registration, farm profiles, service catalog, requests, and approval states.',
    challenges: [
      'Modeling a clear request → approval → provider matching workflow',
      'Securing farm and transaction-related data with JWT auth',
      'Keeping the UI responsive for primarily mobile users',
    ],
    outcome:
      'A production-shaped platform where farmers register farms, browse services, submit requests, and track pending/approved/rejected statuses with notifications.',
    fullDescription:
      'FarmLink streamlines farm registration, service requests, approvals, and provider matching with a mobile-friendly interface suitable for remote users.',
    image: './images/farm.png',
    tags: ['React', 'JWT Auth', 'Laravel', 'Tailwind CSS'],
    category: 'web',
    features: [
      'User registration and authentication',
      'Farm profile creation and management',
      'Service catalog with categories',
      'Service request workflow',
      'Approval tracking and notifications',
      'Responsive mobile access',
    ],
    github: 'https://github.com/AmasuSuley/farm-management-fronted.git',
    youtubeUrl: 'https://youtu.be/5i-p7ewM7QQ',
    liveDemo: 'https://youtu.be/5i-p7ewM7QQ',
    demoLabel: 'Watch demo',
  },
  {
    id: 4,
    title: 'Nuur-din Institutional Website',
    description:
      'Responsive institutional site for courses, news, gallery, testimonials, and admin publishing.',
    problem:
      'The institution needed a modern public website to present courses, share news, and collect inquiries — without depending on a developer for every update.',
    approach:
      'Built a React + Tailwind frontend with a Laravel admin layer for news posts and contact intake, plus gallery and map sections.',
    challenges: [
      'Balancing public marketing pages with practical admin workflows',
      'Structuring news, gallery, and testimonials for easy content updates',
      'Keeping the experience fully responsive across devices',
    ],
    outcome:
      'A polished institutional presence with public content sections and staff-ready admin tools for news and contact management.',
    fullDescription:
      'Nuur-din’s website presents offered courses, a responsive photo gallery, madrasa news, testimonials, maps, and an admin flow to publish news and receive contact messages.',
    image: './images/nuur.png',
    tags: ['React', 'Tailwind CSS', 'Laravel'],
    category: 'web',
    features: ['Map section', 'News section', 'Gallery', 'Contact intake', 'Admin news posting'],
    github: 'https://github.com/AmasuSuley/Almadrasat-nuur-din.git',
    youtubeUrl: 'https://youtu.be/qMZjgaWwRiU',
    liveDemo: 'https://youtu.be/qMZjgaWwRiU',
    demoLabel: 'Watch demo',
  },
  {
    id: 5,
    title: 'Personal Portfolio',
    description:
      'Editorial dark/light portfolio with motion, case studies, and a working contact pipeline.',
    problem:
      'Needed a hireability-focused presence that shows process and proof — not just screenshots.',
    approach:
      'Designed a Vite + React + Framer Motion SPA with design tokens, sticky project storytelling, SEO meta, and FormSubmit contact delivery.',
    challenges: [
      'Keeping motion premium without hurting accessibility',
      'Structuring project narrative as real case studies',
      'Making contact and CV conversion paths obvious',
    ],
    outcome:
      'A live GitHub Pages site that presents skills, experience, demos, and a direct path to get in touch.',
    fullDescription:
      'This portfolio showcases selected work with dark mode, scroll choreography, filtered projects, YouTube case demos, experience, testimonials, and SEO-ready metadata.',
    image: './images/porto.png',
    tags: ['React', 'Tailwind', 'Vite', 'Framer Motion'],
    category: 'web',
    features: [
      'Responsive editorial layout',
      'Dark / light themes',
      'Case-study project modal',
      'Working contact form',
      'CV download',
    ],
    github: 'https://github.com/AmasuSuley/portfolio.git',
    liveDemo: 'https://AmasuSuley.github.io/portfolio',
    demoLabel: 'Live site',
  },
]
