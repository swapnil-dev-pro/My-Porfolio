import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const StatusBadge = ({ available = true }) => {
  const [time, setTime] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Dhaka",
      }).format(new Date());
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-sm">
      <span className="relative flex h-2.5 w-2.5">
        {available && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            available ? "bg-green-500" : "bg-gray-400"
          }`}
        />
      </span>
      <span className="text-muted-foreground">
        {available ? t("hero.available") : t("hero.unavailable")} · {time}{" "}
        (Dhaka)
      </span>
    </div>
  );
};
