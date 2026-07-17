import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Element viewport e ashle "revealed" true hoye jay — sheita diye
 * fade/slide-in animation trigger kora jay.
 *
 * Usage:
 *   const [ref, isVisible] = useScrollReveal();
 *   <div ref={ref} className={isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}>
 */
export const useScrollReveal = (options = {}) => {
  const { threshold = 0.15, rootMargin = "0px 0px -80px 0px", once = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
};
