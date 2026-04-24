import { readFile } from "node:fs/promises";
import path from "node:path";

const REFERENCE_DIR = path.join(process.cwd(), "..", "perez-tailwindcss");

const PAGE_FILE_MAP: Record<string, string> = {
  "/": "index.html",
  "/about": "about.html",
  "/projects": "projects.html",
  "/project-details": "project-details.html",
  "/blog": "blog.html",
  "/blog-details": "blog-details.html",
  "/contact": "contact.html",
};

function extractTagContent(html: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = html.match(regex);
  return match?.[1]?.trim() ?? "";
}

function extractTitle(html: string): string {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match?.[1]?.trim() ?? "Perez Portfolio";
}

function rewriteLinksAndAssets(input: string): string {
  const routeReplacements: Array<[RegExp, string]> = [
    [/href="index\.html"/g, 'href="/"'],
    [/href="about\.html"/g, 'href="/about"'],
    [/href="projects\.html"/g, 'href="/projects"'],
    [/href="project-details\.html"/g, 'href="/project-details"'],
    [/href="blog\.html"/g, 'href="/blog"'],
    [/href="blog-details\.html"/g, 'href="/blog-details"'],
    [/href="contact\.html"/g, 'href="/contact"'],
    [/action="mail\.php"/g, 'action="/mail.php"'],
    [/(src|href)="assets\//g, '$1="/assets/'],
  ];

  let content = routeReplacements.reduce(
    (content, [pattern, replacement]) => content.replace(pattern, replacement),
    input,
  );

  // Replace the 2-line SVG hamburger with a 3-bar animated version that
  // morphs into an X when the sidebar is open. The wrapper keeps id
  // `offcanvas-toggle` so the template's main.js still toggles the menu,
  // but is lifted above the offcanvas so the X stays clickable.
  content = content.replace(
    /<div id="offcanvas-toggle"[\s\S]*?<\/div>\s*<!-- Button End -->/i,
    '<div id="offcanvas-toggle" class="jk-menu-btn flex-none bg-active flex items-center flex-wrap justify-center py-7 px-[38px] cursor-pointer relative z-[60]">' +
      '<button type="button" aria-label="Toggle menu" class="jk-hamburger">' +
      '<span class="jk-hamburger-bar"></span>' +
      '<span class="jk-hamburger-bar"></span>' +
      '<span class="jk-hamburger-bar"></span>' +
      "</button>" +
      "</div>" +
      "<!-- Button End -->",
  );

  // Drop the Tailwind slide-in utilities (`transform`, `translate-x-full`,
  // `transition-all`, `ease-in-out`, `duration-300`) from the offcanvas so
  // our clip-path reveal in globals.css isn't fighting them.
  content = content.replace(
    /<div id="offcanvas" class="([^"]+)">/i,
    (_match, classList: string) => {
      const cleaned = classList
        .split(/\s+/)
        .filter(
          (cls) =>
            cls !== "transform" &&
            cls !== "translate-x-full" &&
            cls !== "transition-all" &&
            cls !== "ease-in-out" &&
            cls !== "duration-300",
        )
        .join(" ");
      return `<div id="offcanvas" class="${cleaned}">`;
    },
  );

  // Replace template logos with text branding.
  content = content.replace(
    /<img[^>]*src="\/assets\/images\/logo\/logo\.png"[^>]*>/gi,
    '<span class="jk-logo inline-flex flex-col font-Syne font-bold leading-none relative">' +
      '<span class="jk-logo-dot" aria-hidden="true"></span>' +
      '<span class="relative z-[1] text-black-800 text-[26px]">Joshua</span>' +
      '<span class="relative z-[1] text-black-800 text-[22px] mt-1">Kirabo</span>' +
      "</span>",
  );
  content = content.replace(
    /<img[^>]*src="\/assets\/images\/logo\/offcanvas-logo\.png"[^>]*>/gi,
    '<span class="jk-logo jk-logo--menu inline-flex flex-col font-Syne font-bold leading-none relative">' +
      '<span class="jk-logo-dot" aria-hidden="true"></span>' +
      '<span class="relative z-[1] text-white text-[26px]">Joshua</span>' +
      '<span class="relative z-[1] text-white text-[22px] mt-1">Kirabo</span>' +
      "</span>",
  );
  content = content.replace(
    /<nav class="pb-10">[\s\S]*?<\/nav>/i,
    `<nav class="pb-10">
        <ul class="flex flex-wrap gap-x-4 items-center">
            <li>
                <a href="https://www.linkedin.com" class="text-white hover:text-orange" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z" fill="currentColor" fill-opacity="0.9"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://github.com" class="text-white hover:text-orange" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z" fill="currentColor" fill-opacity="0.9"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="mailto:joshuak2001@gmail.com" class="text-white hover:text-orange" aria-label="Email">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" fill-opacity="0.9"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="/" class="text-white hover:text-orange" aria-label="Portfolio">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM18.93 11H15.95C15.8 9.44 15.28 7.98 14.43 6.74C16.77 7.59 18.5 9.08 18.93 11ZM12 4.84C13.22 6.16 13.97 8.03 14.14 11H9.86C10.03 8.03 10.78 6.16 12 4.84ZM5.07 13H8.05C8.2 14.56 8.72 16.02 9.57 17.26C7.23 16.41 5.5 14.92 5.07 13ZM8.05 11H5.07C5.5 9.08 7.23 7.59 9.57 6.74C8.72 7.98 8.2 9.44 8.05 11ZM12 19.16C10.78 17.84 10.03 15.97 9.86 13H14.14C13.97 15.97 13.22 17.84 12 19.16ZM14.43 17.26C15.28 16.02 15.8 14.56 15.95 13H18.93C18.5 14.92 16.77 16.41 14.43 17.26Z" fill="currentColor" fill-opacity="0.9"></path>
                    </svg>
                </a>
            </li>
        </ul>
    </nav>`,
  );

  return content;
}

