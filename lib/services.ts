export type ServiceFaq = { q: string; a: string };
export type ServiceStat = { value: string; label: string };
export type ServiceFeature = { title: string; description: string };

export type ServiceData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  accent: string;
  platform: string;
  heroLabel: string;
  overview: string;
  deliverables: string[];
  features: ServiceFeature[];
  stats: ServiceStat[];
  process: { step: string; title: string; text: string }[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

export const servicesData: ServiceData[] = [
  {
    slug: "shopify-development",
    title: "Shopify Development",
    tagline: "Conversion-led storefronts built to sell.",
    description:
      "We design and build custom Shopify stores that turn browsers into buyers — with clean product architecture, polished mobile checkout, and a CMS your team can actually manage.",
    accent: "#14b8a6",
    platform: "Shopify",
    heroLabel: "Ecommerce",
    overview:
      "A Shopify store is only as strong as its structure. We start with your offer, your customer, and your conversion path — then build a storefront that makes buying feel obvious. Every section is designed for trust, speed, and campaign flexibility.",
    deliverables: [
      "Custom Shopify theme (Liquid)",
      "Mobile-first product & collection pages",
      "Checkout flow optimization",
      "App integrations (reviews, upsells, email)",
      "Analytics & conversion tracking",
      "CMS training & documentation",
    ],
    features: [
      {
        title: "Custom theme architecture",
        description:
          "No bloated page builders. Clean Liquid templates built for speed, brand consistency, and easy editing.",
      },
      {
        title: "Mobile checkout polish",
        description:
          "60%+ of ecommerce traffic is mobile. We design checkout flows that reduce friction and abandonment.",
      },
      {
        title: "Product storytelling",
        description:
          "Structured product pages with hierarchy, trust signals, and visual proof that convert at a higher rate.",
      },
      {
        title: "Campaign-ready CMS",
        description:
          "Modular sections your team can update for sales, launches, and seasonal campaigns without a developer.",
      },
      {
        title: "App ecosystem setup",
        description:
          "Reviews, upsells, email capture, loyalty, and analytics — integrated cleanly without slowing the store.",
      },
      {
        title: "Performance baseline",
        description:
          "Optimized images, deferred scripts, and lean CSS so your store loads fast on every device.",
      },
    ],
    stats: [
      { value: "+340%", label: "Avg. revenue lift" },
      { value: "4.8%", label: "Conversion rate" },
      { value: "14 days", label: "Typical launch" },
      { value: "98%", label: "Client satisfaction" },
    ],
    process: [
      { step: "01", title: "Discovery", text: "We map your offer, audience, and current conversion gaps before touching a template." },
      { step: "02", title: "Architecture", text: "Sitemap, section order, product hierarchy, and CMS editing plan." },
      { step: "03", title: "Design", text: "High-fidelity Figma mockups aligned to your brand and optimized for mobile." },
      { step: "04", title: "Build", text: "Liquid theme development, app integrations, tracking, and QA across devices." },
      { step: "05", title: "Launch", text: "Deployment, redirects, speed pass, team training, and post-launch support." },
    ],
    faqs: [
      { q: "Do you work with existing Shopify stores or only new builds?", a: "Both. We handle full rebuilds, theme migrations, and targeted redesigns of specific sections like product pages or checkout." },
      { q: "Can my team edit the store after launch?", a: "Yes. We build with Shopify's native CMS in mind and provide documentation and a training session so your team is fully independent." },
      { q: "Do you set up Shopify apps?", a: "Yes. We recommend and integrate apps for reviews, upsells, email capture, and analytics as part of the build scope." },
      { q: "What is the typical timeline?", a: "Most Shopify builds launch in 10–14 days. Complex stores with custom functionality may take 3–4 weeks." },
    ],
    relatedSlugs: ["landing-page-design", "seo-setup", "website-redesign"],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    tagline: "Custom WordPress sites built for growth.",
    description:
      "We build fully custom WordPress websites with bespoke themes, editable block systems, WooCommerce, and a technical SEO foundation — designed to scale with your business.",
    accent: "#3b82f6",
    platform: "WordPress",
    heroLabel: "CMS Development",
    overview:
      "WordPress powers 43% of the web for a reason — flexibility, ownership, and a massive ecosystem. We build on that foundation with custom themes, clean code, and editing workflows that give your team real control without breaking the design.",
    deliverables: [
      "Custom WordPress theme (no page builder lock-in)",
      "Gutenberg block system for easy editing",
      "WooCommerce setup (if applicable)",
      "CRM & form integrations",
      "Technical SEO foundation",
      "Performance optimization",
    ],
    features: [
      {
        title: "Custom theme, no page builder",
        description:
          "We write clean PHP and CSS — no Elementor lock-in. Your site stays fast, maintainable, and yours.",
      },
      {
        title: "Gutenberg block system",
        description:
          "Custom blocks your team can use to build new pages without touching code. Real editorial freedom.",
      },
      {
        title: "WooCommerce ready",
        description:
          "Product pages, cart, checkout, and order management built cleanly into your custom theme.",
      },
      {
        title: "SEO-first architecture",
        description:
          "Schema markup, clean URLs, fast load times, and proper heading hierarchy from day one.",
      },
      {
        title: "CRM & lead routing",
        description:
          "Forms connected to your CRM, email platform, or sales pipeline with proper tracking.",
      },
      {
        title: "Scalable content system",
        description:
          "Custom post types, taxonomies, and templates so your content grows without breaking the layout.",
      },
    ],
    stats: [
      { value: "+280%", label: "Avg. lead growth" },
      { value: "98", label: "PageSpeed score" },
      { value: "14 days", label: "Typical launch" },
      { value: "100%", label: "Custom code" },
    ],
    process: [
      { step: "01", title: "Discovery", text: "Goals, content audit, CMS needs, and technical requirements mapped before design." },
      { step: "02", title: "Architecture", text: "Page templates, block system plan, custom post types, and navigation structure." },
      { step: "03", title: "Design", text: "Figma mockups for all key templates — desktop and mobile." },
      { step: "04", title: "Build", text: "Theme development, block registration, integrations, and cross-browser QA." },
      { step: "05", title: "Launch", text: "Deployment, DNS, redirects, performance pass, and team training." },
    ],
    faqs: [
      { q: "Do you use Elementor or Divi?", a: "No. We build custom themes with native Gutenberg blocks. This keeps your site fast, maintainable, and free from page builder lock-in." },
      { q: "Can you migrate my existing WordPress site?", a: "Yes. We handle content migration, URL redirects, and design upgrades as part of the project scope." },
      { q: "Do you build WooCommerce stores?", a: "Yes. WooCommerce is included in our WordPress scope when needed — product pages, cart, checkout, and order management." },
      { q: "Will I be able to edit the site myself?", a: "Absolutely. The Gutenberg block system we build gives your team full editorial control without touching code." },
    ],
    relatedSlugs: ["seo-setup", "speed-optimization", "website-redesign"],
  },
  {
    slug: "wix-development",
    title: "Wix Development",
    tagline: "Professional Wix sites that look nothing like templates.",
    description:
      "We build premium Wix websites with custom code, advanced animations, and business-grade structure — for brands that want a polished online presence without the WordPress complexity.",
    accent: "#f59e0b",
    platform: "Wix",
    heroLabel: "Website Design",
    overview:
      "Wix has evolved far beyond drag-and-drop. With Velo by Wix and custom CSS, we build sites that look and perform like custom-coded products — while keeping the editing experience simple for your team.",
    deliverables: [
      "Custom Wix design (not a template)",
      "Velo by Wix custom code (if needed)",
      "Wix Stores or Bookings setup",
      "Mobile-optimized layouts",
      "SEO settings & metadata",
      "CMS training & handoff",
    ],
    features: [
      {
        title: "Beyond the template",
        description:
          "We design from scratch in Wix Editor — custom layouts, spacing, and visual hierarchy that match your brand.",
      },
      {
        title: "Velo custom code",
        description:
          "When Wix's native tools aren't enough, we use Velo to add custom logic, APIs, and dynamic content.",
      },
      {
        title: "Wix Stores & Bookings",
        description:
          "Ecommerce, service bookings, and subscription products set up cleanly within the Wix ecosystem.",
      },
      {
        title: "Mobile-first layouts",
        description:
          "Every section is designed and tested on mobile — not just scaled down from desktop.",
      },
      {
        title: "SEO foundations",
        description:
          "Page titles, meta descriptions, structured data, and clean URL structure configured at launch.",
      },
      {
        title: "Easy team editing",
        description:
          "Wix's editor is intuitive. We structure the site so your team can update content confidently.",
      },
    ],
    stats: [
      { value: "+410%", label: "Avg. sales growth" },
      { value: "68%", label: "Repeat visitors" },
      { value: "10 days", label: "Typical launch" },
      { value: "100%", label: "Custom design" },
    ],
    process: [
      { step: "01", title: "Discovery", text: "Business goals, audience, content needs, and Wix feature requirements." },
      { step: "02", title: "Wireframe", text: "Page structure, section order, and content hierarchy mapped in Figma." },
      { step: "03", title: "Design", text: "Full visual design in Wix Editor with brand alignment and mobile layouts." },
      { step: "04", title: "Build", text: "Custom code, integrations, Stores/Bookings setup, and QA." },
      { step: "05", title: "Launch", text: "Domain connection, SEO settings, speed check, and team training." },
    ],
    faqs: [
      { q: "Is Wix good enough for a professional business website?", a: "Yes — when built properly. The limitation is usually the designer, not the platform. We build Wix sites that look and perform at a professional level." },
      { q: "Can you add custom functionality to Wix?", a: "Yes. Velo by Wix allows us to add custom JavaScript, APIs, and database-driven content beyond what the native editor supports." },
      { q: "Do you set up Wix Stores?", a: "Yes. We handle product setup, payment configuration, shipping rules, and checkout design." },
      { q: "Can I edit the site after launch?", a: "Absolutely. Wix's editor is one of the most user-friendly on the market. We'll walk you through everything at handoff." },
    ],
    relatedSlugs: ["landing-page-design", "seo-setup", "squarespace-design"],
  },
  {
    slug: "squarespace-design",
    title: "Squarespace Design",
    tagline: "Elegant Squarespace sites for premium brands.",
    description:
      "We design and build polished Squarespace websites for creatives, agencies, and service businesses — with custom CSS, refined typography, and layouts that reflect a premium brand.",
    accent: "#a78bfa",
    platform: "Squarespace",
    heroLabel: "Portfolio & Brand",
    overview:
      "Squarespace is the platform of choice for brands where aesthetics matter. We push it beyond its defaults with custom CSS, refined spacing, and editorial layouts that make your work look as good as it is.",
    deliverables: [
      "Custom Squarespace design",
      "Custom CSS & code injection",
      "Portfolio or service page system",
      "Booking or contact flow setup",
      "Mobile-optimized layouts",
      "SEO settings & launch checklist",
    ],
    features: [
      {
        title: "Custom CSS refinement",
        description:
          "We override Squarespace defaults with precise CSS to achieve spacing, typography, and layouts that feel truly custom.",
      },
      {
        title: "Portfolio systems",
        description:
          "Gallery pages, project case studies, and filterable work grids built for creatives and agencies.",
      },
      {
        title: "Service page architecture",
        description:
          "Clear service pages with offer hierarchy, trust signals, and conversion paths for service businesses.",
      },
      {
        title: "Booking & contact flows",
        description:
          "Acuity Scheduling integration, contact forms, and inquiry flows set up and tested.",
      },
      {
        title: "Typography system",
        description:
          "Custom font pairing, size scale, and line-height system that elevates the brand across every page.",
      },
      {
        title: "Brand consistency",
        description:
          "Color palette, spacing rhythm, and visual language applied consistently across all templates.",
      },
    ],
    stats: [
      { value: "+220%", label: "Avg. booking lift" },
      { value: "4:30", label: "Avg. session time" },
      { value: "12 days", label: "Typical launch" },
      { value: "100%", label: "Custom design" },
    ],
    process: [
      { step: "01", title: "Discovery", text: "Brand goals, portfolio needs, audience, and Squarespace feature requirements." },
      { step: "02", title: "Structure", text: "Page map, section order, and content hierarchy planned before design." },
      { step: "03", title: "Design", text: "Visual design with custom CSS, typography system, and mobile layouts." },
      { step: "04", title: "Build", text: "Template setup, custom code injection, integrations, and QA." },
      { step: "05", title: "Launch", text: "Domain connection, SEO settings, speed check, and team training." },
    ],
    faqs: [
      { q: "Can Squarespace look truly custom?", a: "Yes. With custom CSS and code injection, we can achieve layouts and visual refinements that look nothing like a default Squarespace template." },
      { q: "Is Squarespace good for portfolios?", a: "It's one of the best platforms for portfolio sites. The gallery system, image quality, and editing experience are excellent for creatives." },
      { q: "Do you set up Squarespace scheduling?", a: "Yes. We integrate Acuity Scheduling (Squarespace's booking tool) for service businesses that need appointment booking." },
      { q: "Can I update the site myself?", a: "Yes. Squarespace has one of the most intuitive editors available. We'll train you at handoff." },
    ],
    relatedSlugs: ["wix-development", "landing-page-design", "website-redesign"],
  },
  {
    slug: "landing-page-design",
    title: "Landing Page Design",
    tagline: "High-converting pages built for one goal.",
    description:
      "We design and build focused landing pages for product launches, ad campaigns, and lead generation — engineered around a single conversion goal with no distractions.",
    accent: "#fb7185",
    platform: "Any CMS",
    heroLabel: "Conversion Design",
    overview:
      "A landing page is not a homepage. It has one job: convert. We design pages around your offer, your audience's objections, and the specific action you want them to take — then build them fast.",
    deliverables: [
      "Single-goal landing page design",
      "Copywriting structure & hierarchy",
      "A/B test variant (optional)",
      "Form & CTA integration",
      "Analytics & conversion tracking",
      "Mobile-first build",
    ],
    features: [
      {
        title: "Offer-first hierarchy",
        description:
          "The headline, subheadline, and first CTA are designed to communicate value in under 5 seconds.",
      },
      {
        title: "Objection handling",
        description:
          "Trust signals, social proof, FAQs, and guarantee sections placed where hesitation typically occurs.",
      },
      {
        title: "CTA architecture",
        description:
          "Primary and secondary CTAs placed at the right scroll depth with the right visual weight.",
      },
      {
        title: "Form optimization",
        description:
          "Minimal fields, clear labels, and inline validation to maximize form completion rates.",
      },
      {
        title: "Speed-first build",
        description:
          "Lean HTML/CSS or CMS-native build with no unnecessary scripts — fast load on mobile and desktop.",
      },
      {
        title: "Analytics ready",
        description:
          "GA4, Meta Pixel, and conversion events configured so you can measure and optimize from day one.",
      },
    ],
    stats: [
      { value: "3.2x", label: "Avg. conversion lift" },
      { value: "5 days", label: "Typical delivery" },
      { value: "98%", label: "Client satisfaction" },
      { value: "100%", label: "Mobile optimized" },
    ],
    process: [
      { step: "01", title: "Brief", text: "Offer, audience, traffic source, and single conversion goal defined upfront." },
      { step: "02", title: "Structure", text: "Section order, copy hierarchy, and CTA placement mapped before design." },
      { step: "03", title: "Design", text: "High-fidelity mockup with visual hierarchy, trust signals, and mobile layout." },
      { step: "04", title: "Build", text: "CMS or custom build, form integration, tracking setup, and QA." },
      { step: "05", title: "Launch", text: "Go-live, analytics verification, and A/B test setup if in scope." },
    ],
    faqs: [
      { q: "What platform do you build landing pages on?", a: "We build on whatever platform fits your stack — Shopify, WordPress, Webflow, or standalone HTML/CSS. We'll recommend the best option for your use case." },
      { q: "Do you write the copy?", a: "We provide copy structure and hierarchy guidance. For full copywriting, we can recommend a specialist or work with your existing copy." },
      { q: "Can you build an A/B test variant?", a: "Yes. We can design and build a second variant for A/B testing as an add-on to the base scope." },
      { q: "How fast can you deliver?", a: "Most landing pages are delivered in 5–7 days from brief approval." },
    ],
    relatedSlugs: ["shopify-development", "seo-setup", "website-redesign"],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    tagline: "Transform your site into a real business asset.",
    description:
      "We audit, redesign, and rebuild outdated websites into modern, high-performing digital assets — with sharper messaging, better structure, and a CMS your team can manage.",
    accent: "#22c55e",
    platform: "Any CMS",
    heroLabel: "Redesign",
    overview:
      "Most redesigns fail because they focus on aesthetics without fixing the underlying structure. We start with a content and conversion audit, then redesign with purpose — clearer hierarchy, stronger proof, and a CMS that works for your team.",
    deliverables: [
      "Full site audit (content, UX, speed, SEO)",
      "Redesigned page templates",
      "Content migration",
      "URL redirect mapping",
      "Performance optimization",
      "CMS training & documentation",
    ],
    features: [
      {
        title: "Content & UX audit",
        description:
          "We review every page for hierarchy, messaging clarity, trust signals, and conversion path before touching the design.",
      },
      {
        title: "Sharper messaging",
        description:
          "Headlines, subheadlines, and section copy restructured to communicate value faster and more clearly.",
      },
      {
        title: "Modern visual system",
        description:
          "Updated typography, spacing, color, and component design that reflects a premium brand.",
      },
      {
        title: "Clean migration",
        description:
          "Content migrated with proper URL redirects, no broken links, and preserved SEO equity.",
      },
      {
        title: "Performance pass",
        description:
          "Images, scripts, and CSS optimized for fast load times and strong Core Web Vitals scores.",
      },
      {
        title: "Maintainable CMS",
        description:
          "Rebuilt with editing in mind — your team can update content, add pages, and manage campaigns independently.",
      },
    ],
    stats: [
      { value: "+190%", label: "Avg. traffic growth" },
      { value: "98", label: "PageSpeed score" },
      { value: "14 days", label: "Typical launch" },
      { value: "0", label: "Broken redirects" },
    ],
    process: [
      { step: "01", title: "Audit", text: "Full review of current site — content, UX, speed, SEO, and conversion gaps." },
      { step: "02", title: "Strategy", text: "Redesign brief, page priority, content decisions, and migration plan." },
      { step: "03", title: "Design", text: "New page templates with improved hierarchy, trust signals, and mobile layouts." },
      { step: "04", title: "Build", text: "CMS rebuild, content migration, redirect mapping, and QA." },
      { step: "05", title: "Launch", text: "Deployment, redirect verification, speed pass, and team training." },
    ],
    faqs: [
      { q: "Do you keep the same CMS or switch platforms?", a: "We'll recommend the best platform for your needs. Sometimes staying on the same CMS makes sense; other times a migration is the right call. We'll advise honestly." },
      { q: "Will my SEO rankings be affected?", a: "We handle URL redirects carefully to preserve SEO equity. A well-executed redesign typically improves rankings over time." },
      { q: "Do you migrate all the content?", a: "Yes. Content migration is included in the redesign scope, including blog posts, pages, and media." },
      { q: "How long does a redesign take?", a: "Most redesigns launch in 14–21 days depending on site size and content volume." },
    ],
    relatedSlugs: ["seo-setup", "speed-optimization", "wordpress-development"],
  },
  {
    slug: "speed-optimization",
    title: "Speed Optimization",
    tagline: "Faster pages. Better rankings. More conversions.",
    description:
      "We audit and optimize your website's performance — fixing Core Web Vitals, image delivery, script loading, and server response to achieve fast, measurable results.",
    accent: "#f97316",
    platform: "Any CMS",
    heroLabel: "Performance",
    overview:
      "Page speed is not just a technical metric — it directly affects your SEO rankings, ad quality scores, and conversion rates. We run a full performance audit and fix the issues that matter most.",
    deliverables: [
      "Full performance audit (Lighthouse, CWV)",
      "Image optimization & WebP conversion",
      "Script deferral & removal",
      "CSS optimization & critical path",
      "Server & caching configuration",
      "Post-optimization report",
    ],
    features: [
      {
        title: "Core Web Vitals fix",
        description:
          "LCP, CLS, and INP addressed with targeted fixes — not just a score boost, but real user experience improvement.",
      },
      {
        title: "Image strategy",
        description:
          "WebP conversion, lazy loading, proper sizing, and CDN delivery for every image on the site.",
      },
      {
        title: "Script audit",
        description:
          "Third-party scripts audited, deferred, or removed. Tag Manager cleaned up. Render-blocking eliminated.",
      },
      {
        title: "CSS optimization",
        description:
          "Critical CSS inlined, unused styles removed, and render path cleaned for faster first paint.",
      },
      {
        title: "Caching & CDN",
        description:
          "Browser caching, server-side caching, and CDN configuration for consistent fast delivery globally.",
      },
      {
        title: "Measurable results",
        description:
          "Before and after Lighthouse scores, CWV data, and a written report of every change made.",
      },
    ],
    stats: [
      { value: "98", label: "Target PageSpeed" },
      { value: "3x", label: "Avg. speed lift" },
      { value: "5 days", label: "Typical delivery" },
      { value: "+18%", label: "Avg. conversion lift" },
    ],
    process: [
      { step: "01", title: "Audit", text: "Full Lighthouse audit, CWV measurement, and issue prioritization." },
      { step: "02", title: "Plan", text: "Fix roadmap with expected impact and implementation order." },
      { step: "03", title: "Images", text: "WebP conversion, lazy loading, sizing, and CDN setup." },
      { step: "04", title: "Code", text: "Script deferral, CSS optimization, caching, and server config." },
      { step: "05", title: "Report", text: "Before/after scores, CWV data, and documentation of all changes." },
    ],
    faqs: [
      { q: "What CMS platforms do you optimize?", a: "We optimize WordPress, Shopify, Wix, Squarespace, and custom-built sites. The approach varies by platform." },
      { q: "Will optimization break my site's design?", a: "No. Performance fixes are made at the code and server level — the visual design is not changed." },
      { q: "What score can I expect after optimization?", a: "Most sites reach 90–98 on Lighthouse after a full optimization pass. Starting point and CMS affect the ceiling." },
      { q: "Is this a one-time service?", a: "Yes, though we recommend a follow-up audit 3–6 months after launch if you add new content or integrations." },
    ],
    relatedSlugs: ["seo-setup", "website-redesign", "wordpress-development"],
  },
  {
    slug: "seo-setup",
    title: "SEO Setup",
    tagline: "Technical SEO foundations that last.",
    description:
      "We build the technical SEO foundation your site needs to rank — metadata, schema, analytics, redirects, internal linking, and a clean crawlable structure from day one.",
    accent: "#a78bfa",
    platform: "Any CMS",
    heroLabel: "SEO",
    overview:
      "Most SEO problems are structural. We fix the foundation — clean URLs, proper metadata, schema markup, analytics configuration, and internal linking — so your content has the best possible chance to rank.",
    deliverables: [
      "Full technical SEO audit",
      "Metadata & title tag optimization",
      "Schema markup (JSON-LD)",
      "Google Analytics 4 & Search Console setup",
      "XML sitemap & robots.txt",
      "Internal linking audit & fixes",
    ],
    features: [
      {
        title: "Technical audit",
        description:
          "Crawl errors, duplicate content, broken links, redirect chains, and indexation issues identified and fixed.",
      },
      {
        title: "Metadata optimization",
        description:
          "Title tags, meta descriptions, and Open Graph tags written and optimized for every key page.",
      },
      {
        title: "Schema markup",
        description:
          "JSON-LD structured data for organization, services, FAQs, and breadcrumbs — helping search engines understand your content.",
      },
      {
        title: "Analytics configuration",
        description:
          "GA4 and Google Search Console set up correctly with conversion events, goals, and Search Console verification.",
      },
      {
        title: "Sitemap & robots.txt",
        description:
          "XML sitemap generated and submitted. Robots.txt configured to guide crawlers to the right pages.",
      },
      {
        title: "Internal linking",
        description:
          "Internal link audit with fixes to distribute authority, improve crawlability, and support key page rankings.",
      },
    ],
    stats: [
      { value: "+190%", label: "Avg. traffic growth" },
      { value: "100%", label: "Pages indexed" },
      { value: "5 days", label: "Typical delivery" },
      { value: "0", label: "Crawl errors at launch" },
    ],
    process: [
      { step: "01", title: "Audit", text: "Full technical crawl, indexation check, and issue prioritization." },
      { step: "02", title: "Metadata", text: "Title tags, meta descriptions, and OG tags written for all key pages." },
      { step: "03", title: "Schema", text: "JSON-LD structured data implemented for organization, services, and FAQs." },
      { step: "04", title: "Analytics", text: "GA4, Search Console, sitemap, and robots.txt configured and verified." },
      { step: "05", title: "Report", text: "Full documentation of changes, baseline metrics, and next-step recommendations." },
    ],
    faqs: [
      { q: "Does this include content writing or keyword research?", a: "This service covers technical SEO foundations. We provide keyword guidance and content structure recommendations, but full content writing is a separate scope." },
      { q: "How long until I see results?", a: "Technical SEO improvements are typically reflected in Search Console within 4–8 weeks as Google recrawls your site." },
      { q: "Do you work on all CMS platforms?", a: "Yes — WordPress, Shopify, Wix, Squarespace, and custom-built sites. The implementation approach varies by platform." },
      { q: "Is this a one-time service?", a: "The foundation setup is one-time. We recommend a quarterly audit to catch new issues as your site grows." },
    ],
    relatedSlugs: ["speed-optimization", "website-redesign", "wordpress-development"],
  },
  {
    slug: "custom-code-development",
    title: "Custom Code Development",
    tagline: "Bespoke web solutions built exactly to your spec.",
    description:
      "We write clean, modern custom code for websites and web apps — React, Next.js, Tailwind, and vanilla JS. No page builders, no bloat. Just precise, performant code that does exactly what you need.",
    accent: "#06b6d4",
    platform: "Custom Code",
    heroLabel: "Custom Development",
    overview:
      "When off-the-shelf CMS platforms aren't enough, we build from scratch. Custom code gives you full control over design, performance, and functionality — without the constraints of a template or page builder.",
    deliverables: [
      "Custom HTML/CSS/JS or React/Next.js build",
      "Responsive, accessible markup",
      "API integrations & third-party connections",
      "Animation & interaction design",
      "Performance-optimized output",
      "Clean, documented codebase",
    ],
    features: [
      { title: "No page builder lock-in", description: "Pure code means no bloated plugins, no vendor lock-in, and no performance penalties from drag-and-drop builders." },
      { title: "React & Next.js", description: "Modern component-based architecture for fast, scalable, and maintainable web experiences." },
      { title: "Pixel-perfect design", description: "We implement designs with precision — every spacing, animation, and interaction exactly as intended." },
      { title: "API & data integration", description: "Connect to any third-party API, CRM, payment gateway, or data source your project requires." },
      { title: "Animation & motion", description: "Framer Motion, GSAP, and CSS animations that elevate the user experience without hurting performance." },
      { title: "Accessible & semantic", description: "WCAG-compliant markup, proper heading hierarchy, and keyboard navigation built in from the start." },
    ],
    stats: [
      { value: "100%", label: "Custom code" },
      { value: "98", label: "Lighthouse score" },
      { value: "14 days", label: "Typical delivery" },
      { value: "0", label: "Page builder bloat" },
    ],
    process: [
      { step: "01", title: "Brief", text: "Goals, design files, tech requirements, and integration needs defined upfront." },
      { step: "02", title: "Architecture", text: "Component structure, data flow, and tech stack decisions made before writing a line." },
      { step: "03", title: "Build", text: "Clean, modular code written with performance and maintainability in mind." },
      { step: "04", title: "QA", text: "Cross-browser, cross-device, accessibility, and performance testing." },
      { step: "05", title: "Deploy", text: "Deployment to your hosting, DNS setup, and handoff with full documentation." },
    ],
    faqs: [
      { q: "What tech stack do you use?", a: "Primarily React, Next.js, TypeScript, and Tailwind CSS for frontend. Node.js and Express for backend when needed. We adapt to your existing stack." },
      { q: "Can you work from a Figma design?", a: "Yes. We take Figma files and implement them pixel-perfectly in code." },
      { q: "Do you build backends too?", a: "Yes — see our Full Stack Development service for complete frontend + backend builds." },
      { q: "Will I be able to edit the site after launch?", a: "We can integrate a headless CMS (like Sanity or Contentful) so your team can manage content without touching code." },
    ],
    relatedSlugs: ["full-stack-development", "seo-setup", "website-redesign"],
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    tagline: "Complete web applications from frontend to database.",
    description:
      "We design and build complete web applications — React/Next.js frontend, Node.js/Express backend, MongoDB or PostgreSQL database, REST APIs, authentication, and cloud deployment.",
    accent: "#8b5cf6",
    platform: "Full Stack",
    heroLabel: "Full Stack Dev",
    overview:
      "Full stack development means we own the entire product — from the UI your users see to the database storing their data. We build scalable, secure, production-ready web applications with modern architecture.",
    deliverables: [
      "React / Next.js frontend",
      "Node.js / Express backend API",
      "MongoDB or PostgreSQL database",
      "Authentication & user management",
      "REST or GraphQL API design",
      "Cloud deployment (Vercel, AWS, Railway)",
    ],
    features: [
      { title: "Modern frontend", description: "React and Next.js with TypeScript, Tailwind CSS, and component-driven architecture for fast, scalable UIs." },
      { title: "Robust backend", description: "Node.js and Express APIs with proper error handling, validation, rate limiting, and security best practices." },
      { title: "Database design", description: "MongoDB for flexible document storage or PostgreSQL for relational data — designed for your use case." },
      { title: "Authentication", description: "Secure user auth with JWT, OAuth (Google, GitHub), and role-based access control." },
      { title: "API architecture", description: "Clean REST or GraphQL APIs with proper documentation, versioning, and error responses." },
      { title: "Cloud deployment", description: "Production deployment on Vercel, Railway, or AWS with CI/CD pipelines and environment management." },
    ],
    stats: [
      { value: "End-to-end", label: "Full ownership" },
      { value: "99.9%", label: "Uptime target" },
      { value: "3–6 wks", label: "Typical delivery" },
      { value: "100%", label: "Production ready" },
    ],
    process: [
      { step: "01", title: "Discovery", text: "Product requirements, user flows, data model, and tech stack decisions." },
      { step: "02", title: "Architecture", text: "System design, API contracts, database schema, and component structure." },
      { step: "03", title: "Frontend", text: "UI implementation with React/Next.js, responsive design, and state management." },
      { step: "04", title: "Backend", text: "API development, database integration, auth, and third-party connections." },
      { step: "05", title: "Deploy", text: "Production deployment, environment setup, monitoring, and handoff documentation." },
    ],
    faqs: [
      { q: "What is your tech stack?", a: "React/Next.js + TypeScript on the frontend. Node.js/Express on the backend. MongoDB or PostgreSQL for the database. Deployed on Vercel, Railway, or AWS." },
      { q: "Do you handle authentication?", a: "Yes. We implement secure auth with JWT tokens, refresh token rotation, and OAuth providers like Google and GitHub." },
      { q: "Can you build a SaaS product?", a: "Yes. We have experience building multi-tenant SaaS applications with subscription billing, user management, and role-based access." },
      { q: "How long does a full stack project take?", a: "Typical projects take 3–6 weeks depending on complexity. We will give you a precise timeline after the discovery call." },
    ],
    relatedSlugs: ["custom-code-development", "seo-setup", "speed-optimization"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    tagline: "Keep your site fast, secure, and up to date.",
    description:
      "Monthly website maintenance plans covering content updates, plugin and theme updates, security monitoring, performance checks, uptime monitoring, and priority support.",
    accent: "#64748b",
    platform: "All CMS",
    heroLabel: "Maintenance",
    overview:
      "A website is not a one-time project — it needs ongoing care to stay fast, secure, and effective. Our maintenance plans give you a dedicated team to handle updates, fixes, and improvements so you can focus on your business.",
    deliverables: [
      "Monthly content updates",
      "Plugin & theme updates",
      "Security monitoring & patches",
      "Uptime monitoring",
      "Monthly performance report",
      "Priority support response",
    ],
    features: [
      { title: "Content updates", description: "Text, images, pricing, team members, blog posts — we handle all content changes quickly and accurately." },
      { title: "Plugin & theme updates", description: "Regular updates to keep your CMS, plugins, and themes current, secure, and compatible." },
      { title: "Security monitoring", description: "Active monitoring for malware, vulnerabilities, and unauthorized access with immediate response." },
      { title: "Uptime monitoring", description: "24/7 uptime monitoring with instant alerts and rapid response if your site goes down." },
      { title: "Performance checks", description: "Monthly Lighthouse audits and Core Web Vitals checks to catch regressions before they affect rankings." },
      { title: "Priority support", description: "Dedicated support channel with guaranteed response times — no waiting in a general queue." },
    ],
    stats: [
      { value: "24/7", label: "Uptime monitoring" },
      { value: "<4h", label: "Response time" },
      { value: "Monthly", label: "Performance reports" },
      { value: "100%", label: "Proactive care" },
    ],
    process: [
      { step: "01", title: "Onboarding", text: "Site audit, access setup, monitoring tools configured, and baseline metrics recorded." },
      { step: "02", title: "Monthly updates", text: "Scheduled plugin, theme, and CMS core updates with pre-update backups." },
      { step: "03", title: "Content changes", text: "Submit requests via email or our portal — changes completed within 1 business day." },
      { step: "04", title: "Security scan", text: "Monthly security scan, malware check, and vulnerability assessment." },
      { step: "05", title: "Report", text: "Monthly report covering uptime, performance scores, updates applied, and next steps." },
    ],
    faqs: [
      { q: "What CMS platforms do you maintain?", a: "WordPress, Shopify, Wix, Squarespace, and custom-built sites. We adapt our process to your platform." },
      { q: "How do I submit content change requests?", a: "Via email or a shared project management board — whichever works best for your team." },
      { q: "What happens if my site gets hacked?", a: "We respond immediately, clean the infection, patch the vulnerability, and restore from backup if needed." },
      { q: "Is there a minimum contract length?", a: "We offer month-to-month plans with no lock-in. Most clients stay long-term because the value is clear." },
    ],
    relatedSlugs: ["seo-setup", "speed-optimization", "website-redesign"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((slug) => servicesData.find((s) => s.slug === slug))
    .filter(Boolean) as ServiceData[];
}
