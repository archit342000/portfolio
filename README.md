# Portfolio Website

A personal portfolio website built with React, Vite, and Tailwind CSS.
Designed to showcase software engineering and AI projects.

## Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v3.4 (Indigo Theme)
- **Icons:** Lucide React
- **Routing:** React Router Dom (HashRouter)
- **Animation:** CSS Keyframes & Tailwind Utilities

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm
- Python 3 (for verification scripts)

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development

To run the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment

This project is configured for deployment on GitHub Pages.

### Deploying to GitHub Pages

1. Ensure your `vite.config.js` has `base: './'` or the correct repository name.
2. Run the deploy script:
   ```bash
   npm run deploy
   ```
   This will build the project and push the `dist` folder to the `gh-pages` branch.

## Testing & Verification

### Automated Verification (Playwright)

The project includes Python scripts using Playwright to verify core functionality (Home page, Theme toggle, Project details).

1. Install Playwright for Python:
   ```bash
   pip install playwright
   playwright install chromium
   ```

2. Ensure the dev server is running:
   ```bash
   npm run dev
   ```

3. Run the verification script:
   ```bash
   python3 verification/verify_portfolio.py
   ```

### Manual Verification

To verify the build locally before deploying:
```bash
npm run build
npm run preview
```