function stripBodyScripts(input: string): string {
  return input.replace(/<script[\s\S]*?<\/script>/gi, "");
}

function cactusComponent(): string {
  return '<span class="ml-2 inline-block" role="img" aria-label="cactus">🌵</span>';
}

function transformHomePage(input: string): string {
  let content = input;

  // Add a subtle star layer inside the hero section.
  content = content.replace(
    '<section class="bg-secondary relative pt-[140px] pb-[125px]">',
    '<section class="hero-sky relative pt-[140px] pb-[125px] overflow-hidden">' +
      '<div class="hero-stars" aria-hidden="true"></div>',
  );
  content = content.replace('<div class="container">', '<div class="container relative z-[1]">');

  // Remove the right-side hero visual block.
  content = content.replace(/<div class="hidden md:block">[\s\S]*?<\/div>\s*/i, "");

  // Center hero intro content.
  content = content.replace(
    'class="xl:pt-12"',
    'class="xl:pt-12 text-center flex flex-col items-center"',
  );
  content = content.replace(
    'class="font-Syne text-black-800 font-bold text-2xl lg:text-[32px] leading-none flex flex-wrap items-center mb-3"',
    'class="font-Syne text-black-800 font-bold text-2xl lg:text-[32px] leading-none flex flex-wrap items-center justify-center mb-3"',
  );
  content = content.replace(
    /<img class="ml-2" src="assets\/images\/icon\/victory\.png" alt="icon">/i,
    '<span class="ml-2" role="img" aria-label="victory hand medium skin tone">✌🏽</span>',
  );
  content = content.replace(/Arizona(?!\s*<span[^>]*aria-label="cactus")/i, `Arizona${cactusComponent()}`);
  content = content.replace(/Germany(?!\s*<span[^>]*aria-label="cactus")/i, `Arizona${cactusComponent()}`);
  content = content.replace(
    'class="flex flex-wrap mb-[50px] md:mb-[60px] xl:mb-[70px] 2xl:mb-[80px]"',
    'class="flex flex-wrap justify-center mb-[50px] md:mb-[60px] xl:mb-[70px] 2xl:mb-[80px]"',
  );
  content = content.replace(
    /<div class="flex flex-wrap items-center" data-aos="fade-right" data-aos-delay="1400">[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>/i,
    `<div class="flex flex-wrap items-center justify-center" data-aos="fade-up" data-aos-duration="850" data-aos-delay="900" data-aos-once="false" data-aos-mirror="true">
        <ul class="flex flex-wrap gap-x-4 items-center">
            <li>
                <a href="https://www.linkedin.com" class="text-black-800 hover:text-orange" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z" fill="currentColor" fill-opacity="0.9"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://github.com" class="text-black-800 hover:text-orange" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z" fill="currentColor" fill-opacity="0.9"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="mailto:joshuak2001@gmail.com" class="text-black-800 hover:text-orange" aria-label="Email">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" fill-opacity="0.9"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="/" class="text-black-800 hover:text-orange" aria-label="Portfolio">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM18.93 11H15.95C15.8 9.44 15.28 7.98 14.43 6.74C16.77 7.59 18.5 9.08 18.93 11ZM12 4.84C13.22 6.16 13.97 8.03 14.14 11H9.86C10.03 8.03 10.78 6.16 12 4.84ZM5.07 13H8.05C8.2 14.56 8.72 16.02 9.57 17.26C7.23 16.41 5.5 14.92 5.07 13ZM8.05 11H5.07C5.5 9.08 7.23 7.59 9.57 6.74C8.72 7.98 8.2 9.44 8.05 11ZM12 19.16C10.78 17.84 10.03 15.97 9.86 13H14.14C13.97 15.97 13.22 17.84 12 19.16ZM14.43 17.26C15.28 16.02 15.8 14.56 15.95 13H18.93C18.5 14.92 16.77 16.41 14.43 17.26Z" fill="currentColor" fill-opacity="0.9"></path>
                    </svg>
                </a>
            </li>
        </ul>
    </div>`,
  );

  // Remove footer decorative MARK/HENRY SVG marquee.
  content = content.replace(
    /<div class="py-\[72px\]">\s*<svg class="w-full" width="1281" height="77"[\s\S]*?<\/svg>\s*<\/div>/i,
    "",
  );
  // Remove "12+ Years of experience" visual stat block.
  content = content.replace(
    /<div class="flex flex-wrap flex-col absolute bottom-0 right-0 md:right-\[170px\] lg:right-\[-30px\] z-10">[\s\S]*?<span class="strock-text mt-5">Years of[\s\S]*?<\/span>\s*<\/div>/i,
    "",
  );
  // Remove award/client/job counters list.
  content = content.replace(/<ul class="flex flex-wrap gap-9 2xl:gap-\[40px\] mb-7">[\s\S]*?<\/ul>/i, "");
  // Remove any lingering "Worldwide client" counter rows.
  content = content.replace(/<p class="paragraph">Worldwide client<\/p>/gi, "");

  // Move About section above Services section on home.
  const serviceBlock = content.match(/<!-- Service start -->[\s\S]*?<!-- Service end -->/i);
  const aboutBlock = content.match(/<!-- About Us Sectin Start -->[\s\S]*?<!-- About Us Sectin End -->/i);
  if (serviceBlock?.[0] && aboutBlock?.[0]) {
    content = content.replace(serviceBlock[0], "__SERVICE_BLOCK__");
    content = content.replace(aboutBlock[0], "__ABOUT_BLOCK__");
    content = content.replace("__SERVICE_BLOCK__", aboutBlock[0]);
    content = content.replace("__ABOUT_BLOCK__", serviceBlock[0]);
  }

  // Personalize template name references on home.
  content = content.replace(/Mark Henry/g, "Joshua Kirabo");
  content = content.replace(/Product Designer/g, "Software Engineer");
  content = content.replace(/Based in German/g, "Based in Arizona");
  content = content.replace(/based in German/gi, "based in Arizona");
  content = content.replace(/hello@henry\.com/gi, "joshuak2001@gmail.com");
  content = content.replace(
    /<section class="about-section pb-\[120px\]"/i,
    '<section class="about-section pt-[120px] pb-[120px]"',
  );

  // Stagger-reveal key intro elements in the "Download my resume" section.
  content = content.replace(
    /<h3 class="([^"]*)">\s*Joshua Kirabo, Software Engineer\s*<\/h3>/i,
    '<h3 class="$1" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="120" data-aos-once="false" data-aos-mirror="true">Joshua Kirabo, Software Engineer</h3>',
  );
  content = content.replace(
    /<h4 class="([^"]*)">\s*Based in Arizona\s*<\/h4>/i,
    '<h4 class="$1" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="280" data-aos-once="false" data-aos-mirror="true">Based in Arizona</h4>',
  );
  content = content.replace(
    /<p class="paragraph mb-6">/i,
    '<p class="paragraph mb-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="420" data-aos-once="false" data-aos-mirror="true">',
  );
  content = content.replace(
    /<div class="flex flex-wrap">\s*<a href="contact\.html" class="flex items-center flex-wrap btn-primary group">Download my resume/i,
    '<div class="flex flex-wrap" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="580" data-aos-once="false" data-aos-mirror="true"><a href="contact.html" class="flex items-center flex-wrap btn-primary group">Download my resume',
  );

  // Normalize directional slide animations to bottom-up on home.
  content = content.replace(/data-aos="fade-right"/g, 'data-aos="fade-up"');
  content = content.replace(/data-aos="fade-left"/g, 'data-aos="fade-up"');
  content = content.replace(/data-aos="fade-down"/g, 'data-aos="fade-up"');

  return content;
}

export async function loadPerezPage(routePath: string): Promise<{
  title: string;
  bodyHtml: string;
}> {
  const fileName = PAGE_FILE_MAP[routePath];
  if (!fileName) {
    throw new Error(`Unsupported Perez route: ${routePath}`);
  }

  const htmlPath = path.join(REFERENCE_DIR, fileName);
  const html = await readFile(htmlPath, "utf8");
  const title = extractTitle(html);
  const body = extractTagContent(html, "body");
  const bodyWithoutScripts = stripBodyScripts(body);
  const transformedBody =
    routePath === "/" ? transformHomePage(bodyWithoutScripts) : bodyWithoutScripts;
  const sanitizedBody = rewriteLinksAndAssets(transformedBody);

  return { title, bodyHtml: sanitizedBody };
}

export function getPerezAssetPath(...segments: string[]): string {
  return path.join(REFERENCE_DIR, "assets", ...segments);
}
