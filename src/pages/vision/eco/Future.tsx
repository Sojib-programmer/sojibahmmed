import { EcosystemExplainer, type ExplainerContent } from "../EcosystemExplainer";

const DATA: ExplainerContent = {
  slug: "future", image: "/vision/ecosystem/future.webp",
  hero: {
    eyebrow: { bn: "Future State", en: "Future State" },
    title: { bn: "AI-native, agentic, programmable জাতি", en: "An AI-native, agentic, programmable nation" },
    promise: { bn: "প্রতিটি নাগরিকের একটি AI-agent থাকবে — verifiable consent দিয়ে।", en: "Every citizen gets an AI agent under verifiable consent." },
  },
  whatIsIt: { bn: "Service আর form-fill নয় — agent-to-agent।", en: "Services aren't form-filling but agent-to-agent." },
  whyNeeded: { bn: "মানুষ form-fill করতে ক্লান্ত। AI দিয়ে friction তুললে adoption ১০x।", en: "People are exhausted by forms. Removing friction with AI lifts adoption 10x." },
  components: [
    { name: "Citizen agent", desc: { bn: "ব্যক্তির হয়ে decision।", en: "Acts on the individual's behalf." } },
    { name: "Service agent", desc: { bn: "Service-এর programmatic interface।", en: "Programmatic interface for each service." } },
    { name: "Consent ledger", desc: { bn: "Verifiable, auditable, revocable।", en: "Verifiable, auditable, revocable." } },
    { name: "Settlement rail", desc: { bn: "Agent-to-agent micropayment।", en: "Agent-to-agent micropayment." } },
  ],
  howItWorks: [
    { title: { bn: "Intent", en: "Intent" }, body: { bn: "Voice/text intent।", en: "Voice/text intent." } },
    { title: { bn: "Plan", en: "Plan" }, body: { bn: "Agent plan তৈরি করে।", en: "Agent builds a plan." } },
    { title: { bn: "Consent", en: "Consent" }, body: { bn: "Scope approve।", en: "Approves scopes." } },
    { title: { bn: "Execute", en: "Execute" }, body: { bn: "Agent-to-agent call।", en: "Agent-to-agent calls." } },
  ],
  interconnections: { bn: "auth.bd credential, 1pay.bd settle, gov-tech.bd service।", en: "auth.bd credentials, 1pay.bd settles, gov-tech.bd delivers services." },
  siblingLinks: [
    { to: "/vision/ecosystem/super", label: { bn: "Super Ecosystem", en: "Super Ecosystem" } },
    { to: "/vision/ecosystem/interconnection", label: { bn: "Master Map", en: "Master Map" } },
    { to: "/vision/ecosystem/deshi", label: { bn: "deshi OS", en: "deshi OS" } },
  ],
  provenModels: [
    { name: "India DEPA / Account Aggregator", url: "https://api.rebit.org.in/", takeaway: { bn: "Consent-driven data sharing at production scale।", en: "Consent-driven data sharing at production scale." } },
    { name: "MCP (Model Context Protocol)", url: "https://modelcontextprotocol.io/", takeaway: { bn: "Agent-to-tool standard।", en: "Agent-to-tool standard." } },
    { name: "GOV.UK Verify (sunset)", url: "https://www.gov.uk/", takeaway: { bn: "UX হারালে identity মরে যায়।", en: "Identity dies without UX." } },
  ],
  roadmap: [
    { phase: { bn: "বছর ১-২", en: "Year 1-2" }, goal: { bn: "auth.bd + consent ledger।", en: "auth.bd + consent ledger." } },
    { phase: { bn: "বছর ৩-৪", en: "Year 3-4" }, goal: { bn: "শীর্ষ ১০ service agent expose করে।", en: "Top 10 services expose agents." } },
    { phase: { bn: "বছর ৫+", en: "Year 5+" }, goal: { bn: "Citizen agent default।", en: "Citizen agent default." } },
  ],
  risks: [
    { risk: { bn: "Agent hallucinate।", en: "Agents can hallucinate." }, mitigation: { bn: "Sandboxed scopes, reversible action।", en: "Sandboxed scopes, reversible actions." } },
    { risk: { bn: "Centralised agent monopoly।", en: "Centralised agent monopoly." }, mitigation: { bn: "Open protocol, multi-vendor।", en: "Open protocol, multi-vendor." } },
  ],
};

export default function VisionFuture() { return <EcosystemExplainer content={DATA} />; }
