import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeDarkPanelSection({ eyebrow, title, columns }) {
  return (
    <section className="forge-dark-panel layout-shell">
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="forge-dark-panel__content">
        <div className="forge-dark-panel__lead">
          <ForgeRevealHeading text={title} blockColor="rgba(17, 17, 17, 0.94)" />
        </div>
        <div className="forge-dark-panel__columns">
          {columns.map((column) => (
            <div className="forge-dark-panel__column" key={column.title}>
              <h3>{column.title}</h3>
              <p>{column.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
