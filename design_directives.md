# Material Foundation System (v2.1) - Design Directives

**Architect:** Visual Design Directives Designer (v1.9)  
**Compliance Standard:** WCAG 2.1 AA  
**Base Physics:** Material Design 3 (Modified) + "True Dark" + "Glassmorphism" + "Multi-Theme" + "Motion Fidelity"  
**Date:** January 27, 2026

---

## 1. Tech Stack & Rationale

- **Framework:** Tailwind CSS (v3.4+)
- **Rationale:** Tailwind provides the strict utility constraints necessary to enforce the 4px spatial grid while allowing rapid composition of complex state layers (hover, focus, active).
- **CSS Methodology:** Semantic CSS Variables (`--sys-*`) mapped to Tailwind configurations. This decouples color values from class names, enabling instant, flicker-free Light/Dark mode switching and Theme Injection.
- **Iconography:** Lucide React (Stroke width: 1.5px or 2px, consistent).
- **Motion Engine:** CSS Transitions for micro-interactions; framer-motion (optional) for complex choreography.

---

## 2. Global Tokens & Theme Strategy

### 2.1. Primitive Palette (Brand Themes)

Directives now support multi-brand deployment. Select **ONE** primary set to define the `--primary` token.

#### Option A: Indigo (Default - Trusted/Tech)
| Token Name | Hue | Light (Hex) | Dark (Hex) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| primary | Indigo | #4F46E5 | #818CF8 | Brand dominant, CTAs |

#### Option B: Ocean (Blue - Corporate/Secure)
| Token Name | Hue | Light (Hex) | Dark (Hex) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| primary | Blue | #2563EB | #60A5FA | Brand dominant, CTAs |

#### Option C: Forest (Green - Nature/Growth)
*Note: Uses darker 700-weight in light mode to pass WCAG AA with white text.*
| Token Name | Hue | Light (Hex) | Dark (Hex) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| primary | Emerald | #047857 | #34D399 | Brand dominant, CTAs |

#### Option D: Sunset (Orange - Energy/Creative)
*Note: Uses darker 700-weight in light mode to pass WCAG AA with white text.*
| Token Name | Hue | Light (Hex) | Dark (Hex) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| primary | Orange | #C2410C | #FB923C | Brand dominant, CTAs |

### 2.2. Functional Palette (Universal)

These tokens remain constant regardless of the selected Brand Theme.

| Token Name | Hue | Light (Hex) | Dark (Hex) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| secondary | Slate | #475569 | #94A3B8 | Supporting text, borders |
| tertiary | Teal | #0D9488 | #2DD4BF | Accents, illustrations |
| neutral | Zinc | #18181B | #E4E4E7 | Text, neutral backgrounds |
| error | Red | #DC2626 | #F87171 | Critical states |
| warning | Amber | #D97706 | #FCD34D | Cautionary states |
| success | Emerald | #059669 | #34D399 | Completion states |
| surface | Base | #FFFFFF | #09090B | Backgrounds (True Black) |

### 2.3. Semantic Aliases (The Logic Layer)

These must be defined in the CSS `:root` and `.dark` classes.

#### Backgrounds
- `--bg-canvas`: Page root (Light: Zinc-50 / Dark: Zinc-950)
- `--bg-surface`: Card/Container (Light: White / Dark: Zinc-900)
- `--bg-surface-elevated`: Modals/Dropdowns (Light: White / Dark: Zinc-900)
- `--bg-surface-variant`: Hover states/Inputs (Light: Zinc-100 / Dark: Zinc-800)

#### Content
- `--text-primary`: High emphasis (Opacity 87% or Zinc-900/Zinc-50)
- `--text-secondary`: Medium emphasis (Opacity 60% or Zinc-500/Zinc-400)
- `--text-disabled`: Low emphasis (Opacity 38%)
- `--text-on-brand`: Always High Contrast (White/Black)

#### Borders
- `--border-base`: Decorative dividers (Zinc-200 / Zinc-800)
- `--border-control`: Interactive boundaries (Zinc-300 / Zinc-700)
- `--border-focus`: Active inputs (Primary-500)
- `--border-error`: Invalid inputs (Error-500)

### 2.4. Visual Fidelity Strategy (Aesthetics)

To achieve "Visual Harmony," apply these enhancements globally.

- **Luminosity (Colored Shadows):** Never use pure black shadows for brand elements.
  - *Rule:* Inject 20-30% of the Brand Color into the shadow.
  - *Tailwind:* `shadow-lg shadow-indigo-500/20` (Adjust indigo to blue/emerald/orange based on theme).
- **Optical Borders (Inner Glows):**
  - *Rule:* All cards and inputs must have a subtle inner ring to define edges cleanly against backgrounds, especially in dark mode.
  - *Tailwind:* `ring-1 ring-inset ring-white/50` (Light) or `ring-white/10` (Dark).
- **Glassmorphism (Depth):**
  - *Rule:* Layer-50 (Chrome) and Layer-60 (Popovers) must use backdrop blurs for a "Glossy" feel.
  - *Tailwind:* `bg-surface/80 backdrop-blur-md`.

