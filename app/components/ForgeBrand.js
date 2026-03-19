export default function ForgeBrand({ label = "Forge", tone = "brand" }) {
  return (
    <span className="tw:inline-flex tw:items-center tw:gap-0 tw:whitespace-nowrap" aria-hidden="true">
      <span
        className="tw:block tw:h-[68px] tw:w-[156px] tw:max-w-[240px] tw:transition-colors tw:duration-300 tw:ease-[var(--transition-ease--1)] max-[980px]:tw:h-[22px] max-[980px]:tw:w-[52px] max-[980px]:tw:max-w-20"
        style={{
          backgroundColor: tone === "light" ? "#ffffff" : "var(--color--2)",
          WebkitMaskImage: "url('/media/forge-logo-figma.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "left center",
          WebkitMaskSize: "contain",
          maskImage: "url('/media/forge-logo-figma.svg')",
          maskRepeat: "no-repeat",
          maskPosition: "left center",
          maskSize: "contain"
        }}
      />
    </span>
  );
}
