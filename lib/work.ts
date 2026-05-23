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
];

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}
