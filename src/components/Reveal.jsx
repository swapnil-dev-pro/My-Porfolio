import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

/**
 * Wraps children and fades/slides them in when scrolled into view.
 * delay is in ms (staggering multiple Reveal siblings).
 */
export const Reveal = (props) => {
  const {
    children,
    className,
    delay = 0,
    direction = "up", // up | left | right | none
    as: Tag = "div",
  } = props;
  const [ref, isVisible] = useScrollReveal();

  const directions = {
    up: "translate-y-10",
    left: "-translate-x-10",
    right: "translate-x-10",
    none: "",
  };

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directions[direction]}`,
        className
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
};
