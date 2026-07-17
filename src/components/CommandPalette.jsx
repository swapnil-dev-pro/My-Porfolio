import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  Command,
  Github,
  Home,
  Mail,
  Search,
  Sparkles,
  User,
  Wrench,
  FolderKanban,
  Clock,
} from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  const commands = [
    { id: "hero", label: t("commandPalette.goHome"), icon: Home, action: "#hero" },
    { id: "about", label: t("commandPalette.goAbout"), icon: User, action: "#about" },
    { id: "skills", label: t("commandPalette.goSkills"), icon: Wrench, action: "#skills" },
    {
      id: "timeline",
      label: t("commandPalette.goTimeline"),
      icon: Clock,
      action: "#timeline",
    },
    {
      id: "projects",
      label: t("commandPalette.goProjects"),
      icon: FolderKanban,
      action: "#projects",
    },
    {
      id: "github",
      label: t("commandPalette.goGithub"),
      icon: Github,
      action: "#github",
    },
    { id: "contact", label: t("commandPalette.goContact"), icon: Mail, action: "#contact" },
    {
      id: "github-profile",
      label: t("commandPalette.openGithub"),
      icon: Github,
      action: profile.socials.github,
      external: true,
    },
    {
      id: "email",
      label: `${t("commandPalette.email")} ${profile.name.split(" ")[0]}`,
      icon: Mail,
      action: `mailto:${profile.email}`,
      external: true,
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modifier = isMac ? e.metaKey : e.ctrlKey;

      if (modifier && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    return commands.filter((c) =>
      c.label.toLowerCase().includes(query.toLowerCase())
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, t]);

  const runCommand = (cmd) => {
    if (!cmd) return;
    if (cmd.external) {
      window.open(cmd.action, "_blank", "noreferrer");
    } else {
      document.querySelector(cmd.action)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const handleKeyNav = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runCommand(filtered[activeIndex]);
    }
  };

  return (
    <>
      {/* Trigger button (also visible without knowing the shortcut) */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-muted-foreground border border-border/60 hover:border-primary/50 hover:text-primary transition-colors duration-300"
        aria-label="Open command palette"
      >
        <Search size={14} />
        {t("nav.quickJump")}
        <span className="flex items-center gap-0.5 ml-1 px-1.5 py-0.5 rounded bg-secondary/70 text-[10px]">
          <Command size={10} />K
        </span>
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 md:pt-32 px-4 bg-background/70 backdrop-blur-sm animate-fade-in">
            <div
              className="absolute inset-0"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <div className="relative w-full max-w-lg glass-card rounded-xl shadow-2xl overflow-hidden border border-primary/20">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
                <Sparkles size={18} className="text-primary flex-shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActiveIndex(0);
                  }}
                  onKeyDown={handleKeyNav}
                  placeholder={t("commandPalette.placeholder")}
                  className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                />
                <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-secondary/70 text-muted-foreground flex-shrink-0">
                  ESC
                </kbd>
              </div>

              <div className="max-h-72 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <p className="px-4 py-6 text-center text-sm text-muted-foreground">
                    {t("commandPalette.noMatch")}
                  </p>
                )}
                {filtered.map((cmd, index) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onClick={() => runCommand(cmd)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors duration-150 ${
                        index === activeIndex
                          ? "bg-primary/15 text-primary"
                          : "text-foreground/90 hover:bg-secondary/50"
                      }`}
                    >
                      <Icon size={16} className="flex-shrink-0" />
                      {cmd.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
