import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Bot, Globe, Zap, BarChart3, Shield, HelpCircle, ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ticruHero from "@/assets/ticru-hero.jpg";

const features = [
  { icon: Bot, title: "AI Voice Agents", desc: "Intelligent agents that handle inbound and outbound calls with natural conversation, 24/7." },
  { icon: Phone, title: "Enterprise Calling", desc: "High-volume AI calling for sales, support, surveys, and appointment scheduling at scale." },
  { icon: Globe, title: "Multicurrency Payments", desc: "ticru pay powers seamless cross-border payments in 50+ currencies for global businesses." },
  { icon: Zap, title: "Real-Time Analytics", desc: "Live dashboards tracking call performance, sentiment analysis, and conversion metrics." },
  { icon: BarChart3, title: "CRM Integration", desc: "Plug into Salesforce, HubSpot, or any CRM. Every call logged, every lead captured." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant, end-to-end encryption, and Zero Trust architecture built to enterprise security standards." },
];

const useCases = [
  { title: "SaaS Companies", desc: "Automate onboarding calls, churn prevention, and customer success outreach with AI agents that sound human." },
  { title: "E-commerce Brands", desc: "Handle order confirmations, delivery updates, and return requests via voice — in any language." },
  { title: "Healthcare Providers", desc: "Appointment scheduling, prescription reminders, and patient follow-ups — HIPAA-aware infrastructure." },
  { title: "Financial Services", desc: "Cross-border payment processing, KYC verification calls, and fraud detection alerts in real-time." },
  { title: "Real Estate Agencies", desc: "Lead qualification calls, showing confirmations, and automated follow-ups that convert." },
  { title: "Recruitment Firms", desc: "Screen candidates at scale with AI interviews, schedule callbacks, and sync with your ATS." },
];

const faqs = [
  { q: "How does ticru voice differ from traditional IVR?", a: "Unlike rigid IVR menus, ticru voice uses conversational AI that understands natural language, handles interruptions, and responds contextually — like talking to a real human." },
  { q: "What currencies does ticru pay support?", a: "ticru pay supports 50+ currencies including USD, EUR, GBP, BDT, INR, AED, SGD, and more. We handle conversion, compliance, and settlement automatically." },
  { q: "Can I integrate ticru with my existing CRM?", a: "Yes. We offer native integrations with Salesforce, HubSpot, Pipedrive, and Zoho. For custom CRMs, our REST API and webhooks make integration straightforward." },
  { q: "What's the call quality and uptime?", a: "We maintain 99.9% uptime with enterprise-grade infrastructure. Calls are crystal-clear with adaptive bitrate technology and global edge routing." },
  { q: "Is there a free trial?", a: "Yes — we offer a 14-day free trial with 100 AI call minutes and full access to ticru pay sandbox for testing payment flows." },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between p-5 text-left">
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
};

const siteUrl = "https://sojibahmmed.com";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ticru Pay & Ticru Voice",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://ticrupay.com",
  description: "Enterprise AI voice calling and multicurrency payments platform for global businesses.",
  author: { "@type": "Person", name: "Sojib Ahmmed", url: siteUrl },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "14-day free trial" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "120" },
};

const Ticru = () => (
  <>
    <Helmet>
      <title>Ticru Pay & Ticru Voice — AI Calling & Payments | Sojib Ahmmed</title>
      <meta name="description" content="Ticru pay provides multicurrency payments and ticru voice powers enterprise AI voice calling. Built by Sojib Ahmmed for global businesses." />
      <link rel="canonical" href="https://sojibahmmed.com/ticru" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ticru Pay & Ticru Voice — AI Calling & Payments" />
      <meta property="og:description" content="Enterprise AI voice calling and multicurrency payments. Built by Sojib Ahmmed." />
      <meta property="og:url" content="https://sojibahmmed.com/ticru" />
      <meta property="og:image" content="https://sojibahmmed.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ticru Pay & Ticru Voice — AI Calling & Payments" />
      <meta name="twitter:image" content="https://sojibahmmed.com/og-image.jpg" />
      <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) })}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
          <div className="pointer-events-none absolute inset-0 radial-glow" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={16} /> Back home
            </Link>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
                  AI Communication Infrastructure
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
                  ticru<span className="text-primary text-glow"> pay</span> & ticru<span className="text-primary text-glow"> voice</span>
                  <span className="block mt-3 text-xl font-medium text-muted-foreground md:text-2xl">AI Voice Calling & Multicurrency Payments</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  Enterprise AI voice calling that replaces call centers. Multicurrency payments that power global commerce. Two platforms, one mission — making business communication borderless.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
                  <a href="https://ticrupay.com" target="_blank" rel="noopener noreferrer" className="btn-glow rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all">
                    ticru pay →
                  </a>
                  <a href="https://ticru.io" target="_blank" rel="noopener noreferrer" className="glass-card mirror-shine rounded-xl px-6 py-3 font-semibold text-foreground transition-all hover:text-primary">
                    ticru voice →
                  </a>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="glass-card glow-border overflow-hidden rounded-2xl">
                <img src={ticruHero} alt="Ticru AI Voice Platform" className="w-full" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">What Ticru Does</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card mirror-shine rounded-xl p-6 transition-all duration-300">
                  <f.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">Who It's For</h2>
            <p className="mb-12 text-center text-muted-foreground">Industries already using ticru to transform their operations.</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc, i) => (
                <motion.div key={uc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card rounded-xl p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground">{uc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold text-foreground">By the Numbers</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { value: "1M+", label: "Calls Processed" },
                { value: "50+", label: "Currencies" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "AI Availability" },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card glow-border rounded-xl p-5">
                  <div className="text-3xl font-bold text-primary text-glow md:text-4xl">{s.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing / Get Started */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Get Started</h2>
            <p className="mb-12 text-muted-foreground">Start with a free trial. No credit card required.</p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Starter", price: "Free", period: "14-day trial", features: ["100 AI call minutes", "Sandbox payments", "Email support", "1 AI agent"] },
                { name: "Growth", price: "$99", period: "/month", features: ["5,000 AI call minutes", "Live payments in 20 currencies", "CRM integrations", "5 AI agents", "Priority support"] },
                { name: "Enterprise", price: "Custom", period: "contact us", features: ["Unlimited call minutes", "50+ currencies", "Dedicated account manager", "Custom AI training", "SLA guarantee", "On-premise option"] },
              ].map((plan, i) => (
                <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-xl p-6 text-left ${i === 1 ? "glow-border" : ""}`}>
                  <h3 className="mb-1 text-lg font-bold text-foreground">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-black text-primary">{plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://ticrupay.com" target="_blank" rel="noopener noreferrer" className={`mt-6 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-all ${i === 1 ? "btn-glow bg-primary text-primary-foreground" : "glass-card text-foreground hover:text-primary"}`}>
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </div>
  </>
);

export default Ticru;
