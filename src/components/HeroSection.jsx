import { ArrowDown } from "lucide-react";
import Tilt from "react-parallax-tilt";
import myPhoto from "/public/projects/MyPhoto.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12"
    >
      {/* === Main Content Wrapper === */}
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 pt-24 lg:pt-0">

        {/* === Floating Photo === */}
        <div className="flex justify-center flex-shrink-0">
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Swapnil</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Rodrick</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-medium text-muted-foreground opacity-0 animate-fade-in-delay-3">
            "I'm a passionate Frontend Developer specializing in building clean,
            modern, and interactive web applications with React. I turn ideas into
            seamless user experiences, blending creativity with performance-driven
            code."
          </p>

          <a href="#projects" className="cosmic-button inline-block mt-4">
            View My Work
          </a>
        </div>
      </div>

      {/* === Scroll Indicator === */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};