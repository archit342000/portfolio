# Design Directives: Neural Aesthetics System (v2.6)

## 1. Core Philosophy: "Precision Intelligence"
The design language reflects the persona of an elite AI/ML Engineer: high-efficiency, data-dense, and meticulously calculated. It rejects unnecessary whitespace in favor of immediate information availability. The aesthetic is "Cyber-Organic"—merging the cold logic of machine intelligence with the adaptive fluidity of neural networks.

## 2. Color Architecture ("Deep Void")
The palette is constructed to minimize eye strain during long operational cycles while maximizing signal-to-noise ratio.

| Token | Color Value | Usage |
| :--- | :--- | :--- |
| **Void (Canvas)** | `#05050A` | Absolute background. Uses a radial gradient (`#1a1b26` center to `#000000` edge) to simulate depth. |
| **Surface** | `#0F111A` | HUD panels, card backgrounds. |
| **Neural (Primary)** | `#8B5CF6` (Violet-500) | Intelligence, Model Weights, key actions. |
| **Stream (Accent)** | `#06B6D4` (Cyan-500) | Data flow, active states, cursors. |
| **Signal (Text)** | `#F8FAFC` | High-priority output. |
| **Noise (Text-Sec)**| `#94A3B8` | Contextual metadata. |

## 3. Terminal Typography
Type is treated as data. Legibility is paramount, but character is derived from code editors.
*   **Data/Headers:** `JetBrains Mono` (Google Fonts). The native language of the engineer. Used for navigation, tags, and all structural elements.
*   **Content:** `Inter` (Google Fonts). Highly legible sans-serif for long-form descriptions.

## 4. Cyber-Organic Motion
Animations mimic the behavior of intelligent systems—never jarring, always purposeful.
*   **Initialization:** Elements enter sequentially (`fade-in-up`), mimicking a system boot sequence.
*   **Idle State:** Key entities (Hero text) "float" (`animate-float`) to suggest active suspension in a magnetic field.
*   **Processing:** Interactive elements "shimmer" or "pulse" (`animate-shimmer`, `animate-pulse-glow`) to indicate readiness or processing status.

## 5. Holographic Interface Units
The UI simulates a projected Heads-Up Display (HUD).
*   **Tech Borders:** Components are defined by corner brackets or partial borders (`.tech-border`) rather than solid boxes.
*   **Global Scanline:** A subtle, screen-wide horizontal scanline effect (`bg-scanlines`) overlays the entire viewport, unifying the experience as a digital artifact.
*   **Glassmorphism:** Panels use `backdrop-blur-md` with `bg-white/5` (or dark equivalents) to layer information without obscuring the void.

## 6. Spatial Architecture (Layout)
*   **High-Density:** Spacing is tight and efficient. Unnecessary padding is eliminated to maximize data density per pixel.
*   **Immediate Visibility:** The "Hero" and "Featured Modules" (Carousel) share the initial viewport. The user should not need to scroll to see the work.
*   **Data Stream (Carousel):** A continuous, infinite loop of featured projects. It implies a ceaseless stream of output.

## 7. Micro-Interactions
Every interaction should provide haptic-like visual feedback.
*   **Hover:** Triggers a state change—borders brighten (`border-accent`), shadows evolve into glows (`shadow-neon`), and text may shift color.
*   **Focus:** Input fields and active elements receive a hard, cyan focus ring to mimic target lock-on.
