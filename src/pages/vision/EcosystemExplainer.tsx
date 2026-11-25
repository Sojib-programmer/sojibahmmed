import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export type Lang = "bn" | "en";
export interface BiText { bn: string; en: string }
export interface ComponentItem { name: string; desc: BiText }
export interface FlowStep { title: BiText; body: BiText }
export interface Reference { name: string; url: string; takeaway: BiText }
export interface SiblingLink { to: string; label: BiText }

export interface ExplainerContent {
  slug: string;
  image: string;
  hero: { eyebrow: BiText; title: BiText; promise: BiText };
  whatIsIt: BiText;
  whyNeeded: BiText;
  components: ComponentItem[];
  howItWorks: FlowStep[];
  interconnections: BiText;
  siblingLinks: SiblingLink[];
  provenModels: Reference[];
  roadmap: { phase: BiText; goal: BiText }[];
  risks: { risk: BiText; mitigation: BiText }[];
}

const L = {
  bn: { toggle: "English", back: "← সব ecosystem", s1: "১. এটা কী?", s2: "২. কেন দরকার?", s3: "৩. ভেতরে কী আছে?", s4: "৪. কীভাবে কাজ করে?", s5: "৫. কার সাথে যুক্ত", s6: "৬. বিশ্বে প্রমাণিত মডেল", s7: "৭. বাংলাদেশের roadmap", s8: "৮. ঝুঁকি ও সমাধান", risk: "ঝুঁকি", mitig: "সমাধান" },
  en: { toggle: "বাংলা", back: "← All ecosystems", s1: "1. What is it?", s2: "2. Why it matters", s3: "3. What's inside", s4: "4. How it works", s5: "5. How it connects", s6: "6. Proven global models", s7: "7. Bangladesh roadmap", s8: "8. Risks & mitigations", risk: "Risk", mitig: "Mitigation" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function EcosystemExplainer({ content }: { content: ExplainerContent }) {
  const [lang, setLang] = useState<Lang>("bn");
  const t = L[lang];
  const url = `https://sojibahmmed.com/vision/ecosystem/${content.slug}`;

  return (
    <article className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{`${content.hero.title.bn} — sojibahmmed.com`}</title>
        <meta name="description" content={content.hero.promise.bn} />
        <meta property="og:title" content={content.hero.title.bn} />
        <meta property="og:description" content={content.hero.promise.bn} />
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.hero.title.bn} />
        <meta name="twitter:description" content={content.hero.promise.bn} />
        <meta name="twitter:image" content={`https://sojibahmmed.com${content.image}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://sojibahmmed.com${content.image}`} />
        <meta property="og:locale" content="bn_BD" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: content.hero.title.bn,
          description: content.hero.promise.bn,
          image: `https://sojibahmmed.com${content.image}`,
          inLanguage: "bn",
          author: { "@type": "Person", name: "Sojib Ahmmed" },
        })}</script>
      </Helmet>

      <header className="relative overflow-hidden border-b border-border/70">
        <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <Link to="/vision/ecosystem" className="text-xs font-medium uppercase tracking-widest text-primary hover:text-primary">{t.back}</Link>
            <button
              onClick={() => setLang(lang === "bn" ? "en" : "bn")}
              className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20"
            >{t.toggle}</button>
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{content.hero.eyebrow[lang]}</p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">{content.hero.title[lang]}</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{content.hero.promise[lang]}</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-lg">
            <img src={content.image} alt={content.hero.title.en} loading="lazy" decoding="async" className="w-full" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-14 px-6 py-16">
        <Section title={t.s1}><p>{content.whatIsIt[lang]}</p></Section>
        <Section title={t.s2}><p>{content.whyNeeded[lang]}</p></Section>

        <Section title={t.s3}>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.components.map((c) => (
              <div key={c.name} className="rounded-xl border border-border/70 bg-card p-5">
                <div className="font-mono text-sm font-semibold text-primary">{c.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc[lang]}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.s4}>
          <ol className="space-y-5">
            {content.howItWorks.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-bold text-primary">{i + 1}</span>
                <div>
                  <div className="font-semibold text-foreground">{step.title[lang]}</div>
                  <p className="mt-1 text-muted-foreground">{step.body[lang]}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section title={t.s5}>
          <p>{content.interconnections[lang]}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {content.siblingLinks.map((s) => (
              <Link key={s.to} to={s.to} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs text-primary hover:bg-primary/15">{s.label[lang]} →</Link>
            ))}
          </div>
        </Section>

        <Section title={t.s6}>
          <div className="space-y-4">
            {content.provenModels.map((r) => (
              <div key={r.name} className="rounded-xl border border-border/70 bg-card p-5">
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary">{r.name} ↗</a>
                <p className="mt-2 text-sm text-muted-foreground">{r.takeaway[lang]}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.s7}>
          <div className="space-y-3">
            {content.roadmap.map((r, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-border/70 bg-card p-4">
                <div className="font-mono text-xs font-bold uppercase text-primary">{r.phase[lang]}</div>
                <div className="flex-1 text-sm text-muted-foreground">{r.goal[lang]}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.s8}>
          <div className="space-y-3">
            {content.risks.map((r, i) => (
              <div key={i} className="rounded-lg border border-rose-500/20 bg-rose-500/[0.04] p-4">
                <div className="text-sm"><span className="font-semibold text-rose-300">{t.risk}:</span> <span className="text-foreground">{r.risk[lang]}</span></div>
                <div className="mt-1 text-sm"><span className="font-semibold text-emerald-300">{t.mitig}:</span> <span className="text-muted-foreground">{r.mitigation[lang]}</span></div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </article>
  );
}
