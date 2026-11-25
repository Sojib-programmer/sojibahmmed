import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Bug, Server, Terminal, ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import midnightHero from "@/assets/blog/midnight-logic-hero.jpg";
import zeroTrustImg from "@/assets/blog/zero-trust-cybersecurity.jpg";

const services = [
  { icon: Shield, title: "Zero Trust Architecture", desc: "Design and implement Zero Trust security frameworks. Never trust, always verify — applied to every layer of your infrastructure." },
  { icon: Bug, title: "Penetration Testing", desc: "Ethical hacking and vulnerability assessments. We find the holes before attackers do." },
  { icon: Lock, title: "Security Audits", desc: "Comprehensive code review, infrastructure assessment, and compliance auditing for startups and enterprises." },
  { icon: Eye, title: "Threat Intelligence", desc: "Real-time threat monitoring, incident response planning, and proactive defense strategies." },
  { icon: Server, title: "Cloud Security", desc: "Secure your AWS, GCP, and Azure infrastructure. IAM policies, encryption, and network security done right." },
  { icon: Terminal, title: "Secure Development", desc: "DevSecOps consulting — integrate security into your CI/CD pipeline from day one, not as an afterthought." },
];

const useCases = [
  { title: "SaaS Startups", desc: "Get SOC 2 ready fast. We audit your codebase, infrastructure, and processes — then fix what's broken." },
  { title: "Fintech Companies", desc: "PCI-DSS compliance, payment security, and fraud prevention for companies handling financial data." },
  { title: "Healthcare Tech", desc: "HIPAA-compliant architecture design, PHI encryption, and access control for health platforms." },
  { title: "E-commerce Platforms", desc: "Protect customer data, prevent card skimming, and secure your checkout infrastructure." },
  { title: "Government & NGOs", desc: "Critical infrastructure protection, data sovereignty compliance, and insider threat prevention." },
  { title: "Enterprise IT", desc: "Full-stack security assessments, red team exercises, and incident response planning for large organizations." },
];

const faqs = [
  { q: "What's included in a security audit?", a: "A comprehensive audit covers code review, infrastructure assessment, dependency scanning, access control review, encryption validation, and a detailed report with prioritized recommendations." },
  { q: "How long does a penetration test take?", a: "Typically 1-3 weeks depending on scope. We cover web applications, APIs, mobile apps, and cloud infrastructure. You get a detailed report with POC exploits and remediation steps." },
  { q: "Do you offer ongoing security monitoring?", a: "Yes. Our managed security service includes 24/7 threat monitoring, automated vulnerability scanning, incident response, and monthly security reports." },
  { q: "Can you help us get SOC 2 certified?", a: "Yes. We handle gap analysis, policy creation, technical controls, and auditor coordination." },
  { q: "What industries do you specialize in?", a: "Fintech, SaaS, healthcare tech, and e-commerce — but our Zero Trust methodology applies to any digital business handling sensitive data." },
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
  name: "cyber.bd",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  url: `${siteUrl}/midnight-logic`,
  description: "Cybersecurity division specializing in Zero Trust architecture, penetration testing, security audits, and threat intelligence.",
  author: { "@type": "Person", name: "Sojib Ahmmed", url: siteUrl },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free initial consultation" },
};

