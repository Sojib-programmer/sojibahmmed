import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorBioCard from "@/components/AuthorBioCard";
import PersonSchema from "@/components/PersonSchema";
import { blogPosts } from "@/data/blogPosts";
import { SITE_URL } from "@/lib/identity";
import { PILLARS } from "./pillarsData";
import NotFound from "@/pages/NotFound";

interface PostRow {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published_at: string;
}

const PillarPage = () => {
  const { slug = "" } = useParams();
  const pillar = PILLARS.find((p) => p.slug === slug);

  const posts: PostRow[] = pillar ? blogPosts.filter((p) => pillar.categories.includes(p.category)).slice(0, 24) : [];

  if (!pillar) return <NotFound />;

  const url = `${SITE_URL}/pillar/${pillar.slug}`;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: pillar.h1,
    description: pillar.description,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: "Sojib Ahmmed" },
    author: { "@id": `${SITE_URL}/#person` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: pillar.shortTitle, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pillar.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{pillar.title}</title>
        <meta name="description" content={pillar.description} />
        <link rel="canonical" href={url} />
        <meta name="keywords" content={pillar.keywords.join(", ")} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pillar.title} />
        <meta property="og:description" content={pillar.description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sojib_hq" />
        <meta name="twitter:title" content={pillar.title} />
        <meta name="twitter:description" content={pillar.description} />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <PersonSchema path={`/pillar/${pillar.slug}`} />

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-[clamp(7rem,5rem+6vw,9rem)]">
          <p className="type-eyebrow mb-4 text-primary/80">Pillar · {pillar.shortTitle}</p>
          <h1 className="type-h1 font-bold text-foreground">{pillar.h1}</h1>
          <p className="type-lead measure mt-6 text-muted-foreground">{pillar.intro}</p>

          <div className="mt-12 space-y-10">
            {pillar.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="type-h2 font-semibold text-foreground">{s.heading}</h2>
                {s.paragraphs.map((t, i) => (
                  <p key={i} className="type-body mt-4 text-muted-foreground">
                    {t}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-5 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-[1.7] text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {pillar.brands.length > 0 && (
            <section className="mt-16">
              <h2 className="type-h2 font-semibold text-foreground">Systems in this pillar</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {pillar.brands.map((b) => (
                  <a
                    key={b.name}
                    href={b.url}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-start justify-between gap-3 rounded-xl border border-border/70 bg-foreground/[0.015] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span>
                      <span className="block text-sm font-medium text-foreground/90 group-hover:text-primary">
                        {b.name}
                      </span>
                      <span className="mt-1 block text-xs leading-[1.7] text-muted-foreground/80">
                        {b.note}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="mt-0.5 shrink-0 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </a>
                ))}
              </div>
            </section>
          )}

          <section className="mt-16">
            <h2 className="type-h2 font-semibold text-foreground">Deep dives</h2>
            <div className="mt-6 divide-y divide-border/60 border-y border-border/60">
              {(posts ?? []).map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex items-start justify-between gap-4 py-4 transition-colors hover:bg-foreground/[0.02]"
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-foreground/90 group-hover:text-primary">
                      {p.title}
                    </span>
                    <span className="mt-1 block line-clamp-2 text-xs leading-[1.7] text-muted-foreground/80">
                      {p.excerpt}
                    </span>
                  </span>
                  <span className="type-eyebrow shrink-0 pt-1 text-muted-foreground/50">
                    {p.category}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="type-h2 font-semibold text-foreground">FAQ</h2>
            <div className="mt-6 space-y-5">
              {pillar.faq.map((f) => (
                <div key={f.question} className="glass-card rounded-xl p-5">
                  <h3 className="type-h3 font-semibold text-foreground">{f.question}</h3>
                  <p className="type-body mt-2 text-muted-foreground">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="type-h2 font-semibold text-foreground">Other pillars</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {PILLARS.filter((p) => p.slug !== pillar.slug).map((p) => (
                <Link
                  key={p.slug}
                  to={`/pillar/${p.slug}`}
                  className="rounded-full border border-border/80 px-3.5 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-px hover:border-primary/40 hover:text-foreground"
                >
                  {p.shortTitle}
                </Link>
              ))}
            </div>
          </section>

          <AuthorBioCard className="mt-14" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PillarPage;
