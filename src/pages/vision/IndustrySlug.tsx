import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { sites, sitesBySlug, railLabel, phaseLabel, type Site } from "./sites";

const statusDot = { live: "bg-emerald-400", alpha: "bg-amber-400", planned: "bg-slate-500" } as const;

function siblings(site: Site) {
  const samePhase = sites.filter((s) => s.phase === site.phase);
  const idx = samePhase.findIndex((s) => s.slug === site.slug);
  return {
    prev: idx > 0 ? samePhase[idx - 1] : null,
    next: idx < samePhase.length - 1 ? samePhase[idx + 1] : null,
    railMates: sites.filter((s) => s.rail === site.rail && s.slug !== site.slug),
  };
}

const VisionIndustrySlug = () => {
  const { slug } = useParams<{ slug: string }>();
  const s = slug ? sitesBySlug[slug] : undefined;

  if (!s) {
    return (
      <div className="min-h-screen bg-background p-12 text-foreground">
        <p>Industry not found. <Link to="/vision/industries" className="text-primary underline">See all</Link></p>
      </div>
    );
  }

  const { prev, next, railMates } = siblings(s);
  const ph = phaseLabel[s.phase];
  const rail = railLabel[s.rail];
  const title = `${s.domain} — ${s.en} · ${ph.en}`;

  return (
    <article className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{`${title} | sojibahmmed.com`}</title>
        <meta name="description" content={s.problemEn} />
        <link rel="canonical" href={`https://sojibahmmed.com/vision/industries/${s.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={s.problemEn} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://sojibahmmed.com/vision/industries/${s.slug}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={s.problemEn} />
      </Helmet>

      <header className="border-b">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <Link to="/vision/industries" className="text-xs font-medium uppercase tracking-widest text-primary hover:text-primary">← All industries</Link>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">{rail.en} · {rail.bn}</span>
            <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">{ph.en}</span>
            <span className="flex items-center gap-1.5 rounded-full border border-border/70 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
              <span className={`h-1.5 w-1.5 rounded-full ${statusDot[s.status]}`} />{s.status}
            </span>
          </div>
          <p className="mt-4 font-mono text-sm text-primary">{s.domain}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground md:text-5xl">{s.en} <span className="text-primary">· {s.bn}</span></h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-14 px-6 py-14">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">সমস্যা · Problem</h2>
          <p className="text-[17px] leading-relaxed text-foreground">{s.problemBn}</p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.problemEn}</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">সমাধান · Solution</h2>
          <p className="text-[17px] leading-relaxed text-foreground">{s.solutionBn}</p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.solutionEn}</p>
          {s.stack && s.stack.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Stack pillars</p>
              <div className="flex flex-wrap gap-2">
                {s.stack.map((p) => (
                  <span key={p} className="rounded-md border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary">{p}</span>
                ))}
              </div>
            </div>
          )}
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">ব্যবসায়িক পরিধি · Business Scope</h2>
          <div className="rounded-xl border border-border/70 bg-card p-5">
            <p className="text-[17px] leading-relaxed text-foreground">{s.scopeBn}</p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.scopeEn}</p>
          </div>
        </section>

        {railMates.length > 0 && (
          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Interconnections</h2>
            <p className="mb-4 text-sm text-muted-foreground">একই rail-এর sibling site ({rail.en}):</p>
            <div className="flex flex-wrap gap-2">
              {railMates.map((m) => (
                <Link key={m.slug} to={m.externalTo ?? `/vision/industries/${m.slug}`} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs text-primary hover:bg-primary/15">
                  {m.domain} →
                </Link>
              ))}
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              Wider ecosystem:{" "}
              <Link to="/vision/ecosystem/super" className="text-primary hover:underline">super ecosystem</Link>,{" "}
              <Link to="/vision/ecosystem/layers" className="text-primary hover:underline">layered architecture</Link>,{" "}
              <Link to="/vision/ecosystem" className="text-primary hover:underline">ecosystem hub</Link>.
            </div>
          </section>
        )}

        <nav className="flex items-stretch justify-between gap-4 border-t border-border/70 pt-8">
          {prev ? (
            <Link to={prev.externalTo ?? `/vision/industries/${prev.slug}`} className="flex-1 rounded-xl border border-border/70 bg-card p-4 hover:border-primary/60">
              <p className="text-[10px] uppercase tracking-widest text-primary">← Prev · {ph.en}</p>
              <p className="mt-1 font-mono text-xs text-primary">{prev.domain}</p>
              <p className="font-semibold text-foreground">{prev.en}</p>
            </Link>
          ) : <div className="flex-1" />}
          {next ? (
            <Link to={next.externalTo ?? `/vision/industries/${next.slug}`} className="flex-1 rounded-xl border border-border/70 bg-card p-4 text-right hover:border-primary/60">
              <p className="text-[10px] uppercase tracking-widest text-primary">Next · {ph.en} →</p>
              <p className="mt-1 font-mono text-xs text-primary">{next.domain}</p>
              <p className="font-semibold text-foreground">{next.en}</p>
            </Link>
          ) : <div className="flex-1" />}
        </nav>
      </div>
    </article>
  );
};

export default VisionIndustrySlug;
