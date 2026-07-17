import { Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "@/data/timeline";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const TimelineSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="timeline" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("timeline.heading")} <span className="text-gradient">{t("timeline.headingHighlight")}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-xl font-normal">
            {t("timeline.subheading")}
          </p>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.type === "work" ? Briefcase : GraduationCap;

              const title = lang === "bn" ? item.titleBn : item.title;
              const org = lang === "bn" ? item.orgBn : item.org;
              const period = lang === "bn" ? item.periodBn : item.period;
              const description =
                lang === "bn" ? item.descriptionBn : item.description;

              return (
                <Reveal
                  key={item.id}
                  direction={isLeft ? "left" : "right"}
                  className={`relative flex items-start md:items-center gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon node */}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                    <Icon size={18} className="text-primary" />
                  </div>

                  {/* Card */}
                  <div
                    className={`glass-card p-5 rounded-lg flex-1 card-hover ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {period}
                    </span>
                    <h3 className="text-lg font-semibold mt-1">{title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{org}</p>
                    <p className="text-sm text-muted-foreground/90">
                      {description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
