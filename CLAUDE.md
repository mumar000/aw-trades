## Act as a senior landing page and ui / ux designer with 15 year of exp

## 1️⃣ Tech Stack Requirements

- Framework: **Next.js (App Router – latest stable version)**
- Language: **TypeScript**
- Styling: **Tailwind CSS**
- Fonts: `next/font`
- SEO: Native Next.js Metadata API
- Deployment-ready (Vercel optimized)
- Performance target: Lighthouse 90+

---

# 2️⃣ Project Structure (Clean & Scalable)

Use App Router structure:

```
/app
  layout.tsx
  page.tsx
  globals.css
  sitemap.ts
  robots.ts

/components
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    Features.tsx
    Testimonials.tsx
    Pricing.tsx
    CTA.tsx
  ui/
    Button.tsx
    Container.tsx
    Section.tsx

/lib
  seo.ts
  constants.ts

/public
  images/

/types
  index.ts

/styles (if needed for extra modular CSS)
```

### Rules:

- Each section must be a separate reusable component.
- No large JSX blocks inside `page.tsx`.
- Follow atomic structure (UI → Sections → Layout).
- Avoid repeated code.
- Use proper typing everywhere.

---

# 3️⃣ Code Quality Standards

### ✅ Clean Code Rules

- Use functional components only.
- No inline large logic in JSX.
- Extract constants.
- No unnecessary re-renders.
- Use semantic HTML (`section`, `article`, `main`, `nav`, `footer`).
- Proper indentation & naming conventions.
- Meaningful variable names.
- No hardcoded magic values.

---

# 4️⃣ SEO Optimization (Critical)

## A. Metadata API (App Router)

Use:

- `title`
- `description`
- `keywords`
- `openGraph`
- `twitter`
- `metadataBase`
- canonical URL

Each landing page must have:

- Unique title (60 characters max)
- Meta description (150–160 characters)
- Proper OG image
- Favicon

---

## B. Structured Data (Schema Markup)

Add JSON-LD in layout or page:

- Organization Schema
- Product or Service Schema (if applicable)
- FAQ Schema (if FAQ section exists)

---

## C. Technical SEO Checklist

- Clean URL structure (no query junk)
- Image optimization using `next/image`
- Lazy loading enabled
- Proper heading hierarchy:
  - Only one `h1`
  - Proper `h2`, `h3` nesting

- Alt text for every image
- Sitemap generation
- Robots.txt configured

---

# 5️⃣ Performance Optimization

- Use `next/image`
- Use dynamic imports if heavy sections exist
- Avoid unnecessary client components
- Default to Server Components
- Minimize JS bundle size
- Preload critical fonts
- Compress images (WebP preferred)

Target:

- LCP under 2.5s
- CLS under 0.1
- TTI under 3s

---

# 6️⃣ Conversion Optimization (CRO)

Landing page must include:

1. Strong Hero Section
   - Clear headline (benefit-driven)
   - Subheadline
   - Primary CTA
   - Secondary CTA (optional)
   - Social proof

2. Features Section
   - Benefit-focused, not feature-focused

3. Testimonials Section
   - Realistic structured layout

4. Pricing Section (if needed)
   - Clear comparison
   - Highlight recommended plan

5. Strong Final CTA Section

CTA Buttons:

- Use action-driven text
- High contrast
- Repeated strategically

---

# 7️⃣ Accessibility Standards

- Proper aria-labels
- Keyboard navigation
- Sufficient color contrast
- Semantic tags only
- Focus states visible

---

# 8️⃣ Reusability Standards

- Buttons reusable
- Section wrapper reusable
- Container reusable
- No duplicated Tailwind class chaos

Use utility composition pattern.

---

# 9️⃣ Styling Guidelines

- Mobile-first design
- Consistent spacing system (e.g., 4, 8, 12, 16 scale)
- Max width container
- Modern minimal aesthetic
- No inline styles
- Avoid excessive Tailwind duplication

---

# 🔟 Clean Component Example Structure

Each section component must follow:

- Props interface defined
- Clear separation of layout & content
- No business logic inside UI sections
- Use constants file for static data

---

# 1️⃣1️⃣ Content Guidelines

- Clear benefit-driven copy
- Short paragraphs
- Bullet points for readability
- Avoid jargon
- Optimize for keywords naturally (no stuffing)

---

# 1️⃣2️⃣ Deployment Ready

Before delivery:

- Run ESLint
- Fix warnings
- Test mobile responsiveness
- Lighthouse audit above 90
- Check SEO meta preview
- Test social sharing preview

---

# 🎯 Final Development Rules

- Keep page under 300KB JS
- Avoid unnecessary client components
- Maintain modularity
- Follow SOLID principles
- Write production-ready code
- No unused imports
- No console.logs

---

If you want, I can now give you:
