/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Projects — Joshua Kirabo",
  description: "Selected software projects by Joshua Kirabo.",
};

const PROJECTS = [
  {
    title: "NextStep",
    image: "/assets/images/projects/project1.png",
    summary:
      "A product focused on helping people plan their next move with clear steps, progress, and momentum.",
    tags: ["Next.js", "Tailwind", "Java", "Spring Boot", "Postgres", "Google Cloud"],
  },
  {
    title: "LopesEat",
    image: "/assets/images/projects/project2.png",
    summary:
      "A food ordering experience built around discovery, fast checkout, and reliable delivery flows.",
    tags: ["React", "Node.js", "PostgreSQL", "Google Cloud"],
  },
  {
    title: "CLEAR",
    image: "/assets/images/projects/project3.png",
    summary:
      "A platform built for clarity-first workflows—simple surfaces, strong hierarchy, and dependable operations.",
    tags: ["Web", "Platform", "UI"],
  },
  {
    title: "Candidate Review Assistant",
    image: "/assets/images/projects/project4.png",
    summary:
      "An assistant for structured hiring reviews: consistent criteria, notes, and fair candidate evaluation.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="overflow-x-clip">
      <SiteHeader activePath="/projects" />

      <section className="bg-secondary py-[90px]">
        <div className="container">
          <p className="text-orange text-xl font-Syne font-bold">Portfolio</p>
          <h1 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] font-Syne font-bold tracking-[-1.5px] mt-2">
            Recent Projects
          </h1>
          <p className="paragraph mt-6 max-w-[760px]">
            A few projects where I focused on clean architecture, practical delivery speed, and
            thoughtful user experience.
          </p>
        </div>
      </section>

      <section className="bg-white py-[100px]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <article key={project.title} className="group">
              <div className="rounded-[20px] overflow-hidden mb-6 bg-black-500 relative group/card">
                <Link
                  href="/project-details"
                  className="block relative text-white transition-colors duration-300 group-hover/card:text-orange"
                  aria-label={`View ${project.title} details`}
                >
                  <img src={project.image} alt="" className="w-full h-auto block" />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.90)_14%,rgba(0,0,0,0.58)_40%,rgba(0,0,0,0.24)_62%,transparent_82%)] pointer-events-none opacity-[0.52] transition-opacity duration-300 ease-out group-hover/card:opacity-100"
                    aria-hidden
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 pt-16 md:pt-20 flex flex-col gap-3">
                    <div className="flex flex-wrap items-end justify-between gap-4 [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_14px_rgba(0,0,0,0.55)] transition-[text-shadow,color] duration-300 group-hover/card:[text-shadow:none]">
                      <h2 className="font-bold font-Syne text-2xl lg:text-3xl xl:text-[34px] leading-tight tracking-[-0.02em] min-w-0 flex-1">
                        {project.title}
                      </h2>
                      <span
                        className="shrink-0 group-hover/card:animate-arrow-move-up"
                        aria-hidden
                      >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-white/55 bg-black/30 text-white/95 transition-[color,border-color,background-color] duration-300 group-hover/card:border-orange/90 group-hover/card:bg-black/40 group-hover/card:text-orange"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
              <p className="paragraph mt-4">{project.summary}</p>
              <Link
                href="/project-details"
                className="inline-flex items-center mt-7 btn-primary"
              >
                View details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
