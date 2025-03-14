import React from "react";
import {
  JavascriptIcon,
  NextjsIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/assets/icons/skills-icon";
const Skills = () => {
  return (
    <div>
      {" "}
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">About me</h2>
      <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
        I specialize in building modern web applications using React,
        TypeScript, and other cutting-edge technologies.
      </p>
      <div className="space-y-3 md:space-y-4">
        <p className="text-base md:text-lg text-gray-400">My tools:</p>
        <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-3 md:space-y-5 flex flex-wrap items-center place-items-center space-x-4">
          <span className=" flex items-center gap-4">
            <li>React</li>
            <ReactIcon />
          </span>
          <span className=" flex items-center gap-4">
            <li>NextJs</li>
            <NextjsIcon />
          </span>
          <span className=" flex items-center gap-4">
            <li>TypeScript</li>
            <TypescriptIcon />
          </span>
          <span className=" flex items-center gap-4">
            <li>JavaScript</li>
            <JavascriptIcon />
          </span>
          <span className=" flex items-center gap-4">
            <li>Tailwind CSS</li>
            <TailwindIcon />
          </span>
          <span className=" flex items-center gap-4">
            <li>Redux Toolkit</li>
            <ReduxIcon />
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