### 2.5. Data Visualization Palette

Categorical colors must differ by Hue and Lightness for accessibility.

- **Series A:** Theme Primary (e.g., #4F46E5 or #2563EB)
- **Series B:** Emerald (#10B981 / #34D399)
- **Series C:** Amber (#F59E0B / #FBBF24)
- **Series D:** Rose (#E11D48 / #FB7185)
- **Series E:** Cyan (#06B6D4 / #22D3EE)
- **Series F:** Violet (#8B5CF6 / #A78BFA)

### 2.6. Typography System

- **Font Family:** Inter (Variable), fallback system-ui.
- **Casing Rules:**
  - Headlines: Sentence case.
  - Buttons: Sentence case (Never ALL CAPS unless stylized display).
  - Labels/Micro: Sentence case.
- **Scale (Major Third):**
  - **Display:** 3.5rem (56px) / 1.1 line-height / -2% tracking
  - **Headline:** 2rem (32px) / 1.2 line-height / Bold
  - **Title:** 1.25rem (20px) / 1.2 line-height / Medium
  - **Body:** 1rem (16px) / 1.5 line-height / Regular
  - **Label:** 0.875rem (14px) / 1.25 line-height / Medium / +1% tracking
  - **Micro:** 0.75rem (12px) / 1.0 line-height / Regular

---

## 3. Spatial System & Z-Axis

### 3.1. The 4px Hard Grid
- **Base Unit:** 1 unit = 0.25rem (4px).
- **Padding/Margin:** Must be multiples of 4 (e.g., `p-4` (16px), `gap-6` (24px)).
- **Touch Targets:** Interactive elements must have a strictly enforced minimum hit area of 44x44px.

### 3.2. Elevation & Z-Layering
- **Layer-0 (Base):** `z-0` - Backgrounds, standard flow content.
- **Layer-10 (Floating):** `z-10` - FABs, Sticky Table Headers.
- **Layer-40 (Overlay):** `z-40` - Backdrops (`bg-black/50`).
- **Layer-50 (Chrome):** `z-50` - Sticky Navigation, Sidebars (`backdrop-blur-md` MANDATORY).
- **Layer-60 (Popover):** `z-[60]` - Dropdowns, Context Menus (`backdrop-blur-md` MANDATORY).
- **Layer-100 (Modal):** `z-[100]` - Dialogs, Lightboxes.
- **Layer-Max (Tooltip):** `z-[9999]` - Tooltips, Toasts.

---

## 4. Behavioral Physics & Motion

### 4.1. Duration & Easing
- **Curve:** `cubic-bezier(0.2, 0.0, 0, 1.0)` (Standard Material).
- **Durations:**
  - **Instant:** 0ms (Color changes).
  - **Fast:** 200ms (Hover lift, Opacity fades).
  - **Medium:** 400ms (Card expansion, Sheet slide-in).
  - **Slow:** 600ms (Full screen transitions).

### 4.2. Choreography
- **Stagger:** List items must enter with a 50ms delay interval between items.
- **Entrance:** Elements slide up `y: 10px -> y: 0` while fading in.

### 4.3. Interaction Feedback
- **Hover:** Lift elevation (+1 Level) AND inject colored shadow (`shadow-primary-500/30`).
- **Active (Press):** Scale down `scale-[0.98]`.
- **Focus:** MANDATORY visible ring. `ring-2 ring-offset-2 ring-primary-500` (Offset color must match background).

### 4.4. Motion Fidelity & Engagement (New)
- **Scroll Reveals:** Major sections must fade in `opacity-0 -> opacity-100` with `translate-y-4 -> translate-y-0` on scroll.
- **Attention Seekers:** Critical alerts use `animate-pulse` (subtle) or `animate-bounce` (urgent).
- **Avatar Live Status:** Online indicators must use `animate-ping` (slowed) to denote active status.

---

## 5. Comprehensive Component Specs

### 5.1. Atoms (Primitive Elements)

- **Buttons:**
  - **Primary:** `bg-primary text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all`.
  - **Secondary:** `bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-50 shadow-sm`.
  - **Ghost:** Transparent background, `hover:bg-zinc-100 text-zinc-600`.
- **Avatars (Engaging):**
  - **Container:** `rounded-full ring-2 ring-surface overflow-hidden transition-transform duration-300 hover:scale-110 hover:z-10`.
  - **Status Dot:** Bottom-right, `bg-success-500 ring-2 ring-surface`.
  - **Group Stack:** `-space-x-2` (Negative spacing for overlap).
- **Inputs & Text Areas:**
  - **Text Input:** Height 48px/56px. Border `zinc-300`. Focus `ring-2 ring-primary-500 border-primary-500 shadow-primary-500/10`.
  - **File Dropzone:** Dashed border `border-2 border-dashed border-zinc-300`, `bg-zinc-50`, centered icon + text.
- **Toggles/Selection:**
  - **Switch:** Track `w-11 h-6 bg-zinc-200`. Thumb `h-5 w-5 bg-white shadow`. Transition `translate-x` (LTR) or `rtl:-translate-x`.

### 5.2. Molecules (Compound Elements)

- **Cards (Interactive):**
  - `bg-surface rounded-xl shadow-sm border border-zinc-200/60`.
  - **Interaction:** `transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/5 hover:-translate-y-1`.
  - **Optical Highlight:** `ring-1 ring-inset ring-white/50` (Light) or `ring-white/10` (Dark).
- **Alerts (Static):**
  - **Container:** `p-4 rounded-lg flex gap-3 shadow-sm ring-1 ring-black/5`.
- **Search Bars:**
  - **Input:** `ps-10 pe-4 rounded-full bg-zinc-100 border-none focus:ring-2 shadow-inner`.
- **User Profiles (Card):**
  - **Layout:** Grid/Flex. Avatar (Start), Name/Role (End).

### 5.3. Communication / Chat UI
- **Message Bubble (Outgoing):** `bg-primary-600 text-white rounded-2xl rounded-se-sm shadow-md shadow-primary-500/20`.
- **Message Bubble (Incoming):** `bg-zinc-100 dark:bg-zinc-800 text-zinc-900 rounded-2xl rounded-ss-sm`.
- **Typing Indicator:**
  - **Container:** Bubble style (Incoming).
  - **Animation:** 3 dots, `animate-bounce` with stagger (delay-0, delay-75, delay-150).

### 5.4. Data Display
- **Data Tables:**
  - **Header:** `bg-zinc-50/50 backdrop-blur-sm sticky top-0 z-10 text-xs font-semibold uppercase tracking-wider text-zinc-500 text-start`.
- **Timelines:**
  - **Line:** Vertical `w-0.5 bg-zinc-200 absolute start-4`.
  - **Dot:** `w-2 h-2 rounded-full bg-zinc-400 ring-4 ring-white absolute start-3`.

### 5.5. Feedback & Loading
- **Circular Spinner:** `w-8 h-8 border-4 border-zinc-200 border-t-primary-600 rounded-full animate-spin`.
- **Skeleton Loading:** `bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse`.
- **Empty States (Engaging):**
  - **Content:** Animated SVG or Lottie file (preferred) + Title (`text-lg`) + Description + Primary Action.
  - **Motion:** Illustration must float or pulse slowly (`animate-bounce-slow`).

### 5.6. Organisms & Overlays
- **Modals:**
  - **Animation:** Scale In (95% -> 100%) + Fade In.
  - **Container:** `bg-surface rounded-2xl shadow-2xl shadow-black/20 ring-1 ring-white/10`.
- **Dropdowns / Popovers:**
  - **Container:** `bg-surface/90 backdrop-blur-md rounded-lg shadow-xl ring-1 ring-black/5`.

---

## 6. Responsive Strategy
- **Mobile First:** Default styles are mobile. Use `md:`, `lg:` prefixes for larger screens.
- **Fluid Typography:** Headers scale using `clamp()` or Tailwind responsive prefixes.
- **Touch Optimization:** `tap-highlight-transparent`.

---

## 7. Anti-Patterns (The "Never" List)
1. **STATIC AVATARS:** Avatars in interactive lists must always have a hover state.
2. **MUDDY SHADOWS:** Never use default `shadow-lg` on colored backgrounds. Inject the brand color.
3. **NON-LOGICAL SPACING:** **STRICTLY FORBIDDEN.** Do not use `margin-left`. Use `ms-`, `ps-`, `end-`.

---

## 8. Print & Export Hygiene
- **Media Query:** `@media print`
- **Overrides:** `nav, aside { display: none !important; }`, `body { background: white; color: black; }`.

---

## 9. Golden Samples (Implementation Reference)

### 9.1. Animated Avatar Group
```html
<div class="flex items-center -space-x-2 overflow-hidden py-2">
    <!-- Avatar 1 -->
    <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-zinc-900 transition-transform duration-300 hover:scale-110 hover:z-10 hover:shadow-lg cursor-pointer object-cover" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <!-- Avatar 2 -->
    <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-zinc-900 transition-transform duration-300 hover:scale-110 hover:z-10 hover:shadow-lg cursor-pointer object-cover" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <!-- Avatar 3 with Status -->
    <div class="relative inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-zinc-900 transition-transform duration-300 hover:scale-110 hover:z-10 hover:shadow-lg cursor-pointer">
         <img class="h-full w-full rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
         <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400">
            <span class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
         </span>
    </div>
    <!-- Add Button -->
    <button class="flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-white dark:ring-zinc-900 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-200 transition-colors z-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
    </button>
</div>
```

### 9.2. Engaging Empty State
```html
<div class="text-center py-12 px-4 rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50/50">
    <div class="mx-auto h-32 w-32 text-indigo-200 animate-bounce-slow">
        <!-- Replace with Lottie or SVG Illustration -->
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-full h-full opacity-80"><path d="M..."></path></svg>
    </div>
    <h3 class="mt-2 text-sm font-semibold text-zinc-900">No projects found</h3>
    <p class="mt-1 text-sm text-zinc-500">Get started by creating a new project.</p>
    <div class="mt-6">
        <button type="button" class="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all">
            <svg class="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="..."></path></svg>
            New Project
        </button>
    </div>
</div>
```
