import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts, allTags, categories } from "./blogData";

const SITE = "https://sojibahmmed.com";

const VisionBlogIndex = () => {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const tag = params.get("tag") ?? "";
  const needle = q.trim().toLowerCase();

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    next.delete("page"); // filter change resets pagination
    setParams(next, { replace: true });
  };

  const filtered = posts.filter((p) => {
    if (tag && p.tag !== tag) return false;
    if (!needle) return true;
    return (
      p.title.toLowerCase().includes(needle) ||
      p.excerpt.toLowerCase().includes(needle) ||
      p.tag.toLowerCase().includes(needle)
    );
  });

  const PER_PAGE = 9;
  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const rawPage = Number.parseInt(params.get("page") ?? "1", 10);
  const page = Number.isFinite(rawPage) ? Math.min(Math.max(rawPage, 1), pageCount) : 1;
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goToPage = (n: number) => {
    const next = new URLSearchParams(params);
    if (n <= 1) next.delete("page");
    else next.set("page", String(n));
    setParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Helmet>
        <title>Field Notes — AI, E-commerce & Matching Technology | Sojib Ahmmed</title>
        <meta
          name="description"
          content="Ten years of building AI, recommendation and matching systems — essays on the psychology behind the technology, by Sojib Ahmmed."
        />
        <link rel="canonical" href={`${SITE}/vision/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Field Notes — AI, E-commerce & Matching Technology" />
        <meta
          property="og:description"
          content="Field notes from a decade of building AI, e-commerce, recommendation and matching systems."
        />
        <meta property="og:url" content={`${SITE}/vision/blog`} />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <section className="border-b border-[#dce8f2]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="mb-4 inline-block rounded-full border border-[#dce8f2] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#555e6b]">
            Field Notes · 10 Years in Production
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0a3d62] md:text-5xl">
            The psychology behind the technology.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#555e6b]">
            A decade of building AI, e-commerce, recommendation and matching systems — and the human
            behavior that decided whether any of it worked.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/vision/blog/category/${c.slug}`}
                className="rounded-full border px-4 py-1.5 text-sm font-medium text-[#0a3d62] transition hover:bg-white"
                style={{ borderColor: `${c.accent}66` }}
              >
                {c.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="mb-8 flex flex-col gap-4">
          <label className="sr-only" htmlFor="blog-search">
            Search posts
          </label>
          <input
            id="blog-search"
            type="search"
            value={q}
            placeholder="Search posts — try “matching”, “trust”, “checkout”…"
            onChange={(e) => setParam("q", e.target.value)}
            className="w-full rounded-xl border border-[#dce8f2] bg-white px-4 py-3 text-sm text-[#111] outline-none ring-[#0a3d62]/20 placeholder:text-[#8b93a1] focus:ring-2"
          />
          <div className="flex flex-wrap gap-2">
            <FilterChip label="All" active={!tag} onClick={() => setParam("tag", "")} />
            {allTags.map((t) => (
              <FilterChip
                key={t}
                label={t}
                active={tag === t}
                onClick={() => setParam("tag", tag === t ? "" : t)}
              />
            ))}
          </div>
          <p className="text-xs text-[#555e6b]">
            {filtered.length === 0
              ? `0 of ${posts.length} posts`
              : `Showing ${(page - 1) * PER_PAGE + 1}–${(page - 1) * PER_PAGE + visible.length} of ${filtered.length} posts`}
            {pageCount > 1 ? ` · page ${page} of ${pageCount}` : ""}
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-xl border border-dashed border-[#dce8f2] p-10 text-center text-[#555e6b]">
            No posts match that. Try a different word or clear the filter.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {visible.map((post) => (
              <Link
                key={post.slug}
                to={`/vision/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-[#dce8f2] bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                style={{ borderTop: `4px solid ${post.accent}` }}
              >
                <div
                  className="mb-3 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: post.accent }}
                >
                  {post.tag}
                </div>
                <h2 lang={post.lang ?? "en"} className="text-xl font-bold leading-snug text-[#0a3d62]">
                  {post.title}
                </h2>
                <p lang={post.lang ?? "en"} className="mt-3 flex-1 text-sm text-[#555e6b]">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-[#555e6b]">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    · {post.readTime}
                  </span>
                  <span
                    className="font-semibold transition group-hover:translate-x-0.5"
                    style={{ color: post.accent }}
                  >
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {pageCount > 1 && (
          <nav aria-label="Pagination" className="mt-12 flex items-center justify-between gap-4">
            {page > 1 ? (
              <button
                type="button"
                onClick={() => goToPage(page - 1)}
                className="rounded-full border border-[#dce8f2] bg-white px-4 py-2 text-sm font-medium text-[#0a3d62] transition hover:shadow-sm"
              >
                ← Previous
              </button>
            ) : (
              <span />
            )}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-current={n === page ? "page" : undefined}
                  onClick={() => goToPage(n)}
                  className={
                    n === page
                      ? "h-9 w-9 rounded-full border border-[#0a3d62] bg-[#0a3d62] text-sm font-semibold text-white"
                      : "h-9 w-9 rounded-full border border-[#dce8f2] bg-white text-sm font-medium text-[#0a3d62] transition hover:shadow-sm"
                  }
                >
                  {n}
                </button>
              ))}
            </div>
            {page < pageCount ? (
              <button
                type="button"
                onClick={() => goToPage(page + 1)}
                className="rounded-full border border-[#dce8f2] bg-white px-4 py-2 text-sm font-medium text-[#0a3d62] transition hover:shadow-sm"
              >
                Next →
              </button>
            ) : (
              <span />
            )}
          </nav>
        )}
      </section>
    </div>
  );
};

const FilterChip = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={
      active
        ? "rounded-full border border-[#0a3d62] bg-[#0a3d62] px-4 py-1.5 text-sm font-medium text-white"
        : "rounded-full border border-[#dce8f2] px-4 py-1.5 text-sm font-medium text-[#0a3d62] transition hover:bg-white"
    }
  >
    {label}
  </button>
);

export default VisionBlogIndex;
