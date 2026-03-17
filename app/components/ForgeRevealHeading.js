"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function ForgeRevealHeading({
  text,
  className = "",
  mutedFrom,
  blockColor
}) {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    const node = headingRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.42) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: [0.42, 0.6], rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = `reveal-heading ${isVisible ? "is-visible" : ""} ${className}`.trim();

  return (
    <h2
      ref={headingRef}
      className={classes}
      style={blockColor ? { "--heading-reveal-block": blockColor } : undefined}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`reveal-heading__word${
            typeof mutedFrom === "number" && index >= mutedFrom ? " is-muted" : ""
          }`}
          style={{ transitionDelay: `${index * 55}ms` }}
        >
          <span className="reveal-heading__overlay" />
          <span className="reveal-heading__text">{word}</span>
        </span>
      ))}
    </h2>
  );
}
