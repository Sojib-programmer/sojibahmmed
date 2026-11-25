import { EcosystemExplainer, type ExplainerContent } from "../EcosystemExplainer";

const DATA: ExplainerContent = {
  slug: "interconnection", image: "/vision/ecosystem/interconnection.webp",
  hero: {
    eyebrow: { bn: "Master Map", en: "Master Map" },
    title: { bn: "সব rail ও layer কীভাবে যুক্ত", en: "How every rail and layer wires together" },
    promise: { bn: "৭ rail × ৩ phase × ৬ layer = একটি graph।", en: "7 rails × 3 phases × 6 layers = one graph." },
  },
  whatIsIt: { bn: "Ecosystem-এর dependency-graph।", en: "The ecosystem's dependency graph." },
  whyNeeded: { bn: "২১টি domain — কাকে call করে, কাকে data দেয়, map দরকার।", en: "21 domains; a map removes uncertainty." },
  components: [
    { name: "Identity rail", desc: { bn: "kyc.bd → individuals.bd → auth.bd।", en: "kyc.bd → individuals.bd → auth.bd." } },
    { name: "Consumer rail", desc: { bn: "1pay.bd → 1box.bd → 1drive.bd।", en: "1pay.bd → 1box.bd → 1drive.bd." } },
    { name: "Commerce rail", desc: { bn: "ticrupay → wallet.bd → merchants.bd।", en: "ticrupay → wallet.bd → merchants.bd." } },
    { name: "Capital rail", desc: { bn: "fin-tech.bd → lending.bd → insurance.bd।", en: "fin-tech.bd → lending.bd → insurance.bd." } },
    { name: "Gov-SaaS rail", desc: { bn: "gov-tech.bd → tax.bd → license.bd।", en: "gov-tech.bd → tax.bd → license.bd." } },
    { name: "Workforce rail", desc: { bn: "HRtech.bd → firms.bd → internationals.bd।", en: "HRtech.bd → firms.bd → internationals.bd." } },
    { name: "Data rail", desc: { bn: "edtech.bd → Educational.bd → Institution.bd।", en: "edtech.bd → Educational.bd → Institution.bd." } },
  ],
  howItWorks: [
    { title: { bn: "Identity bootstrap", en: "Identity bootstrap" }, body: { bn: "প্রতিটি rail kyc.bd-তে শুরু।", en: "Every rail bootstraps via kyc.bd." } },
    { title: { bn: "Payment binding", en: "Payment binding" }, body: { bn: "1pay.bd-তে settle।", en: "Settle through 1pay.bd." } },
    { title: { bn: "Document settle", en: "Document settle" }, body: { bn: "1drive.bd-তে stored।", en: "Stored in 1drive.bd." } },
    { title: { bn: "Audit", en: "Audit" }, body: { bn: "gov-tech.bd trail।", en: "gov-tech.bd trail." } },
  ],
  interconnections: { bn: "প্রতিটি ecosystem page একটি node।", en: "Every ecosystem page is one node." },
  siblingLinks: [
    { to: "/vision/industries", label: { bn: "21 site registry", en: "21 site registry" } },
    { to: "/vision/ecosystem/super", label: { bn: "Super Ecosystem", en: "Super Ecosystem" } },
    { to: "/vision/ecosystem/layers", label: { bn: "Layered Architecture", en: "Layered Architecture" } },
    { to: "/vision/ecosystem/deshi", label: { bn: "deshi OS", en: "deshi OS" } },
  ],
  provenModels: [
    { name: "India Stack architecture", url: "https://www.indiastack.org/", takeaway: { bn: "Visual map → faster adoption।", en: "Visual map → faster adoption." } },
    { name: "AWS Service Map", url: "https://aws.amazon.com/products/", takeaway: { bn: "Map ছাড়া navigate অসম্ভব।", en: "Navigation impossible without map." } },
    { name: "Wardley Maps", url: "https://medium.com/wardleymaps", takeaway: { bn: "Strategy = visible dependency।", en: "Strategy = visible dependencies." } },
  ],
  roadmap: [
    { phase: { bn: "বছর ১", en: "Year 1" }, goal: { bn: "Static map + 21 detail page।", en: "Static map + 21 detail pages." } },
    { phase: { bn: "বছর ২", en: "Year 2" }, goal: { bn: "Live status board।", en: "Live status board." } },
    { phase: { bn: "বছর ৩+", en: "Year 3+" }, goal: { bn: "Interactive graph।", en: "Interactive graph." } },
  ],
  risks: [
    { risk: { bn: "Outdated map।", en: "Outdated map." }, mitigation: { bn: "Single source of truth।", en: "Single source of truth." } },
    { risk: { bn: "Visual complexity।", en: "Visual complexity." }, mitigation: { bn: "Progressive disclosure।", en: "Progressive disclosure." } },
  ],
};

export default function VisionInterconnection() { return <EcosystemExplainer content={DATA} />; }
