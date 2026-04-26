"use client";

import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";

type SiteHeaderProps = {
  activePath?: string;
};

function TextLogo({ variant }: { variant: "header" | "menu" }) {
  const isMenu = variant === "menu";
  return (
    <span
      className={`jk-logo${isMenu ? " jk-logo--menu" : ""} inline-flex flex-col font-Syne font-bold leading-none relative`}
    >
      <span className="jk-logo-dot" aria-hidden="true"></span>
      <span
        className={`relative z-[1] ${isMenu ? "text-white" : "text-black-800"} text-[26px]`}
      >
        Joshua
      </span>
      <span
        className={`relative z-[1] ${isMenu ? "text-white" : "text-black-800"} text-[22px] mt-1`}
      >
        Kirabo
      </span>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-6 w-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
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

const SOCIAL_SVG = "h-6 w-6 shrink-0";

const MENU_ITEMS: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/projects" },
  { label: "Project details", href: "/project-details" },
  { label: "Blog", href: "/blog" },
  { label: "Blog Details", href: "/blog-details" },
  { label: "Contact", href: "/contact" },
];

function SocialNav({ tone }: { tone: "light" | "dark" }) {
  const linkClass =
    tone === "light"
      ? "text-white transition-all duration-300 hover:text-orange"
      : "text-black-800 transition-all duration-300 hover:text-orange";
  return (
    <ul className="flex flex-wrap items-center gap-x-4">
      <li>
        <a
          href="https://www.linkedin.com"
          className={`${linkClass} inline-flex`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg className={SOCIAL_SVG} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          className={`${linkClass} inline-flex`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg className={SOCIAL_SVG} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href="mailto:joshuak2001@gmail.com" className={`${linkClass} inline-flex`} aria-label="Email">
          <svg className={SOCIAL_SVG} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>
        </a>
      </li>
      <li>
        <Link href="/" className={`${linkClass} inline-flex`} aria-label="Portfolio">
          <svg className={SOCIAL_SVG} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM18.93 11H15.95C15.8 9.44 15.28 7.98 14.43 6.74C16.77 7.59 18.5 9.08 18.93 11ZM12 4.84C13.22 6.16 13.97 8.03 14.14 11H9.86C10.03 8.03 10.78 6.16 12 4.84ZM5.07 13H8.05C8.2 14.56 8.72 16.02 9.57 17.26C7.23 16.41 5.5 14.92 5.07 13ZM8.05 11H5.07C5.5 9.08 7.23 7.59 9.57 6.74C8.72 7.98 8.2 9.44 8.05 11ZM12 19.16C10.78 17.84 10.03 15.97 9.86 13H14.14C13.97 15.97 13.22 17.84 12 19.16ZM14.43 17.26C15.28 16.02 15.8 14.56 15.95 13H18.93C18.5 14.92 16.77 16.41 14.43 17.26Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
}

export default function SiteHeader({ activePath }: SiteHeaderProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);
  const offcanvasRef = useRef<HTMLDivElement>(null);

  const seedOrigin = useCallback(() => {
    const btn = toggleRef.current;
    const canvas = offcanvasRef.current;
    if (!btn || !canvas) return;
    const btnRect = btn.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    canvas.style.setProperty(
      "--origin-x",
      `${btnRect.left + btnRect.width / 2 - canvasRect.left}px`,
    );
    canvas.style.setProperty(
      "--origin-y",
      `${btnRect.top + btnRect.height / 2 - canvasRect.top}px`,
    );
  }, []);

  const open = useCallback(() => {
    seedOrigin();
    setIsOpen(true);
  }, [seedOrigin]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) close();
    else open();
  }, [isOpen, open, close]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("offcanvas-open");
    } else {
      document.body.classList.remove("offcanvas-open");
    }
    return () => document.body.classList.remove("offcanvas-open");
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  useEffect(() => {
    window.addEventListener("resize", seedOrigin);
    seedOrigin();
    return () => window.removeEventListener("resize", seedOrigin);
  }, [seedOrigin]);

  return (
    <>
      <header id="sticky-header" className="xl:pl-12 fixed left-0 top-0 w-full z-40">
        <div className="flex pl-4 xl:pl-0">
          <div className="flex-1 flex items-center justify-between border-b border-black-800 border-opacity-40">
            <Link href="/">
              <TextLogo variant="header" />
            </Link>

            <Link
              href="/contact"
              className="flex items-center flex-wrap py-[6px] px-3 text-[15px] font-bold text-active leading-none mr-2 transition-all duration-300 hover:text-orange group"
            >
              Let&rsquo;s Talk
              <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                <ArrowIcon />
              </span>
            </Link>
          </div>

          <div
            ref={toggleRef}
            id="offcanvas-toggle"
            className={`jk-menu-btn flex-none bg-active flex items-center flex-wrap justify-center py-7 px-[38px] cursor-pointer relative z-[60]${isOpen ? " is-active" : ""}`}
            onClick={toggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
              }
            }}
          >
            <span aria-label="Toggle menu" className="jk-hamburger">
              <span className="jk-hamburger-bar" />
              <span className="jk-hamburger-bar" />
              <span className="jk-hamburger-bar" />
            </span>
          </div>
        </div>
      </header>

      <div
        ref={offcanvasRef}
        id="offcanvas"
        className={`offcanvas right-0 top-0 bottom-0 z-50 fixed h-full w-[350px] md:w-[460px] bg-black-800 pl-8 flex flex-wrap flex-col justify-between${isOpen ? " offcanvas-open" : ""}`}
      >
        <div>
          <div className="flex flex-wrap justify-between items-center border-b border-border-white mb-[80px]">
            <Link href="/" onClick={close}>
              <TextLogo variant="menu" />
            </Link>
            <button
              id="offcanvas-close"
              className="offcanvas-close bg-primary py-7 px-[38px]"
              aria-label="Close menu"
              onClick={close}
            >
              <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <nav className="offcanvas-menu mr-[40px] flex flex-wrap flex-col justify-between">
            <ul>
              {MENU_ITEMS.map((item) => {
                const isActive = activePath === item.href;
                return (
                  <li
                    key={item.href}
                    className="border-b border-border-white py-4 group"
                    data-active={isActive ? "true" : undefined}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                    >
                      {item.label}
                      <span className="inline-block group-hover:animate-arrow-move-up">
                        <ArrowIcon />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <nav className="pb-10">
          <SocialNav tone="light" />
        </nav>
      </div>
    </>
  );
}
