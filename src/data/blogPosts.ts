import { productPosts } from "./productPosts";
import { posts as essayPosts } from "@/pages/vision/blogData";

const covers = import.meta.glob("@/assets/blog/*.jpg", { eager: true, import: "default" }) as Record<string, string>;
const cover = (f: string) => Object.entries(covers).find(([k]) => k.endsWith("/" + f))?.[1] ?? null;

export interface StaticBlogPost {
  id: string; slug: string; title: string; excerpt: string; category: string;
  published_at: string; cover_image: string | null; keywords: string[] | null; content: string;
}

const essayCover: Record<string, string> = { AI: "how-ai-agents-work.jpg", "E-commerce": "ecosystem-business-stack.jpg", Recommendation: "vector-databases-ai.jpg", "Matching Tech": "how-rag-works.jpg", Technology: "first-mover-ai-2026.jpg", Leadership: "bangla-operator-mindset.jpg" };

export const blogPosts: StaticBlogPost[] = [
  ...productPosts.map((p) => ({ id: p.slug, slug: p.slug, title: p.title, excerpt: p.excerpt, category: p.category, published_at: p.published_at, cover_image: cover(p.cover), keywords: p.keywords, content: p.content })),
  ...essayPosts.map((e) => ({ id: e.slug, slug: e.slug, title: e.title, excerpt: e.excerpt, category: e.tag, published_at: `${e.date}T09:00:00Z`, cover_image: cover(essayCover[e.tag] ?? "weekly-reading-list.jpg"), keywords: null, content: e.sections.map((s) => `## ${s.h}\n\n${s.p.join("\n\n")}`).join("\n\n") })),
].sort((a, b) => b.published_at.localeCompare(a.published_at));

export const getBlogPost = (slug?: string) => blogPosts.find((p) => p.slug === slug);
