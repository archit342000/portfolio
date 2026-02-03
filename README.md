# Portfolio Website

A personal portfolio website built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository (if you haven't already).
2. Install dependencies:

   ```bash
   npm install
   ```

### Running Locally (Development)

To start the development server with hot reloading:

```bash
npm run dev
```

Then open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Previewing Production Build

To preview the production build locally:

```bash
npm run preview
```

## deployment

This project is configured for deployment on GitHub Pages.
- `base` is set to `./` in `vite.config.js` to support relative paths.
- The build artifacts in `dist/` are what should be deployed.

## FAQ

**Q: Can I just open `index.html` or `dist/index.html` in my browser?**

A: **No.** Modern JavaScript frameworks like React use "ES Modules," which browsers block for security reasons when opening files directly from your hard drive (`file://` protocol). You must use a local web server (like `npm run dev` or `npm run preview`) to view the site.
