---
name: Ahbab Al Haramain
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#43474e'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#476083'
  primary: '#000613'
  on-primary: '#ffffff'
  primary-container: '#001f3f'
  on-primary-container: '#6f88ad'
  inverse-primary: '#afc8f0'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#040607'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1f20'
  on-tertiary-container: '#848688'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#afc8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2f486a'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: beVietnamPro
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: beVietnamPro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: beVietnamPro
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: beVietnamPro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: beVietnamPro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: beVietnamPro
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies a premium, spiritual, and modern aesthetic tailored for the Ahbab Al Haramain Umrah experience. It balances the profound tradition of the journey with a contemporary, high-end travel service. 

The visual style is **Minimalist with Tactile accents**, focusing on heavy whitespace, refined typography, and subtle layering. It aims to evoke a sense of tranquility, trust, and effortless navigation. Design elements are guided by RTL (Right-to-Left) principles as the primary orientation, ensuring the spiritual flow of the Arabic script is respected and elevated. Subtle Islamic geometric patterns are used as low-opacity overlays to add depth without cluttering the interface.

## Colors
The palette is rooted in a **Deep Navy** primary to signify authority and the night sky of the Hijra, contrasted by a **Warm Gold** accent representing the sacred and the premium nature of the service.

- **Primary (Deep Navy):** Used for core branding, headers, and primary text to establish grounding.
- **Accent (Warm Gold):** Reserved for high-impact CTAs, active states, and decorative highlights.
- **Backgrounds:** A mix of pure white and **Soft Neutrals (#F8F9FA)** creates a clean, breathable canvas.
- **Success/Error:** Use muted emerald and deep ochre to maintain the sophisticated tone rather than standard bright system colors.

## Typography
While the system utilizes **beVietnamPro** as the Latin fallback, the primary implementation must prioritize a high-contrast Arabic typeface like *Tajawal* or *Almarai*. 

The typographic scale is designed for readability and elegance:
- **Line Heights:** Generous leading (1.5x to 1.6x) is mandatory for Arabic script to prevent diacritics from overlapping and to maintain a "premium" airy feel.
- **Weights:** Use SemiBold (600) for section headers and Regular (400) for long-form content.
- **Alignment:** Default to Right-aligned for Arabic contexts, with careful attention to optical centering in buttons.

## Layout & Spacing
The layout follows a **Fluid Grid** model with high margins to reinforce the premium brand positioning. 

- **Desktop:** A 12-column grid with 24px gutters. Outer margins are expansive (64px) to push content toward the center, creating a focused reading experience.
- **Mobile:** A 4-column grid with 16px margins. 
- **Rhythm:** Spacing follows an 8px incremental scale. Vertical rhythm should be generous—use larger gaps (64px+) between major sections to allow the eye to rest, reflecting the spiritual nature of the content.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows**. Surfaces are mostly flat, but interactive or floating elements (like booking cards) use highly diffused, low-opacity shadows (Blur: 20px, Opacity: 4%, Color: Primary Navy).

- **Level 0:** Base background (#F8F9FA).
- **Level 1:** Content cards (White) with subtle 1px borders in a light neutral.
- **Level 2:** Active modals or dropdowns with ambient shadows to lift them off the page.
- **Overlays:** Use a subtle, 2% opacity Islamic geometric pattern on Level 0 backgrounds to provide texture without interfering with legibility.

## Shapes
The shape language is "Rounded-2xl," favoring soft, welcoming curves that suggest safety and comfort. 

- **Cards & Containers:** Use `rounded-2xl` (1rem / 16px) for all primary containers.
- **Buttons:** Use `rounded-xl` (0.75rem / 12px) to maintain a modern, professional look that isn't overly "bubbly" but avoids the harshness of sharp corners.
- **Inputs:** Match button roundedness for consistency in form design.

## Components
- **Buttons:** 
  - *Primary:* Warm Gold (#D4AF37) background with Deep Navy (#001F3F) text. Bold, high-contrast, and used for the main conversion (e.g., "Book Now").
  - *Secondary:* Deep Navy outline with Navy text or solid Navy with White text.
- **Cards:** White background, 1px light neutral border, `rounded-2xl`. Used for travel packages and hotel details.
- **Input Fields:** Soft neutral background with a subtle bottom-border focus state in Gold. Labels should be floating or positioned clearly above the field in Navy.
- **Chips/Badges:** Small, `rounded-full` pills in Navy with Gold text for indicating "Exclusive" or "Limited" status.
- **Navigation:** Clear, persistent top bar with a glassmorphism effect (blur) when scrolling, ensuring the Deep Navy logo is always visible.
- **Interactive Map:** Use custom-styled map tiles that match the Navy/Gold palette for a cohesive travel-planning experience.