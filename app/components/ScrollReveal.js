"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({ children, stagger = 0.1, duration = 1, y = 30, delay = 0 }) {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const items = el.querySelectorAll(".reveal-item");
    
    gsap.fromTo(
      items,
      { 
        opacity: 0, 
        y: y 
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [stagger, duration, y, delay]);

  return <div ref={root}>{children}</div>;
}
