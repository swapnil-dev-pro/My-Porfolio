
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-gradient-to-r from-background/80 via-background/70 to-background/80 backdrop-blur-lg border-b border-border/40 shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between py-4">
        {/* === Logo === */}
        <a
          href="#hero"
          className="text-2xl font-bold flex items-center text-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="relative">
            <span className="text-glow text-primary">Swapnil</span>
            <span className="opacity-70">-Dev</span> ⚡
          </span>
        </a>

        {/* === Desktop Menu === */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300",
                "relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-4px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* === Mobile Button === */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* === Mobile Menu === */}
        <div
          className={cn(
            "fixed inset-0 bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-10 text-xl font-semibold transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};