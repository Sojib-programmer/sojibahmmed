import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const pages = [
  { to: "/vision/ecosystem/super", domain: "super ecosystem", bn: "সুপার ইকোসিস্টেম", en: "Super Ecosystem", blurb: { bn: "এক login, এক payment, এক identity — সব service-এ।", en: "One login, one payment, one identity across all services." } },
  { to: "/vision/ecosystem/layers", domain: "layered architecture", bn: "স্তরীয় গঠন", en: "Layered Architecture", blurb: { bn: "Consumer থেকে Government পর্যন্ত ৬টি spirit-level।", en: "Six spirit-levels from Consumer to Government." } },
  { to: "/vision/ecosystem/govtech", domain: "gov-tech.bd", bn: "গভটেক", en: "Gov-Tech", blurb: { bn: "Passport, NID, tax, license — এক portal।", en: "Passport, NID, tax, license — one portal." } },
  { to: "/vision/ecosystem/storage", domain: "storage", bn: "স্টোরেজ", en: "Sovereign Storage", blurb: { bn: "Citizen document-এর জন্য sovereign cloud।", en: "Sovereign cloud for citizen documents." } },
  { to: "/vision/ecosystem/deshi", domain: "deshi.bd", bn: "দেশী OS", en: "Deshi OS", blurb: { bn: "বাংলাদেশের জন্য operating system।", en: "An operating system for Bangladesh." } },
  { to: "/vision/ecosystem/infrastructure", domain: "infrastructure", bn: "অবকাঠামো", en: "Infrastructure", blurb: { bn: "Physical + cloud — দেশের digital মেরুদণ্ড।", en: "Physical + cloud — the nation's digital spine." } },
  { to: "/vision/ecosystem/future", domain: "future", bn: "ভবিষ্যৎ", en: "Future State", blurb: { bn: "AI-native, agentic, programmable nation।", en: "AI-native, agentic, programmable nation." } },
  { to: "/vision/ecosystem/interconnection", domain: "interconnection map", bn: "মাস্টার ম্যাপ", en: "Master Map", blurb: { bn: "সব rail ও layer কীভাবে যুক্ত।", en: "How every rail and layer wires together." } },
];

const VisionEcosystem = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>Ecosystem hub — every concept, explained | sojibahmmed.com</title>
      <meta name="description" content="Deep explainers for the digital ecosystem: super ecosystem, layered architecture, gov-tech, sovereign storage, deshi OS, infrastructure, future state, master map." />
      <link rel="canonical" href="https://sojibahmmed.com/vision/ecosystem" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ecosystem hub — sojibahmmed.com" />
      <meta property="og:description" content="Every concept and platform in the ecosystem, explained in Bangla and English." />
      <meta property="og:url" content="https://sojibahmmed.com/vision/ecosystem" />
      <meta name="twitter:card" content="summary" />
    </Helmet>
    <header className="border-b">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ecosystem · ইকোসিস্টেম</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">The digital ecosystem, explained</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          প্রতিটি page একটি concept বা platform-কে গভীরভাবে ব্যাখ্যা করে — কী, কেন, কীভাবে কাজ করে, কোথায় প্রমাণিত মডেল আছে।
        </p>
      </div>
    </header>
    <div className="mx-auto max-w-5xl px-6 py-14">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((p) => (
          <Link key={p.to} to={p.to} className="group rounded-2xl border border-border/70 bg-card p-6 transition hover:border-primary/60">
            <p className="font-mono text-xs text-primary">{p.domain}</p>
            <h2 className="mt-1 text-lg font-bold text-foreground">{p.en}</h2>
            <p className="text-sm text-muted-foreground">{p.bn}</p>
            <p className="mt-3 text-sm text-muted-foreground">{p.blurb.bn}</p>
            <p className="mt-1 text-xs text-muted-foreground">{p.blurb.en}</p>
            <span className="mt-4 inline-block text-xs font-semibold text-primary group-hover:text-primary">Open →</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default VisionEcosystem;
