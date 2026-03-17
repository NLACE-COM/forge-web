"use client";

import { useEffect, useRef, useState } from "react";
import ForgeApproachSection from "./components/ForgeApproachSection";
import ForgeAudienceSection from "./components/ForgeAudienceSection";
import ForgeFooter from "./components/ForgeFooter";
import ForgeNarrativeSection from "./components/ForgeNarrativeSection";
import ForgeFaqSection from "./components/ForgeFaqSection";
import ForgeFilterSection from "./components/ForgeFilterSection";
import ForgeHeader from "./components/ForgeHeader";
import ForgeHeroSection from "./components/ForgeHeroSection";
import ForgeMethodSection from "./components/ForgeMethodSection";
import ForgeSystemsGridSection from "./components/ForgeSystemsGridSection";
import ForgeWhatWeDoSection from "./components/ForgeWhatWeDoSection";
import ScrollReveal from "./components/ScrollReveal";
import {
  forgeApproachContent,
  forgeAreasContent,
  forgeAudienceContent,
  forgeDiagnosticContent,
  forgeFaqs,
  forgeFilterContent,
  forgeFooterContent,
  forgeHeroContent,
  forgeMethodContent,
  forgeNavLinks,
  forgeOutcomesContent,
  forgeProblemSlides
} from "./forge-content";

const forgeWhatWeDoSlidesWithWords = forgeProblemSlides.map((slide) => ({
  ...slide,
  blocks: slide.blocks.map((block) => ({
    ...block,
    words: block.segments.flatMap((segment) =>
      segment.text.split(" ").filter(Boolean).map((word) => ({
        word,
        emphasis: Boolean(segment.emphasis)
      }))
    )
  }))
}));

export default function ForgeHomePage() {
  const whatWeDoRef = useRef(null);
  const areasRef = useRef(null);
  const [introStage, setIntroStage] = useState("poster");
  const [introVisible, setIntroVisible] = useState(true);
  const [heroUiReady, setHeroUiReady] = useState(false);
  const [whatWeDoProgress, setWhatWeDoProgress] = useState(0);
  const [areasVisible, setAreasVisible] = useState(false);
  const stageReady = heroUiReady;

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setIntroStage("done");
      setIntroVisible(false);
      setHeroUiReady(true);
      return undefined;
    }

    const expandTimer = window.setTimeout(() => setIntroStage("expand"), 50);
    const videoTimer = window.setTimeout(() => setIntroStage("video"), 850);
    const uiTimer = window.setTimeout(() => setHeroUiReady(true), 900);
    const doneTimer = window.setTimeout(() => {
      setIntroStage("done");
      setIntroVisible(false);
    }, 1400);

    return () => {
      window.clearTimeout(expandTimer);
      window.clearTimeout(videoTimer);
      window.clearTimeout(uiTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    const section = whatWeDoRef.current;
    if (!section) {
      return undefined;
    }

    const updateProgress = () => {
      if (window.innerWidth <= 980) {
        setWhatWeDoProgress(0);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollRange = Math.max(section.offsetHeight - window.innerHeight, 1);
      const traveled = Math.min(Math.max(-rect.top, 0), scrollRange);
      setWhatWeDoProgress(traveled / scrollRange);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const section = areasRef.current;
    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAreasVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const slideSpan = 1 / forgeProblemSlides.length;
  const activeIndex = Math.min(
    forgeProblemSlides.length - 1,
    Math.floor(whatWeDoProgress * forgeProblemSlides.length)
  );

  return (
    <main className={`site-shell ${stageReady ? "is-stage-ready" : ""}`}>
      <section className="hero-stage">
        <ForgeHeader navLinks={forgeNavLinks} />
        <ForgeHeroSection
          introStage={introStage}
          introVisible={introVisible}
          content={forgeHeroContent}
        />
        <ForgeWhatWeDoSection
          sectionRef={whatWeDoRef}
          slides={forgeWhatWeDoSlidesWithWords}
          slideSpan={slideSpan}
          progress={whatWeDoProgress}
          activeIndex={activeIndex}
          label="The problem"
        />
      </section>

      <ScrollReveal>
        <div className="reveal-item">
          <ForgeAudienceSection content={forgeAudienceContent} />
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div className="reveal-item">
          <ForgeApproachSection content={forgeApproachContent} />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="reveal-item">
          <ForgeMethodSection id="method" content={forgeMethodContent} />
        </div>
      </ScrollReveal>

      <ForgeSystemsGridSection
        id="areas"
        sectionRef={areasRef}
        isVisible={areasVisible}
        content={forgeAreasContent}
        className="systems-grid-section--areas"
      />

      <ScrollReveal stagger={0.2}>
        <div className="reveal-item">
          <ForgeNarrativeSection id="outcomes" content={forgeOutcomesContent} />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="reveal-item">
          <ForgeNarrativeSection id="diagnostic" content={forgeDiagnosticContent} />
        </div>
      </ScrollReveal>

      <ForgeFilterSection content={forgeFilterContent} />
      <ForgeFaqSection items={forgeFaqs} />
      <ForgeFooter content={forgeFooterContent} />
    </main>
  );
}
