export const CONTACT_EMAIL = "victryena@gmail.com";
export const WAITLIST_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeZoc0b4FUES48Au_MGQtFMqskBkKW9jueKqG0FAJMw0qGS5g/viewform";
export const signUpCta = { label: "Sign Up Now", href: WAITLIST_FORM_URL };
export const SOCIAL_HANDLE = "@victryena";
export const socialLinks = [
  {
    href: "https://www.instagram.com/victryena/",
    label: "Instagram",
  },
  {
    href: "https://x.com/victryena",
    label: "X (Twitter)",
  },
  {
    href: "https://bsky.app/profile/victryena.bsky.social",
    label: "Bluesky",
  },
] as const;
export const STUDIO_NAME = "Trans First Fitness";
export const STUDIO_LOCATION = "Vancouver, BC";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#packages", label: "Services" },
  { href: "#contact", label: "Get Started" },
] as const;

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

export const howIWorkItems = [
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
    name: "Hana",
    quote:
      "Only bought the premium package hoping she would give me W faps, but instead of jacking off I got jacked. Would recommend?",
  },
  {
    name: "Shelby",
    quote:
      "Vic is the best coach I've ever had. I've only ever had one coach though haha! She made me go from chopped asian to wasian baddie.",
  },
  {
    name: "Mateo",
    quote:
      "Vic force feeds me an entire bottle of chocolate milk every day, but she's a great coach and I've seen a lot of progress in my lifts and overall strength.",
  },
];

export const siteContent = {
  hero: {
    eyebrow: "Certified Personal Trainer & Online Coach",
    headline: "Strong Bodies,",
    headlineAccent: "Safe Spaces",
    subtext:
      "I work with gender-diverse folks who want to build strength, confidence, and a sense of autonomy. Personal training and gender-affirming programming, online or in person in Vancouver, BC.",
    primaryCta: { label: "View Services", href: "#packages" },
    secondaryCta: signUpCta,
  },
  intro: {
    eyebrow: "Who I Am",
    title: "Strength, Confidence & Autonomy",
    paragraphs: [
      "I help gender-diverse people build strength, confidence, and autonomy through personal training and gender-affirming programming.",
      "The gym can feel like a lot. Whether you're cis or trans, you deserve to feel at home in your body. I meet you where you are, no judgment and no assumptions, just a plan that fits your body and your goals.",
    ],
    link: { label: "See Training Services", href: "#packages" },
    imageLabel: "About Photo",
  },
  howIWork: {
    eyebrow: "How I Work",
    title: "A Practice Built On Inclusion",
  },
  packages: {
    banner: {
      eyebrow: "Services",
      title: "Personal Training Packages",
      description:
        "Every package is coaching from me: personalized, gender-affirming, and priced to stay as accessible as I can make it. Pick the level of support that fits where you're at.",
    },
    pricing: {
      onlineTag: "Online Available",
      priceNote: "*Prices in USD and current as of August 2026.",
      signUpCta,
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
          suffix: " ea",
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
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What Clients Are Saying",
    description:
      "My goal is to help every client feel stronger, more confident, and more at home in their body. Here's what a few of them have shared.",
  },
  contact: {
    eyebrow: "Get In Touch",
    title: "Have Questions?",
    description: [
      "Want to know more about packages, pricing, or what coaching looks like? Send me an email.",
      "Ready to start your fitness journey? Sign up and I'll reach out when a spot opens up.",
    ],
    imageLabel: "Studio Photo",
  },
};
