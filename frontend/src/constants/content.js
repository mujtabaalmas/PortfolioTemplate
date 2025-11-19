export const NAV_LINKS = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/skills', label: 'Skills', icon: 'skills' },
  { href: '/projects', label: 'Projects', icon: 'projects' },
  { href: '/experience', label: 'Experience', icon: 'experience' },
  { href: '/blog', label: 'Posts', icon: 'posts' },
  { href: '/contact', label: 'Contact Me', icon: 'contact' }
]

export const FALLBACK_SKILLS = [
  { name: 'Python', level: 89 },
  { name: 'Django', level: 80 },
  { name: 'FastAPI', level: 75 },
  { name: 'Flask', level: 55 },
  { name: 'PostgreSQL', level: 67 },
  { name: 'Redis', level: 57 },
  { name: 'Docker', level: 74 },
]

export const FALLBACK_PROJECTS = [
    {
    name: 'E-Commerce-store',
    description:
      'This backend API supports session-based customer operations and user-based (vendor/admin) operations..',
    technologies: ['Python','Django', 'Django Rest Framework','PostgreSQL'],
    github: 'https://github.com/mujtabaalmas/Python-Django-API',
    live: null
  },
    {
    name: 'Bookly Backend FastAPI',
    description:
      'RESTful e-commerce backend serving 200k+ users. Integrated Stripe payments, inventory management, and real-time order tracking.',
    technologies: ['Python','FastAPI', 'PostgreSQL', 'Redis', 'Celery'],
    github: 'https://github.com/mujtabaalmas/Bookly-Backend-FastAPI',
    live: null
  },
  {
    name: 'AI RESUME',
    description:
      'An interactive, AI-powered portfolio website built with Next.js and Google Gemini AI.',
    technologies: ['Python','Next.js', 'Typescript', 'Tailwind CSS', 'Google Gemini API', ],
    github: 'https://github.com/mujtabaalmas/AI-RESUME',
    live: 'https://mujtaba-ai-resume.netlify.app'
  },

  {
    name: 'Portfolio',
    description:
      'A modern, responsive portfolio website built with React, TypeScript, and Vite.',
    technologies: ['Vite', 'React', 'Github live Api', 'Html', 'Css', 'Javascript'],
    github: 'https://github.com/mujtabaalmas/personal-portfolio-src',
    live: 'https://mujtabaalmas.netlify.app'
  }
]

export const EXPERIENCE_ITEMS = [
  {
    period: '2025 — PRESENT',
    role: 'Python Backend Developer · SSA Soft',
    summary: 'Developing core APIs and resilience initiatives for Industry Level Softwares.',
    highlights: [
      'Scaled multi-tenant ingestion services to 5B events/day',
      'Rolled out zero-downtime deploy process using blue/green'
    ]
  },
  {
    period: '2025',
    role: 'Python Intern · SSA Soft',
    summary: 'SSA Soft Provided hands on Experience with Backend Technologies',
    highlights: [
      'Designed E-Commerece web api in Django',
      'Gains Hands on experience on FastAPI'
    ]
  }
]

