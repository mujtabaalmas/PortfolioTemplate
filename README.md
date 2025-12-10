# Mujtaba Almas - Personal Blog & Portfolio

A modern, responsive personal blog and portfolio website built with React and Vite. Features a clean, dark-themed design with smooth animations and excellent performance.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

## 🌐 Live Demo

- **This Portfolio**: [mujtabaalmas.me/v2](https://mujtabaalmas.me/v2)

## ✨ Features

- **Modern UI/UX** - Clean, dark-themed design with glassmorphism effects
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Blog System** - Technical blog articles with syntax highlighting and table of contents
- **Skills Showcase** - Interactive skills slider highlighting technical expertise
- **Project Portfolio** - Showcase of personal and professional projects
- **SEO Optimized** - Proper meta tags, sitemap, and robots.txt configuration
- **Fast Performance** - Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router DOM v7
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Space Grotesk, JetBrains Mono
- **Deployment**: Netlify
- **Code Quality**: ESLint

## 📁 Project Structure

```
websitie/
├── frontend/
│   ├── public/
│   │   ├── assets/          # Static assets (logos, images)
│   │   ├── _redirects       # Netlify redirects
│   │   ├── robots.txt       # SEO robots file
│   │   └── sitemap.xml      # SEO sitemap
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── constants/       # Static content and data
│   │   ├── content/         # Blog article HTML files
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Page components
│   │   └── styles/          # CSS stylesheets
│   ├── scripts/             # Build scripts
│   ├── package.json
│   └── vite.config.js
└── netlify.toml              # Netlify deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mujtabaalmas/PortfolioTemplate.git
   cd PortfolioTemplate
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `frontend/dist` directory.

### Preview Production Build

```bash
npm run preview
```


## 🎨 Design Features

- **Dark Theme** - Easy on the eyes with carefully chosen color palette
- **Gradient Accents** - Subtle violet-to-sky gradients for visual interest
- **Glassmorphism** - Modern frosted glass effects on cards
- **Smooth Animations** - Polished transitions and hover effects
- **Typography** - Clean, readable fonts optimized for technical content

## 📱 Pages

- **Home** - Hero section with introduction and quick links
- **Blog** - Technical articles and tutorials
- **Projects** - Portfolio of work and side projects
- **Skills** - Technical skills and expertise
- **Experience** - Professional work history
- **Contact** - Get in touch

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run generate:blog` | Generate blog metadata |

## 🌐 Deployment

This project is configured for deployment on Netlify:

- Automatic deployments from the `deployment` branch
- SPA routing support via `_redirects`
- Node.js 20 build environment

## 📄 License

This [project](https://github.com/mujtabaalmas/PortfolioTemplate) is open source and available under the [MIT License](LICENSE).



### Author **[Mujtaba Almas](https://mujtabaalmas.me)**
---

Star this repo if you found it helpful ⭐ 

