import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, FileText, CreditCard, Globe, Shield, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import companysetupHero from "@/assets/companysetup-hero.jpg";

const features = [
  { icon: Building2, title: "US LLC Formation", desc: "Register a Delaware, Wyoming, or New Mexico LLC in 24-48 hours. Full compliance, zero hassle." },
  { icon: FileText, title: "EIN & Tax Setup", desc: "Get your Employer Identification Number and set up tax compliance with IRS-ready documentation." },
  { icon: CreditCard, title: "Business Banking", desc: "Open US business bank accounts with Mercury, Relay, or traditional banks. Fully guided process." },
  { icon: Globe, title: "International Formation", desc: "Not just US — form companies in UK, Canada, Singapore, and more. Global business infrastructure." },
  { icon: Shield, title: "Compliance & Registered Agent", desc: "Annual reports, registered agent services, and ongoing compliance handled for you." },
  { icon: Users, title: "Founders Worldwide", desc: "Formation and business infrastructure for international founders." },
];

const CompanySetup = () => (
  <>
    <Helmet>
      <title>CompanySetup.io — US LLC Formation & Business Infrastructure | Sojib Ahmmed</title>
      <meta name="description" content="CompanySetup.io helps founders register US LLCs, get EINs, open business bank accounts, and build global business infrastructure." />
      <link rel="canonical" href="https://sojibahmmed.com/companysetup" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="CompanySetup.io — US LLC Formation & Business Infrastructure" />
      <meta property="og:description" content="Register US LLCs, get EINs, open business bank accounts." />
      <meta property="og:url" content="https://sojibahmmed.com/companysetup" />
      <meta property="og:image" content="https://sojibahmmed.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CompanySetup.io — US LLC Formation" />
      <meta name="twitter:image" content="https://sojibahmmed.com/og-image.jpg" />
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
                  Business Infrastructure
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
                  company<span className="text-primary text-glow">setup</span>.io
                  <span className="block mt-3 text-xl font-medium text-muted-foreground md:text-2xl">US LLC Formation & Business Infrastructure for Global Founders</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  A platform for international founders to register US companies, get tax IDs, open business bank accounts, and access the global economy.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <a href="https://companysetup.io" target="_blank" rel="noopener noreferrer" className="btn-glow rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all">
                    Visit companysetup.io →
                  </a>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="glass-card glow-border overflow-hidden rounded-2xl">
                <img src={companysetupHero} alt="CompanySetup.io Platform" className="w-full" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Everything You Need to Start a Global Business</h2>
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

        {/* Process */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">How It Works</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Choose Your State", desc: "Delaware for startups, Wyoming for privacy, New Mexico for simplicity. We help you pick." },
                { step: "02", title: "Submit Your Details", desc: "Fill out a simple form. We handle articles of organization, operating agreements, and filings." },
                { step: "03", title: "Get Your LLC", desc: "Receive your formation documents, EIN, and registered agent confirmation within 24-48 hours." },
                { step: "04", title: "Open Banking", desc: "We guide you through opening a US business bank account — remotely, from anywhere in the world." },
              ].map((item, i) => (
                <motion.div key={item.step} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card mirror-shine flex gap-6 rounded-xl p-6">
                  <div className="flex-shrink-0 text-4xl font-black text-primary/30">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </div>
  </>
);

export default CompanySetup;
