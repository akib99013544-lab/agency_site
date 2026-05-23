export type WorkStatIcon = "chart" | "check" | "click" | "users";

export type WorkProject = {
  slug: string;
  title: string;
  platform: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  accent: string;
  image: string;
  services: string[];
  stats: {
    label: string;
    value: string;
    icon: WorkStatIcon;
  }[];
};

export const workProjects: WorkProject[] = [
  {
    slug: "studio-noir",
    title: "Studio Noir",
    platform: "Squarespace",
    category: "Portfolio & brand website",
    summary:
      "A luxury photography studio portfolio rebuilt with editorial layouts, refined typography, and a seamless booking flow.",
    challenge:
      "The studio had stunning work but a generic template that undersold their premium positioning and made booking feel clunky.",
    solution:
      "We redesigned with custom CSS, an editorial grid gallery, refined type system, and Acuity Scheduling integration for frictionless bookings.",
    outcome:
      "The new site positioned the studio as a premium brand, increased booking inquiries, and dramatically improved average session time.",
    accent: "#a78bfa",
    services: ["Squarespace design", "Custom CSS", "Gallery system", "Booking integration"],
    stats: [
      { label: "Booking lift", value: "+220%", icon: "chart" },
      { label: "Session time", value: "4:30", icon: "check" },
      { label: "Portfolio views", value: "12K/mo", icon: "users" },
    ],
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
  },
  {
    slug: "luxewear",
    title: "LuxeWear",
    platform: "Shopify",
    category: "Ecommerce redesign",
    summary:
      "A premium fashion storefront rebuilt around merchandising, trust, and a cleaner mobile checkout path.",
    challenge:
      "The previous store looked dated, buried product value, and made mobile checkout feel slow and uncertain.",
    solution:
      "We rebuilt the page hierarchy, refreshed product storytelling, clarified offer blocks, and created a CMS structure the team could update for campaigns.",
    outcome:
      "The new storefront gave the brand a premium shopping experience with stronger conversion paths and faster campaign launches.",
    accent: "#14b8a6",
    services: ["Shopify theme", "Mobile UX", "Checkout polish", "Analytics setup"],
    stats: [
      { label: "Revenue lift", value: "+340%", icon: "chart" },
      { label: "Conversion", value: "4.8%", icon: "click" },
      { label: "Visitors", value: "45K", icon: "users" },
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    slug: "apex-consulting",
    title: "Apex Consulting",
    platform: "WordPress",
    category: "B2B consulting website",
    summary:
      "A B2B site with clearer service pages, lead magnets, CRM routing, and a custom editing workflow.",
    challenge:
      "The team had strong expertise, but the website did not explain services clearly or route qualified leads into the sales process.",
    solution:
      "We created a sharper service architecture, custom WordPress editing blocks, CRM-ready forms, and a technical SEO foundation.",
    outcome:
      "The website became easier to sell from, easier to maintain, and better prepared for organic and paid acquisition.",
    accent: "#3b82f6",
    services: ["WordPress build", "CRM integration", "SEO foundation", "Lead capture"],
    stats: [
      { label: "Lead growth", value: "+280%", icon: "chart" },
      { label: "Speed score", value: "98", icon: "check" },
      { label: "Traffic", value: "+190%", icon: "users" },
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    slug: "freshmart",
    title: "FreshMart",
    platform: "Wix",
    category: "Subscription commerce",
    summary:
      "A fresh ecommerce experience with subscription flows, product storytelling, and campaign pages.",
    challenge:
      "FreshMart needed a simpler way to present subscriptions, explain product benefits, and publish seasonal campaigns quickly.",
    solution:
      "We redesigned the core shopping flow, added modular campaign sections, and tuned the visual system for mobile discovery.",
    outcome:
      "The brand gained a cleaner shopping experience and a repeatable content system for offers, subscriptions, and product education.",
    accent: "#f59e0b",
    services: ["Wix commerce", "Subscription UX", "Campaign pages", "Content system"],
    stats: [
      { label: "Sales growth", value: "+410%", icon: "chart" },
      { label: "Repeat buyers", value: "68%", icon: "users" },
      { label: "Cart value", value: "+85%", icon: "click" },
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
  },
  {
    slug: "tech-flow",
    title: "TechFlow SaaS",
    platform: "Custom React",
    category: "Web Application",
    summary:
      "A modern SaaS dashboard for IT teams, streamlining issue tracking and system monitoring.",
    challenge:
      "The client's legacy software was difficult to use and required extensive onboarding for new team members.",
    solution:
      "We designed a clean, intuitive interface using custom React components, integrating complex data visualizations.",
    outcome:
      "Onboarding time decreased by 60% and user engagement across the platform skyrocketed.",
    accent: "#6366f1",
    services: ["React Development", "UI/UX Design", "Data Visualization", "API Integration"],
    stats: [
      { label: "User Adoption", value: "+150%", icon: "users" },
      { label: "Efficiency", value: "3x", icon: "chart" },
      { label: "Task Speed", value: "+45%", icon: "check" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    slug: "vital-health",
    title: "Vital Health",
    platform: "Next.js",
    category: "Healthcare Platform",
    summary:
      "A patient portal and telemedicine application designed for accessibility and security.",
    challenge:
      "Patients found it hard to book appointments and access their medical records securely online.",
    solution:
      "We built a HIPAA-compliant portal with seamless scheduling and secure messaging capabilities.",
    outcome:
      "Patient satisfaction improved significantly, and no-show rates dropped by 30%.",
    accent: "#10b981",
    services: ["Next.js Build", "HIPAA Compliance", "Telemedicine", "UI Design"],
    stats: [
      { label: "Appointments", value: "10K+", icon: "check" },
      { label: "No-shows", value: "-30%", icon: "chart" },
      { label: "Satisfaction", value: "4.9/5", icon: "users" },
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
  {
    slug: "fin-sync",
    title: "FinSync",
    platform: "Webflow",
    category: "Fintech Marketing Site",
    summary:
      "A high-conversion landing page and resource hub for a growing financial technology startup.",
    challenge:
      "The startup needed to establish trust quickly and explain complex financial tools simply.",
    solution:
      "We created a dynamic Webflow site with custom animations, clear value propositions, and an extensive blog.",
    outcome:
      "The site successfully drove early access signups and positioned the brand as an industry leader.",
    accent: "#0ea5e9",
    services: ["Webflow Design", "Custom Animations", "SEO Optimization", "Copywriting"],
    stats: [
      { label: "Signups", value: "5K+", icon: "click" },
      { label: "Bounce Rate", value: "-40%", icon: "chart" },
      { label: "Trust Score", value: "99%", icon: "check" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "edu-connect",
    title: "EduConnect",
    platform: "Custom Code",
    category: "E-Learning Platform",
    summary:
      "An interactive learning management system bringing students and educators together.",
    challenge:
      "Existing solutions were rigid and lacked the engagement features needed for modern remote learning.",
    solution:
      "Developed a custom platform featuring live video integration, interactive quizzes, and progress tracking.",
    outcome:
      "Adopted by over 50 schools, improving student participation and learning outcomes.",
    accent: "#f43f5e",
    services: ["Full Stack Dev", "Video Integration", "Gamification", "System Architecture"],
    stats: [
      { label: "Active Users", value: "100K", icon: "users" },
      { label: "Completion", value: "85%", icon: "check" },
      { label: "Engagement", value: "+200%", icon: "chart" },
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  },
  {
    slug: "urban-estates",
    title: "Urban Estates",
    platform: "WordPress",
    category: "Real Estate Portal",
    summary:
      "A premium property listing website with advanced search and high-quality visual showcases.",
    challenge:
      "The agency's listings were hard to filter, and properties weren't displayed in a visually appealing way.",
    solution:
      "Integrated a robust search engine with map views and immersive, high-resolution property galleries.",
    outcome:
      "Increased property inquiries and streamlined the process for agents to manage their portfolios.",
    accent: "#eab308",
    services: ["WordPress Theme", "Map Integration", "Advanced Search", "Gallery Design"],
    stats: [
      { label: "Inquiries", value: "+120%", icon: "click" },
      { label: "Time on Site", value: "5:20", icon: "chart" },
      { label: "Listings", value: "2K+", icon: "check" },
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    slug: "nexus-app",
    title: "Nexus App",
    platform: "Custom Code",
    category: "Productivity App",
    summary:
      "A cross-platform task management application designed for enterprise teams.",
    challenge:
      "The client needed a unified dashboard that integrated with legacy tools while providing a modern UI.",
    solution:
      "We built a robust web application using React and Node.js, featuring real-time collaboration and custom integrations.",
    outcome:
      "Team efficiency increased by 40% and the app was adopted by 5 Fortune 500 companies within a year.",
    accent: "#8b5cf6",
    services: ["Web App Development", "UI/UX Design", "Backend Architecture", "API Integration"],
    stats: [
      { label: "Active Users", value: "250K+", icon: "users" },
      { label: "Uptime", value: "99.99%", icon: "check" },
      { label: "Efficiency", value: "+40%", icon: "chart" },
    ],
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
  },
  {
    slug: "green-leaf",
    title: "Green Leaf",
    platform: "Shopify",
    category: "Sustainable Goods",
    summary:
      "An eco-friendly ecommerce brand focusing on a carbon-neutral shopping experience.",
    challenge:
      "The brand struggled to communicate their sustainability efforts without cluttering the shopping experience.",
    solution:
      "We redesigned their Shopify store, adding clear value proposition badges, impact metrics at checkout, and a streamlined mobile flow.",
    outcome:
      "Conversion rates doubled and the brand saw a significant increase in customer loyalty.",
    accent: "#22c55e",
    services: ["Shopify Development", "Mobile UX", "Conversion Optimization", "Brand Storytelling"],
    stats: [
      { label: "Conversion Rate", value: "5.2%", icon: "click" },
      { label: "Repeat Customers", value: "45%", icon: "users" },
      { label: "Revenue", value: "+200%", icon: "chart" },
    ],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
  },
  {
    slug: "artisan-bakery",
    title: "Artisan Bakery",
    platform: "Squarespace",
    category: "Local Business",
    summary:
      "A neighborhood bakery needing an online ordering system for local pickup.",
    challenge:
      "Customers were calling in orders, leading to missed calls and operational inefficiencies.",
    solution:
      "We built a Squarespace site with a custom online ordering flow and beautiful, appetizing photography.",
    outcome:
      "Online orders now account for 60% of total revenue, freeing up staff and increasing sales.",
    accent: "#fb923c",
    services: ["Squarespace Design", "E-commerce Setup", "Photography", "Local SEO"],
    stats: [
      { label: "Online Orders", value: "+300%", icon: "chart" },
      { label: "Time Saved", value: "20hrs/wk", icon: "check" },
      { label: "Local Traffic", value: "+150%", icon: "users" },
    ],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
  {
    slug: "stellar-consulting",
    title: "Stellar Consulting",
    platform: "WordPress",
    category: "Corporate Website",
    summary:
      "A global consulting firm needing a multilingual website to showcase their expertise.",
    challenge:
      "Their old site was difficult to navigate and lacked thought leadership content.",
    solution:
      "We developed a custom WordPress theme with a robust resource center and seamless multilingual support.",
    outcome:
      "The firm saw a 50% increase in lead generation and improved organic search rankings globally.",
    accent: "#1d4ed8",
    services: ["WordPress Development", "Multilingual Setup", "Content Strategy", "SEO"],
    stats: [
      { label: "Lead Generation", value: "+50%", icon: "chart" },
      { label: "Organic Traffic", value: "+80%", icon: "users" },
      { label: "Bounce Rate", value: "-25%", icon: "click" },
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    slug: "glow-beauty",
    title: "Glow Beauty",
    platform: "Wix",
    category: "Cosmetics Brand",
    summary:
      "A dynamic cosmetics website featuring virtual try-ons and subscription boxes.",
    challenge:
      "The brand needed an interactive way for customers to test products online before buying.",
    solution:
      "We leveraged Wix's flexible platform and integrated custom code for a virtual try-on experience.",
    outcome:
      "Product returns dropped by 20% and subscription sign-ups exceeded initial targets.",
    accent: "#ec4899",
    services: ["Wix Development", "Custom Integrations", "E-commerce", "Interactive Design"],
    stats: [
      { label: "Subscriptions", value: "2K+", icon: "users" },
      { label: "Returns", value: "-20%", icon: "check" },
      { label: "Engagement", value: "+120%", icon: "chart" },
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
  {
    slug: "innovate-labs",
    title: "Innovate Labs",
    platform: "Custom Code",
    category: "Research Institute",
    summary:
      "A comprehensive digital portal for a leading scientific research organization.",
    challenge:
      "They needed a secure platform to share research data and collaborate with international partners.",
    solution:
      "We designed a secure, scalable portal using a modern stack (Next.js & Python), ensuring data integrity.",
    outcome:
      "The portal streamlined research collaboration and significantly improved data access speeds.",
    accent: "#0ea5e9",
    services: ["Full Stack Development", "Security Architecture", "Data Management", "UI/UX"],
    stats: [
      { label: "Data Speed", value: "5x Faster", icon: "chart" },
      { label: "Security", value: "Enterprise Grade", icon: "check" },
      { label: "Collaborators", value: "500+", icon: "users" },
    ],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
  },
  {
    slug: "fit-zone",
    title: "Fit Zone",
    platform: "Squarespace",
    category: "Fitness Studio",
    summary:
      "A vibrant website for a boutique fitness studio, integrating class schedules and memberships.",
    challenge:
      "Members found it confusing to book classes and manage their memberships online.",
    solution:
      "We redesigned the site on Squarespace, seamlessly integrating Mindbody for class bookings.",
    outcome:
      "Class attendance increased by 15% and administrative queries dropped significantly.",
    accent: "#ef4444",
    services: ["Squarespace Design", "Mindbody Integration", "Local SEO", "Brand Identity"],
    stats: [
      { label: "Class Bookings", value: "+15%", icon: "chart" },
      { label: "Admin Queries", value: "-40%", icon: "check" },
      { label: "New Members", value: "+50/mo", icon: "users" },
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    slug: "pure-brew",
    title: "Pure Brew",
    platform: "Shopify",
    category: "Coffee Roaster",
    summary:
      "An immersive ecommerce experience for a specialty coffee roaster, featuring subscription models.",
    challenge:
      "They wanted to educate customers about their sourcing while driving online sales.",
    solution:
      "We built a Shopify store that balanced rich storytelling with a frictionless purchase path.",
    outcome:
      "Online revenue surpassed wholesale within six months of launch.",
    accent: "#d97706",
    services: ["Shopify Development", "Subscription Setup", "Brand Storytelling", "UX Design"],
    stats: [
      { label: "Online Revenue", value: "+300%", icon: "chart" },
      { label: "Subscribers", value: "1.5K+", icon: "users" },
      { label: "Time on Site", value: "3:45", icon: "click" },
    ],
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80",
  },
  {
    slug: "legal-pro",
    title: "Legal Pro",
    platform: "WordPress",
    category: "Law Firm",
    summary:
      "A professional, authoritative website for a leading corporate law firm.",
    challenge:
      "Their previous site was outdated and didn't reflect the high caliber of their services.",
    solution:
      "We developed a sophisticated WordPress site with dedicated practice area pages and attorney profiles.",
    outcome:
      "The firm reported a higher quality of leads and improved credibility in their market.",
    accent: "#334155",
    services: ["WordPress Development", "Professional Design", "SEO", "Content Strategy"],
    stats: [
      { label: "Qualified Leads", value: "+30%", icon: "chart" },
      { label: "Page Views", value: "+60%", icon: "click" },
      { label: "Domain Authority", value: "45", icon: "check" },
    ],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
  }
];

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}
