import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeDarkPanelSection({ eyebrow, title, columns }) {
  return (
    <section className="forge-dark-panel layout-shell tw:pt-24">
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="forge-dark-panel__content tw:rounded-[32px] tw:bg-[#111111] tw:px-8 tw:py-9 tw:text-white">
        <div className="forge-dark-panel__lead tw:max-w-[780px]">
          <ForgeRevealHeading text={title} blockColor="rgba(17, 17, 17, 0.94)" />
        </div>
        <div className="forge-dark-panel__columns tw:mt-8 tw:grid tw:grid-cols-3 tw:gap-5 max-[980px]:tw:grid-cols-1">
          {columns.map((column) => (
            <div className="forge-dark-panel__column tw:rounded-[22px] tw:bg-[rgba(255,255,255,0.05)] tw:p-6" key={column.title}>
              <h3 className="tw:m-0 tw:text-[1.35rem] tw:tracking-[-0.04em]">{column.title}</h3>
              <p className="tw:mt-4 tw:m-0 tw:text-[0.98rem] tw:leading-[1.5] tw:text-[rgba(255,255,255,0.76)]">{column.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
