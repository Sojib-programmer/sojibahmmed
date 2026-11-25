export interface Pillar {
  slug: string;
  shortTitle: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  categories: string[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  brands: { name: string; url: string; note: string }[];
  faq: { question: string; answer: string }[];
}

export const PILLARS: Pillar[] = [
  {
    slug: "ai-in-bangladesh",
    shortTitle: "AI in Bangladesh",
    h1: "AI in Bangladesh: how automation actually gets adopted here",
    title: "AI in Bangladesh — Adoption, Automation & Real Use Cases | Sojib Ahmmed",
    description:
      "A working operator's guide to AI adoption in Bangladesh: where automation pays off, what breaks, and how AI voice, matching and agent systems are being deployed locally.",
    keywords: [
      "AI in Bangladesh",
      "artificial intelligence Bangladesh",
      "AI automation Bangladesh",
      "AI voice calling Bangladesh",
      "বাংলাদেশে কৃত্রিম বুদ্ধিমত্তা",
      "এআই অটোমেশন",
      "Sojib Ahmmed AI",
    ],
    intro:
      "Most AI conversations in Bangladesh stop at demos. This pillar is about the part after the demo — the data, the phone calls, the Bangla language edge cases, and the unit economics that decide whether an AI system survives contact with real users.",
    categories: ["AI", "Technology", "Automation"],
    sections: [
      {
        heading: "Where AI actually pays off locally",
        paragraphs: [
          "The highest-return AI work in Bangladesh is not generative novelty — it is removing repetitive human coordination from processes that already have volume: order confirmation calls, KYC document reading, buyer-seller matching, support triage, and lead qualification.",
          "Every one of those has a measurable baseline: minutes per task, cost per task, error rate. If an AI layer cannot beat that baseline on all three, it is a marketing feature, not infrastructure.",
        ],
        bullets: [
          "Voice-first beats chat-first — a large share of users prefer a call over typing.",
          "Bangla plus English code-switching is the default input, not an edge case.",
          "Latency and cost per minute decide whether voice automation scales.",
          "Human handoff must be one step away or trust collapses on the first failure.",
        ],
      },
      {
        heading: "The data problem nobody budgets for",
        paragraphs: [
          "Local AI systems fail on data hygiene long before model quality. Addresses are unstructured, phone numbers arrive in five formats, product titles are transliterated inconsistently, and identity documents are photographed at angles.",
          "The fix is boring and structural: normalise at ingest, store canonical forms, and keep the raw input for audit. That single discipline is what lets a matching or verification model perform in production the way it performed in a notebook.",
        ],
      },
      {
        heading: "Build order that works",
        paragraphs: [
          "Instrument the manual process first, then automate the narrowest slice with the clearest signal, then expand. Systems built in that order compound; systems built model-first get rewritten.",
        ],
        bullets: [
          "1. Log the manual workflow end to end.",
          "2. Automate one decision with a measurable ground truth.",
          "3. Add a review queue so the model has a correction path.",
          "4. Only then widen scope.",
        ],
      },
    ],
    brands: [
      { name: "ticru voice", url: "https://ticru.io", note: "AI voice calling and conversational automation." },
      { name: "resale.bd", url: "https://resale.bd", note: "AI-powered listing and buyer-seller matching." },
      { name: "cyber.bd", url: "https://cyber.bd", note: "Security tooling and threat analysis." },
    ],
    faq: [
      {
        question: "Is AI adoption realistic for small businesses in Bangladesh?",
        answer:
          "Yes, but only for narrow, high-volume tasks — order confirmations, follow-up calls, listing creation and support triage. Broad 'AI transformation' projects fail; single-workflow automations pay back quickly.",
      },
      {
        question: "Does AI work well with the Bangla language?",
        answer:
          "Modern models handle Bangla and Bangla-English code-switching well enough for production voice and text workflows, provided you normalise inputs and keep a human review path for low-confidence cases.",
      },
      {
        question: "What is the biggest cause of failed AI projects here?",
        answer:
          "Messy data and no measurable baseline. If you cannot state the current cost, time and error rate of a task, you cannot prove the AI version is better.",
      },
    ],
  },
  {
    slug: "digital-commerce-bangladesh",
    shortTitle: "Digital commerce",
    h1: "Digital commerce in Bangladesh: the infrastructure layer under every shop",
    title: "Digital Commerce in Bangladesh — Dropshipping, Resale & Payments | Sojib Ahmmed",
    description:
      "How online commerce in Bangladesh actually runs: sourcing, dropshipping infrastructure, social selling, resale marketplaces, payments and the trust layer that decides who survives.",
    keywords: [
      "digital commerce Bangladesh",
      "dropshipping Bangladesh",
      "dropshop.bd",
      "1shop.bd",
      "resale marketplace Bangladesh",
      "ই-কমার্স বাংলাদেশ",
      "অনলাইন ব্যবসা বাংলাদেশ",
    ],
    intro:
      "Bangladesh does not have a commerce demand problem. It has a fulfilment, payment and trust problem. This pillar maps the infrastructure layer — sourcing, dropshipping, social storefronts, resale liquidity and settlement — and where each one still breaks.",
    categories: ["Ecosystem", "Commerce", "Business"],
    sections: [
      {
        heading: "The four constraints",
        paragraphs: [
          "Every commerce operator here runs into the same four walls: inventory risk, delivery reliability, cash-on-delivery settlement lag, and buyer trust. Software that removes one of these creates a business; software that only adds a storefront does not.",
        ],
        bullets: [
          "Inventory risk → solved by dropshipping and consignment models.",
          "Delivery reliability → solved by courier aggregation and status webhooks.",
          "Settlement lag → solved by payment rails with predictable payout cycles.",
          "Trust → solved by verification, escrow and reputation history.",
        ],
      },
      {
        heading: "Dropshipping as infrastructure, not a hustle",
        paragraphs: [
          "Dropshipping in Bangladesh gets dismissed as a reseller trick, which misses the point: it is a zero-inventory distribution layer. The hard parts are supplier verification, live stock accuracy, margin control and returns handling — all backend problems.",
          "dropshop.bd is built around exactly that: a verified supplier catalogue, automated order routing, and transparent margin so a seller can operate without holding stock or negotiating each shipment.",
        ],
      },
      {
        heading: "Social commerce is the real storefront",
        paragraphs: [
          "Most Bangladeshi sellers start on Facebook, WhatsApp and Instagram, not on a website. Any commerce product that ignores that loses. The winning pattern is a lightweight storefront that plugs into social selling — shareable links, order capture from DMs, checkout that works on a mid-range phone.",
          "1shop.bd targets that shape: a one-link storefront a seller can run entirely from a phone, with orders, payments and delivery status in one place.",
        ],
      },
      {
        heading: "Resale and the second-hand liquidity gap",
        paragraphs: [
          "Second-hand trade is enormous and almost entirely unstructured — group posts, no verification, no price signal. Adding AI-assisted listing creation and buyer-seller matching turns that noise into a marketplace with real liquidity, which is the thesis behind resale.bd.",
        ],
      },
    ],
    brands: [
      { name: "dropshop.bd", url: "https://dropshop.bd", note: "Zero-inventory dropshipping and supplier infrastructure." },
      { name: "1shop.bd", url: "https://1shop.bd", note: "One-link social storefront for phone-first sellers." },
      { name: "resale.bd", url: "https://resale.bd", note: "AI-matched second-hand marketplace." },
      { name: "ticru pay", url: "https://ticrupay.com", note: "Payment and settlement rails." },
    ],
    faq: [
      {
        question: "Is dropshipping profitable in Bangladesh?",
        answer:
          "It can be, when supplier stock accuracy, courier reliability and margin transparency are solved by the platform. Without those, returns and cancellations erase the margin.",
      },
      {
        question: "Why do social sellers outperform website-first sellers here?",
        answer:
          "Discovery, trust and conversation all happen inside social apps. A storefront that supports that flow — one shareable link, mobile checkout, DM-friendly ordering — converts far better than a standalone site.",
      },
      {
        question: "What makes a resale marketplace work?",
        answer:
          "Liquidity and trust. AI-generated listings reduce posting friction, matching surfaces the right buyer quickly, and verification plus reputation removes the fear of being scammed.",
      },
    ],
  },
  {
    slug: "cybersecurity-and-trust",
    shortTitle: "Cybersecurity & trust",
    h1: "Cybersecurity and digital trust for Bangladeshi platforms",
    title: "Cybersecurity & Digital Trust in Bangladesh — Zero Trust in Practice | Sojib Ahmmed",
    description:
      "Practical cybersecurity for Bangladeshi platforms: zero trust, identity verification, payment fraud, data protection and the trust layer that keeps digital products alive.",
    keywords: [
      "cybersecurity Bangladesh",
      "cyber.bd",
      "zero trust architecture",
      "penetration testing Bangladesh",
      "সাইবার সিকিউরিটি বাংলাদেশ",
      "ডিজিটাল নিরাপত্তা",
      "Sojib Ahmmed cybersecurity",
    ],
    intro:
      "Trust is the actual product of any financial, identity or marketplace platform. This pillar covers how I approach security for systems operating in Bangladesh — threat model first, zero trust by default, and verification treated as an infrastructure primitive.",
    categories: ["Cybersecurity", "Security", "Technology"],
    sections: [
      {
        heading: "Threat model before tooling",
        paragraphs: [
          "The realistic threats for local platforms are credential stuffing, SIM and OTP interception, insider data extraction, payment fraud rings and account takeover through weak recovery flows — not exotic zero-days.",
          "Security spending should map directly to that list. Buying a scanner before fixing recovery flows and access boundaries is theatre.",
        ],
      },
      {
        heading: "Zero trust, applied",
        paragraphs: [
          "Zero trust in practice means every request is authenticated and authorised at the data layer, not just at the edge. Row-level authorisation, least-privilege service credentials, short-lived tokens, and no implicit trust from being 'inside' the network.",
        ],
        bullets: [
          "Enforce authorisation in the database, not only in the app layer.",
          "Never ship broad service keys to clients.",
          "Log access to sensitive records and make the log immutable.",
          "Assume any single credential will eventually leak — design for containment.",
        ],
      },
      {
        heading: "Identity and verification as infrastructure",
        paragraphs: [
          "For payments, marketplaces and company formation, verified identity is what allows everything else. Document reading, liveness, duplicate detection and sanction screening belong in a shared service, not reimplemented per product.",
        ],
      },
    ],
    brands: [
      { name: "cyber.bd", url: "https://cyber.bd", note: "Security research, hardening and threat analysis." },
      { name: "ticru pay", url: "https://ticrupay.com", note: "Payment rails with fraud and settlement controls." },
      { name: "companysetup.io", url: "https://companysetup.io", note: "Verified company formation and compliance." },
    ],
    faq: [
      {
        question: "What is the most common security failure you see in local platforms?",
        answer:
          "Over-permissive database access and weak account recovery. Both let an attacker skip authentication entirely, and both are cheap to fix compared with the damage.",
      },
      {
        question: "Is zero trust realistic for a small team?",
        answer:
          "Yes. For a small team it mostly means enforcing authorisation at the data layer, using least-privilege keys, and keeping secrets server-side. That is configuration discipline, not a large budget.",
      },
      {
        question: "How should a startup here approach penetration testing?",
        answer:
          "Fix the known structural issues first — access control, secrets handling, recovery flows — then test. A pentest against an unhardened system just produces a long report of things you already knew.",
      },
    ],
  },
];
