import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { getBlogPost } from "@/data/blogPosts";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorBioCard from "@/components/AuthorBioCard";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  published_at: string;
  cover_image: string | null;
  keywords: string[] | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = getBlogPost(slug) as Post | undefined;
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent"
        />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
        <h1 className="mb-4 text-2xl font-bold text-foreground">Post not found</h1>
        <Link to="/" className="text-primary hover:underline">← Back home</Link>
      </div>
    );
  }

  const siteUrl = "https://sojibahmmed.com";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Sojib Ahmmed`}</title>
        <meta name="description" content={post.excerpt} />
        {post.keywords && post.keywords.length > 0 && (
          <meta name="keywords" content={post.keywords.join(", ")} />
        )}
        <meta name="author" content="Sojib Ahmmed" />
        <link rel="canonical" href={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Sojib Ahmmed" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={post.cover_image || `${siteUrl}/og-image.jpg`} />
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:section" content={post.category} />
        <meta property="article:author" content="Sojib Ahmmed" />
        {post.cover_image && <meta property="og:image" content={post.cover_image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sojib_hq" />
        <meta name="twitter:creator" content="@sojib_hq" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.cover_image || `${siteUrl}/og-image.jpg`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            url: postUrl,
            datePublished: post.published_at,
            articleSection: post.category,
            ...(post.cover_image ? { image: post.cover_image } : {}),
            author: { "@type": "Person", name: "Sojib Ahmmed", url: siteUrl, sameAs: ["https://x.com/sojib_hq", "https://github.com/SOJIB-AHMMED"] },
            publisher: { "@type": "Person", name: "Sojib Ahmmed", url: siteUrl },
            mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 py-12 pt-24"
        >
          <article className="mx-auto max-w-2xl">
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>

            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-4 inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary"
            >
              {post.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-4 text-3xl font-bold text-foreground md:text-4xl"
            >
              {post.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-10 text-sm text-muted-foreground"
            >
              {format(new Date(post.published_at), "MMMM d, yyyy")}
            </motion.p>

            {post.cover_image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-10 glass-card glow-border overflow-hidden rounded-xl"
              >
                <img src={post.cover_image} alt={post.title} className="w-full object-cover" />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-5 text-muted-foreground leading-relaxed"
            >
              <MarkdownRenderer content={post.content} />
            </motion.div>

            <div className="glow-line my-12" />

            <div className="mb-8">
              <AuthorBioCard />
            </div>

            <Link to="/blog" className="text-primary hover:underline">← Back to all posts</Link>
          </article>
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
