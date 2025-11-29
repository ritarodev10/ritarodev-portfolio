# RITARODEV — Style & Motion Direction (Clean Spec)

This canvas defines **how** the portfolio should look, move, and feel — independent from exact copy. Use it as the single source of truth for visual, motion, and interaction language.

---

## 1. Brand Mood & Overall Feel
- **Awwwards‑ish portfolio**, not a corporate website.
- Neo‑brutalist + tech‑art hybrid: bold blocks, clean grids, soft glitches.
- Experimental, cinematic, and highly interactive (but still readable).
- Personal, slightly sarcastic tone — but **hyper‑premium and confident**.
- Emotional but futuristic; zero corporate/AI‑generic phrasing.
- Feels like: *“A serious developer who refuses to take himself too seriously.”*

Keywords: **pixel‑tech, neon‑soft, cinematic, precise, playful‑but‑sharp, awwwards‑level.**

---

## 2. Layout & Composition
- Strong use of **full‑width sections** with clear hierarchy.
- Alternating composition: text left / visual right, then reverse.
- Generous padding; avoid cramped layouts.
- Use **cards** for skills, experience, and testimonials.
- Maintain **3–5 depth layers**:
  - Background: noise, gradients, fog.
  - Midground: panels/blocks.
  - Foreground: text, CTAs, illustrations.
  - Optional top layer: particles, subtle highlights.

---

## 3. Color System

**Base:**
- Background: `#0A0A0A`
- Panels: `#111111` – `#131313`

**Text:**
- Primary: `#FFFFFF`
- Secondary: `#9CA3AF`

**Accents:**
- Neon Lime: `#B7FF5A` (primary accent, buttons, key lines)
- Cyan Glow: `#66F2FF` (hover, highlights, strokes)
- Blue‑Purple: `#7D7CFF` (secondary accent, subtle gradients)

Usage rules:
- 70% dark neutrals, 20% grayscale text, 10% neon accents.
- Never flood the screen with neon; keep it as **sparks**, not the whole fire.

---

## 4. Typography System

**Headings (H1–H3):**
- Space Grotesk / Inter Tight / similar wide modern grotesk.
- Slightly **wider letter spacing** at large sizes.
- Prefer variable fonts where possible for kinetic tweaks (weight/width).

**Body:**
- Inter / Söhne / similar neutral sans.
- Comfortable line height, 1.5–1.7.

**Code / Terminal:**
- JetBrains Mono / IBM Plex Mono.
- Used for terminal snippets, small labels, and fun asides.

**Type Motion:**
- On entrance: subtle tracking animation (slightly expanded → normal).
- On hover (hero title / big words): micro scale (1.02) and soft glow.
- Use **condensed ↔ expanded** motion combos on key phrases for a kinetic feel.

---

## 5. Motion Language & Easing

Overall motion should feel **soft, intentional, and cinematic**, closer to a small **tech demo** than a static CV.

**Durations:**
- Micro‑interactions: 150–250ms.
- Standard transitions: 300–500ms.
- Section reveals: 400–700ms.

**Easing:**
- Use smooth curves like `expo.out`, `power3.out`, or custom cubic bezier.
- Avoid linear and harsh back‑and‑forth overshoots.

**Scroll Behavior:**
- Use Lenis‑style smooth scroll or equivalent.
- Each section reveals on scroll with a coordinated GSAP timeline.
- Parallax speeds:
  - Background (particles/gradients): slow.
  - Panels: medium.
  - Foreground text/CTAs: minimal offset.

**Micro‑interaction language (inspired by Awwwards toys):**
- Magnetic buttons on primary CTAs.
- Optional subtle distortion hover on hero visuals/cards (no heavy warping).
- Parallax speed variance on multiple layers (background vs content vs particles).
- Optional lens‑style cursor highlight in experimental mode.
- Morphing decorative shapes (or glows) subtly synced to scroll progress.

---

## 6. Interaction Patterns

**Hero:**
- Slight tilt / parallax based on cursor movement.
- Magnetic buttons for **Contact** / **View Experience**.
- Pixel portrait gently floats (idle animation).

**Marquee:**
- CSS‑driven horizontal scroll.
- Speed subtly reacts to scroll direction/velocity.

**Cards (skills, experience, testimonials):**
- On hover: lift + soft shadow + accent border.
- Optional micro jiggle using spring physics.

**CTAs:**
- Glow ring or soft outline that **intensifies on hover**.
- Click gives a quick press‑down animation.

**Particles / Orbs:**
- Always slow and subtle, never distracting.

---

## 7. Section‑Level Motion Notes

**Hero:**
- Kinetic text entrance (title from bottom, subtitle from slight offset, opacity fade‑in).
- Terminal line types itself once, then cycles short witty lines.

**Experience Strip (logos/icons):**
- Icons slide in sequentially on scroll (left → right).
- Hover: scale 1.05 + slight neon glow.

**Experience Timeline:**
- Vertical line appears as if **drawn** while scrolling.
- Cards fade & slide from alternating sides.

**Skills Matrix:**
- Grid elements scale up slightly on hover.
- Accent border + subtle background glow.

**Fake Testimonials:**
- Chat bubbles enter with staggered slide + fade.
- Hover reveals tiny “ping” or status dot glow.

**Visual Breather:**
- Orb rotates slowly; code fragments drift with parallax.

**Final CTA:**
- Header text glow sweeps left → right on first appearance.
- Buttons idle with a very gentle pulse.

---

## 8. Accessibility & Low‑Motion Mode

When `prefers-reduced-motion: reduce` is active:
- Disable parallax and tilt.
- Replace animated entrances with simple fade‑ins.
- Turn off continuous animations (particles, orb rotation).
- Keep layout, color, and contrast identical.

---

## 9. Asset Style Guidelines

All visuals should respect these principles:
- **Pixel / bitmap feel** for portraits and scenes (not ultra‑realistic renders).
- Use soft neon edges and glows consistent with the palette.
- Keep shapes **clean and readable** even at small sizes.
- Accept both raster or vector output; tech format is secondary to style.

This style direction should be enough for:
- An AI model to generate layouts, assets, and motion ideas.
- A dev/designer to build the landing page with Next.js + GSAP + a smooth scroll library, while keeping everything visually and behaviorally consistent.

