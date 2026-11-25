import type { VariantContent } from "./NameVariantPage";

const common = {
  focus:
    "Alongside MarketSync Global, two areas of focus: cyber.bd, for cybersecurity, and merchant.bd — the Bangladesh Commerce OS.",
  founder:
    "He is the founder of Marketsync Global LLC (registered in New Mexico, USA) and Marketsync Global Ltd. (registered in Bangladesh), building cross-border digital infrastructure for founders, operators and SMBs.",
  philosophy:
    "His work is grounded in three principles: Purpose Over Profit, Digital Sovereignty for Bangladesh, and Systems Thinking — building leverage, not just products.",
};

export const variants: Record<string, VariantContent> = {
  "about": {
    path: "/about",
    variant: "About",
    h1: "About Sojib Ahmmed",
    title: "About Sojib Ahmmed — Founder & CEO, MarketSync Global",
    description:
      "Official bio of Sojib Ahmmed — Founder & CEO of MarketSync Global LLC and Ltd.",
    intro:
      "Sojib Ahmmed is the Founder & CEO of MarketSync Global. Operator and builder.",
    body: [
      { heading: "Background", text: "Born and based in Bangladesh, Sojib builds and operates digital systems — as an operator, then as founder of MarketSync Global." },
      { heading: "Companies", text: common.founder },
      { heading: "Focus", text: common.focus },
      { heading: "Operating philosophy", text: common.philosophy },
    ],
  },
  "sojib-ahmmed-bangladesh": {
    path: "/sojib-ahmmed-bangladesh",
    variant: "Bangladesh",
    h1: "Sojib Ahmmed — Founder & CEO, MarketSync Global",
    title: "Sojib Ahmmed Bangladesh — Founder & CEO, MarketSync Global",
    description:
      "Sojib Ahmmed is a Bangladeshi founder building cross-border digital infrastructure between Bangladesh and the US.",
    intro:
      "Sojib Ahmmed is a Bangladeshi founder building digital infrastructure for the next generation of Bangladeshi operators, founders and SMBs.",
    body: [
      { heading: "Why Bangladesh", text: "Sojib's mission is digital sovereignty for Bangladesh — building local-first systems that compete globally." },
      { heading: "Companies", text: common.founder },
      { heading: "Focus", text: common.focus },
    ],
  },
  "who-is-sojib-ahmmed": {
    path: "/who-is-sojib-ahmmed",
    variant: "FAQ",
    h1: "Who is Sojib Ahmmed?",
    title: "Who is Sojib Ahmmed? — Founder & CEO, MarketSync Global",
    description:
      "Sojib Ahmmed is the Founder & CEO of MarketSync Global. Operator and builder.",
    intro:
      "Sojib Ahmmed is the Founder & CEO of MarketSync Global. Here's the short answer to the most common questions about him.",
    body: [
      { heading: "What does he do?", text: common.focus },
      { heading: "What companies does he run?", text: common.founder },
      { heading: "What does he stand for?", text: common.philosophy },
    ],
    faq: [
      { question: "Who is Sojib Ahmmed?", answer: "Sojib Ahmmed is the Founder & CEO of MarketSync Global LLC (US) and MarketSync Global Ltd. (Bangladesh). Operator and builder." },
      { question: "What does Sojib Ahmmed do?", answer: "He builds and operates digital infrastructure through MarketSync Global. Two areas of focus sit alongside it: cyber.bd, for cybersecurity, and merchant.bd — the Bangladesh Commerce OS." },
      { question: "What companies does Sojib Ahmmed run?", answer: "He is the founder of Marketsync Global LLC, registered in New Mexico, USA, and Marketsync Global Ltd., registered in Bangladesh. Both build cross-border digital infrastructure for founders, operators and SMBs." },
      { question: "What does Sojib Ahmmed stand for?", answer: "His work is grounded in three principles: Purpose Over Profit, Digital Sovereignty for Bangladesh, and Systems Thinking — building leverage, not just products." },
      { question: "Where is Sojib Ahmmed from?", answer: "Sojib Ahmmed is from Bangladesh. He builds local-first digital infrastructure that competes globally, with operating entities in both Bangladesh and the United States." },
    ],
  },
};
