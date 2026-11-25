import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeInUp, staggerContainer } from "@/components/animations";
import AuthorBioCard from "@/components/AuthorBioCard";

const Ecosystem = () => {
  const siteUrl = "https://sojibahmmed.com";

  return (
    <>
      <Helmet>
        <title>Ventures — Sojib Ahmmed</title>
        <meta name="description" content="MarketSync Global is the holding company of Sojib Ahmmed, Founder & CEO. Two areas of focus: cyber.bd (cybersecurity) and merchant.bd — the Bangladesh Commerce OS." />
        <link rel="canonical" href={`${siteUrl}/ecosystem`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ventures — Sojib Ahmmed" />
        <meta property="og:description" content="MarketSync Global — the holding company. Two areas of focus: cyber.bd and merchant.bd." />
        <meta property="og:url" content={`${siteUrl}/ecosystem`} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ventures — Sojib Ahmmed" />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-20"
        >
          <section className="px-6 py-24">
            <div className="relative z-10 mx-auto max-w-3xl">
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} /> Back home
              </Link>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.p
                  variants={fadeInUp}
                  className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary"
                >
                  Ventures
                </motion.p>
                <motion.h1
                  variants={fadeInUp}
                  className="mb-6 font-display text-4xl font-semibold text-foreground md:text-5xl"
                >
                  One holding company.
                </motion.h1>
                <motion.div
                  variants={fadeInUp}
                  className="space-y-5 text-lg leading-relaxed text-muted-foreground"
                >
                  <p>
                    MarketSync Global is the holding company — registered in the
                    United States and Bangladesh — through which Sojib Ahmmed
                    builds digital infrastructure.
                  </p>
                  <p>
                    Two areas of focus sit alongside it: cyber.bd, for
                    cybersecurity, and merchant.bd — the Bangladesh Commerce OS.
                  </p>
                </motion.div>
              </motion.div>

              <div className="mt-12">
                <AuthorBioCard />
              </div>
            </div>
          </section>
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default Ecosystem;
