# Design System Inspiration of BEARTH

A design system extracted from the BEARTH-FE codebase — a Next.js + React 19 + Tailwind v4 marketing & mint experience for the BEARTH transmedia IP. The visual identity is **playful, tactile, and toy-like**: bold rounded type with thick black outlines, sky-blue and deep-navy as the dual core, and a liquid-glass UI accent layer. Think "premium plush mascot meets web3 launchpad".

---

## 1. Visual Theme & Atmosphere

**Mood.** Warm, hopeful, and a little cinematic. The product centers a bear mascot ("Bearth") and a story of "loss and rebirth," so surfaces should feel like a children's-book cover crossed with a sci-fi launch console — soft, friendly, but with energy.

**Density.** Low to medium. Hero areas breathe with full-bleed imagery and big sticker-style headlines. Information sections use tight, confident paragraph blocks with tracking-tight, leading-tight type.

**Design philosophy.**
- **Sticker headlines** — display type is treated as a physical object: thick outline (text-shadow stroke) + offset drop-shadow, so titles read as cut-out stickers laid on top of the page.
- **Toy-grade roundness** — `hoss-round` font + `rounded-sm` corners + chunky icon badges. Even small UI pieces feel injection-molded.
- **Dual-core color** — sky-blue (`#41afeb`) for action, deep-navy (`#24315f`) for ground. Almost no greys in marketing surfaces.
- **Layered glass** — a single shared SVG-distortion liquid-glass surface (`liquid-glass-effect`) sits over imagery for nav and overlays, giving an iOS-26 / Apple Vision feel without taking over.
- **Video & scroll-driven motion** — minting and storytelling sections are choreographed with `motion` (Framer Motion) and full-bleed video.

**Key characteristics.**
- Outline-stroked display headings (`title-stroke4` / `title-stroke8`).
- Pill action badges riding inside primary buttons (arrow-in-a-square pattern).
- Custom variant breakpoints tied to viewport *height* (`desktop`, `lvh`, `kvh`) — the design adapts to short laptop screens, not just width.
- Dark navy `bg-secondary` body; content cards and hero plates lean white.

---

## 2. Color Palette & Roles

All colors are defined as CSS custom properties in `src/app/globals.css` (`:root`). Tailwind v4 tokens map them via `@theme inline`.

### Brand Core

| Name | Hex | Token | Role |
|------|-----|-------|------|
| Bearth Sky | `#41afeb` | `--primary`, `--accent` | Primary CTA fills, link/highlight, accent badges. The "go" color. |
| Bearth Navy | `#24315f` | `--secondary` | App background (`<body class="bg-secondary">`), heavy panels, footer. The "ground" color. |
| Cloud White | `#ffffff` | `--background`, `--primary-foreground` | Surface / text-on-blue / text-on-navy. |
| Ink Black | `#000000` | `--foreground`, `--accent-foreground` | Body text on white, button text on sky, stroke color. |
| Bone Cream | `#ebe7e0` | `--secondary-foreground` | Text on navy (slightly warmer than pure white for the "earth" feel). |

### Semantic & Status

| Name | Hex | Used For |
|------|-----|----------|
| Mint Green | `#10b981` | `BearthBadge` "green" variant — positive / live / available status. |
| Sun Yellow | `#FBBF24` | `BearthBadge` "yellow" variant — warning / coming-soon / highlight. |
| Destructive | `oklch(0.577 0.245 27.325)` | Errors (shadcn default, rarely surfaced). |

### Neutral Surface (shadcn defaults — used sparingly)

| Token | Value | Role |
|-------|-------|------|
| `--card`, `--popover` | `oklch(1 0 0)` (white) | Card / popover surface |
| `--muted` | `oklch(0.97 0 0)` | Muted backdrop |
| `--muted-foreground` | `oklch(0.556 0 0)` | Secondary text |
| `--border`, `--input` | `oklch(0.922 0 0)` | Hairlines, form borders |
| `--ring` | `oklch(0.708 0 0)` | Focus ring |

> **Rule of thumb:** marketing & mint surfaces lean on the four brand-core colors. The neutral oklch tokens are only for shadcn primitives (form, popover) and should not be promoted into hero / mint UI without intent.

---

## 3. Typography Rules

### Font Families

