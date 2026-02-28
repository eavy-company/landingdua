# Serenique Spa - Wellness & Luxury Spa Landing Page

Serenique Spa is a premium, aesthetic landing page for a wellness and luxury spa, built using **Next.js 16** and **Tailwind CSS**. It emphasizes a calm, elegant atmosphere by combining **Plus Jakarta Sans** and **Instrument Serif** Google Fonts.

The website also incorporates **smooth scrolling** (via Lenis) and **scroll/reveal animations** (via GSAP) to deliver an engaging user experience seamlessly across the site's various sections.

## Features & Technologies Used

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (with specific aesthetic brand colors, `brand-brown`, `brand-olive`, `brand-light`)
- **Typography:** `Plus Jakarta Sans` & `Instrument Serif`
- **Iconography:** Lucide-React
- **Animations:** GSAP (GreenSock Animation Platform) for entrance animations.
- **Smooth Scrolling:** Lenis smooth scrolling integration.
- **Dynamic CSS:** Marquee infinite-scroll animation native to standard CSS.

## Getting Started

First, ensure you have your dependencies installed:

```bash
npm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The UI components have all been modularized to ensure easy maintenance and scalability:

- `SmoothScroll.tsx`: Wrapper wrapping the children layout with Lenis smoothing enabled.
- `Navbar.tsx`: Custom-crafted transparent-to-opaque sticky navbar. 
- `Hero.tsx`: Dynamic section containing a fullscreen mask-mix video/image overlay using Next.js images.
- `Services.tsx`: Interactive display layout utilizing hover-triggered animations.
- `Process.tsx`: A timeline/steps component to layout the spa's services.
- `FAQ.tsx`: An interactive question/answer accordion implementation.
- ...and many more (`Logos`, `Pricing`, `Testimonials`, `Therapists`, `About`, `CTA`, `Footer`).

Enjoy the tranquility and aesthetics!


## Project References
- [Webflow](https://serenique-template.webflow.io/)