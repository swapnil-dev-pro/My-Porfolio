import { ArrowDown } from "lucide-react";
import Tilt from "react-parallax-tilt";
import myPhoto from "/public/projects/MyPhoto.png";

export const HeroSection = () => {
  return (
  
//    

    <section
  id="hero"
  className="md:top-10 relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-center"
>
  {/* === Floating Photo === */}
  <div
  className="
    flex justify-center
    sm:justify-center
    md:justify-center
    lg:justify-start
    relative lg:absolute
    top-0
    lg:top-10 lg:left-10
    z-20
    mt-24 sm:mt-28 md:mt-32 lg:mt-0
  "
>
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.3}
    scale={1.05}
    className="
      w-28 h-28
      sm:w-40 sm:h-40
      md:w-52 md:h-52
      lg:w-72 lg:h-80
    "
  >
    <img
      src={myPhoto}
      alt="Me"
      className="w-full h-full object-cover rounded-xl shadow-2xl border border-muted-foreground/10"
    />
  </Tilt>
</div>

  {/* === Text Content === */}
   <div className="container max-w-4xl mx-auto z-10 mt-40 md:mt-20 space-y-6">
     <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
      <span className="opacity-0 animate-fade-in">Hi, I'm</span>
       <span className="text-primary opacity-0 animate-fade-in-delay-1"> Swapnil</span>
       <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Rodrick</span>
     </h1>

     <p className="text-base sm:text-lg md:text-xl font-medium text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
      “I’m a passionate Frontend Developer specializing in building clean,
       modern, and interactive web applications with React. I turn ideas into
       seamless user experiences, blending creativity with performance-driven
       code.”
     </p>

    <a href="#projects" className="cosmic-button inline-block mt-4">
      View My Work
     </a>
   </div>

   {/* === Scroll Indicator === */}
   <div className="absolute bottom-1 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
     <span className="text-sm text-muted-foreground mb-2">Scroll</span>
     <ArrowDown className="h-5 w-5 text-primary" />
   </div>
 </section>
  )
  





 {/* ................................................ */}
    {/* <div className="absolute lg:justify-start top-19 right-1 md:top-50 md:left-[40px] flex justify-center  w-full md:w-auto z-20">
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={1.05}
      className="w-32 h-36 sm:w-44 sm:h-44 md:w-50 md:h-50 lg:w-80 lg:h-90  "
    >
      <img
        src={myPhoto}
        alt="Me"
        className="w-full h-full object-cover rounded-xl shadow-2xl border border-muted-foreground/10"
      />
    </Tilt>
  </div> */}
  {/* ............................................ */}
  





    // <section
    //   id="hero"
    //   className="relative min-h-screen flex flex-col items-center justify-center px-4"
    // >
    //   <div className="container max-w-4xl mx-auto text-center z-10">
    //     <div className="space-y-6 mt-[80px]">
    //       <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
    //         <span className="opacity-0 animate-fade-in "> Hi, I'm</span>
    //         <span className="text-primary opacity-0 animate-fade-in-delay-1">
    //           {" "}
    //           Swapnil
    //         </span>
    //         <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
    //           {" "}
    //           Rodrick
    //         </span>
    //       </h1>

    //       <p className="text-lg md:text-2xl font-medium text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
    //         “I’m a passionate Frontend Developer specializing in building clean,
    //         modern, and interactive web applications with React. I turn ideas
    //         into seamless user experiences, blending creativity with
    //         performance-driven code.”
    //       </p>
          {/* <div className="relative flex justify-center items-center mt-10 md:mt-0">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80"
            >
              <img
                src={myPhoto}
                alt="Me"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </Tilt>
          </div> */}

          {/* <div className="relative">
            <Tilt className="absolute top-[-520px] left-[27px]   md:top-[-300px] md:left-[-320px]">
            <img
               src={myPhoto} alt="Me" 
              className=" md:w-80 md:h-100 md:rounded-xl md:visible shadow-4xl"
            />
          </Tilt>
        </div> */}
          {/* <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  ); */}
};
