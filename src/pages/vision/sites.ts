// Marketsync Global — 7 rails × 3 phases registry (ported)
export type Phase = 1 | 2 | 3;
export type Rail = "identity" | "consumer" | "commerce" | "capital" | "govSaaS" | "workforce" | "data";
export type Status = "live" | "alpha" | "planned";

export interface Site {
  slug: string;
  domain: string;
  bn: string;
  en: string;
  rail: Rail;
  phase: Phase;
  status: Status;
  externalTo?: string;
  problemBn: string;
  problemEn: string;
  solutionBn: string;
  solutionEn: string;
  scopeBn: string;
  scopeEn: string;
  stack?: string[];
}

export const railLabel: Record<Rail, { bn: string; en: string }> = {
  identity:  { bn: "পরিচয়",        en: "Identity" },
  consumer:  { bn: "কনজ্যুমার",      en: "Consumer" },
  commerce:  { bn: "কমার্স",        en: "Commerce" },
  capital:   { bn: "ক্যাপিটাল",     en: "Capital" },
  govSaaS:   { bn: "সরকারি SaaS",  en: "Gov-SaaS" },
  workforce: { bn: "শ্রমশক্তি",      en: "Workforce" },
  data:      { bn: "ডেটা ও শিক্ষা",  en: "Data & Learning" },
};

export const phaseLabel: Record<Phase, { bn: string; en: string; tag: string }> = {
  1: { bn: "ধাপ ১ — Capture",   en: "Phase 1 — Capture",   tag: "Year 1" },
  2: { bn: "ধাপ ২ — Expand",    en: "Phase 2 — Expand",    tag: "Year 2-3" },
  3: { bn: "ধাপ ৩ — Dominate",  en: "Phase 3 — Dominate",  tag: "Year 4-5" },
};

