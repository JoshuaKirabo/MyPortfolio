/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProjectCardGlow, { type CardBrandAccent } from "@/components/project-card-glow";
import ProjectScroller from "@/components/project-scroller";

export const metadata: Metadata = {
  title: "Joshua Kirabo — Software Engineer",
  description:
    "Joshua Kirabo, Software Engineer based in Arizona. Building clean systems and thoughtful user experiences.",
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader activePath="/" />

      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <PortfolioSection />

      <SiteFooter />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7H17V17"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroSocialNav() {
  const linkClass = "text-black-800 hover:text-orange";
  return (
    <ul className="flex flex-wrap gap-x-4 items-center">
      <li>
        <a
          href="https://www.linkedin.com"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://github.com"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href="mailto:joshuak2001@gmail.com" className={linkClass} aria-label="Email">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
}

function HeroSection() {
  return (
    <section className="hero-sky relative pt-[140px] pb-[125px] overflow-hidden">
      <div className="hero-stars" aria-hidden="true"></div>
      <div className="container relative z-[1]">
        <div className="grid grid-cols-1 2xl:-mx-4">
          <div className="xl:pt-12 text-center flex flex-col items-center">
            <span
              className="font-Syne text-black-800 font-bold text-2xl lg:text-[32px] leading-none flex flex-wrap items-center justify-center mb-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="2" viewBox="0 0 65 2" fill="none">
                  <path d="M0 1H65" stroke="#080808" />
                </svg>
              </span>
              Hello, I&rsquo;m
              <span className="ml-2" role="img" aria-label="victory hand medium skin tone">
                ✌🏽
              </span>
            </span>
            <h1
              className="relative z-[1] font-Syne text-black-800 font-bold text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] 2xl:before:w-[120px] xl:before:w-[100px] 2xl:before:h-[120px] xl:before:h-[100px] before:rounded-full before:bg-primary before:block before:absolute before:top-[0px] before:left-0 before:-z-[1] lg:before:w-[85px] lg:before:h-[85px] before:w-[70px] before:h-[70px]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Joshua
            </h1>
            <h2
              className="font-Syne text-black-800 font-bold text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] mb-[20px]"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Kirabo
            </h2>
            <p
              className="font-Syne text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight mb-[30px]"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Software Engineer | Based in Arizona
              <span className="ml-2 inline-block" role="img" aria-label="cactus">
                🌵
              </span>
            </p>

            <div className="flex flex-wrap justify-center mb-[50px] md:mb-[60px] xl:mb-[70px] 2xl:mb-[80px]">
              <span data-aos="fade-up" data-aos-delay="1000">
                <Link href="/about" className="flex items-center flex-wrap btn-primary mr-2 group">
                  About Me
                  <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                    <ArrowIcon />
                  </span>
                </Link>
              </span>
              <span data-aos="fade-up" data-aos-delay="1200">
                <Link href="/contact" className="flex items-center flex-wrap btn-primary-outline group">
                  Let&rsquo;s Connect
                  <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                    <ArrowIcon />
                  </span>
                </Link>
              </span>
            </div>

            <div
              className="flex flex-wrap items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="900"
              data-aos-once="false"
              data-aos-mirror="true"
            >
              <HeroSocialNav />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMeSection() {
  return (
    <section
      className="about-section pt-[120px] pb-[120px]"
      data-aos="zoom-out"
      data-aos-delay="300"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
          <div className="relative">
            <img src="/assets/images/about/about1.png" alt="about" />
          </div>
          <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
            <span className="text-orange text-xl">Hello I&rsquo;m</span>
            <h3
              className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="120"
            >
              Joshua Kirabo, Software Engineer
            </h3>

            <h4
              className="text-black-800 text-2xl lg:text-3xl xl:text-[44px] mt-3 mb-4"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="280"
            >
              Based in Arizona
            </h4>
            <p
              className="paragraph mb-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="420"
            >
              That is where I come in. A lover of clean systems and thoughtful UX. Here to craft
              software that not only reflects who you are and what you stand for, but ships
              experiences that genuinely resonate with the people who use them.
            </p>

            <div
              className="flex flex-wrap"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="580"
            >
              <Link
                href="/contact"
                className="flex items-center flex-wrap btn-primary group"
              >
                Download my resume
                <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Service = {
  title: React.ReactNode;
  icon: React.ReactNode;
  delay: number;
};

const SERVICES: Service[] = [
  {
    title: (
      <>
        Mobile Apps <br /> design
      </>
    ),
    delay: 500,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.875 3.75C4.875 2.09314 6.21814 0.75 7.875 0.75H16.125C17.7819 0.75 19.125 2.09314 19.125 3.75V20.25C19.125 21.9069 17.7819 23.25 16.125 23.25H7.875C6.21814 23.25 4.875 21.9069 4.875 20.25V3.75ZM7.875 2.25C7.04659 2.25 6.375 2.92157 6.375 3.75V20.25C6.375 21.0784 7.04659 21.75 7.875 21.75H16.125C16.9534 21.75 17.625 21.0784 17.625 20.25V3.75C17.625 2.92157 16.9534 2.25 16.125 2.25H7.875Z"
          fill="#080808"
          fillOpacity="0.9"
        />
        <path
          d="M12.75 4.5C12.75 4.91422 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91422 11.25 4.5C11.25 4.08578 11.5858 3.75 12 3.75C12.4142 3.75 12.75 4.08578 12.75 4.5Z"
          fill="#FFB646"
        />
        <path
          d="M13.5 19.875C13.9142 19.875 14.25 19.5392 14.25 19.125C14.25 18.7108 13.9142 18.375 13.5 18.375H10.5C10.0858 18.375 9.75 18.7108 9.75 19.125C9.75 19.5392 10.0858 19.875 10.5 19.875H13.5Z"
          fill="#FFB646"
        />
      </svg>
    ),
  },
  {
    title: (
      <>
        UI/UX <br /> design
      </>
    ),
    delay: 700,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 3H3C2.44772 3 2 3.44772 2 4V18C2 18.5523 2.44772 19 3 19H9V21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H15V19H21C21.5523 19 22 18.5523 22 18V4C22 3.44772 21.5523 3 21 3ZM20 17H4V5H20V17Z"
          fill="#080808"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
  {
    title: (
      <>
        Website <br /> design
      </>
    ),
    delay: 900,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM4 4H20V7H4V4ZM11 20H4V9H11V20ZM20 20H13V9H20V20Z"
          fill="#080808"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
  {
    title: (
      <>
        Web <br /> development
      </>
    ),
    delay: 500,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.7 15.9L4.8 12L8.7 8.1C9.09 7.71 9.09 7.08 8.7 6.69C8.31 6.3 7.68 6.3 7.29 6.69L2.68 11.3C2.29 11.69 2.29 12.32 2.68 12.71L7.29 17.32C7.68 17.71 8.31 17.71 8.7 17.32C9.08 16.93 9.09 16.29 8.7 15.9ZM15.3 15.9L19.2 12L15.3 8.1C14.91 7.71 14.91 7.08 15.3 6.69C15.69 6.3 16.32 6.3 16.71 6.69L21.32 11.3C21.71 11.69 21.71 12.32 21.32 12.71L16.71 17.32C16.32 17.71 15.69 17.71 15.3 17.32C14.92 16.93 14.91 16.29 15.3 15.9Z"
          fill="#080808"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
  {
    title: (
      <>
        Brand <br /> identity
      </>
    ),
    delay: 700,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
          fill="#080808"
          fillOpacity="0.9"
        />
        <path
          d="M12 7L10.59 8.41L14.17 12L10.59 15.59L12 17L17 12L12 7Z"
          fill="#FFB646"
        />
      </svg>
    ),
  },
  {
    title: (
      <>
        Interaction <br /> design
      </>
    ),
    delay: 900,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 2H17C19.21 2 21 3.79 21 6V18C21 20.21 19.21 22 17 22H7C4.79 22 3 20.21 3 18V6C3 3.79 4.79 2 7 2ZM7 4C5.9 4 5 4.9 5 6V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V6C19 4.9 18.1 4 17 4H7Z"
          fill="#080808"
          fillOpacity="0.9"
        />
        <circle cx="12" cy="17" r="1.5" fill="#FFB646" />
      </svg>
    ),
  },
];

function ServicesSection() {
  return (
    <section className="py-[120px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 2xl:gap-0 mb-12 items-center" data-aos="fade-up">
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
              <span className="text-orange text-xl">Services</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">
                My specialties
              </h3>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <p className="paragraph">
              From idea to production, I help teams ship software that feels fast, looks clean, and
              holds up in the real world. React, Node, TypeScript, and a sharp eye for UX.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {SERVICES.map((service, idx) => (
                <div
                  key={idx}
                  className="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group"
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                    {service.icon}
                  </div>
                  <h4>
                    <Link
                      href="/projects"
                      className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                    >
                      {service.title}
                      <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                        <ArrowIcon />
                      </span>
                    </Link>
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 xl:col-span-4" data-aos="zoom-in" data-aos-delay="1000">
            <div className="px-6 py-9 bg-black-800 rounded-lg flex flex-wrap flex-col justify-between max-w-[416px] mx-auto h-full group">
              <div className="flex flex-wrap justify-end relative">
                <a
                  href="mailto:joshuak2001@gmail.com"
                  className="group-hover:animate-arrow-move-up"
                  aria-label="Email Joshua"
                >
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.3333 56.6666L56.6667 23.3333"
                      stroke="#FFB646"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.3333 23.3333H56.6667V56.6666"
                      stroke="#FFB646"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col flex-wrap gap-y-2">
                <span className="text-orange text-lg font-normal leading-none">SAY HELLO!</span>
                <h4 className="text-white text-2xl xl:text-[32px] font-bold font-Syne leading-none">
                  joshuak2001@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type StackItem = {
  label: string;
  Icon: IconType;
  /** Brand color via Tailwind; icons use currentColor */
  colorClass: string;
  /** Hex for pill border / fill / label gradient (match icon) */
  accent: string;
};

type Project = {
  image: string;
  title: string;
  summary: string;
  tags: string[];
  stack?: StackItem[];
  liveUrl?: string;
  detailsHref?: string;
  delay: number;
  brand: CardBrandAccent;
};

const PROJECTS: Project[] = [
  {
    image: "/assets/images/project_photos/nxtstp.webp",
    title: "NextStep",
    summary:
      "A career-planning app that turns goals into concrete next steps, with momentum tracking and progress check‑ins.",
    tags: ["Next.js", "Tailwind", "Java", "Spring Boot", "Postgres", "Google Cloud"],
    stack: [
      { label: "Next.js", Icon: SiNextdotjs, colorClass: "text-white", accent: "#f8fafc" },
      { label: "Tailwind CSS", Icon: SiTailwindcss, colorClass: "text-[#06b6d4]", accent: "#06b6d4" },
      { label: "Java", Icon: DiJava, colorClass: "text-[#f89820]", accent: "#f89820" },
      { label: "Spring Boot", Icon: SiSpringboot, colorClass: "text-[#6db33f]", accent: "#6db33f" },
      { label: "PostgreSQL", Icon: SiPostgresql, colorClass: "text-[#4169e1]", accent: "#4169e1" },
      { label: "Google Cloud", Icon: SiGooglecloud, colorClass: "text-[#4285f4]", accent: "#4285f4" },
    ],
    brand: {
      strokeBottom: "#ede1ff",
      strokeMid: "#b8afd0",
      strokeTop: "#8f82b8",
      glowStrong: "rgba(237,225,255,0.16)",
      glowSoft: "rgba(184,175,208,0.08)",
    },
    detailsHref: "/project-details",
    delay: 300,
  },
  {
    image: "/assets/images/projects/project2.png",
    title: "LopesEat",
    summary:
      "A campus‑friendly ordering experience built for fast discovery, reliable checkout, and clean delivery flows.",
    tags: ["React", "Node.js", "PostgreSQL", "Google Cloud"],
    stack: [
      { label: "React", Icon: SiReact, colorClass: "text-[#61dafb]", accent: "#61dafb" },
      { label: "Node.js", Icon: SiNodedotjs, colorClass: "text-[#5fa04e]", accent: "#5fa04e" },
      { label: "PostgreSQL", Icon: SiPostgresql, colorClass: "text-[#4169e1]", accent: "#4169e1" },
      { label: "Google Cloud", Icon: SiGooglecloud, colorClass: "text-[#4285f4]", accent: "#4285f4" },
    ],
    brand: {
      strokeBottom: "#61dafb",
      strokeMid: "#88c8e8",
      strokeTop: "#4da8cc",
      glowStrong: "rgba(97,218,251,0.15)",
      glowSoft: "rgba(97,218,251,0.07)",
    },
    detailsHref: "/project-details",
    delay: 500,
  },
  {
    image: "/assets/images/projects/project3.png",
    title: "CLEAR",
    summary:
      "A clarity‑first platform with simple surfaces, strong hierarchy, and dependable operational workflows.",
    tags: ["WEB", "PLATFORM"],
    brand: {
      strokeBottom: "#5ec46a",
      strokeMid: "#8ad894",
      strokeTop: "#b8ecbe",
      glowStrong: "rgba(94,196,106,0.15)",
      glowSoft: "rgba(94,196,106,0.07)",
    },
    detailsHref: "/project-details",
    delay: 700,
  },
  {
    image: "/assets/images/projects/project4.png",
    title: "Candidate Review Assistant",
    summary:
      "A lightweight tool for structured hiring reviews: consistent criteria, clean notes, and fairer candidate calls.",
    tags: ["HTML", "CSS", "JavaScript"],
    stack: [
      { label: "HTML5", Icon: SiHtml5, colorClass: "text-[#e34f26]", accent: "#e34f26" },
      { label: "CSS3", Icon: SiCss, colorClass: "text-[#1572b6]", accent: "#1572b6" },
      { label: "JavaScript", Icon: SiJavascript, colorClass: "text-[#f7df1e]", accent: "#f7df1e" },
    ],
    brand: {
      strokeBottom: "#f7df1e",
      strokeMid: "#e8c94a",
      strokeTop: "#c4a832",
      glowStrong: "rgba(247,223,30,0.15)",
      glowSoft: "rgba(247,223,30,0.07)",
    },
    detailsHref: "/project-details",
    delay: 900,
  },
];

function PortfolioSection() {
  return (
    <section className="overflow-x-clip bg-secondary py-[120px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12" data-aos="fade-up">
            <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
              <span className="text-orange text-xl">Here&apos;s what I&apos;ve been working on</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                My Recent{" "}
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  P
                </span>
                rojects
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed row: edge fade lives only in viewport margins; inner width matches strip max */}
      <div className="project-strip-outer">
        <div className="project-strip-outer__inner mx-auto w-full max-w-[min(100%,1600px)] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <ProjectScroller>
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              data-project-card
              className="shrink-0 w-[300px] sm:w-[380px] md:w-[430px] lg:w-[480px] xl:w-[520px] 2xl:w-[540px]"
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              <ProjectCardGlow className="cursor-pointer" brand={project.brand}>
                <div className="relative min-h-[520px] sm:min-h-[560px] md:min-h-[600px] lg:min-h-[620px] text-white">
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 z-[1] bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.88)_26%,rgba(0,0,0,0.78)_46%,rgba(0,0,0,0.62)_64%,rgba(0,0,0,0.38)_82%,transparent_100%)] pointer-events-none"
                    aria-hidden
                  />
                  <Link
                    href={project.detailsHref ?? "/project-details"}
                    aria-label={`View ${project.title}`}
                    className="absolute inset-0 z-[3] cursor-pointer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-[4] p-6 md:p-8 pt-20 md:pt-24 flex flex-col gap-3 pointer-events-none [&_a]:pointer-events-auto">
                    <h4 className="font-bold font-Syne text-[22px] sm:text-[26px] lg:text-[30px] xl:text-[34px] leading-tight tracking-[-0.02em] text-white transition-colors duration-300 group-hover/card:text-orange">
                      {project.title}
                    </h4>

                    <p className="text-sm sm:text-[15px] leading-snug text-white/95 line-clamp-4">
                      {project.summary}
                    </p>

                    {project.stack && project.stack.length > 0 ? (
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {project.stack.map(({ label, Icon, colorClass, accent }) => (
                          <span
                            key={label}
                            className="stack-pill-accent pointer-events-auto inline-flex max-w-fit items-stretch overflow-hidden rounded-full motion-reduce:transition-none"
                            style={{ ["--stack-accent"]: accent } as React.CSSProperties}
                            title={label}
                            aria-label={label}
                          >
                            <span className="stack-pill-accent__icon inline-flex shrink-0 items-center justify-center">
                              <Icon
                                className={`relative z-[1] h-5 w-5 sm:h-6 sm:w-6 ${colorClass}`}
                                aria-hidden
                              />
                            </span>
                            <span className="stack-pill-accent__label inline-flex items-center text-left text-[10px] font-Inter leading-none motion-reduce:transition-none sm:text-[11px]">
                              {label}
                            </span>
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] sm:text-xs uppercase tracking-[0.14em] font-semibold font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-white/50 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))] text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.liveUrl && /^https?:\/\//i.test(project.liveUrl) ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card-cta group/cta inline-flex items-center rounded-full border px-5 py-2.5 text-[15px] font-bold font-Syne leading-none"
                        >
                          Live Demo
                          <span
                            className="project-card-cta-icon inline-flex shrink-0 overflow-hidden group-hover/cta:animate-arrow-move-up [&_svg]:w-[18px] [&_svg]:h-[18px]"
                            aria-hidden
                          >
                            <ArrowIcon />
                          </span>
                        </a>
                      ) : project.liveUrl ? (
                        <Link
                          href={project.liveUrl}
                          className="project-card-cta group/cta inline-flex items-center rounded-full border px-5 py-2.5 text-[15px] font-bold font-Syne leading-none"
                        >
                          Live Demo
                          <span
                            className="project-card-cta-icon inline-flex shrink-0 overflow-hidden group-hover/cta:animate-arrow-move-up [&_svg]:w-[18px] [&_svg]:h-[18px]"
                            aria-hidden
                          >
                            <ArrowIcon />
                          </span>
                        </Link>
                      ) : (
                        <Link
                          href={project.detailsHref ?? "/project-details"}
                          className="project-card-cta group/cta inline-flex items-center rounded-full border px-5 py-2.5 text-[15px] font-bold font-Syne leading-none"
                          title="Opens project details until a live URL is set"
                        >
                          Live Demo
                          <span
                            className="project-card-cta-icon inline-flex shrink-0 overflow-hidden group-hover/cta:animate-arrow-move-up [&_svg]:w-[18px] [&_svg]:h-[18px]"
                            aria-hidden
                          >
                            <ArrowIcon />
                          </span>
                        </Link>
                      )}
                      <Link
                        href={project.detailsHref ?? "/project-details"}
                        className="project-card-cta group/cta inline-flex items-center rounded-full border px-5 py-2.5 text-[15px] font-bold font-Syne leading-none"
                      >
                        Project Details
                        <span
                          className="project-card-cta-icon inline-flex shrink-0 overflow-hidden group-hover/cta:animate-arrow-move-up [&_svg]:w-[18px] [&_svg]:h-[18px]"
                          aria-hidden
                        >
                          <ArrowIcon />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ProjectCardGlow>
            </div>
          ))}
          </ProjectScroller>
        </div>
      </div>

      <div className="container">
        <div className="mt-12" data-aos="fade-up">
          <Link
            href="/projects"
            className="group flex w-full items-center justify-center flex-wrap btn-primary btn-primary-view-all"
          >
            View All Project
            <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

