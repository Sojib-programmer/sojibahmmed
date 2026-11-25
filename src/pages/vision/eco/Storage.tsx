import { EcosystemExplainer, type ExplainerContent } from "../EcosystemExplainer";

const DATA: ExplainerContent = {
  slug: "storage", image: "/vision/ecosystem/storage.webp",
  hero: {
    eyebrow: { bn: "Sovereign Cloud", en: "Sovereign Cloud" },
    title: { bn: "Storage.bd — দেশের নিজের ক্লাউড", en: "Storage.bd — Our Own Cloud" },
    promise: { bn: "Local cloud, global standard। বাংলাদেশের data বাংলাদেশেই।", en: "Local cloud, global standard. Bangladesh's data stays in Bangladesh." },
  },
  whatIsIt: { bn: "S3-compatible sovereign cloud — file, CDN, backup, vault।", en: "S3-compatible sovereign cloud — file, CDN, backup, vault." },
  whyNeeded: { bn: "৯০%+ business AWS-এ — মানে দেশের data বিদেশে।", en: "90%+ business runs on AWS — citizen data sits abroad." },
  components: [
    { name: "Storage Vault", desc: { bn: "AES-256 encrypted।", en: "AES-256 encrypted." } },
    { name: "Storage API", desc: { bn: "S3-compatible।", en: "S3-compatible." } },
    { name: "Backup", desc: { bn: "Auto, cross-region।", en: "Auto, cross-region." } },
    { name: "Enterprise", desc: { bn: "Multi-tenant, RBAC।", en: "Multi-tenant, RBAC." } },
    { name: "CDN Network", desc: { bn: "Edge node।", en: "Edge nodes." } },
    { name: "KYC Vault", desc: { bn: "KYC-এর জন্য vault।", en: "Vault for KYC docs." } },
  ],
  howItWorks: [
    { title: { bn: "S3 upload", en: "S3 upload" }, body: { bn: "যেকোনো S3 SDK।", en: "Any S3 SDK." } },
    { title: { bn: "Edge encrypt", en: "Edge encrypt" }, body: { bn: "AES-256।", en: "AES-256." } },
    { title: { bn: "Multi-zone", en: "Multi-zone" }, body: { bn: "৩ zone।", en: "Three zones." } },
    { title: { bn: "CDN serve", en: "CDN serve" }, body: { bn: "Nearest edge।", en: "Nearest edge." } },
  ],
  interconnections: { bn: "kyc.bd, auth.bd, marketplaces.bd, wallet.bd — সব storage.bd-এ।", en: "kyc.bd, auth.bd, marketplaces.bd, wallet.bd — all on storage.bd." },
  siblingLinks: [
    { to: "/vision/ecosystem/super", label: { bn: "Super Ecosystem", en: "Super Ecosystem" } },
    { to: "/vision/ecosystem/infrastructure", label: { bn: "Infrastructure", en: "Infrastructure" } },
    { to: "/vision/ecosystem/layers", label: { bn: "Layered Architecture", en: "Layered Architecture" } },
  ],
  provenModels: [
    { name: "India MeghRaj", url: "https://meity.gov.in/cloud-computing", takeaway: { bn: "সরকারি sovereign cloud।", en: "Sovereign government cloud." } },
    { name: "Estonia Data Embassy", url: "https://e-estonia.com/", takeaway: { bn: "Cross-border sovereignty।", en: "Cross-border sovereignty." } },
    { name: "MinIO / Ceph", url: "https://min.io/", takeaway: { bn: "Self-hostable S3।", en: "Self-hostable S3." } },
    { name: "Singapore GovTech", url: "https://www.tech.gov.sg/", takeaway: { bn: "Standardized cloud।", en: "Standardized cloud." } },
  ],
  roadmap: [
    { phase: { bn: "বছর ১", en: "Year 1" }, goal: { bn: "DC + SDK + 10 pilot।", en: "DC + SDK + 10 pilots." } },
    { phase: { bn: "বছর ২", en: "Year 2" }, goal: { bn: "৩-zone CDN + KYC vault।", en: "3-zone CDN + KYC vault." } },
    { phase: { bn: "বছর ৩", en: "Year 3" }, goal: { bn: "Gov workload migration।", en: "Gov workload migration." } },
  ],
  risks: [
    { risk: { bn: "Hardware cost।", en: "Hardware cost." }, mitigation: { bn: "PPP, renewable power।", en: "PPP, renewable power." } },
    { risk: { bn: "Skill gap।", en: "Skill gap." }, mitigation: { bn: "BCC training।", en: "BCC training." } },
    { risk: { bn: "Disaster (flood)।", en: "Disaster risk." }, mitigation: { bn: "Geo-redundant।", en: "Geo-redundant." } },
  ],
};

export default function VisionStorage() { return <EcosystemExplainer content={DATA} />; }
