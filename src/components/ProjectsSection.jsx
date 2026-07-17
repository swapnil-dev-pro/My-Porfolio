import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export const ProjectsSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("projects.heading")}
            <span className="text-gradient">{t("projects.headingHighlight")}</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-xl font-normal">
            {t("projects.subheading")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => {
            const title = lang === "bn" ? project.titleBn : project.title;
            const description =
              lang === "bn" ? project.descriptionBn : project.description;

            return (
              <Reveal key={project.id} delay={key * 100}>
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#a78bfa"
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  scale={1.02}
                  transitionSpeed={1500}
                  className="h-full"
                >
                  <div className="group h-full glass-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold mb-1"> {title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground/80 hover:text-primary hover:scale-125 transition-all duration-300"
                          >
                            <ExternalLink size={20} />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground/80 hover:text-primary hover:scale-125 transition-all duration-300"
                          >
                            <Github size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="text-center mt-12">
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/swapnil-dev-pro"
            >
              {t("projects.checkGithub")} <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
