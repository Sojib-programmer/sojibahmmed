import { Link, useParams, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getCategory, postsForCategory, categories, type BlogPost } from "./blogData";

const SITE = "https://sojibahmmed.com";
const PER_PAGE = 9;

const VisionBlogCategory = () => {
  const { category = "" } = useParams();
  const [params, setParams] = useSearchParams();
  const cat = getCategory(category);
  const list = postsForCategory(category);

  const pageCount = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const rawPage = Number.parseInt(params.get("page") ?? "1", 10);
  const page = Number.isFinite(rawPage) ? Math.min(Math.max(rawPage, 1), pageCount) : 1;
  const visible = list.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goToPage = (n: number) => {
    const next = new URLSearchParams(params);
    if (n <= 1) next.delete("page");
    else next.set("page", String(n));
    setParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!cat) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Helmet>
          <title>Category not found | Sojib Ahmmed</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1 className="text-2xl font-bold text-[#0a3d62]">Category not found</h1>
        <Link
          to="/vision/blog"
          className="mt-6 inline-block rounded-md bg-[#0a3d62] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Back to field notes
        </Link>
      </div>
    );
  }

  const url = `${SITE}/vision/blog/category/${cat.slug}`;

  return (
    <div>
      <Helmet>
        <title>{`${cat.label} — Field Notes | Sojib Ahmmed`}</title>
        <meta name="description" content={cat.blurb} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${cat.label} — Field Notes`} />
        <meta property="og:description" content={cat.blurb} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <section className="border-b border-[#dce8f2]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <Link
            to="/vision/blog"
            className="text-xs font-semibold uppercase tracking-widest text-[#555e6b] hover:text-[#0a3d62]"
          >
            ← All posts
          </Link>
          <div
            className="mt-6 text-xs font-semibold uppercase tracking-widest"
            style={{ color: cat.accent }}
          >
            Category
          </div>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[#0a3d62] md:text-5xl">
            {cat.label}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#555e6b]">{cat.blurb}</p>
          <p className="mt-3 text-sm text-[#555e6b]">
            {list.length} article{list.length === 1 ? "" : "s"}
            {pageCount > 1 ? ` · page ${page} of ${pageCount}` : ""}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((post: BlogPost) => (
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

        <div className="mt-14 border-t border-[#dce8f2] pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#555e6b]">
            Other categories
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) =>
              c.slug === cat.slug ? (
                <span
                  key={c.slug}
                  className="rounded-full border border-[#dce8f2] bg-white px-4 py-1.5 text-sm font-medium text-[#555e6b]"
                >
                  {c.label}
                </span>
              ) : (
                <Link
                  key={c.slug}
                  to={`/vision/blog/category/${c.slug}`}
                  className="rounded-full border border-[#dce8f2] px-4 py-1.5 text-sm font-medium text-[#0a3d62] transition hover:bg-white"
                >
                  {c.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionBlogCategory;
