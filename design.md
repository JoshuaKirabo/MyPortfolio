# Perez Tailwind CSS Design Notes

## Overview

This project is a multi-page personal portfolio template with a bold editorial look.  
It combines large typography, high-contrast neutral surfaces, and warm accent colors for calls to action.

Primary goals of the design:
- Highlight the person (name, role, work, testimonials, contact).
- Keep navigation and interactions simple.
- Use strong visual rhythm with generous vertical spacing.

## Visual Language

### Color System

Core colors pulled from the Tailwind config and generated CSS:
- `#080808` (near-black): dominant text/background for high contrast.
- `#FFB646` (primary yellow): main accent and attention color.
- `#FF9330` (orange): hover accent and secondary highlight.
- `#FFE9D9` (secondary peach): soft section background.
- White and black alpha variants for subtle borders/surfaces.

Usage pattern:
- Neutral base for readability.
- Warm accents for links, buttons, and decorative elements.

### Typography

Configured families:
- `Syne` for headings and strong display moments.
- `DM Sans` as the default body font.
- `Inter` and `Poppins` available for additional UI text.

Common styling direction:
- Large headline scale on hero sections.
- Bold, condensed-feel section headings.
- Relaxed body copy line height for readability.

### Spacing and Shape

- Sections use large vertical spacing (`py-[80px]` to `py-[120px]` patterns).
- Rounded controls (`rounded-[8px]` and `rounded-full` accents).
- Subtle shadows and hover scaling for cards and clickable surfaces.

## Layout and Responsiveness

### Structure

Page composition is section-based with a simple flow:
1. Header + off-canvas navigation
2. Hero
3. Supporting sections (about, featured work, testimonials, blog, etc.)
4. Contact and footer

### Breakpoints

Responsive breakpoints configured in `tailwind.config.js`:
- `sm: 576px`
- `md: 768px`
- `lg: 992px`
- `xl: 1280px`
- `2xl: 1440px`
- `3xl: 1920px`

Container behavior:
- Full-width on small to large.
- Constrained at larger breakpoints for better reading width.

## Key UI Patterns

### Navigation

- Sticky header activated on scroll (`is-sticky` class).
- Off-canvas menu for mobile/compact navigation states.
- Clear text links with animated arrow indicators.

### Buttons

- `.btn-primary`: dark filled button with inversion on hover.
- `.btn-primary-outline`: bordered variant that fills on hover.
- Motion feedback on icon arrows (`moveUp` animation).

### Content Modules

- Section blocks rely on utility classes and spacing tokens.
- Carousel modules (brand/testimonial) use Swiper.
- Tabs and counters are implemented in lightweight JS.

## Motion and Interaction

Animation/interaction stack:
- AOS for scroll reveal effects.
- Swiper for sliding content.
- Magnific Popup for media modal behavior.
- Small custom keyframes (`moveUp`, `fadeIn*`, `spin`) for micro-interactions.

Behavior profile:
- Motion is decorative and lightweight.
- Most interactions are hover/scroll-driven and non-blocking.

## Technical Design Architecture

- HTML pages are static and multi-page (no SPA framework).
- Design system is utility-first via compiled Tailwind CSS (`assets/css/style.css`).
- Custom JS (`assets/js/main.js`) wires interactivity.
- External plugins add animation, sliders, popup, and counter behavior.

## Design Strengths

- Clear personal-brand focus with strong visual hierarchy.
- Consistent accent palette and typography direction.
- Good balance of aesthetic style and readability.
- Familiar portfolio structure that is easy to adapt.

## Improvement Opportunities

- Align `tailwind.config.js` content paths with current HTML locations (currently points to `./src/**`).
- Separate design tokens into a dedicated source layer for easier maintenance.
- Improve accessibility (focus states, nav semantics, color contrast checks in hover states).
- Add explicit component naming conventions for reusable UI blocks.