| Family | Source | Use |
|--------|--------|-----|
| `hoss-round` | Self-hosted (`/public/fonts/hoss-round/`) — weights **400, 600, 700, 900** + italics 400/700 | **Primary UI & display.** Set on `<body>`. Rounded geometric sans with strong personality. |
| `hoss-round-wide` | Self-hosted — weights **300, 400, 600** | Wide-letter variant for posters, large display moments, section labels. |
| `Figtree` | Google Fonts (`next/font`) — variable, exposed as `var(--font-figtree)` | UI text where Hoss feels too characterful: **buttons, uppercase labels, fine print.** Helper class: `.font-figtree`. |

### Hierarchy

The `Heading` and `Paragraph` components define the canonical scale. Note the use of viewport-height variants (`ldvh:` = ≥800px tall + ≥1024px wide).

| Role | Component | Mobile | Desktop (lg) | Tall desktop (ldvh) | Weight | Line / Tracking | Notes |
|------|-----------|--------|--------------|---------------------|--------|-----------------|-------|
| Display / Hero (H1) | `Heading type="h1"` | `text-4xl` (36px) | `text-6xl` (60px) | `text-7xl` (72px) | `font-black` (900) | tight | Pair with `title-stroke4 md:title-stroke8` for sticker effect |
| Section title (H2) | `Heading type="h2"` | 20px | 32px | 40px | `font-semibold` (600) | `text-shadow-lg` | |
| Sub-section (H3) | `Heading type="h3"` | 24px | 40px | — | (default) | `text-shadow-lg` | |
| Card title (H4) | `Heading type="h4"` | 20px | — | — | `font-bold` (700) | `leading-none mt-2` | No shadow |
| Eyebrow / label (H5) | `Heading type="h5"` | 16px | — | — | `font-semibold` (600) | — | |
| Body — large | `Paragraph type="large"` | 12px | 24px | — | `font-medium` (500) | `leading-tight tracking-tight` | |
| Body — large2 | `Paragraph type="large2"` | 16px | 24px | — | `font-medium` | tight | |
| Body — normal | `Paragraph type="normal"` | 12px | 16px | — | `font-medium` | tight | Default |
| Body — normal2 | `Paragraph type="normal2"` | 16px | — | — | `font-medium` | `leading-[1.25]` | |
| Button | `BearthButton` → `Button` | `text-sm` | — | — | `font-medium` | `uppercase`, `font-figtree` | Always Figtree, always uppercase |
| Micro / badge | `BearthBadge` | `text-[10px]` | — | — | `font-semibold` | — | Hoss-round |

### Type rules

- **Body uses Hoss-Round at 500.** Tracking is tight (`tracking-tight`) and leading is tight (`leading-tight`) — Bearth voice is dense and confident, not airy.
- **Buttons & uppercase labels always use Figtree.** Hoss is too round at button sizes; Figtree's clean geometry holds up uppercase.
- **Display type is stickers, not letters.** Use `title-stroke4` (mobile) → `title-stroke8` (md+), or the shorthand `title-stroke`. Choose stroke color via `title-strokecolor-white | -black | -primary`.

---

## 4. Component Stylings

### Buttons (`BearthButton`)

The signature button is a **filled rectangle with a square arrow-badge riding inside it**.

```
[ MINT NOW   [→] ]    <-- primary: sky bg + black square badge
[ LEARN MORE [→] ]    <-- secondary: white bg + sky square badge
```

| Prop | Style |
|------|-------|
| `type="primary"` (default) | `bg-accent text-accent-foreground` (sky on black text); inner badge = `bg-foreground text-background` (black on white arrow) |
| `type="secondary"` | `bg-white text-black hover:bg-white/80`; inner badge = `bg-primary text-black` |
| Shape | `rounded-sm` (≈4px), `px-4 py-2` |
| Type | `font-figtree uppercase` |
| Hover | `hover:brightness-105` (subtle lift, no color shift) |
| Inner badge | `Badge` from shadcn, overridden to `rounded-sm p-0.5` containing `<ArrowRight className="h-6 w-6 stroke-3" />` |
| Disabled | `opacity-50 cursor-default` |
| Link form | Wraps in `next/link` when `href` provided |

### Badges (`BearthBadge`)

Status pill — small, semibold, white text on flat brand color.

```css
py-[4px] px-[6px] rounded-sm text-[10px] font-semibold text-white
green  → bg-[#10b981]
yellow → bg-[#FBBF24]
```

