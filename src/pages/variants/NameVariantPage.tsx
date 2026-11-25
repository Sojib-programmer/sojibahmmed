import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPersonSchema, buildProfilePageSchema } from "@/lib/identity";

export interface VariantContent {
  path: string;
  variant: string;          // e.g. "Md Sojib"
  h1: string;
  title: string;
  description: string;
  intro: string;
  body: { heading: string; text: string }[];
  ogImage?: string;         // optional override path under /og/
  faq?: { question: string; answer: string }[];
}

const SITE = "https://sojibahmmed.com";

const NameVariantPage = ({ content }: { content: VariantContent }) => {
  const url = `${SITE}${content.path}`;
  const ogImage = content.ogImage
    ? `${SITE}${content.ogImage}`
    : `${SITE}/og${content.path}.jpg`;

  const personSchema = buildPersonSchema(content.path, content.description);
  const profileSchema = buildProfilePageSchema(content.path, content.h1, content.description);

  const faqSchema = content.faq && content.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  } : null;

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sojib_hq" />
        <meta name="twitter:creator" content="@sojib_hq" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.description} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(profileSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="relative z-10 mx-auto max-w-3xl px-6 pb-20 pt-[clamp(7rem,5rem+6vw,9rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="type-eyebrow mb-4 text-primary/80">
              {content.variant}
            </p>
            <h1 className="type-h1 mb-6 font-bold text-foreground">
              {content.h1}
            </h1>
            <p className="type-lead measure mb-10 text-muted-foreground">
              {content.intro}
            </p>

            <div className="space-y-8">
              {content.body.map((b) => (
                <section key={b.heading} className="glass-card rounded-xl p-6">
                  <h2 className="type-h3 mb-3 font-semibold text-foreground">
                    {b.heading}
                  </h2>
                  <p className="type-body text-muted-foreground">{b.text}</p>
                </section>
              ))}
            </div>


            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/"
                className="btn-primary inline-flex items-center"
              >
                Visit the main site →
              </Link>
              <Link
                to="/vision"
                className="btn-secondary inline-flex items-center"
              >
                Read the vision
              </Link>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NameVariantPage;
