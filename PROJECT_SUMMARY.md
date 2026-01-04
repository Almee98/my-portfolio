# Project Summary: Almee Christian's Portfolio

## Overview
This is a personal portfolio website built with Next.js 15 and React 19. The portfolio showcases professional experience, projects, and personal information in a modern, single-page application format. The site is designed to be deployed on GitHub Pages.

## Technology Stack

### Core Technologies
- **Next.js 15.2.0** - React framework with App Router
- **React 19.0.0** - UI library
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Development Tools
- **ESLint** - Code linting
- **gh-pages** - GitHub Pages deployment
- **@svgr/webpack** - SVG component support

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with navigation and cursor glow
│   ├── page.js             # Main page with sections (About, Experience, Projects)
│   └── globals.css         # Global styles and Tailwind configuration
├── components/
│   ├── about.js            # About section component
│   ├── experience.js       # Experience card component
│   ├── project.js          # Project card component
│   ├── navigation.js       # Sidebar navigation with social links
│   ├── cursor_glow.js      # Interactive cursor glow effect
│   └── tech.js             # Technology tag/pill component
├── data/
│   ├── experiences.js      # Sample experience data (NOT REAL)
│   └── projects.js         # Sample project data (NOT REAL)
└── widgets/
    ├── arrow.jsx           # Arrow icon component
    ├── discord.jsx         # Discord icon
    ├── github.jsx          # GitHub icon
    ├── leetcode.jsx        # LeetCode icon
    ├── linkedin.jsx        # LinkedIn icon
    └── mail.jsx            # Email icon
```

## Key Features

### 1. **Single-Page Application Layout**
   - Sticky sidebar navigation on desktop
   - Smooth scrolling between sections
   - Active section highlighting based on scroll position

### 2. **Interactive Elements**
   - **Cursor Glow Effect**: A large blurred circle follows the mouse cursor for visual interest
   - **Hover Effects**: Experience and project cards have interactive hover states with opacity transitions
   - **Animated Navigation**: Navigation items expand and change color on hover/active state

### 3. **Responsive Design**
   - Mobile-first approach
   - Responsive grid layouts for experience and project cards
   - Adaptive navigation (hidden on mobile, visible on desktop)

### 4. **Sections**

   **About Section**
   - Personal introduction and professional background
   - Current role at Klaviyo (sample data)
   - Personal interests and hobbies

   **Experience Section**
   - Displays up to 6 experience entries
   - Each entry shows:
     - Company name and role
     - Time period
     - Description
     - Technology stack tags
   - Hover effects with opacity transitions

   **Projects Section**
   - Displays up to 8 project entries
   - Each project shows:
     - Project name
     - Project image
     - Description
     - Technology stack tags
   - Similar hover effects as experience cards

### 5. **Social Links**
   - LinkedIn
   - GitHub
   - Email
   - Discord
   - LeetCode

## Components Breakdown

### Navigation Component
- Sticky sidebar on desktop (left side)
- Name, title, and bio
- Navigation menu with active section tracking using Intersection Observer
- Social media icons with hover effects
- Smooth scroll navigation

### Experience Component
- Grid layout (2 columns for date, 6 columns for content)
- Hover effects that dim other items and highlight the hovered item
- Technology stack displayed as colored pills
- Arrow icon that animates on hover

### Project Component
- Similar grid layout to Experience
- Project images using Next.js Image component
- Same hover interaction pattern
- Technology stack tags

### Cursor Glow Component
- Client-side component that tracks mouse movement
- Creates a large blurred circle effect following the cursor
- Fixed positioning with transform centering

## Data Structure

### Experiences Data (Sample - NOT REAL)
- Array of experience objects containing:
  - `company`: Company name
  - `role`: Job title
  - `description`: Job description
  - `techStack`: Array of technology names
  - `timePeriod`: Date range string

### Projects Data (Sample - NOT REAL)
- Array of project objects containing:
  - `name`: Project name
  - `imageName`: Path to project image
  - `description`: Project description
  - `techStack`: Array of technology names

**Note**: The data in `experiences.js` and `projects.js` contains sample/placeholder information and is not real.

## Styling & Design

### Color Scheme
- **Background**: Dark navy blue (`#0a192f`)
- **Text**: Slate/gray tones with varying opacity
- **Accent**: Teal/cyan (`#5CEAD4`, `#2DD4BF`) for highlights and interactive elements
- **Glass morphism**: Subtle white overlays with blur effects on hover

### Typography
- **Primary Font**: Inter (via Next.js font optimization)
- **Monospace Font**: Geist Mono (available but not heavily used)
- Font weights: 300 (body), medium/bold for headings

### Design Patterns
- Glass morphism effects on hover
- Smooth transitions and animations
- Opacity-based hover states for card interactions
- Responsive grid layouts
- Sticky positioning for navigation

## Deployment Configuration

### GitHub Pages Setup
- Configured for deployment to `Almee98.github.io/my-portfolio`
- Uses `gh-pages` package for deployment
- Static export mode (`output: 'export'`)
- Base path configuration for production builds
- Image optimization disabled for static export compatibility

### Build Scripts
- `dev`: Development server with Turbopack
- `build`: Production build
- `predeploy`: Runs build before deployment
- `deploy`: Deploys to GitHub Pages

## Configuration Files

- **next.config.mjs**: Next.js configuration with static export, base path, and SVG loader
- **package.json**: Dependencies and scripts
- **postcss.config.mjs**: PostCSS configuration for Tailwind
- **eslint.config.mjs**: ESLint configuration
- **jsconfig.json**: JavaScript path aliases (`@/` for `src/`)

## Notable Implementation Details

1. **Intersection Observer**: Used for tracking active navigation section based on scroll position
2. **Client Components**: Navigation and CursorGlow use `'use client'` directive for interactivity
3. **Image Optimization**: Disabled for static export compatibility
4. **SVG as Components**: Configured via webpack to import SVGs as React components
5. **Responsive Grid**: Uses Tailwind's responsive grid system with column spans
6. **Group Hover States**: Uses Tailwind's group hover feature for coordinated hover effects

## Assets

- Project images stored in `public/assets/`
- SVG icons for social media links
- Favicon configured in layout metadata

---

**Note**: This portfolio uses sample data for experiences and projects. Replace the data in `src/data/experiences.js` and `src/data/projects.js` with real information before using as an actual portfolio.

