# Hero Component Usage Guide

The Hero component is now fully reusable across all pages. Here's how to use it:

## Props Interface

```typescript
interface HeroProps {
  badge?: HeroBadge;           // Optional badge at top
  headline: {
    line1: string;              // First line of headline (required)
    line2?: string;             // Second line (optional)
    highlightedText?: string;   // Text to highlight in primary color (optional)
  };
  subheadline: string;          // Description text (required)
  buttons?: HeroButton[];       // CTA buttons (optional)
  videoSrc?: string;            // Background video (default: "/fintech.mp4")
  overlayOpacity?: number;      // Overlay darkness 0-100 (default: 92)
}
```

## Example 1: Homepage (Current)

```tsx
<Hero
  badge={{
    text: "180,000+ in Payouts Secured",
    href: "#payouts",
  }}
  headline={{
    line1: "A Disciplined Approach",
    line2: "To",
    highlightedText: "Futures Trading",
  }}
  subheadline="AW Trades is a futures trading brand built around structure, process, and repeatable execution."
  buttons={[
    {
      text: "Get Bloop Algo",
      href: "#bloop-algo",
      variant: "primary",
    },
    {
      text: "Compare Prop Firms",
      href: "#compare",
      variant: "secondary",
    },
  ]}
/>
```

## Example 2: Prop Firm Comparison Page

```tsx
<Hero
  badge={{
    text: "Updated Daily",
    href: "#latest",
  }}
  headline={{
    line1: "Compare",
    highlightedText: "Prop Firms",
  }}
  subheadline="Transparent comparisons of prop firm rules, deals, and requirements. No fluff, just facts."
  buttons={[
    {
      text: "View Comparison Table",
      href: "#table",
      variant: "primary",
    },
    {
      text: "Filter by Rules",
      href: "#filters",
      variant: "secondary",
    },
  ]}
  videoSrc="/prop-firms.mp4"  // Different video
  overlayOpacity={85}          // Lighter overlay
/>
```

## Example 3: Simple Hero (No Badge, Single Button)

```tsx
<Hero
  headline={{
    line1: "Education",
    highlightedText: "First",
  }}
  subheadline="Learn futures trading through structured education and transparent mentorship."
  buttons={[
    {
      text: "Start Learning",
      href: "#courses",
      variant: "primary",
    },
  ]}
/>
```

## Example 4: Minimal Hero (No Buttons)

```tsx
<Hero
  headline={{
    line1: "About",
    highlightedText: "AW Trades",
  }}
  subheadline="Building transparent tools and education for serious futures traders."
/>
```

## Customization Options

### Badge
- **Optional**: Remove by not passing `badge` prop
- **Text**: Any string
- **Link**: Any valid href

### Headline
- **Single Line**: Just use `line1`
- **Two Lines**: Use `line1` and `line2`
- **Highlighted Text**: Use `highlightedText` for primary color emphasis
- All combinations are flexible

### Buttons
- **0 Buttons**: Don't pass `buttons` prop
- **1 Button**: Array with one button
- **2+ Buttons**: Array with multiple buttons
- **Variants**: "primary" or "secondary" (first button is primary by default)

### Video & Overlay
- **videoSrc**: Path to different background video
- **overlayOpacity**: 0-100 (0 = no overlay, 100 = fully black)

## Tips

1. **Keep headlines short**: 2-3 words per line works best
2. **Highlight key words**: Use `highlightedText` for main focus
3. **Subheadline length**: 1-2 sentences max
4. **Button text**: Action-oriented, 2-4 words
5. **Badge**: Keep it concise, use for social proof or urgency

## File Location

Component: `/components/sections/hero.tsx`
