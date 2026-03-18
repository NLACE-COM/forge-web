export default function ForgeBrand({ label = "Forge" }) {
  return (
    <span className="tw:inline-flex tw:items-center tw:gap-0 tw:whitespace-nowrap" aria-hidden="true">
      <img
        className="tw:block tw:h-[68px] tw:w-auto tw:max-w-[240px] tw:object-contain tw:object-left tw:[filter:brightness(0)_invert(1)] max-[980px]:tw:h-[22px] max-[980px]:tw:max-w-20"
        src="/media/forge-logo-figma.svg"
        alt=""
      />
    </span>
  );
}
