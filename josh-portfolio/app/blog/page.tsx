import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Blog — Joshua Kirabo",
  description: "Thoughts on software engineering, product delivery, and frontend architecture.",
};

const POSTS = [
  {
    slug: "shipping-clean-frontend-architecture",
    title: "Shipping clean frontend architecture under real deadlines",
    excerpt:
      "A practical guide for balancing speed, maintainability, and confidence in production React code.",
    date: "Apr 2026",
  },
  {
    slug: "typescript-pragmatic-patterns",
    title: "TypeScript patterns I reach for in growing products",
    excerpt:
      "Small design choices that keep teams productive as feature count and complexity increase.",
    date: "Mar 2026",
  },
  {
    slug: "ux-feedback-loops",
    title: "UX feedback loops that prevent expensive rewrites",
    excerpt:
      "How to collect signal early and turn it into better product decisions before tech debt compounds.",
    date: "Feb 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="overflow-x-clip">
      <SiteHeader activePath="/blog" />

      <section className="bg-secondary py-[90px]">
        <div className="container">
          <p className="text-orange text-xl font-Syne font-bold">Journal</p>
          <h1 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] font-Syne font-bold tracking-[-1.5px] mt-2">
            Blog & Insights
          </h1>
          <p className="paragraph mt-6 max-w-[760px]">
            Notes from building software products: architecture, developer experience, and product
            thinking from real project work.
          </p>
        </div>
      </section>

      <section className="bg-white py-[100px]">
        <div className="container grid gap-6">
          {POSTS.map((post) => (
            <article key={post.slug} className="p-8 rounded-2xl border border-black-text-100">
              <p className="text-orange font-Syne font-bold">{post.date}</p>
              <h2 className="text-black-800 text-2xl lg:text-3xl font-Syne font-bold mt-3">
                {post.title}
              </h2>
              <p className="paragraph mt-4">{post.excerpt}</p>
              <Link href="/blog-details" className="inline-flex mt-6 btn-primary">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
