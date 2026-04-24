"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// For pages that still use the Perez template's main.js to toggle the
// offcanvas (dangerouslySetInnerHTML pages), this component mirrors the
// open state onto the hamburger's `is-active` class, manages body
// `offcanvas-open`, seeds the clip-path origin, and handles Escape.
//
// Pages that use the React SiteHeader component manage their own state
// via useState — this component detects that and stays idle.
export default function OffcanvasReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let toggle: HTMLElement | null = null;
    let offcanvas: HTMLElement | null = null;
    let observer: MutationObserver | null = null;
    let domObserver: MutationObserver | null = null;
    let bound = false;

    function setOriginFromButton() {
      if (!toggle || !offcanvas) return;
      const btnRect = toggle.getBoundingClientRect();
      const canvasRect = offcanvas.getBoundingClientRect();
      const originX = btnRect.left + btnRect.width / 2 - canvasRect.left;
      const originY = btnRect.top + btnRect.height / 2 - canvasRect.top;
      offcanvas.style.setProperty("--origin-x", `${originX}px`);
      offcanvas.style.setProperty("--origin-y", `${originY}px`);
    }

    function syncHamburger() {
      if (!toggle || !offcanvas) return;
      const isOpen = offcanvas.classList.contains("offcanvas-open");
      toggle.classList.toggle("is-active", isOpen);
      if (isOpen) document.body.classList.add("offcanvas-open");
      else document.body.classList.remove("offcanvas-open");
    }

    function onToggleClick() {
      setOriginFromButton();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (!offcanvas?.classList.contains("offcanvas-open")) return;
      const closeBtn = document.getElementById("offcanvas-close");
      if (closeBtn instanceof HTMLElement) closeBtn.click();
    }

    function unbind() {
      if (!bound) return;
      if (toggle) {
        toggle.removeEventListener("click", onToggleClick, { capture: true });
      }
      observer?.disconnect();
      observer = null;
      window.removeEventListener("resize", setOriginFromButton);
      window.removeEventListener("keydown", onKeyDown);
      bound = false;
    }

    function bind() {
      const nextToggle = document.getElementById("offcanvas-toggle");
      const nextCanvas = document.getElementById("offcanvas");
      if (!nextToggle || !nextCanvas) return false;

      // If the offcanvas is managed by React SiteHeader (has a data-react
      // attribute set by the React ref), skip binding — SiteHeader handles
      // everything itself. We detect this by checking if the toggle has an
      // onClick handler bound via React (which adds __reactFiber$ props).
      const reactManaged = Object.keys(nextToggle).some((k) =>
        k.startsWith("__reactFiber$") || k.startsWith("__reactProps$"),
      );
      if (reactManaged) return true;

      if (nextToggle === toggle && nextCanvas === offcanvas && bound) {
        return true;
      }
      unbind();
      toggle = nextToggle;
      offcanvas = nextCanvas;
      toggle.addEventListener("click", onToggleClick, { capture: true });
      observer = new MutationObserver(syncHamburger);
      observer.observe(offcanvas, {
        attributes: true,
        attributeFilter: ["class"],
      });
      window.addEventListener("resize", setOriginFromButton);
      window.addEventListener("keydown", onKeyDown);
      setOriginFromButton();
      syncHamburger();
      bound = true;
      return true;
    }

    if (!bind()) {
      domObserver = new MutationObserver(() => {
        if (bind()) {
          domObserver?.disconnect();
          domObserver = null;
        }
      });
      domObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      unbind();
      domObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
