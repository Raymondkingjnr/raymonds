import React from "react";
import { projectsData } from "@/constant/data";

import { GithubIcon, LinkIcon } from "lucide-react";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 responsive-grid">
        {projectsData.map((projects, index) => (
          <section key={index} className="mt-[1rem] project-card">
            <h2 className="font-medium text-lg uppercase">{projects.title}</h2>
            <span className="flex gap-[1rem] py-3">
              <a
                href={projects.gitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={18} />
              </a>
              <a href={projects.url} target="_blank" rel="noopener noreferrer">
                <LinkIcon size={18} />
              </a>
            </span>
            <div className="flex flex-wrap  gap-[0.76rem] font-semibold">
              {projects.stacks?.map((items, index) => (
                <p
                  key={index}
                  className="text-gray-300 text-sm italic font-semibold"
                >
                  {items}
                </p>
              ))}
            </div>
            <p className="text-gray-300 text-base md:text-lg mt-4 md:mt-6 truncate w-[200px] md:w-[300px]">
              {projects.des}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
