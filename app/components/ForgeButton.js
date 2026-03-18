"use client";

const variantClasses = {
  primary:
    "hero-cta--primary tw:bg-[var(--color--2)] tw:text-white hover:tw:bg-white hover:tw:text-[var(--color--2)] hover:tw:ring-[1.5px] hover:tw:ring-[var(--color--2)] focus-visible:tw:bg-white focus-visible:tw:text-[var(--color--2)] focus-visible:tw:ring-[1.5px] focus-visible:tw:ring-[var(--color--2)]",
  secondary:
    "hero-cta--secondary tw:bg-[var(--color--9)] tw:text-white hover:tw:bg-white hover:tw:text-[var(--color--9)] hover:tw:ring-[1.5px] hover:tw:ring-[var(--color--9)] focus-visible:tw:bg-white focus-visible:tw:text-[var(--color--9)] focus-visible:tw:ring-[1.5px] focus-visible:tw:ring-[var(--color--9)]",
  outlinePrimary:
    "hero-cta--outline-primary tw:bg-white tw:text-[var(--color--2)] tw:ring-[1.5px] tw:ring-[var(--color--2)] hover:tw:bg-[var(--color--2)] hover:tw:text-white hover:tw:ring-[var(--color--2)] focus-visible:tw:bg-[var(--color--2)] focus-visible:tw:text-white focus-visible:tw:ring-[var(--color--2)]",
  outlineSecondary:
    "hero-cta--outline-secondary tw:bg-white tw:text-[var(--color--9)] tw:ring-[1.5px] tw:ring-[var(--color--9)] hover:tw:bg-[var(--color--9)] hover:tw:text-white hover:tw:ring-[var(--color--9)] focus-visible:tw:bg-[var(--color--9)] focus-visible:tw:text-white focus-visible:tw:ring-[var(--color--9)]"
};

export default function ForgeButton({
  href,
  label,
  variant = "secondary",
  className = ""
}) {
  const classes = `hero-cta tw:inline-flex tw:h-12 tw:w-fit tw:items-center tw:justify-center tw:rounded-full tw:px-6 tw:text-[var(--type-button)] tw:font-normal tw:leading-none tw:tracking-[-0.02em] tw:no-underline tw:transition-[background-color,color,box-shadow,transform] tw:duration-300 tw:ease-[var(--transition-ease--1)] focus-visible:tw:outline-none ${variantClasses[variant] ?? variantClasses.secondary} ${className}`.trim();

  return (
    <a className={classes} href={href}>
      <span className="tw:whitespace-nowrap">{label}</span>
    </a>
  );
}
