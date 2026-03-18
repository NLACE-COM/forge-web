export default function ForgeEyebrow({ children, className = "" }) {
  return (
    <div
      className={`eyebrow tw:inline-grid tw:w-fit tw:max-w-full tw:grid-cols-[10px_minmax(0,1fr)] tw:items-center tw:gap-x-3 tw:rounded-[10px] tw:bg-white tw:px-[18px] tw:py-[10px] tw:text-[var(--type-eyebrow)] tw:font-normal tw:uppercase tw:tracking-[-0.02em] tw:text-[rgba(17,17,17,0.62)] ${className}`.trim()}
    >
      <span className="eyebrow__dot tw:h-[10px] tw:w-[10px] tw:bg-[var(--color--2)]" aria-hidden="true" />
      <span className="eyebrow__text">{children}</span>
    </div>
  );
}
