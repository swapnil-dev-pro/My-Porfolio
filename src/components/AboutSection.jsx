import { Briefcase, Code, User } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t("about.heading")}
            <span className="text-gradient">{t("about.headingHighlight")}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal direction="left" className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("about.subheading")}</h3>

            <p className="text-muted-foreground text-xl font-normal">
              {t("about.p1")}
            </p>

            <p className="text-muted-foreground text-xl font-normal">
              {t("about.p2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                {t("about.getInTouch")}
              </a>
              <a
                href="/projects/Albin_Swapnil_Rodrick_CV.pdf"
                target="_blank"
                download="My-CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t("about.downloadCv")}
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> {t("about.card1Title")}</h4>
                  <p className="text-muted-foreground text-xl font-normal">
                    {t("about.card1Desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about.card2Title")}</h4>
                  <p className="text-muted-foreground text-xl font-normal">
                    {t("about.card2Desc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about.card3Title")}</h4>
                  <p className="text-muted-foreground text-xl font-normal">
                    {t("about.card3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
