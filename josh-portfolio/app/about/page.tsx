/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About — Joshua Kirabo",
  description: "About Joshua Kirabo, Software Engineer based in Arizona.",
};

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader activePath="/about" />

      <AboutMeSection />
      <ExperienceSection />
      <VideoSection />
      <ResumeTabsSection />

      <SiteFooter />
    </div>
  );
}

function AboutMeSection() {
  return (
    <section className="bg-secondary pt-20 pb-[120px]" data-aos="zoom-in">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
          <img className="mx-auto" src="/assets/images/about/about2.png" alt="about me" />
          <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
            <span className="text-orange text-xl">About me</span>
            <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
              Joshua Kirabo
            </h3>

            <h4 className="text-black-800 text-2xl mt-3 mb-4">Software Engineer</h4>
            <p className="text-xl font-bold font-Syne leading-7 mb-6">
              A Software Engineer who has been building products for 7+ years. I&rsquo;m proud of
              the work I&rsquo;ve shipped and I&rsquo;m always ready for the next challenge.
            </p>
            <p className="paragraph mb-6">
              That is where I come in. A lover of clean systems and thoughtful UX. Here to craft
              software that not only reflects who you are and what you stand for, but ships
              experiences that genuinely resonate with the people who use them.
            </p>

            <div>
              <img src="/assets/images/signature.svg" alt="signature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="bg-white py-[120px] overflow-x-hidden">
      <div className="container" data-aos="zoom-out">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[60px] xl:gap-[134px]">
          <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
            <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] mb-5">
              My vision is to build products people love.
            </h3>
            <p className="paragraph mb-7">
              That&rsquo;s where I come in. A lover of clean systems and thoughtful UX — here to
              craft software that not only reflects who you are and what you stand for, but ships
              experiences that genuinely resonate with the people who use them.
            </p>
            <ul className="flex flex-wrap gap-9 2xl:gap-[40px]">
              <li>
                <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                  08
                </span>
                <p className="paragraph">Award winner</p>
              </li>
              <li>
                <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                  1.2k
                </span>
                <p className="paragraph">Users reached</p>
              </li>
              <li>
                <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                  3.5k
                </span>
                <p className="paragraph">Commits shipped</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex flex-wrap flex-col mb-12">
              <span className="text-black-800 text-[65px] xl:text-[80px] font-bold font-Syne leading-none inline-block relative z-10 before:rounded-full before:bg-primary before:block before:absolute before:top-[50%] before:left-[-13px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%]">
                7+
              </span>
              <span className="strock-text mt-5">
                Years of <br /> experience
              </span>
            </div>

            <div className="px-6 py-6 bg-black-800 rounded-lg flex flex-wrap justify-between items-end group">
              <div className="flex flex-col flex-wrap gap-y-2">
                <span className="text-orange text-lg font-normal leading-none">SAY HELLO!</span>
                <h4 className="text-white text-2xl xl:text-[32px] font-bold font-Syne leading-none">
                  joshuak2001@gmail.com
                </h4>
              </div>
              <div className="flex flex-wrap justify-end">
                <a href="mailto:joshuak2001@gmail.com" className="group-hover:animate-arrow-move-up">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 34L34 14"
                      stroke="#FFB646"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 14H34V34"
                      stroke="#FFB646"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <div className="bg-white pb-[120px]">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="relative" data-aos="zoom-in-up">
            <img className="rounded-2xl" src="/assets/images/video/video.png" alt="video image" />
            <a
              href="https://www.youtube.com/watch?v=mSC6GwizOag&ab_channel=TailwindLabs"
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 play-button transition-all duration-200 hover:scale-105 group"
            >
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                  className="fill-primary group-hover:fill-yellow transition-all duration-300"
                  cx="50"
                  cy="50"
                  r="50"
                />
                <path
                  className="stroke-black-800 group-hover:stroke-white"
                  d="M43 41L57 50L43 59V41Z"
                  strokeOpacity="0.9"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabArrowIcon() {
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

const RESUME_TABS: Array<{ id: string; label: string }> = [
  { id: "about_me_tab", label: "About me" },
  { id: "experience_tab", label: "Experience" },
  { id: "education_tab", label: "Education" },
  { id: "skills_tab", label: "Skills" },
  { id: "awards_tab", label: "Awards" },
];

const ABOUT_FACTS: Array<{ label: string; value: string }> = [
  { label: "Name", value: "Joshua Kirabo" },
  { label: "Nationality", value: "Ugandan" },
  { label: "Phone", value: "+(1) 480 000 0000" },
  { label: "Email", value: "joshuak2001@gmail.com" },
  { label: "Experience", value: "7+ years" },
  { label: "Freelance", value: "Available" },
  { label: "GitHub", value: "joshuakirabo" },
  { label: "Language", value: "English" },
];

const EXPERIENCE_ITEMS: Array<{ date: string; company: string; role: string }> = [
  { date: "03/2021 – Running", company: "Freelance", role: "Software Engineer" },
  { date: "03/2019 – 07/2021", company: "Axtra", role: "Full-stack Developer" },
  { date: "03/2017 – 07/2019", company: "Axtra", role: "Frontend Developer" },
  { date: "03/2015 – 07/2017", company: "Axtra", role: "Junior Engineer" },
];

const EDUCATION_ITEMS: Array<{ date: string; school: string; degree: string }> = [
  { date: "2019 – 2023", school: "Arizona State University", degree: "BS Computer Science" },
  { date: "2017 – 2019", school: "Community College", degree: "AS Computer Science" },
  { date: "2013 – 2017", school: "High School", degree: "High School Diploma" },
];

const SKILL_ITEMS: Array<{ icon: string; name: string; level: string }> = [
  { icon: "/assets/images/skills/vs-code.png", name: "React / Next.js", level: "(90%)" },
  { icon: "/assets/images/skills/figma.png", name: "Figma", level: "(70%)" },
  { icon: "/assets/images/skills/framer.png", name: "TypeScript", level: "(90%)" },
  { icon: "/assets/images/skills/framer.png", name: "Node.js", level: "(85%)" },
  { icon: "/assets/images/skills/framer.png", name: "Python", level: "(80%)" },
  { icon: "/assets/images/skills/framer.png", name: "Tailwind CSS", level: "(90%)" },
];

const AWARD_ITEMS: Array<{ icon: string; year: string; label: string; title: string }> = [
  { icon: "/assets/images/awards/w-dot.png", year: "2023", label: "Winner", title: "Hackathon Finalist" },
  { icon: "/assets/images/awards/webby.png", year: "2022", label: "Winner", title: "Open Source Contributor" },
  { icon: "/assets/images/awards/fwa.png", year: "2021", label: "Winner", title: "Dean's List" },
  { icon: "/assets/images/awards/wordpress.png", year: "2020", label: "Winner", title: "Scholarship Recipient" },
];

function ResumeTabsSection() {
  return (
    <section className="featured-properties py-[80px] lg:py-[100px]">
      <div className="container" data-aos="zoom-out">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-4">
              <span className="text-orange text-xl">Resume</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                All over my details find he
                <span className="relative before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[15px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  re.
                </span>
                ..
              </h3>
            </div>

            <div className="tabs flex flex-wrap justify-center gap-4 mt-8 mb-14">
              {RESUME_TABS.map((tab, index) => (
                <button
                  key={tab.id}
                  data-tab={tab.id}
                  className={`tab-btn justify-between items-center inline-flex group${
                    index === 0 ? " active" : ""
                  }`}
                >
                  {tab.label}
                  <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                    <TabArrowIcon />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-12">
            <div id="about_me_tab" className="tab-content active relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-0">
                <img src="/assets/images/about/about3.png" alt="about me" />
                <div>
                  <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                    Based in Arizona
                  </h4>
                  <p className="paragraph mb-7">
                    Joshua Kirabo,{" "}
                    <span className="text-black-800">Software Engineer</span>, based in Arizona.
                    A lover of clean systems and thoughtful UX. Here to craft software that not
                    only reflects who you are and what you stand for,
                  </p>
                  <p className="paragraph mb-14">
                    but ships experiences that genuinely resonate with the people who use them.
                  </p>

                  <ul className="flex-col gap-3 inline-flex">
                    {ABOUT_FACTS.map((fact) => (
                      <li key={fact.label} className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          {fact.label}
                        </span>
                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                          {fact.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div id="experience_tab" className="tab-content relative">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Experience
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                {EXPERIENCE_ITEMS.map((item, idx) => (
                  <div
                    key={`${item.company}-${idx}`}
                    className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between"
                  >
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      {item.date}
                    </span>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        {item.company}
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        {item.role}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="education_tab" className="tab-content">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Education
              </h4>

              <div className="grid grid-cols-1 gap-6">
                {EDUCATION_ITEMS.map((item, idx) => (
                  <div
                    key={`${item.school}-${idx}`}
                    className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]"
                  >
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      {item.date}
                    </span>
                    <div className="flex-1">
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        {item.school}
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        {item.degree}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="skills_tab" className="tab-content">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Skills
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {SKILL_ITEMS.map((skill, idx) => (
                  <div
                    key={`${skill.name}-${idx}`}
                    className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start"
                  >
                    <img className="items-start" src={skill.icon} alt="icons" />
                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        {skill.name}
                      </h4>
                      <p className="text-sm font-normal font-Inter leading-none text-black-800">
                        {skill.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="awards_tab" className="tab-content">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Awards
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {AWARD_ITEMS.map((award, idx) => (
                  <div
                    key={`${award.title}-${idx}`}
                    className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8"
                  >
                    <div className="flex items-start justify-between">
                      <img src={award.icon} alt="icons" />
                      <span className="font-normal text-sm font-Inter text-black-text-800">
                        {award.year}
                      </span>
                    </div>

                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        {award.label}
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        {award.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

