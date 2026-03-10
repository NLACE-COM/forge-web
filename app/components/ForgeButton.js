"use client";

export default function ForgeButton({ href, label, className = "" }) {
  const classes = className ? `hero-cta ${className}` : "hero-cta";

  return (
    <a className={classes} href={href}>
      <span className="hero-cta__label">
        {label}
        <span className="hero-cta__corner" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="48" fill="none" viewBox="0 0 18 48">
            <path fill="#222F30" d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z" />
          </svg>
        </span>
      </span>
      <span className="hero-cta__icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="48" fill="none" viewBox="0 0 51 48">
          <path fill="currentColor" d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z" />
        </svg>
      </span>
    </a>
  );
}