### Shadcn primitives (`src/components/ui/`)

- `Button` (cva) — `rounded-md`, `text-sm font-medium`, h-9 default. **Used as the inner element of `BearthButton`; rarely styled raw.** Variants: default, destructive, outline, secondary, ghost, link.
- `Badge` (cva) — `rounded-full` pill by default. The Bearth design overrides to `rounded-sm` when used as the arrow-holder inside `BearthButton`.
- `Drawer` (vaul), `Dialog`, `NavigationMenu`, `Carousel` (embla + autoplay + fade) — all customized per surface; no global override.

### Cards / panels

There is **no single `Card` primitive** — sections compose directly with Tailwind classes. Conventions observed:
- White content plates over the navy body.
- `rounded-lg` (10px) for soft cards; `rounded-sm` (≈6px) for sticker-style chips and buttons.
- No drop shadows on flat panels — depth comes from the type, not the container.

### Navigation

- `BearthTopBar` — fixed top bar.
- `BreathLiquidGlassBase` — globally injected SVG defs (`<filter id="glass-distortion">`) that the `liquid-glass-effect` utility consumes. **Single source of truth for the glass look** — never inline a different SVG distortion.

### Image / Video Treatment

- **Full-bleed, edge-to-edge** for hero and mint flow.
- Mint flow uses `<video>` with baked rocket-audio + `useRocketAudio` hook (HTMLAudioElement; Web Audio attempted in past, reverted — see git log).
- `next/image` for static art with `priority` on above-the-fold.
- Videos must autoplay muted with `playsInline` for iOS/Safari.

### Distinctive: Liquid Glass

```css
.liquid-glass-effect { /* see globals.css */ }
  └ .base-effect    /* backdrop-filter: blur(3px) + filter: url(#glass-distortion) */
  └ .tint           /* color overlay layer */
  └ .shine-1        /* inset highlight, rgba(255,255,255,.5) */
  └ .shine-2        /* secondary inset highlight, rgba(255,255,255,.1) */
  └ .content        /* z-3, rgba black text */
shadow: 0 6px 6px rgba(0,0,0,.2), 0 0 20px rgba(0,0,0,.1)
transition: all .4s cubic-bezier(.175, .885, .32, 2.2)  /* overshoot */
```

Use for: floating nav pills, "press to mint" CTAs over media, tooltip-style overlays. **Do not** use for plain content cards.

### Distinctive: Title Stroke

```css
.title-stroke   = .title-stroke4 md:title-stroke8
.title-stroke2  = 2px outline + 2px black drop-shadow
.title-stroke4  = 4px outline + 4px black drop-shadow
.title-stroke8  = 8px outline + 8px black drop-shadow
```

Pair with stroke color modifiers: `title-strokecolor-white`, `title-strokecolor-black`, `title-strokecolor-primary`.

---

## 5. Layout Principles

### Spacing

Default Tailwind v4 scale (4px increment). No custom spacing tokens. Common rhythms observed:
- Section vertical: `py-12 md:py-20` — generous on desktop, tight on mobile.
- Inline gaps: `gap-2` / `gap-4` for control clusters; `gap-8` between content blocks.

### Container & Grid

