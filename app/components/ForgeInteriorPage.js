import ForgeAccordionList from "./ForgeAccordionList";
import ForgeContactPanel from "./ForgeContactPanel";
import ForgeDarkPanelSection from "./ForgeDarkPanelSection";
import ForgeInsightCards from "./ForgeInsightCards";
import ForgeMediaSplitSection from "./ForgeMediaSplitSection";
import ForgePageIntro from "./ForgePageIntro";
import ForgePageShell from "./ForgePageShell";
import ForgeServiceHubGrid from "./ForgeServiceHubGrid";

export default function ForgeInteriorPage({ page, ctaHref = "/contacto", ctaLabel = "Explorar tu sistema" }) {
  return (
    <ForgePageShell ctaHref={ctaHref} ctaLabel={ctaLabel}>
      {page.intro ? <ForgePageIntro {...page.intro} /> : null}
      {page.serviceGrid ? <ForgeServiceHubGrid {...page.serviceGrid} /> : null}
      {page.mediaSplit ? <ForgeMediaSplitSection {...page.mediaSplit} /> : null}
      {page.insightCards ? <ForgeInsightCards {...page.insightCards} /> : null}
      {page.darkPanel ? <ForgeDarkPanelSection {...page.darkPanel} /> : null}
      {page.accordion ? <ForgeAccordionList {...page.accordion} /> : null}
      {page.contactPanel ? <ForgeContactPanel /> : null}
    </ForgePageShell>
  );
}
