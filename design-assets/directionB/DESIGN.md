---
name: Arboreal Elegance
colors:
  surface: '#0f1511'
  surface-dim: '#0f1511'
  surface-bright: '#353b36'
  surface-container-lowest: '#0a0f0c'
  surface-container-low: '#171d19'
  surface-container: '#1b211d'
  surface-container-high: '#252b27'
  surface-container-highest: '#303632'
  on-surface: '#dee4de'
  on-surface-variant: '#bdcabf'
  inverse-surface: '#dee4de'
  inverse-on-surface: '#2c322e'
  outline: '#87948a'
  outline-variant: '#3e4a42'
  surface-tint: '#6bdba5'
  primary: '#6bdba5'
  on-primary: '#003823'
  primary-container: '#2ba472'
  on-primary-container: '#00311e'
  inverse-primary: '#006c47'
  secondary: '#f2bf49'
  on-secondary: '#3f2e00'
  secondary-container: '#b68a11'
  on-secondary-container: '#372700'
  tertiary: '#ffb3b1'
  on-tertiary: '#611118'
  tertiary-container: '#dd7071'
  on-tertiary-container: '#570912'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#88f8c0'
  primary-fixed-dim: '#6bdba5'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005235'
  secondary-fixed: '#ffdf9e'
  secondary-fixed-dim: '#f2bf49'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b1'
  on-tertiary-fixed: '#410008'
  on-tertiary-fixed-variant: '#7f282c'
  background: '#0f1511'
  on-background: '#dee4de'
  surface-variant: '#303632'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 160px
---

## Brand & Style

The design system is built on a narrative of "The Sunlit Forest"—an environment that is deep, stable, and organic, yet illuminated by moments of brilliant clarity. It targets sophisticated clients seeking a human-centric software partner rather than a faceless agency.

The style is **Modern Editorial with a Tactile Soul**. It rejects the cold, sterile aesthetics of typical SaaS platforms in favor of a warm, high-contrast environment that feels like a premium physical publication. The interface uses heavy whitespace (often "dark space" in this context) to allow content to breathe, creating a sense of confidence and quiet authority. It balances the precision of software engineering with the warmth of a personal craft studio.

## Colors

The palette is anchored by a deep, immersive forest green that acts as a sophisticated alternative to pure black or grey. This creates a low-strain, high-luxury canvas. 

- **Primary (Emerald):** Used for growth-oriented actions and success states. It should be used sparingly to maintain its impact.
- **Secondary/Accent (Gold/Amber):** Represents "Sunlight." Use this for focal points, highlight ornaments, and interactive hover states. 
- **Cream Text:** Provides a softer contrast than pure white, enhancing the "bookish" and premium editorial feel.
- **Surface Tiers:** Use subtle shifts in the forest green (lightening by 2-4%) to define containers without breaking the dark-mode immersion.

## Typography

Typography is the primary vehicle for the brand's personality. **Bodoni Moda** provides a high-fashion, editorial grace for headlines, while **Hanken Grotesk** offers a sharp, contemporary clarity that ensures the "software studio" aspect feels modern and precise.

- **Display Text:** Use for hero sections. The tight letter spacing adds a "bespoke" feel.
- **Body Text:** Generous line-height is mandatory to maintain the "premium magazine" readability.
- **Label Caps:** Use for small metadata, categories, or overlines. This adds a systematic, organized layer to the organic serif headlines.

## Layout & Spacing

The layout follows a **Fluid Grid** with intentional "islands" of content. To evoke a premium feel, the design system utilizes significantly larger vertical gaps than standard web applications.

- **Desktop:** A 12-column grid with wide margins (80px). Content should often be offset (e.g., a headline spanning 6 columns on the left, body text spanning 4 columns on the right) to create dynamic, asymmetrical editorial interest.
- **Mobile:** A 4-column grid with 20px margins. Stack content vertically, but maintain the 160px section gaps to keep the "breathable" feel.
- **Rhythm:** Use an 8px base unit. Component padding should be generous (e.g., 16px vertical / 32px horizontal for buttons).

## Elevation & Depth

This design system avoids heavy shadows. Depth is achieved through **Tonal Layering** and **Subtle Outlines**.

- **Surface Levels:** Instead of elevation through Z-axis shadows, use "Surface Containers"—boxes filled with a slightly lighter green (#16231F) or with a very thin (1px) border in a muted emerald.
- **The "Sunlight" Glow:** For primary interactive elements, use a soft, low-opacity outer glow using the Gold/Amber color (#E2B13C at 15% opacity) to simulate light reflecting off a surface.
- **Glassmorphism:** Use sparingly for navigation bars or floating menus, with a high blur (20px) and a subtle cream-tinted border.

## Shapes

The shape language is **Soft but Structured**. We use a 0.25rem (4px) base radius to ensure the interface feels intentional and architectural, rather than "bubbly" or overly casual.

- **Cards & Large Containers:** Use `rounded-lg` (8px) to soften the large forest-green surfaces.
- **Image Treatment:** Photos should have subtle 4px rounded corners or be treated with occasional "arch" masks to lean into the sophisticated, editorial vibe.

## Components

- **Buttons:** Primary buttons use a solid Gold (#E2B13C) background with dark forest text. Secondary buttons are "Ghost" style with a Cream border and Cream text. Hover states should involve a slight expansion of the border or a "Sunlight" glow.
- **Cards:** Use a "Flat-Framed" approach. A 1px border (#1F9C6B at 30% opacity) on a slightly lighter background. No shadows.
- **Inputs:** Clean, bottom-border only or very subtle 4px rounded boxes. Use the Gold color for the focus state indicator.
- **Chips/Badges:** Small, all-caps labels with a subtle background tint. These should look like "tags" in a high-end filing system.
- **The "Signature" Component:** A "Project Spotlight" card that uses a large Bodoni Moda numeral (e.g., 01, 02) as a background watermark in a very faint emerald green.