import ForgeButton from "./ForgeButton";
import ForgeBlobButton from "./ForgeBlobButton";

export default function ForgeNewsroomSection({ featured, cards }) {
  return (
    <section id="newsroom" className="newsroom-shell">
      <div className="newsroom">
        <div className="newsroom__header">
          <h2>Newsroom</h2>
          <ForgeButton href="#footer" label="View all articles" />
        </div>

        <a
          className="e-post-feature newsroom-feature"
          href={featured.href ?? "#"}
          aria-label={featured.title}
          target={featured.target ?? "_self"}
          rel={featured.target === "_blank" ? "noreferrer" : undefined}
        >
          <aside className="item_image">
            <img className="image_el" src={featured.image} alt="" aria-hidden="true" />
          </aside>
          <aside className="item_content">
            <div className="content_inner">
              <div className="item_meta">
                <div className="meta_type u-ts--1">{featured.category}</div>
                <time className="meta_date">{featured.date}</time>
              </div>
              <hgroup className="item_hgroup">
                <h3 className="hgroup_title">
                  <span className="title_el">{featured.title}</span>
                </h3>
                <div className="hgroup_excerpt">{featured.copy}</div>
              </hgroup>
              <div className="item_foot">
                <div className="foot_label">Read article</div>
              </div>
            </div>
          </aside>
          <figure className="item_background" />
          <div className="item_btn">
            <ForgeBlobButton className="btn_el" />
          </div>
        </a>

        <div className="newsroom-grid">
          {cards.map((item) => (
            <a
              className={`e-post-thumb newsroom-card newsroom-card--${item.tone}`}
              key={item.title}
              href={item.href ?? "#"}
              aria-label={item.title}
              target={item.target ?? "_self"}
              rel={item.target === "_blank" ? "noreferrer" : undefined}
            >
              <div className="item_meta">
                <div className="meta_type u-ts--1">{item.category}</div>
                <time className="meta_date">{item.date}</time>
              </div>
              <h3 className="item_title">
                <span className="title_el">{item.title}</span>
              </h3>
              <div className="item_foot">
                <div className="foot_label">Read article</div>
              </div>
              <figure className="item_background" />
              <div className="item_btn">
                <ForgeBlobButton className="btn_el" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
