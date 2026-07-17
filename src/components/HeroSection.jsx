import { ArrowDown } from "lucide-react";
import Tilt from "react-parallax-tilt";
import myPhoto from "/public/projects/MyPhoto.png";
import { StatusBadge } from "@/components/StatusBadge";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { profile } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection = () => {
  const { lang, t } = useLanguage();
  const roleList = lang === "bn" ? profile.rolesBn : profile.roles;
  const typedRole = useTypingEffect(roleList, {
    typingSpeed: 90,
    deletingSpeed: 45,
    pauseTime: 1500,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12"
    >
      {/* === Main Content Wrapper === */}
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 pt-24 lg:pt-0">

        {/* === Floating Photo === */}
        <div className="relative flex justify-center flex-shrink-0 animate-float">
          <div className="absolute inset-0 rounded-xl bg-primary/30 blur-2xl animate-glow-pulse -z-10" />
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            scale={1.05}
            className="w-40 h-48 sm:w-52 sm:h-60 md:w-60 md:h-72 lg:w-72 lg:h-80"
          >
            <img
              src={myPhoto}
              alt="Me"
              className="w-full h-full object-cover rounded-xl shadow-2xl border border-muted-foreground/10"
            />
          </Tilt>
        </div>

        {/* === Text Content === */}
        <div className="text-center lg:text-left space-y-6 max-w-2xl">
          <div className="flex justify-center lg:justify-start opacity-0 animate-fade-in">
            <StatusBadge available={true} />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{t("hero.greeting")}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Swapnil</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              {t("hero.lastName")}
            </span>
          </h1>

          <div className="h-8 sm:h-9 flex items-center justify-center lg:justify-start opacity-0 animate-fade-in-delay-3">
            <span className="text-xl sm:text-2xl font-semibold text-foreground/90">
              {typedRole}
            </span>
            <span className="w-[2px] h-6 sm:h-7 bg-primary ml-1 animate-pulse" />
          </div>

          <p className="text-base sm:text-lg md:text-xl font-medium text-muted-foreground opacity-0 animate-fade-in-delay-3">
            {t("hero.tagline")}
          </p>

          <a href="#projects" className="cosmic-button inline-block mt-4">
            {t("hero.cta")}
          </a>
        </div>
      </div>

      {/* === Scroll Indicator === */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">{t("hero.scroll")}</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
