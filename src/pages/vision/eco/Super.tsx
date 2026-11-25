import { EcosystemExplainer, type ExplainerContent } from "../EcosystemExplainer";

const SUPER: ExplainerContent = {
  slug: "super", image: "/vision/ecosystem/super.webp",
  hero: {
    eyebrow: { bn: "Super Ecosystem", en: "Super Ecosystem" },
    title: { bn: "Bangladesh Digital Super Ecosystem", en: "Bangladesh Digital Super Ecosystem" },
    promise: { bn: "এক পরিচয়। এক নেটওয়ার্ক। অসীম সম্ভাবনা — ১৮ কোটি মানুষের জন্য unified digital backbone।", en: "One identity. One network. Endless possibilities — a unified digital backbone for 180M people." },
  },
  whatIsIt: { bn: "একটি ছাতা platform যেখানে auth.bd, kyc.bd, wallet.bd, 1pay.bd, ticrupay, checkout.bd ও cyber.bd একটি unified API gateway দিয়ে কথা বলে।", en: "An umbrella platform where auth.bd, kyc.bd, wallet.bd, 1pay.bd, ticrupay, checkout.bd and cyber.bd speak through one API gateway." },
  whyNeeded: { bn: "আজ একজন বাংলাদেশিকে ব্যাংক, telco, eCommerce, সরকারি দপ্তরে আলাদা KYC দিতে হয়। Super ecosystem এই ঘর্ষণ সরায়।", en: "Today citizens submit separate KYC at banks, telcos, eCommerce and govt offices. A super ecosystem kills that friction." },
  components: [
    { name: "auth.bd", desc: { bn: "SSO/OAuth একক লগইন।", en: "SSO/OAuth single sign-on." } },
    { name: "kyc.bd", desc: { bn: "NID, biometric, AML check।", en: "NID, biometric, AML checks." } },
    { name: "wallet.bd", desc: { bn: "Store/send/receive/pay।", en: "Store/send/receive/pay." } },
    { name: "1pay.bd", desc: { bn: "Card, bank, QR — এক API।", en: "Cards, bank, QR — one API." } },
    { name: "ticrupay", desc: { bn: "Cross-border remittance।", en: "Cross-border remittance." } },
    { name: "checkout.bd", desc: { bn: "যেকোনো eCom-এ এক ক্লিকে checkout।", en: "One-click checkout for any eCom." } },
    { name: "cyber.bd", desc: { bn: "Fraud, threat, DDoS protection।", en: "Fraud, threat, DDoS protection." } },
    { name: "marketplaces.bd", desc: { bn: "B2B/B2C marketplace।", en: "B2B/B2C marketplace." } },
  ],
  howItWorks: [
    { title: { bn: "একবার যাচাই", en: "Verify once" }, body: { bn: "kyc.bd-তে NID, ছবি, biometric।", en: "kyc.bd with NID, photo, biometric." } },
    { title: { bn: "Token issue", en: "Token issued" }, body: { bn: "auth.bd signed OAuth token দেয়।", en: "auth.bd issues a signed OAuth token." } },
    { title: { bn: "Minimum data", en: "Minimum data" }, body: { bn: "Selective disclosure।", en: "Selective disclosure." } },
    { title: { bn: "Unified rail", en: "Unified rail" }, body: { bn: "1pay.bd/wallet.bd rail-এ real-time settle।", en: "Money moves on 1pay.bd/wallet.bd rails." } },
    { title: { bn: "cyber.bd সব দেখে", en: "cyber.bd watches all" }, body: { bn: "Anomaly পেলে block।", en: "Anomalies blocked instantly." } },
  ],
  interconnections: { bn: "Storage.bd, layered architecture, deshi.bd ও infrastructure — সবাই এই ecosystem-এর উপর দাঁড়িয়ে।", en: "Storage.bd, layered architecture, deshi.bd and infrastructure all rest on this super ecosystem." },
  siblingLinks: [
    { to: "/vision/ecosystem/storage", label: { bn: "Storage.bd", en: "Storage.bd" } },
    { to: "/vision/ecosystem/layers", label: { bn: "Layered Architecture", en: "Layered Architecture" } },
    { to: "/vision/ecosystem/future", label: { bn: "Digital Future", en: "Digital Future" } },
    { to: "/vision/ecosystem/deshi", label: { bn: "deshi.bd OS", en: "deshi.bd OS" } },
    { to: "/vision/ecosystem/interconnection", label: { bn: "Master Map", en: "Master Map" } },
  ],
  provenModels: [
    { name: "India Stack (Aadhaar + UPI + DigiLocker)", url: "https://www.indiastack.org/", takeaway: { bn: "১৪০ কোটি মানুষের একক digital identity।", en: "Single digital identity for 1.4B." } },
    { name: "Brazil — GOV.BR + PIX", url: "https://www.gov.br/", takeaway: { bn: "১৭ কোটি নাগরিক, ৪০০০+ সেবা।", en: "170M citizens, 4,000+ services." } },
    { name: "Estonia — X-Road", url: "https://e-estonia.com/", takeaway: { bn: "Centralized DB ছাড়া secure data exchange।", en: "Secure data exchange with no central DB." } },
    { name: "Singapore — Singpass", url: "https://www.singpass.gov.sg/", takeaway: { bn: "৯৭% নাগরিকের Singpass।", en: "97% of citizens use Singpass." } },
  ],
  roadmap: [
    { phase: { bn: "বছর ১", en: "Year 1" }, goal: { bn: "auth.bd + kyc.bd MVP।", en: "auth.bd + kyc.bd MVP." } },
    { phase: { bn: "বছর ২", en: "Year 2" }, goal: { bn: "wallet.bd + 1pay.bd launch।", en: "wallet.bd + 1pay.bd launch." } },
    { phase: { bn: "বছর ৩", en: "Year 3" }, goal: { bn: "marketplaces + checkout।", en: "marketplaces + checkout." } },
    { phase: { bn: "বছর ৫", en: "Year 5" }, goal: { bn: "ticrupay cross-border default।", en: "ticrupay cross-border default." } },
  ],
  risks: [
    { risk: { bn: "Single point of failure।", en: "Single point of failure." }, mitigation: { bn: "Federated identity, zero-trust।", en: "Federated identity, zero-trust." } },
    { risk: { bn: "Privacy concerns।", en: "Privacy concerns." }, mitigation: { bn: "Selective disclosure, audit log।", en: "Selective disclosure, audit log." } },
  ],
};

export default function VisionSuper() { return <EcosystemExplainer content={SUPER} />; }
