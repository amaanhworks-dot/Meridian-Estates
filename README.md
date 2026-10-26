# Ravi Sharma Properties — Premium Real Estate Broker Website Template

A production-quality, responsive single-page website template for Indian luxury residential real estate brokers. Built with React, Vite, TypeScript, and Tailwind CSS.

Designed for the Rohini, Delhi market and reusable across multiple brokers with minimal configuration changes.

---

## Broker Onboarding Checklist

1. **Edit `src/broker.config.ts`** — Replace the broker name, contact details, accent color, about text, and tagline with the real broker's information.
2. **Replace images** — Swap all Pexels stock photo URLs in `broker.config.ts` with the broker's own verified property photos, portrait, and locality images.
3. **Update property listings** — Edit the `properties` array with real listings, verified prices, and accurate descriptions. Set `demoMode` to `false`.
4. **Verify or remove credentials** — Only include a RERA number if verified. Remove sample testimonials and replace with genuine client feedback.
5. **Regenerate SEO metadata** — Run `node scripts/inject-metadata.mjs` to update `index.html` with the broker's SEO details, then deploy.

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build and preview the production application

```bash
npm run build
npm run preview
```

The production build will be in the `dist/` directory.

---

## Configuration

All broker-specific content lives in **`src/broker.config.ts`**. No broker names, phone numbers, listings, or accent colors are hardcoded in components.

### Change the broker name, contact info, accent color, and profile text

Edit the corresponding fields in `src/broker.config.ts`:

```ts
brand: {
  name: "Your Broker Name",
  brokerName: "Broker Full Name",
  logoText: "AB",
  tagline: "Your tagline here",
  accentColor: "#C9A227",  // Change this to any hex color
},

contact: {
  whatsapp: "919999999999",   // Country code + digits, no + or spaces
  phone: "+919999999999",
  email: "hello@example.com",
  mapLink: "https://maps.google.com/?q=Your+Area",
  formEndpoint: "",           // Add a POST endpoint URL to use server-side form submission
},

profile: {
  photo: "/images/broker.jpg",
  areaLabel: "Your Area, City",
  experienceYears: 10,
  reraNumber: "",             // Only set if verified; leave empty to hide
  areasServed: ["Sector 1", "Sector 2"],
  aboutHeadline: "Your headline",
  aboutParagraph: "Your intro text",
  signature: "Your Name",
},
```

### Change the accent color

Set `brand.accentColor` in `src/broker.config.ts` to any hex color. The theme system automatically derives hover, soft-background, and contrasting text colors from this single value. The CSS custom property `--accent` is applied at runtime.

### Replace stock photos

All images in the configuration use Pexels URLs as placeholders. To use local images:

1. Place image files in `public/images/`
2. Update the image paths in `src/broker.config.ts` to `/images/your-file.jpg`

Replace these images:
- `hero.image` and `hero.secondaryImage` — hero section photos
- `profile.photo` — broker portrait
- Each property's `image` field — property photos
- Each area's `image` field — locality photos
- `seo.ogImage` — social preview image (1200 × 630 recommended)

### Add, edit, or remove property listings

Edit the `properties` array in `src/broker.config.ts`:

```ts
properties: [
  {
    id: "property-01",
    title: "Property Title",
    configuration: "4 BHK",
    location: "Sector 22, Rohini",
    price: "₹3.2 Cr",
    numericPrice: 32000000,
    areaSqft: 2200,
    floor: "Upper floor",
    image: "/images/property-01.jpg",
    imageAlt: "Description of the image",
    description: "Short description of the property.",
    featured: true,
    status: "Sample listing",
  },
  // Add more properties...
],
```

To remove a listing, delete its object from the array. The grid handles 1 to N properties gracefully.

### Change or hide metrics and testimonials

**Metrics:** Edit the `metrics` object. Set any value to `0` to hide it. Set `content.metricsEnabled` to `false` to hide the entire section.

**Testimonials:** Edit the `testimonials` array. Set `content.testimonialsEnabled` to `false` to hide the section entirely if no verified testimonials are available.

