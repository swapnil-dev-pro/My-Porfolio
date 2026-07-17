import { useState } from "react";
import { cn } from "@/lib/utils";
import { skills, skillCategories } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const SkillBar = ({ skill, index }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn(
        "bg-card p-6 rounded-lg shadow-xs card-hover transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: isVisible ? `${index * 60}ms` : "0ms" }}
    >
      <div className="text-left mb-4">
        <h3 className="font-semibold text-lg"> {skill.name}</h3>
      </div>
      <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
        <div
          className="bg-primary h-2 rounded-full origin-left transition-[width] duration-1000 ease-out"
          style={{ width: isVisible ? skill.level + "%" : "0%" }}
        />
      </div>

      <div className="text-right mt-1">
        <span className="text-sm text-muted-foreground">
          {skill.level}%
        </span>
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useLanguage();

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t("skills.heading")}
            <span className="text-gradient">{t("skills.headingHighlight")}</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                    : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
                )}
              >
                {t(`skills.categories.${category}`)}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <SkillBar key={skill.name + skill.category} skill={skill} index={key} />
          ))}
        </div>
      </div>
    </section>
  );
};
