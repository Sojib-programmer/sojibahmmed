import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getPost, posts } from "./blogData";

const SITE = "https://sojibahmmed.com";

const VisionBlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Helmet>
          <title>Post not found | Sojib Ahmmed</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1 className="text-2xl font-bold text-[#0a3d62]">Post not found</h1>
        <p className="mt-3 text-[#555e6b]">That article doesn't exist or has moved.</p>
        <Link
          to="/vision/blog"
          className="mt-6 inline-block rounded-md bg-[#0a3d62] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Back to field notes
        </Link>
      </div>
    );
  }

  const idx = posts.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;
  // The DB copy at /blog/<slug> is the canonical home for these essays.
  const url = `${SITE}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: "Sojib Ahmmed" },
    datePublished: post.date,
    inLanguage: post.lang ?? "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    publisher: { "@type": "Organization", name: "sojibahmmed.com" },
  };

  return (
    <article lang={post.lang ?? "en"}>
      <Helmet>
        <title>{`${post.title} | Sojib Ahmmed`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="article:author" content="Sojib Ahmmed" />
        <meta property="article:published_time" content={post.date} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <header className="border-b border-[#dce8f2]">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <Link
            to="/vision/blog"
            className="text-xs font-semibold uppercase tracking-widest text-[#555e6b] hover:text-[#0a3d62]"
          >
            ← All posts
          </Link>
          <div
            className="mt-6 text-xs font-semibold uppercase tracking-widest"
            style={{ color: post.accent }}
          >
            {post.tag}
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0a3d62] md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-[#555e6b]">{post.excerpt}</p>
          <p className="mt-4 text-sm text-[#555e6b]">
            By <span className="font-medium text-[#0a3d62]">Sojib Ahmmed</span> ·{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            · {post.readTime} read
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12">
        {post.sections.map((section) => (
          <section key={section.h} className="mb-10">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0a3d62]">{section.h}</h2>
            {section.p.map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed text-[#2f3742]">
                {para}
              </p>
            ))}
          </section>
        ))}

        <nav className="mt-14 flex flex-col gap-4 border-t border-[#dce8f2] pt-8 md:flex-row md:justify-between">
          {prev ? (
            <Link to={`/vision/blog/${prev.slug}`} className="group max-w-sm">
              <div className="text-xs uppercase tracking-widest text-[#555e6b]">← Previous</div>
              <div className="mt-1 font-semibold text-[#0a3d62] group-hover:underline">
                {prev.title}
              </div>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/vision/blog/${next.slug}`} className="group max-w-sm md:text-right">
              <div className="text-xs uppercase tracking-widest text-[#555e6b]">Next →</div>
              <div className="mt-1 font-semibold text-[#0a3d62] group-hover:underline">
                {next.title}
              </div>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
};

export default VisionBlogPost;
