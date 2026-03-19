"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ForgeBrand from "./ForgeBrand";

export default function ForgeHeader({
  navLinks,
  ctaHref = "/contacto",
  ctaLabel = "Explorar tu sistema"
}) {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const [isOverHeroMedia, setIsOverHeroMedia] = useState(pathname === "/");

  useEffect(() => {
    let frameId = null;

    const updateLogoTone = () => {
      const headerElement = headerRef.current;
      const mediaElement = document.querySelector(".hero-stage__media");

      if (!headerElement || !mediaElement) {
        setIsOverHeroMedia(false);
        return;
      }

      const headerRect = headerElement.getBoundingClientRect();
      const mediaRect = mediaElement.getBoundingClientRect();
      const logoBottomY = headerRect.top + Math.min(headerRect.height * 0.72, 64);
      const overlapsMedia = logoBottomY <= mediaRect.bottom - 18;

      setIsOverHeroMedia(overlapsMedia);
    };

    const requestUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateLogoTone();
      });
    };

    updateLogoTone();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="tw:fixed tw:left-0 tw:right-0 tw:z-[100] tw:w-full tw:top-12 max-[980px]:tw:top-[18px] max-[640px]:tw:top-0 max-[640px]:tw:px-[14px] max-[640px]:tw:pt-3 max-[640px]:tw:pb-[14px]"
    >
      <div className="topbar__inner layout-shell tw:flex tw:items-center tw:justify-between tw:gap-5 max-[980px]:tw:flex-col max-[980px]:tw:items-start">
        <Link
          className="tw:inline-flex tw:min-h-[54px] tw:items-center tw:border-0 tw:bg-transparent tw:p-0 max-[980px]:tw:min-h-12 max-[980px]:tw:px-[14px]"
          href="/"
          aria-label="Forge"
        >
          <ForgeBrand tone={isOverHeroMedia ? "light" : "brand"} />
        </Link>
        <nav
          className="tw:flex tw:items-center tw:gap-3 tw:rounded-[12px] tw:border tw:border-[var(--color--1)] tw:bg-[var(--panel)] tw:p-1 tw:backdrop-blur-[14px] tw:font-[var(--family--2)] tw:text-[max(0.75rem,min(calc(0.75rem+0.002*(100vw-27.5rem)),0.875rem))] tw:uppercase tw:leading-none max-[980px]:tw:w-full max-[980px]:tw:flex-wrap max-[980px]:tw:justify-between max-[640px]:tw:gap-4 max-[640px]:tw:text-[0.8rem]"
          aria-label="Primary"
        >
          {navLinks.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="menu-link tw:inline-flex tw:h-[39px] tw:items-center tw:rounded-[8px] tw:px-[17px] tw:py-2 tw:transition-[background-color,color,box-shadow] tw:duration-300 tw:ease-[var(--transition-ease--1)] max-[640px]:tw:px-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="menu-cta tw:ml-0 tw:inline-flex tw:h-12 tw:items-center tw:justify-center tw:rounded-full tw:bg-[var(--color--9)] tw:px-6 tw:font-[var(--family--1)] tw:text-[var(--type-button)] tw:leading-none tw:tracking-[-0.02em] tw:text-white tw:transition-[background-color,color,box-shadow] tw:duration-300 tw:ease-[var(--transition-ease--1)] visited:tw:text-white"
          >
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