export const sites: Site[] = [
  { slug: "kyc-bd", domain: "kyc.bd", bn: "কেওয়াইসি", en: "KYC", rail: "identity", phase: 1, status: "alpha",
    problemBn: "বাংলাদেশে প্রতিটি ব্যাংক, MFS, টেলকো ও সরকারি অফিস আলাদা KYC চালায়। একই নাগরিক ৩০+ বার NID জমা দেয়, কাগজে স্বাক্ষর করে — তবু fraud কমে না।",
    problemEn: "Every bank, MFS, telco and gov office runs its own KYC. The same citizen submits NID 30+ times yet fraud keeps rising.",
    solutionBn: "এক-বার verified KYC যা consent-driven API দিয়ে যে কোনো regulated service পুনঃব্যবহার করতে পারে।",
    solutionEn: "A verify-once KYC reusable by any regulated service through consent-driven APIs.",
    scopeBn: "TAM: ১২ কোটি adult। Revenue: per-verification fee + platform fee।",
    scopeEn: "TAM: 120M adults. Revenue: per-verification + platform fee.",
    stack: ["NID API", "Liveness biometrics", "Consent ledger", "Sanctions screening"] },
  { slug: "1pay-bd", domain: "1pay.bd", bn: "১পে", en: "1Pay", rail: "consumer", phase: 1, status: "alpha",
    problemBn: "bKash, Nagad, Rocket, Upay — প্রতিটি wallet একে অপরের সাথে কথা বলে না।",
    problemEn: "bKash, Nagad, Rocket and Upay don't talk to each other.",
    solutionBn: "এক consumer wallet — সব MFS, bank account ও card-এর উপর interoperable rail।",
    solutionEn: "One consumer wallet on top of every MFS, bank account and card.",
    scopeBn: "TAM: ৫ কোটি smartphone user।", scopeEn: "TAM: 50M smartphone users.",
    stack: ["Interop QR", "Bank rails", "Wallet ledger", "Push auth"] },
  { slug: "ticrupay", domain: "ticrupay", bn: "টিকরুপে", en: "TicruPay", rail: "commerce", phase: 1, status: "live", externalTo: "/vision/ecosystem/ticrupay",
    problemBn: "Online merchant-কে ৪+ PSP integrate করতে হয়, settlement T+5।", problemEn: "Online merchants integrate 4+ PSPs, settlement is T+5.",
    solutionBn: "Single SDK যা সব MFS, card ও bank rail ধরে।", solutionEn: "Single SDK that aggregates every MFS, card and bank rail.",
    scopeBn: "TAM: ২ লাখ digital merchant।", scopeEn: "TAM: 200k digital merchants.",
    stack: ["Checkout SDK", "Settlement engine", "Refund automation"] },
  { slug: "fin-tech-bd", domain: "fin-tech.bd", bn: "ফিনটেক", en: "Fin-Tech", rail: "capital", phase: 1, status: "planned",
    problemBn: "৬০+ ব্যাংক, ৩৫+ NBFI, কোনো unified open-finance API নেই।", problemEn: "60+ banks, 35+ NBFIs, no unified open-finance API.",
    solutionBn: "Account aggregator + credit bureau + lending marketplace।", solutionEn: "Account aggregator + credit bureau + lending marketplace.",
    scopeBn: "TAM: ১ কোটি SME + retail।", scopeEn: "TAM: 10M SMEs + retail.",
    stack: ["AA framework", "Cashflow scoring", "Lender marketplace"] },
  { slug: "gov-tech-bd", domain: "gov-tech.bd", bn: "গভটেক", en: "Gov-Tech", rail: "govSaaS", phase: 1, status: "live", externalTo: "/vision/ecosystem/govtech",
    problemBn: "Passport, NID, tax, license — প্রতিটি সেবা আলাদা website।", problemEn: "Passport, NID, tax, license — every service on its own site.",
    solutionBn: "এক gov-tech portal: SSO, unified payment, status tracking।", solutionEn: "One gov-tech portal: SSO, unified payments, status tracking.",
    scopeBn: "TAM: ১৭ কোটি নাগরিক।", scopeEn: "TAM: 170M citizens.",
    stack: ["SSO", "Payment gateway", "Service catalog", "Audit ledger"] },
  { slug: "hrtech-bd", domain: "HRtech.bd", bn: "এইচআর-টেক", en: "HR-Tech", rail: "workforce", phase: 1, status: "planned",
    problemBn: "৫ কোটি worker, payroll কাগজে, attendance manual।", problemEn: "50M workers, paper payroll, manual attendance.",
    solutionBn: "Cloud payroll + biometric attendance + worker wallet।", solutionEn: "Cloud payroll + biometric attendance + worker wallet.",
    scopeBn: "TAM: ১ লাখ employer।", scopeEn: "TAM: 100k employers.",
    stack: ["Payroll engine", "Biometric clock", "Statutory filing"] },
  { slug: "edtech-bd", domain: "edtech.bd", bn: "এডটেক", en: "Ed-Tech", rail: "data", phase: 1, status: "planned",
    problemBn: "৪ কোটি ছাত্র, ১টি verified transcript নেই।", problemEn: "40M students, no verified transcript.",
    solutionBn: "National student ID + tamper-proof transcript + skills passport।", solutionEn: "National student ID + tamper-proof transcript + skills passport.",
    scopeBn: "TAM: ১.৫ লাখ institution।", scopeEn: "TAM: 150k institutions.",
    stack: ["Cred ledger", "Issuer console", "Verifier API"] },
  { slug: "individuals-bd", domain: "individuals.bd", bn: "ইন্ডিভিজুয়ালস", en: "Individuals", rail: "identity", phase: 2, status: "planned",
    problemBn: "নাগরিকের ছড়িয়ে-থাকা তথ্য কেউ সমন্বিত করতে পারে না।", problemEn: "Citizen data scattered across services, nobody unifies it.",
    solutionBn: "Citizen-owned data vault: consent-locked, portable।", solutionEn: "Citizen-owned data vault: consent-locked, portable.",
    scopeBn: "TAM: ১২ কোটি adult।", scopeEn: "TAM: 120M adults.",
    stack: ["Data vault", "Consent receipts", "Portability API"] },
  { slug: "1box-bd", domain: "1box.bd", bn: "১বক্স", en: "1Box", rail: "consumer", phase: 2, status: "planned",
    problemBn: "Inbox-এ ১২ ব্যাংক SMS, ৬ utility বিল — সব ছড়ানো।", problemEn: "Inbox of 12 bank SMS, 6 utility bills, all scattered.",
    solutionBn: "এক unified inbox, regulated sender verified, bill-pay one-tap।", solutionEn: "One unified inbox: verified senders, one-tap bill-pay.",
    scopeBn: "TAM: ৫ কোটি digital household।", scopeEn: "TAM: 50M digital households.",
    stack: ["Verified sender", "Bill rail", "OCR ingest"] },
  { slug: "wallet-bd", domain: "wallet.bd", bn: "ওয়ালেট", en: "Wallet", rail: "commerce", phase: 2, status: "planned",
    problemBn: "Cross-border remittance খরচ ৬-৮%, time ২-৩ দিন।", problemEn: "Cross-border remittance costs 6-8%, takes 2-3 days.",
    solutionBn: "Multi-currency wallet: BDT, USD, EUR, AED — instant FX।", solutionEn: "Multi-currency wallet with instant FX, Wise-grade rates.",
    scopeBn: "TAM: ১ কোটি RMG worker + ২০ লাখ freelancer।", scopeEn: "TAM: 10M overseas workers + 2M freelancers.",
    stack: ["Multi-currency ledger", "Corridor FX", "Card issuing"] },
  { slug: "lending-bd", domain: "lending.bd", bn: "লেন্ডিং", en: "Lending", rail: "capital", phase: 2, status: "planned",
    problemBn: "Personal loan, working capital, BNPL — সব fragmented।", problemEn: "Personal loans, working capital, BNPL — all fragmented.",
    solutionBn: "Real-time cashflow underwriting; lender marketplace।", solutionEn: "Real-time cashflow underwriting; lender marketplace.",
    scopeBn: "TAM: BDT 5 trillion credit gap।", scopeEn: "TAM: BDT 5T credit gap.",
    stack: ["Cashflow ML", "Loan ledger", "Auto-collection"] },
  { slug: "tax-bd", domain: "tax.bd", bn: "ট্যাক্স", en: "Tax", rail: "govSaaS", phase: 2, status: "planned",
    problemBn: "NBR-এর tax return এখনও কাগজে।", problemEn: "NBR returns are paper-bound.",
    solutionBn: "Pre-filled return; mobile filing; instant refund।", solutionEn: "Pre-filled returns; mobile filing; instant refund.",
    scopeBn: "TAM: ১ কোটি potential filer।", scopeEn: "TAM: 10M potential filers.",
    stack: ["Return engine", "Bank pull", "NBR adapter"] },
  { slug: "firms-bd", domain: "firms.bd", bn: "ফার্মস", en: "Firms", rail: "workforce", phase: 2, status: "planned",
    problemBn: "SME company formation, RJSC filing, VAT/TIN আলাদা।", problemEn: "SME company formation, RJSC filings, VAT/TIN all separate.",
    solutionBn: "Online incorporation, e-signature, board ledger।", solutionEn: "Online incorporation, e-signature, board ledger.",
    scopeBn: "TAM: ৫০ লাখ MSME।", scopeEn: "TAM: 5M MSMEs.",
    stack: ["RJSC adapter", "e-Sign", "Compliance calendar"] },
  { slug: "educational-bd", domain: "Educational.bd", bn: "এডুকেশনাল", en: "Educational", rail: "data", phase: 2, status: "planned",
    problemBn: "School-college LMS নেই বললেই চলে।", problemEn: "Schools have effectively no LMS.",
    solutionBn: "Mobile-first LMS + content marketplace + parent app।", solutionEn: "Mobile-first LMS + content marketplace + parent app.",
    scopeBn: "TAM: ১.৫ লাখ school, ৪ কোটি student।", scopeEn: "TAM: 150k schools, 40M students.",
    stack: ["LMS", "Content CDN", "Parent app"] },
  { slug: "auth-bd", domain: "auth.bd", bn: "অথ", en: "Auth", rail: "identity", phase: 3, status: "planned",
    problemBn: "প্রতিটি app আলাদা password চায়।", problemEn: "Every app demands its own password.",
    solutionBn: "National passkey + risk-based step-up + VC issuer।", solutionEn: "National passkey + risk-based step-up + VC issuer.",
    scopeBn: "TAM: প্রতিটি digital service।", scopeEn: "TAM: every digital service.",
    stack: ["Passkey", "VC issuer", "Risk engine"] },
  { slug: "1drive-bd", domain: "1drive.bd", bn: "১ড্রাইভ", en: "1Drive", rail: "consumer", phase: 3, status: "planned",
    problemBn: "নাগরিকের document Gmail বা WhatsApp-এ পড়ে থাকে।", problemEn: "Citizen docs sit in Gmail or WhatsApp.",
    solutionBn: "Sovereign cloud storage, encrypted, BD-jurisdiction।", solutionEn: "Sovereign cloud storage, encrypted, BD-jurisdiction.",
    scopeBn: "TAM: ৫ কোটি smartphone user।", scopeEn: "TAM: 50M smartphone users.",
    stack: ["E2E encryption", "BD data residency", "Doc OCR"] },
  { slug: "merchants-bd", domain: "merchants.bd", bn: "মার্চেন্টস", en: "Merchants", rail: "commerce", phase: 3, status: "planned",
    problemBn: "২৫ লাখ small merchant-র POS, inventory, accounting আলাদা।", problemEn: "2.5M merchants run separate POS, inventory and accounting tools.",
    solutionBn: "All-in-one merchant OS।", solutionEn: "All-in-one merchant OS.",
    scopeBn: "TAM: ২৫ লাখ merchant।", scopeEn: "TAM: 2.5M merchants.",
    stack: ["POS SDK", "Inventory", "Embedded credit"] },
  { slug: "insurance-bd", domain: "insurance.bd", bn: "ইন্স্যুরেন্স", en: "Insurance", rail: "capital", phase: 3, status: "planned",
    problemBn: "Insurance penetration ০.৫%।", problemEn: "Insurance penetration just 0.5%.",
    solutionBn: "Embedded insurance marketplace, instant claim।", solutionEn: "Embedded insurance marketplace, instant claim.",
    scopeBn: "TAM: BDT 2 trillion underserved।", scopeEn: "TAM: BDT 2T underserved.",
    stack: ["Policy engine", "Parametric oracle", "Instant payout"] },
  { slug: "license-bd", domain: "license.bd", bn: "লাইসেন্স", en: "License", rail: "govSaaS", phase: 3, status: "planned",
    problemBn: "Trade license, drug license, BSTI আলাদা desk।", problemEn: "Trade, drug, BSTI licenses each on separate desks.",
    solutionBn: "Unified e-license portal।", solutionEn: "Unified e-license portal.",
    scopeBn: "TAM: ৫০ লাখ business।", scopeEn: "TAM: 5M businesses.",
    stack: ["Workflow engine", "Inspector app", "Audit trail"] },
  { slug: "internationals-bd", domain: "internationals.bd", bn: "ইন্টারন্যাশনালস", en: "Internationals", rail: "workforce", phase: 3, status: "planned",
    problemBn: "১ কোটি প্রবাসী worker — recruitment fraud, contract abuse।", problemEn: "10M overseas workers face recruitment fraud and contract abuse.",
    solutionBn: "Verified recruiter directory + e-contract + remittance।", solutionEn: "Verified recruiter directory + e-contract + remittance.",
    scopeBn: "TAM: ১ কোটি migrant।", scopeEn: "TAM: 10M migrants.",
    stack: ["Recruiter registry", "e-Contract", "Corridor remit"] },
  { slug: "institution-bd", domain: "Institution.bd", bn: "ইনস্টিটিউশন", en: "Institution", rail: "data", phase: 3, status: "planned",
    problemBn: "University verifiable credential issue করে না।", problemEn: "Universities don't issue verifiable credentials.",
    solutionBn: "Institution OS: enrollment, exam, transcript — সব VC হিসেবে।", solutionEn: "Institution OS publishing enrollment, exam, transcript as VCs.",
    scopeBn: "TAM: ২০ হাজার tertiary institution।", scopeEn: "TAM: 20k tertiary institutions.",
    stack: ["Credential schema", "Issuer wallet", "Accreditor console"] },
];

export const sitesBySlug: Record<string, Site> = Object.fromEntries(sites.map((s) => [s.slug, s]));
export function sitesByPhase(phase: Phase): Site[] { return sites.filter((s) => s.phase === phase); }
