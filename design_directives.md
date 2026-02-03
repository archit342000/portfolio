# Design Directives: Neural Aesthetics System (v2.3)

## 1. Core Philosophy: "Intelligence in Motion"
The design language reflects the persona of an AI/ML Engineer: precise, data-driven, yet organic and evolving. It combines the raw power of "void" aesthetics with the calculated precision of "cybernetic" interfaces.

### 2. Color Palette ("Cyber-Organic")

| Token | Color Value | Usage |
| :--- | :--- | :--- |
| **Canvas** | `#05050A` | Deep void background (almost black, slight violet tint). |
| **Surface** | `#0F111A` | Card backgrounds, panels. |
| **Primary** | `#8B5CF6` (Violet-500) | Main brand color (Intelligence, Neural Nets). |
| **Accent** | `#06B6D4` (Cyan-500) | Highlights, functional elements (Data flow). |
| **Text-Primary** | `#F8FAFC` | High contrast headings. |
| **Text-Secondary** | `#94A3B8` | Body text, subtle details. |

### 3. Typography ("Tech-Functional")
*   **Headings / Accents:** `JetBrains Mono` (Google Fonts). Used for branding, navigation, section headers, and data tags. Reflects code and terminal interfaces.
*   **Body:** `Inter` (Google Fonts). Used for long-form content for maximum readability.

### 4. Motion & Physics ("Cyber-Organic Motion") - *New in v2.3*
Animations should feel like data processing or neural activation—smooth, calculated, and responsive.
*   **Staggered Entry:** Lists and grids load items sequentially (`fade-in-up` with 100ms delay increments).
*   **Floating:** Key elements (Hero text, featured cards) have a subtle, slow vertical float (`animate-float`) to mimic weightlessness in a digital void.
*   **Shimmer:** Primary actions (Buttons) have a passing light effect on hover (`animate-shimmer`).
*   **Glow:** Interactive elements pulse with a soft glow (`animate-pulse-glow`) to indicate activity.

### 5. UI Components ("Holographic Data Units") - *New in v2.3*
*   **Tech Borders:** Cards use corner brackets or partial borders (pseudo-elements) instead of full solid borders, simulating a HUD (Heads-Up Display).
*   **Glass Panels:** Use `backdrop-blur-md` with low-opacity backgrounds (`bg-surface/50`) to create depth.
*   **Scanlines:** Images have a subtle horizontal line overlay or effect on hover to emphasize the digital nature of the work.
*   **Gradients:**
    *   *Void Gradient:* Radial gradient from center (`#1a1b26`) to edge (`#000000`) for the body background.
    *   *Data Flow:* Linear gradients (Violet to Cyan) for text masks and borders.

## 6. Layout
*   **Hero:** Centered, commanding. "Building Intelligence Into Software" with gradient text.
*   **Grid:** Responsive masonry-feel (though strictly grid) with generous gaps.
*   **Carousel:** Infinite scroll for featured projects, representing a continuous data stream.