const MidnightLogic = () => (
  <>
    <Helmet>
      <title>cyber.bd — Cybersecurity & Zero Trust Architecture | Sojib Ahmmed</title>
      <meta name="description" content="cyber.bd is Sojib Ahmmed's cybersecurity division — specializing in Zero Trust architecture, penetration testing, security audits, and threat intelligence." />
      <link rel="canonical" href="https://sojibahmmed.com/midnight-logic" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="cyber.bd — Cybersecurity & Zero Trust Architecture" />
      <meta property="og:description" content="Cybersecurity, Zero Trust architecture, penetration testing, and threat intelligence by Sojib Ahmmed." />
      <meta property="og:url" content="https://sojibahmmed.com/midnight-logic" />
      <meta property="og:image" content="https://sojibahmmed.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="cyber.bd — Cybersecurity" />
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
                  Cybersecurity Division
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
                  cyber<span className="text-primary text-glow">.bd</span>
                  <span className="block mt-3 text-xl font-medium text-muted-foreground md:text-2xl">Cybersecurity & Zero Trust Architecture</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  The cybersecurity division of Sojib Ahmmed's ecosystem. We don't just build systems — we make them unbreakable.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-8 text-muted-foreground leading-relaxed">
                  Sojib Ahmmed founded cyber.bd to bring enterprise-grade security to startups, SaaS platforms, and critical digital infrastructure across Bangladesh and beyond.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
                  <a href="#zero-trust" className="btn-glow rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all">
                    Learn Zero Trust →
                  </a>
                  <Link to="/#contact" className="glass-card mirror-shine rounded-xl px-6 py-3 font-semibold text-foreground transition-all hover:text-primary">
                    Request Audit →
                  </Link>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="glass-card glow-border overflow-hidden rounded-2xl">
                <img src={midnightHero} alt="cyber.bd Cybersecurity" className="w-full" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Security Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card mirror-shine scan-line rounded-xl p-6 transition-all duration-300">
                  <s.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">Who We Protect</h2>
            <p className="mb-12 text-center text-muted-foreground">Industries and organizations trusting cyber.bd with their security.</p>
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

        {/* Pricing */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Engagement Models</h2>
            <p className="mb-12 text-muted-foreground">Flexible security services for every stage of growth.</p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Assessment", price: "Free", period: "consultation", features: ["30-min security review", "Risk assessment report", "Priority recommendations", "No commitment"] },
                { name: "Audit", price: "$2,500", period: "one-time", features: ["Full code review", "Infrastructure scan", "Dependency audit", "Detailed report", "Remediation roadmap"] },
                { name: "Managed Security", price: "$5,000", period: "/month", features: ["24/7 monitoring", "Incident response", "Monthly reports", "Quarterly pen tests", "SOC 2 maintenance", "Dedicated security lead"] },
              ].map((plan, i) => (
                <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-xl p-6 text-left ${i === 2 ? "glow-border" : ""}`}>
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
                  <Link to="/#contact" className={`mt-6 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-all ${i === 2 ? "btn-glow bg-primary text-primary-foreground" : "glass-card text-foreground hover:text-primary"}`}>
                    {plan.price === "Free" ? "Book Consultation" : "Get Started"}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zero Trust Section */}
        <section id="zero-trust" className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="mb-8 text-3xl font-bold text-foreground">Zero Trust: The Only Security Model That Works in 2026</h2>
              <div className="mb-8 glass-card glow-border overflow-hidden rounded-2xl">
                <img src={zeroTrustImg} alt="Zero Trust Architecture" className="w-full" loading="lazy" />
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Traditional security is like a castle with a moat — once you're inside, you have free reign. <strong className="text-foreground">Zero Trust flips this entirely.</strong> It assumes every user, device, and network request is a potential threat — even if it originates from inside your organization.
                </p>

                <h3 className="text-xl font-semibold text-foreground">The Core Principles</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { title: "Never Trust, Always Verify", desc: "Every access request is authenticated, authorized, and encrypted — regardless of origin." },
                    { title: "Least Privilege Access", desc: "Users get the minimum permissions they need. No more, no less. Access is granted per-session." },
                    { title: "Assume Breach", desc: "Design systems as if attackers are already inside. Segment networks, encrypt everything, monitor continuously." },
                    { title: "Continuous Verification", desc: "Authentication isn't a one-time event. Every request is verified in real-time based on context." },
                  ].map((p, i) => (
                    <div key={i} className="glass-card rounded-xl p-4">
                      <h4 className="mb-1 font-semibold text-foreground">{p.title}</h4>
                      <p className="text-sm">{p.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground">How Zero Trust Works in Practice</h3>
                <div className="space-y-3">
                  <p><strong className="text-foreground">1. Identity Verification:</strong> Multi-factor authentication (MFA) for every user. Biometrics, hardware keys, and device certificates — not just passwords.</p>
                  <p><strong className="text-foreground">2. Micro-Segmentation:</strong> Your network is divided into tiny zones. Compromising one zone doesn't give access to others.</p>
                  <p><strong className="text-foreground">3. Device Trust:</strong> Only verified, compliant devices can access resources. Jailbroken phones, unpatched systems — blocked automatically.</p>
                  <p><strong className="text-foreground">4. Encrypted Everywhere:</strong> All data is encrypted in transit AND at rest. Even internal network traffic is encrypted.</p>
                  <p><strong className="text-foreground">5. Real-Time Monitoring:</strong> AI-powered anomaly detection watches every request. Unusual login location? Flagged and blocked instantly.</p>
                </div>

                <h3 className="text-xl font-semibold text-foreground">Why Every Business Needs Zero Trust in 2026</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Remote work is permanent — your perimeter is everywhere</li>
                  <li>Cloud-first means your data lives outside your building</li>
                  <li>AI-powered attacks are more sophisticated than ever</li>
                  <li>Ransomware costs businesses $265 billion annually</li>
                  <li>Regulatory compliance (SOC 2, GDPR, HIPAA) demands it</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">How I Apply Zero Trust Across My Ecosystem</h3>
                <p>Every product I build follows Zero Trust principles:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li><strong>companysetup.io</strong> — Client data encrypted at rest, role-based access, audit logging on every action</li>
                  <li><strong>ticru voice</strong> — End-to-end encrypted calls, per-session authentication for AI agents</li>
                  <li><strong>ticru pay</strong> — PCI-DSS compliant payment processing with tokenized card data</li>
                </ul>

                <div className="glass-card glow-border rounded-xl p-6">
                  <p className="text-foreground font-semibold mb-2">💡 The Sojib Ahmmed Security Philosophy</p>
                  <p>"Security isn't a feature you add later. It's the foundation you build on. Every line of code I write, every system I architect, starts with one question: <em>How could this be attacked?</em> That mindset is what makes cyber.bd different."</p>
                </div>
              </div>
            </motion.div>
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

export default MidnightLogic;
