import { EcosystemExplainer, type ExplainerContent } from "../EcosystemExplainer";

const DATA: ExplainerContent = {
  slug: "infrastructure", image: "/vision/ecosystem/infrastructure.webp",
  hero: {
    eyebrow: { bn: "Infrastructure Layer", en: "Infrastructure Layer" },
    title: { bn: "Physical + cloud — জাতির ডিজিটাল মেরুদণ্ড", en: "Physical + cloud — the nation's digital spine" },
    promise: { bn: "Datacentre, fibre, edge, sovereign cloud।", en: "Datacentres, fibre, edge, sovereign cloud." },
  },
  whatIsIt: { bn: "Server, GPU, fibre, IXP, edge node — দেশের মাটিতে।", en: "Servers, GPUs, fibre, IXPs, edge nodes — on the country's soil." },
  whyNeeded: { bn: "AWS Mumbai-তে BD data মানে sovereignty নেই।", en: "Hosting in AWS Mumbai means no sovereignty." },
  components: [
    { name: "Tier-3+ datacentres", desc: { bn: "Dhaka, Chattogram, Sylhet।", en: "Dhaka, Chattogram, Sylhet." } },
    { name: "Sovereign cloud", desc: { bn: "BD-jurisdiction IaaS।", en: "BD-jurisdiction IaaS." } },
    { name: "GPU farm", desc: { bn: "Bangla LLM training।", en: "Bangla LLM training." } },
    { name: "National IXP", desc: { bn: "Domestic traffic দেশে।", en: "Domestic traffic stays domestic." } },
    { name: "Edge nodes", desc: { bn: "জেলায় POP।", en: "POP in every district." } },
    { name: "Fibre backbone", desc: { bn: "Dark fibre redundancy।", en: "Dark fibre redundancy." } },
  ],
  howItWorks: [
    { title: { bn: "User request", en: "User request" }, body: { bn: "Edge POP-এ যায়।", en: "Hits nearest edge POP." } },
    { title: { bn: "Edge cache", en: "Edge cache" }, body: { bn: "Cacheable serve।", en: "Cacheable content served." } },
    { title: { bn: "Cloud compute", en: "Cloud compute" }, body: { bn: "BD soil-এ চলে।", en: "Runs on BD soil." } },
    { title: { bn: "Audit log", en: "Audit log" }, body: { bn: "Regulator visible।", en: "Visible to regulator." } },
  ],
  interconnections: { bn: "1drive.bd, gov-tech.bd, ticrupay সব এই infrastructure-এ host।", en: "1drive.bd, gov-tech.bd, ticrupay all host here." },
  siblingLinks: [
    { to: "/vision/ecosystem/storage", label: { bn: "Sovereign Storage", en: "Sovereign Storage" } },
    { to: "/vision/ecosystem/deshi", label: { bn: "deshi OS", en: "deshi OS" } },
    { to: "/vision/ecosystem/layers", label: { bn: "Layered Architecture", en: "Layered Architecture" } },
  ],
  provenModels: [
    { name: "China — Eastern Data, Western Computing", url: "https://www.scmp.com/", takeaway: { bn: "জাতীয় compute strategy।", en: "National compute strategy." } },
    { name: "India — MeghRaj", url: "https://meghraj.gov.in/", takeaway: { bn: "Government cloud।", en: "Government cloud." } },
    { name: "Singapore — IMDA", url: "https://www.imda.gov.sg/", takeaway: { bn: "ছোট দেশও sovereign stack চালাতে পারে।", en: "Small countries can run sovereign stacks." } },
  ],
  roadmap: [
    { phase: { bn: "বছর ১", en: "Year 1" }, goal: { bn: "DC + IXP + ৮ POP।", en: "DC + IXP + 8 POPs." } },
    { phase: { bn: "বছর ২-৩", en: "Year 2-3" }, goal: { bn: "Sovereign cloud beta।", en: "Sovereign cloud beta." } },
    { phase: { bn: "বছর ৪-৫", en: "Year 4-5" }, goal: { bn: "64-জেলা edge।", en: "Edge in 64 districts." } },
  ],
  risks: [
    { risk: { bn: "Capex বিশাল।", en: "Massive capex." }, mitigation: { bn: "PPP, anchor tenant।", en: "PPP, anchor tenant." } },
    { risk: { bn: "Skill gap।", en: "Skill gap." }, mitigation: { bn: "Training program।", en: "Training program." } },
  ],
};

export default function VisionInfrastructure() { return <EcosystemExplainer content={DATA} />; }