### Toggle sections

Use the `content` flags to show or hide optional sections:

```ts
content: {
  aboutEnabled: true,
  metricsEnabled: true,
  areasEnabled: true,
  servicesEnabled: true,
  testimonialsEnabled: true,
  contactFormEnabled: true,
},
```

---

## Contact Form

### How it works

The contact form validates all required fields (name, phone, property type, budget, locality) with inline error messages. Indian mobile number validation is built in.

### Two submission modes

1. **Server-side (formEndpoint configured):** If `contact.formEndpoint` is set to a URL, the form submits a POST request with JSON data to that endpoint. Network errors are handled gracefully.

2. **WhatsApp fallback (no endpoint):** If `formEndpoint` is empty (the default), the form composes a WhatsApp message containing all submitted details, URL-encodes it, and opens the broker's WhatsApp conversation. The form explains to the user that their enquiry will be sent via WhatsApp before they submit.

### Configuring a backend endpoint

Set `contact.formEndpoint` in `src/broker.config.ts`:

```ts
contact: {
  formEndpoint: "https://your-api.com/enquiry",
}
```

The endpoint should accept POST requests with JSON containing: `name`, `phone`, `propertyType`, `budget`, `locality`, `message`.

---

## SEO and WhatsApp Link Preview

Because Vite is a client-rendered SPA, social crawlers need metadata in the initial HTML. A build-time script handles this.

### Generate updated SEO metadata

After changing `broker.config.ts`, run:

```bash
node scripts/inject-metadata.mjs
```

This reads the config values and injects them into `index.html`:
- Page title
- Meta description
- Open Graph tags (title, description, image, dimensions)
- Twitter card tags
- Theme color
- JSON-LD structured data (RealEstateAgent schema)

For automatic injection during builds, update `package.json`:

```json
"build": "node scripts/inject-metadata.mjs && vite build"
```

### Important for production

The `og:image` URL must be absolute and publicly accessible. If using local images, host them at a public URL and update `seo.ogImage` in the config before running the script.

---

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Vercel auto-detects Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

### Netlify

1. Push the repository to GitHub.
2. Connect the repository in Netlify.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

### Before deploying for a real broker

Run `node scripts/inject-metadata.mjs` to ensure SEO metadata is current, then build and deploy.

---

## What Must Be Verified or Replaced

Before publishing for a real broker, verify or replace all of the following:

- **Property listings** — All sample properties, prices, and descriptions are illustrative. Replace with broker-verified listings.
- **Property photos** — Stock photos must be replaced with actual property photographs approved by the broker.
- **Broker portrait** — Replace the sample portrait with the broker's photo.
- **RERA number** — Only display a RERA number if it has been verified. Leave empty to hide.
- **Testimonials** — Sample testimonials must be replaced with genuine, approved client feedback. Remove the section if none are available.
- **Metrics** — Years of experience, properties marketed, and localities covered must reflect verified data.
- **Contact details** — WhatsApp number, phone number, and email must be the broker's actual contact information.
- **Disclaimer** — Set `demoMode` to `false` and remove or update the disclaimer text for a live site.
- **OG image** — Replace the sample social preview image with a branded image hosted at a public URL.

---

## Tech Stack

- React 18
- Vite 5
- TypeScript 5
- Tailwind CSS 3
- Lucide-style inline SVG icons
- IntersectionObserver for scroll reveals
- Cormorant Garamond (headings) + Inter (body) fonts

## Project Structure

```
src/
  components/        — UI components (Navbar, Hero, PropertyGrid, etc.)
  hooks/             — useScrollObserver, useNavbarScroll
  lib/               — contact utilities, theme system, validation
  types/             — TypeScript interfaces for broker config
  broker.config.ts   — Single source of truth for all broker content
  App.tsx            — Main app component
  main.tsx           — Entry point
  index.css          — Global styles and Tailwind directives

public/
  favicon.svg        — Brand monogram favicon

scripts/
  inject-metadata.mjs — Build-time SEO metadata injection
```
