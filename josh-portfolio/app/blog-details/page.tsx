import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Blog Details — Joshua Kirabo",
  description: "Detailed article on engineering delivery and frontend architecture.",
};

export default function BlogDetailsPage() {
  return (
    <div className="overflow-x-clip">
      <SiteHeader activePath="/blog-details" />

      <section className="bg-secondary py-[90px]">
        <div className="container">
          <p className="text-orange text-xl font-Syne font-bold">Apr 2026</p>
          <h1 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] font-Syne font-bold tracking-[-1.5px] mt-2 max-w-[980px]">
            Shipping clean frontend architecture under real deadlines
          </h1>
        </div>
      </section>

      <article className="bg-white py-[100px]">
        <div className="container max-w-[900px]">
          <p className="paragraph">
            Strong frontend systems are built through repeated, practical choices. The goal is not
            theoretical perfection, it is confidence: the team can ship quickly, reason about
            behavior, and evolve the codebase without fear.
          </p>
          <h2 className="text-black-800 text-2xl lg:text-3xl font-Syne font-bold mt-10">
            1) Establish boundaries early
          </h2>
          <p className="paragraph mt-4">
            Keep page-level orchestration separate from reusable domain components. This reduces
            accidental coupling and keeps product iteration loops fast.
          </p>
          <h2 className="text-black-800 text-2xl lg:text-3xl font-Syne font-bold mt-10">
            2) Make state transitions obvious
          </h2>
          <p className="paragraph mt-4">
            Track loading, success, and failure states explicitly. UI uncertainty is expensive and
            usually turns into support burden later.
          </p>
          <h2 className="text-black-800 text-2xl lg:text-3xl font-Syne font-bold mt-10">
            3) Invest in predictable UI primitives
          </h2>
          <p className="paragraph mt-4">
            Reusable, documented primitives pay for themselves fast. They improve consistency,
            reduce regressions, and allow feature teams to move independently.
          </p>
          <Link href="/blog" className="inline-flex mt-10 btn-primary">
            Back to blog
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
