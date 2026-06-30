---
name: Zuvar
colors:
  surface: '#0e131c'
  surface-dim: '#0e131c'
  surface-bright: '#343943'
  surface-container-lowest: '#090e17'
  surface-container-low: '#171c25'
  surface-container: '#1b2029'
  surface-container-high: '#252a34'
  surface-container-highest: '#30353f'
  on-surface: '#dee2ef'
  on-surface-variant: '#bdcabf'
  inverse-surface: '#dee2ef'
  inverse-on-surface: '#2c303a'
  outline: '#87948a'
  outline-variant: '#3e4a42'
  surface-tint: '#6bdba5'
  primary: '#6bdba5'
  on-primary: '#003823'
  primary-container: '#2ba472'
  on-primary-container: '#00311e'
  inverse-primary: '#006c47'
  secondary: '#bbff61'
  on-secondary: '#203600'
  secondary-container: '#94e500'
  on-secondary-container: '#3d6200'
  tertiary: '#c0c7cd'
  on-tertiary: '#2a3136'
  tertiary-container: '#8a9297'
  on-tertiary-container: '#242b2f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#88f8c0'
  primary-fixed-dim: '#6bdba5'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005235'
  secondary-fixed: '#a6f928'
  secondary-fixed-dim: '#8edc00'
  on-secondary-fixed: '#112000'
  on-secondary-fixed-variant: '#304f00'
  tertiary-fixed: '#dce3e9'
  tertiary-fixed-dim: '#c0c7cd'
  on-tertiary-fixed: '#151d21'
  on-tertiary-fixed-variant: '#40484d'
  background: '#0e131c'
  on-background: '#dee2ef'
  surface-variant: '#30353f'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  gutter: 1.5rem
  margin: 2rem
---

## Brand & Style

This design system is engineered for a developer-centric environment, emphasizing precision, technical clarity, and high-performance aesthetics. The brand personality is confident and utility-driven, favoring functional elegance over decorative flair. 

The design style leans heavily into **High-Tech Minimalism** with subtle **Brutalist** influences. It utilizes a rigorous structural grid, crisp edges, and a monochromatic foundation punctuated by high-visibility accents. Visual interest is generated through mathematical alignment and faint "blueprint" grid textures rather than shadows or gradients. The emotional response should be one of absolute control, speed, and modern engineering.

## Colors

The palette is optimized for long-duration focus and high legibility in low-light environments. 

- **Background (#0A0E14):** A deep, near-black void that minimizes screen glare.
- **Surface (#11161F):** Used for cards and panels to create subtle depth without relying on elevation shadows.
- **Primary Accent (#1F9C6B):** Emerald Green, used for primary actions, success states, and key navigational elements.
- **Highlight (#9EF01A):** Electric Lime, reserved for critical alerts, hover states, or small data points that require immediate visual attention. 
- **Text (#E6EDF3):** High-contrast off-white for maximum readability. 

Avoid the use of gradients. Color should be applied in solid blocks or thin, precise strokes.

## Typography

The typography system creates a clear hierarchy between editorial content and technical data. 

**Inter** is the workhorse for headlines and body copy, providing a neutral, geometric foundation that feels modern and systematic. Headlines use tight tracking and heavy weights to convey authority.

**JetBrains Mono** is utilized for all metadata, labels, tags, and code snippets. This ensures that technical information is immediately distinguishable from UI labels. The monospace rhythm reinforces the "developer-first" nature of the system.

## Layout & Spacing

This design system employs a **Fluid Grid** model based on a 4px baseline shift. 

- **Desktop:** 12-column grid with 24px (1.5rem) gutters and 32px (2rem) side margins.
- **Tablet:** 8-column grid with 16px (1rem) gutters.
- **Mobile:** 4-column grid with 16px (1rem) gutters and margins.

Spacing should be used generously to prevent the UI from feeling cramped. Elements should align strictly to the grid. Use faint, 1px lines (#1F9C6B at 10% opacity) to occasionally delineate grid sections or as a background texture to reinforce the technical theme.

## Elevation & Depth

This system rejects traditional soft shadows in favor of **Tonal Layers** and **Precise Outlines**. 

Depth is communicated through color stepping:
1. **Level 0 (Base):** #0A0E14 (Deepest background).
2. **Level 1 (Panels):** #11161F (Raised surfaces).
3. **Level 2 (Modals/Popovers):** #11161F with a 1px solid border of #1F9C6B at 30% opacity.

Instead of blurs, use 1px solid borders to define edges. For active states or "glow" effects, use a minimal outer stroke of the accent color with 0px blur.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. 

All buttons, input fields, cards, and containers must have 90-degree corners. This reinforces the "engineered" and "precise" aesthetic. The only exception is for circular icons or specific status indicators where a circle is the universal standard.

## Components

- **Buttons:** Primary buttons use a solid #1F9C6B fill with black text. Secondary buttons use a 1px border of #1F9C6B with no fill. Interaction states should be immediate: #9EF01A fill on hover.
- **Inputs:** Dark backgrounds (#0A0E14) with 1px borders (#1F9C6B at 20%). Focus state triggers a 1px border of #9EF01A.
- **Chips/Tags:** Monospace font (JetBrains Mono). High-contrast background (#1F9C6B at 10% opacity) with a solid accent border.
- **Cards:** No shadows. Use #11161F for the background and 1px borders for definition.
- **Code Blocks:** Use a slightly darker background than the surface color to distinguish code from the UI. Syntax highlighting should utilize the Emerald and Lime accents.
- **Data Visualizations:** Use thin lines and strict geometric shapes. Avoid rounded line caps on charts; use butt or square caps.