"use client";
// import Hero from "@/components/hero";
// import WorkExperience from "@/components/work-experience";
// import Skills from "@/components/skills";
// import Projects from "@/components/projects";

// export default function Home() {
//   return (
//     <div className="relative">
//       <div
//         className="absolute inset-0 -z-10 min-h-screen w-full bg-[#0b1215]
//     bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#2e2e2e_1px,transparent_1px)]
//     bg-[size:6rem_4rem] animate-[movePattern_8s_linear_infinite]"
//       />
//       <Hero />
//       <Skills />
//       <WorkExperience />
//       <Projects />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import WorkExperience from "@/components/work-experience";
import UtilitySection from "@/components/utility-section";

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        <div className="bento-card lg:col-span-2">
          <Hero />
        </div>

        <div className="bento-card lg:row-span-2">
          <Skills />
        </div>

        {/* Time Card */}
        <div className="bento-card">
          <h2 className="text-base md:text-lg text-gray-400 mb-3 md:mb-4">
            Current Time
          </h2>
          <p className="text-2xl md:text-3xl font-bold font-mono">
            {time.toLocaleTimeString()}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
          <UtilitySection />
        </div>

        {/* Projects Card */}
        <div className="bento-card lg:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            Featured Projects
          </h2>
          <Projects />
        </div>

        {/* New Experience Card */}
        <div className="bento-card md:col-span-3">
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}

// export default Index;
