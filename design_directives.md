# Neural Aesthetics System (v2.2) - Design Directives

**Architect:** Jules (AI Software Engineer)
**Compliance Standard:** WCAG 2.1 AA  
**Base Physics:** "Neural Aesthetics" + "Cyber-Organic" + "Glassmorphism" + "Motion Fidelity"
**Date:** January 27, 2026

---

## 1. Tech Stack & Rationale

- **Framework:** Tailwind CSS (v3.4+)
- **Rationale:** Strict utility constraints for the 4px grid.
- **CSS Methodology:** Semantic CSS Variables (`--sys-*`) mapped to Tailwind.
- **Iconography:** Lucide React (Stroke width: 1.5px, Sharp edges preferred where possible).
- **Motion Engine:** CSS Transitions for micro-interactions; `animate-*` utilities for ambiance.

---

## 2. Global Tokens & Theme Strategy

### 2.1. Brand Palette (Neural)

The "Neural" theme is designed for the AI/ML Engineer persona: sophisticated, data-driven, and futuristic.

| Token Name | Hue | Light (Hex) | Dark (Hex) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| primary | Violet | #7C3AED | #8B5CF6 | Dominant Brand / Key Actions |
| accent | Cyan | #06B6D4 | #22D3EE | Data Highlights / Secondary Actions |
| surface | Void | #FFFFFF | #030712 | Backgrounds (Deepest Black/Blue) |

### 2.2. Functional Palette

| Token Name | Hue | Light (Hex) | Dark (Hex) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| secondary | Slate | #475569 | #94A3B8 | Supporting text |
| tertiary | Indigo | #4F46E5 | #6366F1 | Nuance / Depth |
| neutral | Zinc | #18181B | #E4E4E7 | Text |
| error | Rose | #E11D48 | #FB7185 | Errors |
| success | Emerald | #059669 | #34D399 | Success |

### 2.3. Semantic Aliases

#### Backgrounds
- `--bg-canvas`: Page root (Light: Zinc-50 / Dark: #020617 - Slate-950/Void)
- `--bg-surface`: Card/Container (Light: White / Dark: #0f172a - Slate-900)
- `--bg-surface-elevated`: Modals (Light: White / Dark: #1e293b - Slate-800)
- `--bg-glass`: Glassmorphism (Light: White/80 / Dark: #0f172a/60)

#### Content
- `--text-primary`: High emphasis (Light: Zinc-900 / Dark: Zinc-50)
- `--text-secondary`: Medium emphasis (Light: Zinc-500 / Dark: Zinc-400)
- `--text-mono`: Code/Data (Primary Color in Dark Mode for emphasis)

#### Borders
- `--border-base`: Decorative (Light: Zinc-200 / Dark: #1e293b - Slate-800)
- `--border-glow`: Interactive (Primary-500 with opacity)

### 2.4. Visual Fidelity Strategy

- **Grid Background:** A subtle dot or mesh grid pattern on the canvas to simulate a "blueprint" or "digital workspace".
- **Neon Glows:** Shadows should not be black. They should be colored (Violet/Cyan) to create a glow effect.
  - *Tailwind:* `shadow-lg shadow-primary-500/20`.
- **Tech Borders:** Thin, subtle borders.
  - *Tailwind:* `border border-white/5` (Dark).

### 2.5. Typography System

- **Font Family (Body):** `Inter`, sans-serif.
- **Font Family (Tech):** `JetBrains Mono`, monospace. (Used for: Headers, Tags, Metadata, Code).
- **Scale:**
  - **Display:** `font-sans` Bold
  - **Headline:** `font-mono` Bold (Tech/Engineering feel)
  - **Body:** `font-sans` Regular
  - **Code:** `font-mono` Medium

---

## 3. Spatial System

- **Grid:** 4px baseline.
- **Radius:**
  - **Outer:** `rounded-2xl` (Cards, Modals)
  - **Inner:** `rounded-lg` (Buttons, Inputs)

---

## 4. Motion & Behavior

- **Hover:** "Levitate & Glow"
  - `hover:-translate-y-1 hover:shadow-primary-500/30 hover:border-primary-500/50`
- **Load:** "Fade In Up"
- **Scroll:** Infinite marquis for tech stack (Carousel).

---

## 5. Component Specs

### 5.1. Atoms

- **Buttons:**
  - **Primary:** `bg-primary text-white font-mono shadow-lg shadow-primary-500/25 hover:shadow-primary-500/50 rounded-lg`.
  - **Ghost:** `text-primary hover:bg-primary/10 font-mono rounded-lg`.

- **Tags/Badges:**
  - `font-mono text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20`.

### 5.2. Molecules

- **Project Card:**
  - **Container:** `bg-surface/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden`.
  - **Hover:** Glow effect + Border highlight.

- **Hero Section:**
  - **Title:** Large, Inter, Bold.
  - **Subtitle:** JetBrains Mono, Typewriter effect (optional).
  - **Background:** Radial gradient (Violet/Cyan) fading into the Void.

---

## 6. Anti-Patterns
1. **Boring Shadows:** No pure black shadows in dark mode.
2. **System Fonts Only:** Must use JetBrains Mono for the tech vibe.
3. **Flat Backgrounds:** Avoid flat colors; use subtle gradients or patterns.
