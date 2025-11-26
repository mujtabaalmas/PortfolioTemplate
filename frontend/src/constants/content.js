// Auto-import every HTML article so adding files only needs a metadata entry.
const htmlModules = import.meta.glob('../content/*.html', { eager: true, query: '?raw', import: 'default' })

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
      'Design And Developed REST APIs in FASTAPI',
      'Build scalable & secure backend and RESTful APIs using Django.'
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

/**
 * Blog post definitions
 * 
 * To add a new blog post:
 * 1. Add your HTML file to src/content/ folder
 * 2. Add metadata entry here with:
 *    - slug: URL-friendly identifier (e.g., 'my-post-title')
 *    - category: Post category (e.g., 'FASTAPI', 'DJANGO', 'BACKEND')
 *    - title: Full post title
 *    - excerpt: Brief description (1-2 sentences)
 *    - date: Publication date
 *    - readTime: Estimated reading time
 *    - intro: Opening paragraph/hook
 *    - htmlFile: Filename in content folder
 * 
 * The HTML content will be automatically imported and processed.
 */
const htmlPostDefinitions = [
  {
    slug: 'building-production-ready-fastapi-rest-api',
    category: 'FASTAPI',
    title: 'Building a Production-Ready REST API with FastAPI',
    excerpt: 'Complete guide with JWT auth, Docker, and deployment basics.',
    date: 'Nov 2025',
    readTime: '18 min read',
    intro:
      'FastAPI has revolutionized Python web development with its blazing speed, automatic documentation, and developer-friendly features.',
    htmlFile: 'fastapi-production-rest-api.html'
  },
  {
    slug: 'sqlalchemy-and-sqlmodel-guide-fastapi-django',
    category: 'BACKEND',
    title: 'SQLAlchemy and SQLModel in Python',
    excerpt: 'A comprehensive guide for FastAPI, Django, and modern ORMs.',
    date: 'Nov 2025',
    readTime: '14 min read',
    intro:
      'Working with databases in Python web development has evolved significantly, with powerful ORM tools transforming how developers interact with data.',
    htmlFile: 'sqlalchemy-sqlmodel-guide.html'
  },
  {
    slug: 'background-tasks-workers-celery-dramatiq-huey',
    category: 'ASYNC',
    title: 'Background Tasks & Workers: Celery vs Dramatiq vs Huey',
    excerpt: 'A comprehensive guide to asynchronous task processing in Python with practical examples.',
    date: 'Nov 2025',
    readTime: '22 min read',
    intro:
      'Learn how to build scalable Python applications with background task processing using Celery, Dramatiq, and Huey.',
    htmlFile: 'background-tasks-workers.html'
  }
]

//  slugified ids and anchor links to all headings (h1-h6).
const stripTags = (str) => str.replace(/<[^>]*>/g, '')
const slugify = (text, used = new Set()) => {
  const base = (text || '')
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '')
  let slug = base || 'heading'
  let i = 1
  while (used.has(slug)) {
    slug = `${base}-${i}`
    i += 1
  }
  used.add(slug)
  return slug
}

const addHeadingAnchors = (html) => {
  if (!html || typeof html !== 'string') return html
  const used = new Set()
  // Replace each heading tag with id and an inner anchor link.
  return html.replace(/<(h[1-6])([^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, inner) => {
    // If the heading already contains an anchor linking to an id, leave it
    if (/class=["']?heading-link["']?/i.test(match) || /<a[^>]+href=['"]?#/i.test(inner)) {
      return match
    }
    // Try to extract existing id from attrs
    const idMatch = attrs && attrs.match(/id=["']?([^"'\s>]+)/i)
    const text = stripTags(inner).trim()
    const id = idMatch ? idMatch[1] : slugify(text, used)
    const cleanAttrs = attrs.replace(/\s*id=["']?([^"'\s>]+)["']?/i, '')
    return `<${tag} id="${id}"${cleanAttrs}>` + `<a class="heading-link" href="#${id}">${inner}</a></${tag}>`
  })
}

const addCopyButtonsToPre = (html) => {
  if (!html || typeof html !== 'string') return html
  // Inject a copy button into each <pre> element if not already present
  return html.replace(/<pre\b([^>]*)>([\s\S]*?)<\/pre>/gi, (match, attrs, inner) => {
    if (/class=["']?copy-code-button["']?/i.test(match) || /copy-code-button/i.test(inner)) return match
    return `<pre${attrs}>${inner}<button type="button" class="copy-code-button">Copy</button></pre>`
  })
}

export const BLOG_POSTS = htmlPostDefinitions
  .map((post) => {
    const htmlKey = `../content/${post.htmlFile}`
    const raw = htmlModules[htmlKey] || ''
    return {
      ...post,
      html: addCopyButtonsToPre(addHeadingAnchors(raw))
    }
  })
  .filter((post) => Boolean(post.html))

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
  { label: 'Python', category: 'Language', logoSrc: '/v2/assets/logosvg/Python.svg' },
  { label: 'Flask', category: 'Framework', logoSrc: '/v2/assets/logosvg/Flask.svg' },
  { label: 'FastAPI', category: 'Framework', logoSrc: '/v2/assets/logosvg/FastAPI.svg' },
  { label: 'Django', category: 'Framework', logoSrc: '/v2/assets/logosvg/Django.svg' },
  { label: 'Django REST', category: 'Framework', logoSrc: '/v2/assets/logosvg/Django REST.svg' },
  { label: 'Docker', category: 'DevOps', logoSrc: '/v2/assets/logosvg/Docker.svg' },
  { label: 'PostgreSQL', category: 'Database', logoSrc: '/v2/assets/logosvg/PostgresSQL.svg' },
  { label: 'Redis', category: 'Caching', logoSrc: '/v2/assets/logosvg/Redis.svg' },
  { label: 'GitHub', category: 'Collaboration', logoSrc: '/v2/assets/logosvg/GitHub.svg' },
  { label: 'Git', category: 'Version Control', logoSrc: '/v2/assets/logosvg/Git.svg' },
  { label: 'Postman', category: 'Tools', logoSrc: '/v2/assets/logosvg/Postman.svg' },
  { label: 'JavaScript', category: 'Language', logoSrc: '/v2/assets/logosvg/JavaScript.svg' },
  { label: 'HTML5', category: 'Language', logoSrc: '/v2/assets/logosvg/HTML5.svg' },
  { label: 'CSS3', category: 'Language', logoSrc: '/v2/assets/logosvg/CSS3.svg' }
]
