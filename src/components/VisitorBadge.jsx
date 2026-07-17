import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Uses the free CountAPI service — no backend needed.
// Namespace + key together must be unique to your site.
const COUNTAPI_NAMESPACE = "swapnil-portfolio-2026";
const COUNTAPI_KEY = "visits";

export const VisitorBadge = () => {
  const [count, setCount] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    const hit = async () => {
      try {
        const res = await fetch(
          `https://api.countapi.xyz/hit/${COUNTAPI_NAMESPACE}/${COUNTAPI_KEY}`
        );
        const data = await res.json();
        setCount(data.value);
      } catch {
        setCount(null);
      }
    };
    hit();
  }, []);

  if (count === null) return null;

  return (
    <div
      className="fixed bottom-5 left-5 z-40 glass-card px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow-lg animate-fade-in"
      title="Total site visits"
    >
      <Eye size={16} className="text-primary" />
      <span className="text-muted-foreground">
        {t("visitor.prefix")}{" "}
        <span className="font-semibold text-foreground">#{count}</span>
      </span>
    </div>
  );
};
