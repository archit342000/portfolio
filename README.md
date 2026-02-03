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

## Deployment

This project is configured for easy deployment to GitHub Pages.

**Important:** You do **not** run a local server (like `npm run dev`) on GitHub Pages. GitHub Pages is a "static host", which means it simply serves the files we generate. We generate these files using the `build` command, and then upload them.

### How to Deploy

We have set up a script to automate this process.

1.  Make sure all your changes are committed to git.
2.  Run the deploy command:
    ```bash
    npm run deploy
    ```

This command will automatically:
1.  Run `npm run build` to generate the production files in the `dist` folder.
2.  Use the `gh-pages` tool to upload that `dist` folder to a `gh-pages` branch on your GitHub repository.

After a few minutes, your site will be live at `https://<your-username>.github.io/<repository-name>/`.

## FAQ

**Q: Can I just open `index.html` or `dist/index.html` in my browser?**

A: **No.** Modern JavaScript frameworks like React use "ES Modules," which browsers block for security reasons when opening files directly from your hard drive (`file://` protocol). You must use a local web server (like `npm run dev` or `npm run preview`) to view the site.