export const BLOG_POSTS = [
  {
    slug: 'designing-apis-for-async-workflows',
    category: 'ARCHITECTURE',
    title: 'Designing APIs for Async Workflows',
    excerpt: 'Patterns for orchestrating background jobs without blocking clients.',
    date: 'Oct 2024',
    readTime: '7 min read',
    intro: 'How to de-risk async flows by pairing event-driven building blocks with simple coordination rules.',
    content: [
      {
        heading: 'Map Producers and Consumers',
        body: [
          'Start by writing down every touchpoint a request travels through and label what each service produces or consumes.',
          'The diagram instantly reveals which calls can be fire-and-forget and where you still need synchronous acknowledgements.'
        ]
      },
      {
        heading: 'Pick a Coordination Pattern',
        body: [
          'Sagas, outbox + polling, and lightweight orchestrators all work. The right choice depends on operator skillset and failure appetite.',
          'Prod teams I work with default to transaction outbox because it keeps business logic in the service codebase while remaining observable.'
        ]
      },
      {
        heading: 'Instrument the Edges',
        body: [
          'Async systems only feel reliable when tracing gives you the same answers you had in monoliths.',
          'Ship spans and correlation IDs with every enqueue/dequeue so incidents read like a story instead of a scavenger hunt.'
        ]
      }
    ]
  },
  {
    slug: 'observability-starter-kit-for-flask',
    category: 'PLATFORM',
    title: 'Observability Starter Kit for Flask',
    excerpt: 'Use OpenTelemetry and structured logging to unlock clarity in prod.',
    date: 'Aug 2024',
    readTime: '5 min read',
    intro: 'Drop-in recipe for instrumenting API services without becoming the telemetry team.',
    content: [
      {
        heading: 'Trace Every Request',
        body: [
          'Install auto-instrumentation for Flask and your HTTP client so spans show the full round-trip.',
          'Forward trace IDs into logs to jump between data sets instantly during incidents.'
        ]
      },
      {
        heading: 'Define Golden Signals Early',
        body: [
          'Latency, error rate, saturation, and traffic still apply— codify them in dashboards before you need them.',
          'Pair each signal with a runbook link to shorten the distance between page and fix.'
        ]
      },
      {
        heading: 'Budget for Sampling',
        body: [
          'Full fidelity traces are expensive. Adaptive sampling keeps you within budget while preserving rare paths.',
          'Emit custom events for deploys, migrations, and feature flags so graphs explain themselves.'
        ]
      }
    ]
  },
  {
    slug: 'deploying-fastapi-to-containers',
    category: 'DEVOPS',
    title: 'Deploying FastAPI to Containers the Calm Way',
    excerpt: 'Blueprint for containerized deployments on Render or Fly.io.',
    date: 'May 2024',
    readTime: '6 min read',
    intro: 'A staging-to-prod checklist that keeps FastAPI releases boring even under load.',
    content: [
      {
        heading: 'Bake Security and Health In',
        body: [
          'Use multi-stage Docker builds, scan images, and ship a /health route that checks dependencies up the chain.',
          'A fast fail signal lets orchestrators replace bad pods before clients notice.'
        ]
      },
      {
        heading: 'Treat Config as Code',
        body: [
          'Stick to environment variables, template them with your IaC tool, and keep secrets outside the repo.',
          'Document the minimal set required so onboarding engineers never guess at runtime settings.'
        ]
      },
      {
        heading: 'Automate Rollbacks',
        body: [
          'Blue/green or canary releases are non-negotiable once customers rely on the API.',
          'Wire rollback buttons to the same manifests you apply forward so recovery is muscle memory.'
        ]
      }
    ]
  }
]

export const CONTACT_LINKS = [
  { label: 'Email', value: 'insights.mujtaba@gmail.com', href: 'mailto:insights.mujtaba@gmail.com' },
  { label: 'GitHub', value: 'github.com/mujtabaalmas', href: 'https://github.com/mujtabaalmas' },
  { label: 'LinkedIn', value: 'linkedin.com/in/mujtabaalmas', href: 'https://linkedin.com/in/mujtabaalmas' }
]

export const CONTACT_DETAILS = [
  {
    iconPath:
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    label: 'Remote · Open to travel'
  },
  {
    iconPath:
      'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
    label: 'Backend leadership · Platform squads · Advisory'
  }
]

export const FOOTER_NAV = {
  primary: ['#hero', '#skills', '#projects'],
  secondary: ['#experience', '#blog', '#contact']
}

export const gradientClasses = ['gradient-violet', 'gradient-sky', 'gradient-emerald', 'gradient-amber', 'gradient-pink']

export const SLIDER_ITEMS = [
  { label: 'Python', category: 'Language', logoSrc: '/assets/logosvg/Python.svg' },
  { label: 'Flask', category: 'Framework', logoSrc: '/assets/logosvg/Flask.svg' },
  { label: 'FastAPI', category: 'Framework', logoSrc: '/assets/logosvg/FastAPI.svg' },
  { label: 'Django', category: 'Framework', logoSrc: '/assets/logosvg/Django.svg' },
  { label: 'Django REST', category: 'Framework', logoSrc: '/assets/logosvg/Django REST.svg' },
  { label: 'Docker', category: 'DevOps', logoSrc: '/assets/logosvg/Docker.svg' },
  { label: 'PostgreSQL', category: 'Database', logoSrc: '/assets/logosvg/PostgresSQL.svg' },
  { label: 'Redis', category: 'Caching', logoSrc: '/assets/logosvg/Redis.svg' },
  { label: 'GitHub', category: 'Collaboration', logoSrc: '/assets/logosvg/GitHub.svg' },
  { label: 'Git', category: 'Version Control', logoSrc: '/assets/logosvg/Git.svg' },
  { label: 'Postman', category: 'Tools', logoSrc: '/assets/logosvg/Postman.svg' },
  { label: 'JavaScript', category: 'Language', logoSrc: '/assets/logosvg/JavaScript.svg' },
  { label: 'HTML5', category: 'Language', logoSrc: '/assets/logosvg/HTML5.svg' },
  { label: 'CSS3', category: 'Language', logoSrc: '/assets/logosvg/CSS3.svg' }
]
