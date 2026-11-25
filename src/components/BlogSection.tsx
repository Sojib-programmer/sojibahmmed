import { motion } from "framer-motion";
import { Section, SectionHead } from "./Shell";
import { fadeInUp, staggerContainer } from "./animations";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { format } from "date-fns";


interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  published_at: string;
  cover_image: string | null;
}

const BlogSection = () => {
  const posts: BlogPost[] = blogPosts.slice(0, 6);

  return (
    <Section id="blog" divided>
      <SectionHead eyebrow="From the Desk">
        Thoughts, strategies, and lessons from the field.
      </SectionHead>

      <motion.div
        className="mt-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-70px" }}
      >
        <motion.p
          variants={fadeInUp}
          className="mb-8 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-muted-foreground"
        >
          <span className="type-eyebrow text-primary/80">Latest</span>
          <span>
            resale.bd is live — Bangladesh&rsquo;s first escrow-protected secondhand marketplace.{" "}
            <Link
              to="/blog/resale-bd-launch-escrow-secondhand-bangladesh"
              className="font-medium text-primary hover:underline"
            >
              Read the launch →
            </Link>
          </span>
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {posts?.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group glass-card block rounded-xl overflow-hidden transition-all duration-300"
              >
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
                  <span className="mb-3 inline-block rounded-full bg-primary/10 border border-primary/15 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(post.published_at), "MMM d, yyyy")}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-10 text-center">
          <Link
            to="/blog"
            className="glass-card inline-block rounded-full px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:text-primary"
          >
            View all posts →
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default BlogSection;
