import { EcosystemExplainer, type ExplainerContent } from "../EcosystemExplainer";

const DATA: ExplainerContent = {
  slug: "layers", image: "/vision/ecosystem/layers.webp",
  hero: {
    eyebrow: { bn: "Layered Architecture", en: "Layered Architecture" },
    title: { bn: "ছয়টি স্তর — Consumer থেকে Government", en: "Six Layers — Consumer to Government" },
    promise: { bn: "৬টি spirit-level: Consumer, Identity, Business, Education, Financial, Government।", en: "Six spirit-levels: Consumer, Identity, Business, Education, Financial, Government." },
  },
  whatIsIt: { bn: "Design pattern যেখানে প্রতিটি domain আলাদা layer।", en: "A pattern where each domain stands as its own layer." },
  whyNeeded: { bn: "Monolithic scale করে না। Layer-ভিত্তিক হলে এক layer update করলে অন্য কোথাও impact পড়ে না।", en: "Monolithic systems don't scale. Layer-based updates isolate impact." },
  components: [
    { name: "Consumer Layer", desc: { bn: "1box.bd, 1drive.bd, 1pay.bd।", en: "1box.bd, 1drive.bd, 1pay.bd." } },
    { name: "Identity Layer", desc: { bn: "kyc.bd, Individuals.bd।", en: "kyc.bd, Individuals.bd." } },
    { name: "Business Layer", desc: { bn: "firms.bd, HRtech.bd।", en: "firms.bd, HRtech.bd." } },
    { name: "Education Layer", desc: { bn: "edtech.bd, Educational.bd।", en: "edtech.bd, Educational.bd." } },
    { name: "Financial Layer", desc: { bn: "fin-tech.bd।", en: "fin-tech.bd." } },
    { name: "Government Layer", desc: { bn: "gov-tech.bd।", en: "gov-tech.bd." } },
  ],
  howItWorks: [
    { title: { bn: "Request প্রবেশ", en: "Request enters" }, body: { bn: "Consumer layer থেকে call।", en: "Call from consumer layer." } },
    { title: { bn: "Identity verify", en: "Identity verifies" }, body: { bn: "auth.bd check।", en: "auth.bd check." } },
    { title: { bn: "Business/Financial process", en: "Business processes" }, body: { bn: "Transaction এখানে।", en: "Transaction here." } },
    { title: { bn: "Government audit", en: "Government audits" }, body: { bn: "Compliance log।", en: "Compliance log." } },
  ],
  interconnections: { bn: "Layer well-defined API দিয়ে কথা বলে — OSI model-এর মতো।", en: "Layers talk via well-defined APIs — like OSI." },
  siblingLinks: [
    { to: "/vision/ecosystem/super", label: { bn: "Super Ecosystem", en: "Super Ecosystem" } },
    { to: "/vision/ecosystem/deshi", label: { bn: "deshi.bd OS", en: "deshi.bd OS" } },
    { to: "/vision/ecosystem/interconnection", label: { bn: "Master Map", en: "Master Map" } },
  ],
  provenModels: [
    { name: "OSI 7-Layer Model", url: "https://en.wikipedia.org/wiki/OSI_model", takeaway: { bn: "Proven scale pattern।", en: "Proven scaling pattern." } },
    { name: "India Stack 4 Layers", url: "https://www.indiastack.org/", takeaway: { bn: "Layer-wise team।", en: "Layer-wise teams." } },
    { name: "EU DSA tiers", url: "https://digital-strategy.ec.europa.eu/", takeaway: { bn: "Proportionate compliance।", en: "Proportionate compliance." } },
  ],
  roadmap: [
    { phase: { bn: "বছর ১", en: "Year 1" }, goal: { bn: "Identity + Consumer।", en: "Identity + Consumer." } },
    { phase: { bn: "বছর ২", en: "Year 2" }, goal: { bn: "Financial + Business।", en: "Financial + Business." } },
    { phase: { bn: "বছর ৩", en: "Year 3" }, goal: { bn: "Education + Government।", en: "Education + Government." } },
  ],
  risks: [
    { risk: { bn: "Inter-layer dependency।", en: "Inter-layer dependency." }, mitigation: { bn: "API versioning।", en: "API versioning." } },
    { risk: { bn: "Slow layer।", en: "Slow layer." }, mitigation: { bn: "Circuit breaker।", en: "Circuit breaker." } },
  ],
};

export default function VisionLayers() { return <EcosystemExplainer content={DATA} />; }
