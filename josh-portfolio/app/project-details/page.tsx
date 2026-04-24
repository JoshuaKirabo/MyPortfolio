/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Project Details — Joshua Kirabo",
  description: "Project case study details for Joshua Kirabo's recent work.",
};

export default function ProjectDetailsPage() {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader activePath="/project-details" />

      <section className="bg-secondary py-[90px]">
        <div className="container">
          <p className="text-orange text-xl font-Syne font-bold">Case Study</p>
          <h1 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] font-Syne font-bold tracking-[-1.5px] mt-2">
            Basinik Finance App
          </h1>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <img
              src="/assets/images/projects/project1.png"
              alt="Basinik Finance App preview"
              className="rounded-2xl w-full h-auto"
            />
            <h2 className="text-black-800 text-3xl font-Syne font-bold mt-10">Overview</h2>
            <p className="paragraph mt-5">
              This project focused on making complex finance workflows feel simple and reliable. I
              led frontend implementation and UX execution, with strong emphasis on performance,
              form ergonomics, and clear user feedback across key flows.
            </p>
            <h3 className="text-black-800 text-2xl font-Syne font-bold mt-8">Highlights</h3>
            <ul className="mt-4 space-y-3 paragraph">
              <li>- Built reusable UI primitives for forms, filters, and table layouts.</li>
              <li>- Reduced interaction latency through selective rendering and memoization.</li>
              <li>- Improved completion rates with clearer states and error recovery paths.</li>
            </ul>
          </div>

          <aside className="lg:col-span-4">
            <div className="p-7 rounded-2xl border border-black-text-100">
              <h3 className="font-Syne font-bold text-black-800 text-xl">Project Info</h3>
              <div className="mt-5 space-y-4">
                <p className="paragraph">
                  <strong className="text-black-800">Role:</strong> Frontend Engineer
                </p>
                <p className="paragraph">
                  <strong className="text-black-800">Stack:</strong> React, TypeScript, Next.js
                </p>
                <p className="paragraph">
                  <strong className="text-black-800">Focus:</strong> UX, performance, delivery
                </p>
              </div>
              <Link href="/projects" className="btn-primary inline-flex mt-8">
                Back to projects
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
