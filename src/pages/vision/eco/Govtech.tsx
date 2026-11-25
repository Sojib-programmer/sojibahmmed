import { EcosystemExplainer, type ExplainerContent } from "../EcosystemExplainer";

const DATA: ExplainerContent = {
  slug: "govtech", image: "/vision/ecosystem/super.webp",
  hero: {
    eyebrow: { bn: "মতামত · GovTech", en: "Opinion · GovTech" },
    title: { bn: "gov-tech.bd — Pixel-Perfect সরকারি ডিজিটাল চেহারা", en: "gov-tech.bd — A Pixel-Perfect Face for Digital Government" },
    promise: { bn: "Estonia, India ও Singapore-এর পথ ধরে unified, fast, pixel-perfect portal।", en: "Following Estonia, India and Singapore — one unified, fast, pixel-perfect portal." },
  },
  whatIsIt: { bn: "Passport, NID, tax, land — এক design language, এক auth, এক API contract।", en: "Passport, NID, tax, land — one design language, one auth, one API contract." },
  whyNeeded: { bn: "আজ আলাদা site, আলাদা login। Single front door মানে সময় বাঁচে।", en: "Today separate sites and logins. A single front door saves time." },
  components: [
    { name: "Unified Portal Shell", desc: { bn: "এক header, এক footer।", en: "One header, one footer." } },
    { name: "auth.bd SSO", desc: { bn: "এক login।", en: "One login." } },
    { name: "Service Registry", desc: { bn: "Typed API।", en: "Typed APIs." } },
    { name: "Design System", desc: { bn: "Token-driven, WCAG AA।", en: "Token-driven, WCAG AA." } },
    { name: "Audit Log", desc: { bn: "Public-verifiable।", en: "Publicly verifiable." } },
    { name: "SLA Dashboard", desc: { bn: "নাগরিক জানে কখন শেষ।", en: "Citizens see when requests complete." } },
  ],
  howItWorks: [
    { title: { bn: "নাগরিক gov-tech.bd-এ", en: "Citizen lands on gov-tech.bd" }, body: { bn: "Instant load।", en: "Instant load." } },
    { title: { bn: "auth.bd login", en: "Logs in via auth.bd" }, body: { bn: "Biometric/OTP।", en: "Biometric or OTP." } },
    { title: { bn: "সেবা select", en: "Selects a service" }, body: { bn: "Same UI pattern।", en: "Same UI pattern." } },
    { title: { bn: "Form auto-fill", en: "Form auto-fills" }, body: { bn: "kyc.bd verified data।", en: "Verified data from kyc.bd." } },
    { title: { bn: "1pay.bd fee", en: "Pays via 1pay.bd" }, body: { bn: "Same checkout।", en: "Same checkout." } },
    { title: { bn: "Status track", en: "Tracks status" }, body: { bn: "Real-time।", en: "Real-time." } },
  ],
  interconnections: { bn: "kyc.bd, auth.bd, 1pay.bd, storage.bd সব use করে।", en: "Consumes kyc.bd, auth.bd, 1pay.bd, storage.bd." },
  siblingLinks: [
    { to: "/vision/ecosystem/super", label: { bn: "Super Ecosystem", en: "Super Ecosystem" } },
    { to: "/vision/ecosystem/layers", label: { bn: "Layers", en: "Layers" } },
    { to: "/vision/ecosystem/ticrupay", label: { bn: "ticrupay", en: "ticrupay" } },
    { to: "/vision/ecosystem/storage", label: { bn: "Storage", en: "Storage" } },
  ],
  provenModels: [
    { name: "Estonia e-Estonia", url: "https://e-estonia.com/", takeaway: { bn: "৯৯% সরকারি সেবা online।", en: "99% of services online." } },
    { name: "India DigiLocker", url: "https://www.digilocker.gov.in/", takeaway: { bn: "১৫০M+ user।", en: "150M+ users." } },
    { name: "Singapore Singpass", url: "https://www.singpass.gov.sg/", takeaway: { bn: "এক login, ২০০০+ সেবা।", en: "One login, 2000+ services." } },
    { name: "UK GOV.UK Design System", url: "https://design-system.service.gov.uk/", takeaway: { bn: "Global benchmark।", en: "The global benchmark." } },
  ],
  roadmap: [
    { phase: { bn: "বছর ১", en: "Year 1" }, goal: { bn: "Design system + 3 pilot।", en: "Design system + 3 pilot services." } },
    { phase: { bn: "বছর ২", en: "Year 2" }, goal: { bn: "১০ মন্ত্রণালয় migrate।", en: "10 ministries migrated." } },
    { phase: { bn: "বছর ৩", en: "Year 3" }, goal: { bn: "সব central সেবা এক portal-এ।", en: "All central services on one portal." } },
    { phase: { bn: "বছর ৫", en: "Year 5" }, goal: { bn: "Local government integration।", en: "Local government integration." } },
  ],
  risks: [
    { risk: { bn: "Political resistance।", en: "Political resistance." }, mitigation: { bn: "Top-down mandate + quick wins।", en: "Top-down mandate + quick wins." } },
    { risk: { bn: "Single point of failure।", en: "Single point of failure." }, mitigation: { bn: "Multi-region, zero-trust।", en: "Multi-region, zero-trust." } },
    { risk: { bn: "Digital divide।", en: "Digital divide." }, mitigation: { bn: "UDC, USSD fallback।", en: "UDC, USSD fallback." } },
  ],
};

export default function VisionGovtech() { return <EcosystemExplainer content={DATA} />; }