- `MaxWidthConstraintedLayout` is the canonical content container — wrap any new section in it.
- No 12-col grid system; layouts use flex / `grid-cols-{n}` ad-hoc.
- Custom breakpoint: `xs: 22rem` (352px) for very narrow phones.
- **Height-aware breakpoints (unique to this codebase):**
  - `desktop:` — min-height 700px **and** min-width 1024px
  - `lvh:` — min-height 800px **and** min-width 1024px
  - `kvh:` — max-height 1000px **and** min-width 1280px
  - These exist so the mint flow & hero scale gracefully on short laptop screens (13" MBP) versus tall desktops.

### Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius` | `0.625rem` (10px) | Base |
| `--radius-sm` | `calc(var(--radius) - 4px)` ≈ 6px | Buttons, badges, sticker chips |
| `--radius-md` | `calc(var(--radius) - 2px)` ≈ 8px | Inputs, small cards |
| `--radius-lg` | `calc(var(--radius) + 4px)` ≈ 14px | Large cards, modal sheets |

> Buttons are intentionally **`rounded-sm`** — sharper than the shadcn default `rounded-md`. This is what makes them read as stickers, not pills.

### Whitespace philosophy

Marketing surfaces breathe; mint flow does not. The mint flow is deliberately dense and choreographed (video + audio + motion) — treat it like a movie scene, not a form.

---

## 6. Depth & Elevation

Bearth uses **two distinct depth systems** that should not be mixed:

### 6a. Type-as-depth (primary)

Display headlines get their depth from `title-stroke*` — outline + offset hard drop-shadow. **Containers stay flat.** This is the dominant depth language.

### 6b. Glass elevation (accent only)

The `liquid-glass-effect` provides:
- `box-shadow: 0 6px 6px rgba(0,0,0,.2), 0 0 20px rgba(0,0,0,.1);`
- Inset shines: `inset 2px 2px 1px 0 rgba(255,255,255,.5)` (top-left), `inset -1px -1px 1px 1px rgba(255,255,255,.5)` (bottom-right).
- Backdrop blur 3px + SVG distortion.

### Shadow scale (rarely used)

| Level | Value | When |
|-------|-------|------|
| Stroke shadow | `drop-shadow(4px 4px 0 #000)` / `drop-shadow(8px 8px 0 #000)` | Display titles only |
| Type shadow | `text-shadow-lg` (Tailwind default) | H2/H3 (subtle) |
| Glass shadow | `0 6px 6px rgba(0,0,0,.2), 0 0 20px rgba(0,0,0,.1)` | Liquid-glass surfaces only |
| Container shadow | **None** | Don't add `shadow-md` to plates |

---

## 7. Do's and Don'ts

### Do

- ✅ Use `BearthButton` for any user CTA. Pick `primary` for the conversion path, `secondary` for everything else.
- ✅ Wrap display headlines in `Heading type="h1"` and apply `title-stroke title-strokecolor-white` (or `-black`) — choose the stroke color that contrasts the **page background**, not the text.
- ✅ Use `font-figtree uppercase` for labels, buttons, badges, and any UI text under 14px.
- ✅ Use `bg-secondary` (navy) on the body; place white plates / sky-blue chips / sticker headlines on top.
- ✅ Use the height-aware breakpoints (`desktop:`, `lvh:`, `kvh:`) for hero & mint sizing — width-only breakpoints will break on short laptops.
- ✅ Use `rounded-sm` for action elements (button, badge, chip), `rounded-lg` for content cards.
- ✅ For overlays on imagery, use `liquid-glass-effect` (and ensure `BreathLiquidGlassBase` is mounted globally).
- ✅ Compose green/yellow `BearthBadge` for status; never invent a third color.

### Don't

- ❌ Don't use `Button` (shadcn) directly in marketing surfaces — always go through `BearthButton`.
- ❌ Don't apply `shadow-md` / `shadow-lg` to content cards. Bearth's depth comes from typography, not container elevation.
- ❌ Don't use Hoss-Round for uppercase button labels — it gets blobby. Use Figtree.
- ❌ Don't introduce greys (`gray-500`, etc.) into hero/mint surfaces. Stay on the four brand-core colors plus the two semantic accents.
- ❌ Don't use `rounded-full` on buttons or chips. Buttons are stickers (`rounded-sm`), badges are pills only inside `BearthButton`.
- ❌ Don't skip `playsInline` and `muted` on `<video>` — iOS will block autoplay and the mint flow will silently fail.
- ❌ Don't define new CSS color variables. Add to `:root` in `globals.css` and bridge through `@theme inline` so Tailwind picks them up.
- ❌ Don't pair `title-stroke*` with `text-shadow-lg` on the same element — the two shadow systems will fight.
- ❌ Don't inline new SVG distortion filters. Reuse `#glass-distortion` from `BreathLiquidGlassBase`.

---

## 8. Responsive Behavior

### Breakpoints

| Token | Min width | Min/Max height | Purpose |
|-------|-----------|----------------|---------|
| `xs` | 22rem (352px) | — | Tiny phones |
| `sm` | 640px | — | Tailwind default |
| `md` | 768px | — | Tailwind default — switches `title-stroke4` → `title-stroke8` |
| `lg` | 1024px | — | Tailwind default — most type scales kick in |
| `xl` | 1280px | — | Tailwind default |
| **`desktop`** | 1024px | min-height **700px** | "Real" desktop |
| **`lvh`** | 1024px | min-height **800px** | Tall desktop / large monitor |
| **`kvh`** | 1280px | max-height **1000px** | Wide-but-short laptop (e.g., 13" MBP) |

### Touch targets

- Buttons: `py-2` + `text-sm` ≈ 36px tall — at the iOS minimum. Pair with comfortable `px-4` and the inner arrow badge so the actual tap area is generous.
- Badges and chips are non-interactive; small sizes (10px) are fine.

### Collapsing strategy

- Mobile defaults are the smallest type variants (12–16px body, 36px display). Each breakpoint upgrades the scale.
- Navigation collapses into a `Drawer` (vaul) on mobile.
- Mint videos are `object-cover` full-bleed; on mobile they letterbox to keep the bear centered.

### Image / video behavior

- `next/image` with `priority` for hero art; `sizes` set per layout.
- `<video>`: always `autoPlay muted playsInline`. For audio-bearing videos, gate audio behind an explicit user tap (`useRocketAudio` pattern).

---

## 9. Agent Prompt Guide

### Quick token reference (copy-paste)

```
PRIMARY  / accent : #41afeb  (Bearth Sky)
SECONDARY (bg)    : #24315f  (Bearth Navy)
FOREGROUND        : #000000
BACKGROUND        : #ffffff
TEXT-ON-NAVY      : #ebe7e0  (Bone Cream)
STATUS green      : #10b981
STATUS yellow     : #FBBF24

FONTS
  body / display  : "hoss-round", sans-serif         (400/600/700/900)
  display wide    : "hoss-round-wide", sans-serif    (300/400/600)
  ui / buttons    : var(--font-figtree), sans-serif

RADIUS
  sm 6px (buttons/badges) | md 8px (inputs) | lg 14px (cards)

DEPTH
  display headings → title-stroke title-strokecolor-{white|black|primary}
  glass overlays   → liquid-glass-effect (requires <BreathLiquidGlassBase/> mounted)
  content cards    → flat (no shadow)
```

### Ready-to-use prompts

**Hero section:**
> Build a full-bleed hero on `bg-secondary` (#24315f). Center an `<Heading type="h1" className="title-stroke title-strokecolor-white">` reading "YOUR PERFECT NAP SPOT IS WAITING.". Below it a `<Paragraph type="large2">` in `text-secondary-foreground` (#ebe7e0). Two CTAs side-by-side: `<BearthButton type="primary" href="/mint">MINT NOW</BearthButton>` and `<BearthButton type="secondary" href="/about">LEARN MORE</BearthButton>`. Wrap content in `MaxWidthConstraintedLayout`. Use `desktop:` and `lvh:` variants to scale spacing on tall screens.

**Status chip:**
> `<BearthBadge color="green">LIVE</BearthBadge>` — sits inline next to a section title. For "Coming soon" use `color="yellow"`.

**Floating action over media:**
> Wrap a CTA in `liquid-glass-effect` so it sits on top of a video. Inside, place `<div class="base-effect"></div><div class="tint"></div><div class="shine-1"></div><div class="shine-2"></div><div class="content">…</div>`. Ensure `<BreathLiquidGlassBase />` is rendered once at the app root (already in `layout.tsx`).

**Content card:**
> `bg-white rounded-lg p-6` (no shadow). Title with `<Heading type="h4">`, body with `<Paragraph type="normal">`. Optional `<BearthBadge>` in the top-right.

**Mint flow video block:**
> `<video autoPlay muted playsInline className="w-full h-full object-cover">`. Audio gated by user tap via `useRocketAudio`. Frame at full viewport height; use `kvh:` to reduce vertical padding on short laptops.

### Iteration guide

When a screen feels off, check in this order:

1. **Is the headline a sticker?** Add `title-stroke title-strokecolor-white` (or `-black`).
2. **Are buttons going through `BearthButton`?** Raw `Button` looks shadcn-generic.
3. **Is uppercase UI text in Figtree?** `font-figtree uppercase` on labels & buttons.
4. **Is the body navy?** Marketing pages live on `bg-secondary` (#24315f). White is for plates, not pages.
5. **Are corners `rounded-sm` for actions, `rounded-lg` for content?** Mismatched radii break the toy-grade feel.
6. **On a 13" laptop, does the hero fit without scrolling?** If not, use `kvh:` to shrink type and padding.
