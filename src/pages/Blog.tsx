import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorBioCard from "@/components/AuthorBioCard";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  published_at: string;
  cover_image: string | null;
}

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const posts = blogPosts;
  const isLoading = false;
  const error = null as Error | null;



  const categories = useMemo(() => {
    if (!posts) return ["All"];
    const cats = [...new Set(posts.map((p) => p.category))].sort();
    return ["All", ...cats];
  }, [posts]);

  const filtered = useMemo(() => {
    if (!posts) return [];
    if (activeCategory === "All") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginatedPosts = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      <Helmet>
        <title>Blog — AI, Automation & Digital Infrastructure | Sojib Ahmmed</title>
        <meta name="description" content="Insights on AI, automation, startups, and digital infrastructure from Sojib Ahmmed — founder of companysetup.io, ticrupay, cyber.bd, and marketsync global." />
        <link rel="canonical" href="https://sojibahmmed.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog — AI, Automation & Digital Infrastructure | Sojib Ahmmed" />
        <meta property="og:description" content="Insights on AI, automation, startups, and digital infrastructure from Sojib Ahmmed." />
        <meta property="og:url" content="https://sojibahmmed.com/blog" />
        <meta property="og:image" content="https://sojibahmmed.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sojib_hq" />
        <meta name="twitter:creator" content="@sojib_hq" />
        <meta name="twitter:title" content="Blog | Sojib Ahmmed" />
        <meta name="twitter:description" content="Insights on AI, automation, startups, and digital infrastructure." />
        <meta name="twitter:image" content="https://sojibahmmed.com/og-image.jpg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="px-6 py-12 pt-24"
        >
          <div className="mx-auto max-w-5xl">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              Back home
            </Link>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary"
            >
              From the Desk
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-3xl font-bold text-foreground md:text-4xl"
            >
              All Posts
            </motion.h1>

            <div className="mb-10">
              <AuthorBioCard />
            </div>

            {/* Category filter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-10 flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "btn-glow bg-primary text-primary-foreground"
                      : "glass-card text-muted-foreground hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {isLoading && (
              <div className="flex justify-center py-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent"
                />
              </div>
            )}

            
            {!isLoading && !error && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group glass-card mirror-shine block h-full rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                        {post.cover_image && (
                          <div className="aspect-video w-full overflow-hidden">
                            <img
                              src={post.cover_image}
                              alt={post.title}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <span className="mb-3 inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary">
                            {post.category}
                          </span>
                          <h2 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                            {post.excerpt}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {format(new Date(post.published_at), "MMM d, yyyy")}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {!isLoading && totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-12 flex items-center justify-center gap-2"
              >
                {currentPage > 1 && (
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="glass-card inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary"
                  >
                    <ChevronLeft size={16} />
                    Prev
                  </button>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`h-9 w-9 rounded-full text-sm font-medium transition-all ${
                      currentPage === page
                        ? "btn-glow bg-primary text-primary-foreground"
                        : "glass-card text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="glass-card inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary disabled:opacity-40 disabled:pointer-events-none"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              </motion.div>
            )}

            {!isLoading && filtered.length === 0 && (
              <p className="py-20 text-center text-muted-foreground">
                No posts in this category yet.
              </p>
            )}
          </div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
