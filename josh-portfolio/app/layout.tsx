import type { Metadata } from "next";
import Script from "next/script";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perez - Tailwind CSS Personal Portfolio Template",
  description: "Ported Perez portfolio template running in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        {children}
        <SmoothScroll />
        <Script src="/assets/js/vendor/modernizr-3.11.7.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/jquery-3.6.0.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/jquery-migrate-3.3.2.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/aos.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/jquery.waypoints.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script id="top-return-icon-fade" strategy="afterInteractive">{`
          (function () {
            function initTopFade() {
              const items = Array.from(document.querySelectorAll(".top-fade-item, [data-aos]"));
              if (!items.length) return;
              document.body.classList.add("js-top-fade-ready");
              let lastScrollY = window.scrollY || window.pageYOffset || 0;

              const states = items.map(function (el) {
                if (!el.classList.contains("motion-replay-item")) {
                  el.classList.add("motion-replay-item");
                }
                if (el.classList.contains("top-fade-item")) {
                  el.classList.remove("is-top-visible");
                  el.classList.remove("enter-from-up");
                  el.classList.add("enter-from-down");
                }
                if (!el.style.getPropertyValue("--top-fade-delay")) {
                  const aosDelay = el.getAttribute("data-aos-delay");
                  if (aosDelay) {
                    el.style.setProperty("--top-fade-delay", aosDelay + "ms");
                  }
                }
                return {
                  el: el,
                  visible: false
                };
              });

              function update() {
                const vh = window.innerHeight || document.documentElement.clientHeight;
                const currentScrollY = window.scrollY || window.pageYOffset || 0;
                const direction = currentScrollY >= lastScrollY ? "down" : "up";
                lastScrollY = currentScrollY;
                states.forEach(function (state) {
                  const rect = state.el.getBoundingClientRect();
                  const inView = rect.bottom > 0 && rect.top < vh;
                  const outOfView = rect.bottom <= 0 || rect.top >= vh;

                  if (outOfView) {
                    state.el.classList.remove("is-top-visible");
                    state.el.classList.remove("enter-from-down");
                    state.el.classList.remove("enter-from-up");
                    state.visible = false;
                    return;
                  }

                  if (inView && !state.visible) {
                    state.el.classList.remove("is-top-visible");
                    state.el.classList.remove("enter-from-down");
                    state.el.classList.remove("enter-from-up");
                    state.el.classList.add(
                      direction === "down" ? "enter-from-down" : "enter-from-up",
                    );
                    requestAnimationFrame(function () {
                      state.el.classList.add("is-top-visible");
                    });
                    state.visible = true;
                  }
                });
              }

              if ("IntersectionObserver" in window) {
                const io = new IntersectionObserver(function () {
                  update();
                }, { threshold: [0, 0.2, 0.6, 1] });
                items.forEach(function (el) { io.observe(el); });
              }

              window.addEventListener("scroll", update, { passive: true });
              window.addEventListener("resize", update);
              requestAnimationFrame(function () {
                requestAnimationFrame(update);
              });
            }

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", initTopFade);
            } else {
              initTopFade();
            }
          })();
        `}</Script>
        <Script id="aos-repeat-scroll" strategy="afterInteractive">{`
          (function () {
            function reinitAOS() {
              if (!window.AOS) return;
              window.AOS.init({
                offset: 120,
                delay: 100,
                duration: 600,
                easing: "ease",
                once: false,
                mirror: true,
                anchorPlacement: "top-bottom"
              });
              window.AOS.refreshHard();
            }

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", reinitAOS);
            } else {
              reinitAOS();
            }

            window.addEventListener("load", reinitAOS);
          })();
        `}</Script>
        <Script id="jk-logo-dot-follow" strategy="afterInteractive">{`
          (function () {
            const logoStates = [];
            let rafStarted = false;

            function setDotFromPointer(el, clientX, clientY) {
              const rect = el.getBoundingClientRect();
              const x = clientX - rect.left;
              const y = clientY - rect.top;
              const nx = Math.max(0, Math.min(1, x / rect.width));
              const ny = Math.max(0, Math.min(1, y / rect.height));
              const dotSize = 28;
              // Constrain dot fully inside the logo container.
              const rangeX = Math.max(0, rect.width - dotSize);
              const rangeY = Math.max(0, rect.height - dotSize);
              return {
                x: nx * rangeX,
                y: ny * rangeY,
              };
            }

            function setMenuDotFromPointer(state, clientX, clientY) {
              const scopeRect = state.scopeEl.getBoundingClientRect();
              const logoRect = state.el.getBoundingClientRect();
              const dotSize = 28;
              const sx = Math.max(0, Math.min(scopeRect.width, clientX - scopeRect.left));
              const sy = Math.max(0, Math.min(scopeRect.height, clientY - scopeRect.top));
              const scopeX = Math.max(0, Math.min(scopeRect.width - dotSize, sx));
              const scopeY = Math.max(0, Math.min(scopeRect.height - dotSize, sy));
              return {
                x: scopeRect.left + scopeX - logoRect.left,
                y: scopeRect.top + scopeY - logoRect.top,
              };
            }

            function bindLogo(logo) {
              if (logo.dataset.dotBound === "1") return;
              logo.dataset.dotBound = "1";
              const isMenuLogo = logo.classList.contains("jk-logo--menu");
              const scopeEl = isMenuLogo ? document.getElementById("offcanvas") : logo;
              if (!scopeEl) return;
              const state = {
                el: logo,
                scopeEl: scopeEl,
                menuScope: isMenuLogo,
                hover: false,
                baseX: 4,
                baseY: 2,
                currentX: 4,
                currentY: 2,
                targetX: 4,
                targetY: 2,
                idleT: Math.random() * Math.PI * 2,
              };
              logoStates.push(state);
              logo.style.setProperty("--dot-x", "4px");
              logo.style.setProperty("--dot-y", "2px");

              scopeEl.addEventListener("mouseenter", function () {
                state.hover = true;
              });
              scopeEl.addEventListener("mousemove", function (event) {
                const p = state.menuScope
                  ? setMenuDotFromPointer(state, event.clientX, event.clientY)
                  : setDotFromPointer(logo, event.clientX, event.clientY);
                state.targetX = p.x;
                state.targetY = p.y;
              });
              scopeEl.addEventListener("mouseleave", function () {
                state.hover = false;
              });
            }

            function animate() {
              for (const state of logoStates) {
                if (!state.hover) {
                  if (state.menuScope) {
                    state.targetX = state.baseX;
                    state.targetY = state.baseY;
                  } else {
                    state.idleT += 0.012;
                    state.targetX = state.baseX + Math.sin(state.idleT) * 2.2;
                    state.targetY = state.baseY + Math.cos(state.idleT * 1.2) * 1.8;
                  }
                }

                state.currentX += (state.targetX - state.currentX) * 0.06;
                state.currentY += (state.targetY - state.currentY) * 0.06;

                state.el.style.setProperty("--dot-x", state.currentX.toFixed(2) + "px");
                state.el.style.setProperty("--dot-y", state.currentY.toFixed(2) + "px");
              }
              requestAnimationFrame(animate);
            }

            function bindAll() {
              document.querySelectorAll(".jk-logo").forEach(bindLogo);
              if (!rafStarted) {
                rafStarted = true;
                requestAnimationFrame(animate);
              }
            }

            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", bindAll);
            } else {
              bindAll();
            }

            const observer = new MutationObserver(bindAll);
            observer.observe(document.body, { childList: true, subtree: true });
          })();
        `}</Script>
      </body>
    </html>
  );
}
