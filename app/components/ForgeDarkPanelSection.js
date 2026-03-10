export default function ForgeDarkPanelSection({ eyebrow, title, columns }) {
  return (
    <section className="forge-dark-panel layout-shell">
      <div className="eyebrow">{eyebrow}</div>
      <div className="forge-dark-panel__content">
        <div className="forge-dark-panel__lead">
          <h2>{title}</h2>
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
