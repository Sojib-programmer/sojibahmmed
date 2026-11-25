import { EcosystemExplainer, type ExplainerContent } from "../EcosystemExplainer";

const DATA: ExplainerContent = {
  slug: "ticrupay", image: "/vision/ecosystem/super.webp",
  hero: {
    eyebrow: { bn: "ticru.com — ticrupay", en: "ticru.com — ticrupay" },
    title: { bn: "ticrupay — দক্ষিণ এশিয়ার সীমান্তবিহীন payment rail", en: "ticrupay — South Asia's Borderless Payment Rail" },
    promise: { bn: "১ সেকেন্ডে remittance, ১% এর নিচে fee, ২৪/৭ settlement।", en: "1-second remittance, sub-1% fees, 24/7 settlement." },
  },
  whatIsIt: { bn: "ticru.com-এর cross-border payment ও remittance layer।", en: "The cross-border payments and remittance layer of ticru.com." },
  whyNeeded: { bn: "Bangladesh বছরে ২৩বিলিয়ন ডলার remittance — গড় cost ৪.৩%।", en: "Bangladesh receives $23B in remittance — average cost still 4.3%." },
  components: [
    { name: "ticru.send", desc: { bn: "প্রবাসী app।", en: "Migrant app." } },
    { name: "ticru.receive", desc: { bn: "Recipient wallet।", en: "Recipient wallet." } },
    { name: "FX Engine", desc: { bn: "Mid-market rate।", en: "Mid-market FX." } },
    { name: "ISO 20022 Rail", desc: { bn: "Bank standard messaging।", en: "Bank standard messaging." } },
    { name: "AML", desc: { bn: "OFAC, BFIU screening।", en: "OFAC, BFIU screening." } },
    { name: "Multi-currency Ledger", desc: { bn: "BDT, USD, INR, NPR।", en: "BDT, USD, INR, NPR." } },
    { name: "Merchant API", desc: { bn: "Exporter payout।", en: "Exporter payouts." } },
    { name: "Compliance Hub", desc: { bn: "Bangladesh Bank reporting।", en: "Bangladesh Bank reporting." } },
  ],
  howItWorks: [
    { title: { bn: "Migrant send", en: "Migrant sends" }, body: { bn: "Dubai থেকে bKash।", en: "Dubai to bKash." } },
    { title: { bn: "KYC check", en: "KYC check" }, body: { bn: "১ সেকেন্ডে pass।", en: "Clears in <1s." } },
    { title: { bn: "FX lock", en: "FX lock" }, body: { bn: "Mid-market rate।", en: "Mid-market rate." } },
    { title: { bn: "Settlement", en: "Settlement" }, body: { bn: "ISO 20022 → bKash।", en: "ISO 20022 → bKash." } },
    { title: { bn: "Receipt", en: "Receipt" }, body: { bn: "Digital receipt।", en: "Digital receipt." } },
    { title: { bn: "Reverse flow", en: "Reverse flow" }, body: { bn: "Freelancer USD।", en: "Freelancer USD." } },
  ],
  interconnections: { bn: "wallet.bd ও 1pay.bd-এর উপর, auth.bd থেকে identity।", en: "Sits on wallet.bd and 1pay.bd, identity from auth.bd." },
  siblingLinks: [
    { to: "/vision/ecosystem/super", label: { bn: "Super Ecosystem", en: "Super Ecosystem" } },
    { to: "/vision/ecosystem/storage", label: { bn: "Storage.bd", en: "Storage.bd" } },
    { to: "/vision/ecosystem/layers", label: { bn: "Layered Architecture", en: "Layered Architecture" } },
  ],
  provenModels: [
    { name: "India UPI", url: "https://www.npci.org.in/", takeaway: { bn: "মাসে ১৮+B transaction।", en: "18B+ tx/month." } },
    { name: "Brazil PIX", url: "https://www.bcb.gov.br/", takeaway: { bn: "#১ payment method।", en: "Brazil's #1 method." } },
    { name: "Philippines InstaPay/GCash", url: "https://www.bsp.gov.ph/", takeaway: { bn: "Cost ৫% → ১%।", en: "Cost cut from 5% to 1%." } },
    { name: "BIS Project Nexus", url: "https://www.bis.org/", takeaway: { bn: "RTP interlink blueprint।", en: "RTP interlink blueprint." } },
    { name: "Wise (TransferWise)", url: "https://wise.com/", takeaway: { bn: "Mid-market FX।", en: "Mid-market FX." } },
    { name: "World Bank Remittance Prices", url: "https://remittanceprices.worldbank.org/", takeaway: { bn: "Cost ৪.৩% — market gap।", en: "4.3% cost — market gap." } },
  ],
  roadmap: [
    { phase: { bn: "বছর ১", en: "Year 1" }, goal: { bn: "BB sandbox, UAE/KSA corridor।", en: "BB sandbox, UAE/KSA corridor." } },
    { phase: { bn: "বছর ২", en: "Year 2" }, goal: { bn: "UPI/eSewa interlink।", en: "UPI/eSewa interlink." } },
    { phase: { bn: "বছর ৩", en: "Year 3" }, goal: { bn: "Multi-country hub।", en: "Multi-country hub." } },
    { phase: { bn: "বছর ৫", en: "Year 5" }, goal: { bn: "South Asia default rail।", en: "South Asia default rail." } },
  ],
  risks: [
    { risk: { bn: "Regulator friction।", en: "Regulator friction." }, mitigation: { bn: "Sandbox-first।", en: "Sandbox-first." } },
    { risk: { bn: "Hundi pushback।", en: "Hundi pushback." }, mitigation: { bn: "BFIU live feed।", en: "BFIU live feed." } },
    { risk: { bn: "FX volatility।", en: "FX volatility." }, mitigation: { bn: "Pre-funded pool।", en: "Pre-funded pool." } },
    { risk: { bn: "Rural divide।", en: "Rural divide." }, mitigation: { bn: "USSD, agent।", en: "USSD, agent network." } },
  ],
};

export default function VisionTicrupay() { return <EcosystemExplainer content={DATA} />; }
