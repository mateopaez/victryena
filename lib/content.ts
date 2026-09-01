export const CONTACT_EMAIL = "victryena@gmail.com";
export const SOCIAL_HANDLE = "@victryena";
export const STUDIO_NAME = "Trans First Fitness";
export const STUDIO_LOCATION = "Vancouver, BC";

export type PricingTier = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  rates: { supported: string; supporter: string } | { note: string };
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    tagline: "Self-Guided with Support",
    price: "$150",
    period: "Per Month",
    description: "Self-motivated clients seeking accountability & structure.",
    features: [
      "Initial Assessment (60min)",
      "Structured Workout Program",
      "Weekly Check-Ins (15min)",
      "Limited Messaging Support",
      "Community Discord Access",
    ],
    rates: { supported: "$125", supporter: "$175" },
  },
  {
    name: "Standard",
    tagline: "Full-Service Coaching",
    price: "$250",
    period: "Per Month",
    description:
      "Clients seeking individualized progression & lifestyle coaching.",
    features: [
      "Basic Package",
      "+ Customized Workout Program",
      "+ Weekly Check-Ins (30min)",
      "+ Direct Messaging Support",
      "+ Nutrition & Lifestyle Guidance",
    ],
    rates: { supported: "$200", supporter: "$300" },
  },
  {
    name: "Premium",
    tagline: "Dedicated Training",
    price: "$400",
    period: "Per Month",
    description: "Driven clients seeking detailed programs & real-time support.",
    features: [
      "Basic & Standard Packages",
      "+ Dynamic Program Adjustments",
      "+ Weekly Check-Ins (60min)",
      "+ Priority Messaging Support",
      "+ Daily Progress & Meal Tracking",
    ],
    rates: {
      note: "Subsidizes Supported Rates to Enable Accessible Training",
    },
    featured: true,
  },
];

export const values = [
  {
    eyebrow: "Inclusive",
    text: "A gym and coaching space built for gender-diverse folks.",
  },
  {
    eyebrow: "Personalized",
    text: "Programming shaped around your body, goals & experience.",
  },
  {
    eyebrow: "Flexible",
    text: "Train online from anywhere, or in-person in Vancouver, BC.",
  },
  {
    eyebrow: "Accessible",
    text: "Community-funded rates so cost isn't a barrier to care.",
  },
];

export const highlightItems = [
  { bold: "One-on-one training", rest: "online & in-person" },
  {
    bold: "Individualized workout programs",
    rest: "built around your goals",
  },
  { bold: "Nutrition guidance", rest: "& lifestyle coaching" },
  { bold: "Queer & trans friendly gym", rest: "at Trans First Fitness" },
  { bold: "Accessible, community-funded pricing" },
];

export const aboutHighlightItems = [
  {
    bold: "One-on-one online & in-person training",
    rest: "wherever you feel most comfortable",
  },
  {
    bold: "Individualized workout programs",
    rest: "tailored to your body and experience level",
  },
  {
    bold: "Nutrition guidance & lifestyle coaching",
    rest: "alongside your training plan",
  },
  {
    bold: "Queer & trans friendly gym",
    rest: "sessions held at Trans First Fitness",
  },
  {
    bold: "Accessible, community-funded pricing",
    rest: "so support isn't out of reach",
  },
];

export const testimonials = [
  {
    name: "Client Name",
    quote:
      "This is your testimonial quote. Share a client's review of your training, coaching, or the space you've created for them.",
  },
  {
    name: "Client Name",
    quote:
      "This is your testimonial quote. Share a client's review of your training, coaching, or the space you've created for them.",
  },
  {
    name: "Mateo",
    quote:
      "Vic force feeds me an entire bottle of chocolate milk every day, but she's a great coach and I've seen a lot of progress in my lifts and overall strength.",
  },
];

export const homeContent = {
  hero: {
    eyebrow: "Certified Personal Trainer & Online Coach",
    headline: "Feel At Home In Your",
    headlineAccent: "Body",
    subtext:
      "I work with gender-diverse folks who want to build strength, confidence, and a sense of autonomy. Personal training and gender-affirming programming, online or in person in Vancouver, BC.",
    primaryCta: { label: "View Packages", href: "/packages" },
    secondaryCta: { label: "Book a Session", href: "/book-online" },
  },
  offer: {
    eyebrow: "What I Offer",
    title: "Training Built Around You",
    quote:
      "Working out can feel intimidating. Whether you're cis or trans, everyone deserves to feel at home in their own body.",
    imageLabel: "Training Photo",
  },
  contact: {
    eyebrow: "Get In Touch",
    title: "Start Your Journey Today",
    description:
      "Questions about packages, pricing, or what a session looks like? Send a message. I'd love to hear from you.",
    imageLabel: "Studio Photo",
    socialDetail: "on Instagram, X & Bluesky",
  },
};

