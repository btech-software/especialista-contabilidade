---
name: Vibrant Professionalism
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#3c4946'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#6c7a76'
  outline-variant: '#bbcac5'
  surface-tint: '#006b5e'
  primary: '#006b5e'
  on-primary: '#ffffff'
  primary-container: '#31bba8'
  on-primary-container: '#00453d'
  inverse-primary: '#5adbc6'
  secondary: '#566500'
  on-secondary: '#ffffff'
  secondary-container: '#d5ef5c'
  on-secondary-container: '#5b6b00'
  tertiary: '#5d5e60'
  on-tertiary: '#ffffff'
  tertiary-container: '#a8a8aa'
  on-tertiary-container: '#3c3d3f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#79f7e2'
  primary-fixed-dim: '#5adbc6'
  on-primary-fixed: '#00201c'
  on-primary-fixed-variant: '#005047'
  secondary-fixed: '#d5ef5c'
  secondary-fixed-dim: '#b9d242'
  on-secondary-fixed: '#181e00'
  on-secondary-fixed-variant: '#404c00'
  tertiary-fixed: '#e3e2e4'
  tertiary-fixed-dim: '#c6c6c8'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#464749'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Ubuntu
    fontSize: 48px
    fontWeight: '300'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Ubuntu
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: Ubuntu
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Verdana
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Verdana
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Verdana
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Ubuntu
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built on a foundation of clarity, contemporary energy, and professional reliability. It draws inspiration from **Corporate Modern** aesthetics but infuses them with a high-energy palette to differentiate itself in tech-forward environments. 

The visual narrative is driven by the tension between structured, neutral backgrounds and vibrant, kinetic accents. It utilizes a **Minimalist** approach to layout—prioritizing heavy whitespace and legibility—while employing a signature diagonal gradient to suggest movement and progress. The emotional response is one of confidence and accessibility, bridging the gap between established institutional trust and modern innovation.

## Colors

The palette is defined by a striking contrast between "Teal" (PANTONE 326C) and "Lime" (PANTONE 381C). 

- **Primary (Teal):** Used for primary actions, headings, and branding elements. It provides the grounding "professional" weight to the palette.
- **Secondary (Lime):** An accent color used for highlights, notifications, and key interactive moments. It should be used sparingly to maintain its impact.
- **Dark Gray / Black:** (Cool Gray 11C / Black 3U) serves as the primary text color and provides structural contrast for borders and dark-mode surfaces.

### Gradient Usage
The signature gradient moves diagonally from Teal (bottom-left) to Lime (top-right). Crucially, the Teal transition begins at 1%, while the Lime reaches 100% saturation at the 80% mark of the layout, creating a solid Lime field in the final 20% of the area. Use this gradient for decorative accents, hero sections, or subtle button states.

## Typography

This system employs a dual-typeface strategy to balance character with utility.

- **Primary Typeface (Ubuntu):** Used for all brand-facing elements and headlines. The "Light" weight is preferred for large display headings to convey sophistication, while "Medium" is reserved for smaller headlines to ensure legibility.
- **System Typeface (Verdana):** Used for body copy, data tables, and UI labels. Verdana is chosen for its exceptional screen legibility and functional, wide-set proportions, ensuring the interface remains accessible across all devices.

Use **Italic** variants of Ubuntu sparingly for quotes or emphasis, and use **Bold** Verdana for high-priority labels or button text.

## Layout & Spacing

The design system utilizes a **Fluid Grid** model with a focus on generous vertical rhythms.

- **Desktop:** 12-column grid with 24px gutters and 64px outer margins.
- **Tablet:** 8-column grid with 16px gutters and 32px outer margins.
- **Mobile:** 4-column grid with 12px gutters and 16px outer margins.

The spacing rhythm is based on a **4px/8px baseline**. Components should use the `md` (24px) unit as the standard container padding. Large sections or "Hero" areas should utilize `xl` (80px) padding to create a sense of breathability and prestige.

## Elevation & Depth

To maintain a contemporary and legible appearance, this design system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Use subtle shifts in background color (Neutral #F5F5F5 vs White #FFFFFF) to distinguish between the background and foreground cards.
- **Interactive Elements:** Buttons and active cards use the signature gradient or solid Primary Teal. Depth is suggested through color shifts rather than physical height.
- **Borders:** A 1px border in a lightened version of Dark Gray (#E0E0E0) is used to define containers on white backgrounds.

## Shapes

The shape language is **Soft (1)**. This subtle rounding of corners (0.25rem / 4px) softens the professional tone of the typography, making the UI feel more approachable without appearing "bubbly" or juvenile.

- Small components (Checkboxes, Input fields): 4px radius.
- Medium components (Buttons, Cards): 8px radius.
- Large components (Modals, Hero Containers): 12px radius.

## Components

### Buttons
- **Primary:** Solid Teal background with white Ubuntu Medium text. 8px corner radius.
- **Secondary:** Transparent background with a 2px Teal border and Teal text.
- **Tertiary:** Signature gradient background with white text, reserved for high-conversion "Call to Action" buttons.

### Cards
Cards should be flat white surfaces with a 1px soft gray border or a very subtle 8px blur shadow (5% opacity Dark Gray). Use Ubuntu Medium for card titles and Verdana Regular for metadata.

### Input Fields
Inputs use a white background, 4px corner radius, and a 1px border using the Dark Gray at 20% opacity. Upon focus, the border color shifts to Teal.

### Chips & Tags
Use the Lime secondary color for positive status chips or highlights, with Dark Gray text to ensure high contrast and legibility. Use Ubuntu Medium for the tag labels.