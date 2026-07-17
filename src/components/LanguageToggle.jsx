import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300"
      aria-label="Toggle language"
      title={lang === "en" ? "বাংলায় দেখুন" : "View in English"}
    >
      <Languages size={14} />
      {lang === "en" ? "বাং" : "EN"}
    </button>
  );
};