export const testimonialsContent = {
  eyebrow: "Testimonials",
  title: "What Clients Are Saying",
  description:
    "My goal is to help every client feel stronger, more confident, and more at home in their body. Here's what a few of them have shared.",
};

export const aboutContent = {
  intro: {
    eyebrow: "Who I Am",
    title: "Strength, Confidence & Autonomy",
    paragraphs: [
      "I help gender-diverse people build strength, confidence, and autonomy through personal training and gender-affirming programming.",
      "The gym can feel like a lot. Whether you're cis or trans, you deserve to feel at home in your body. I meet you where you are, no judgment and no assumptions, just a plan that fits your body and your goals.",
    ],
    link: { label: "See Training Packages", href: "/packages" },
    imageLabel: "About Photo",
  },
  howIWork: {
    eyebrow: "How I Work",
    title: "A Practice Built On Inclusion",
  },
  cta: {
    title: "Ready to get started?",
    primaryCta: { label: "View Packages", href: "/packages" },
    secondaryCta: { label: "Book a Session", href: "/book-online" },
  },
};

export const packagesContent = {
  banner: {
    eyebrow: "Services",
    title: "Personal Training Packages",
    description:
      "Every package is coaching from me: personalized, gender-affirming, and priced to stay as accessible as I can make it. Pick the level of support that fits where you're at.",
  },
  pricing: {
    onlineTag: "Online Available",
    priceNote: "*Prices in USD and current as of August 2026.",
    bookCta: { label: "Book Now", href: "/book-online" },
  },
  discounts: {
    title: "Committment Discounts",
    note: "*Monthly Payment Plan Available",
    tiers: [
      { duration: "3 Months", discount: "10% OFF" },
      { duration: "6 Months", discount: "25% OFF" },
    ],
  },
  inPerson: {
    title: "Additional",
    titleAccent: "In-Person",
    titleSuffix: "Sessions",
    sessionPrice: {
      label: "Individual",
      price: "$50",
      period: "Per Session",
    },
    bundles: [
      {
        text: "Bring-A-Friend*:",
        highlight: "$30",
        suffix: "ea",
        fine: "*the friend must also be a client",
      },
      { text: "4 Session Bundle:", highlight: "10% OFF" },
      { text: "8 Session Bundle:", highlight: "25% OFF" },
      { text: "Additional bundles available." },
    ],
    details: [
      {
        text: "Located at",
        highlight: "Trans First Fitness",
        suffix: "*",
        fine: "*gym membership is covered during our sessions",
      },
      {
        text: "Available to residents in",
        highlight: "Vancouver, BC",
      },
      { text: "Guided Workouts & Real-Time Support" },
      { text: "Trans & Queer Friendly Environment" },
    ],
  },
};

export const bookOnlineContent = {
  banner: {
    eyebrow: "Book Online",
    title: "Ready To Train?",
    description:
      "Tell me which package or session you're interested in and I'll follow up to find a time that works, online or in person at Trans First Fitness in Vancouver, BC.",
  },
  options: [
    {
      eyebrow: "Online Coaching",
      title: "Monthly Packages",
      description:
        "Basic, Standard, and Premium coaching with individualized programming, check-ins, and messaging support. Train from anywhere.",
      cta: { label: "View Packages", href: "/packages" },
    },
    {
      eyebrow: "In-Person",
      title: "Single Sessions",
      description:
        "$50 per session at Trans First Fitness in Vancouver, BC. Gym membership is covered while we're training together. Bundles available.",
      cta: { label: "See Session Pricing", href: "/packages" },
    },
  ],
  request: {
    eyebrow: "Request A Booking",
    title: "Tell Me About Your Goals",
    description:
      "Share a little about what you're looking for and I'll get back to you to confirm a package and schedule.",
    imageLabel: "Studio Photo",
  },
};
