"use client";
import React from "react";
import { skillsData } from "@/constant/data";
import { motion } from "framer-motion";

const Skills = () => {
  const scrollRef = React.useRef(null);
  const duplicatedSkills = [...skillsData, ...skillsData];
  return (
    <div className=" max-w-[1200px] mx-auto mt-[3rem] px-[1.5rem]">
      <div className=" w-fit">
        <h3 className=" text-lg md:text-xl font-semibold ">Tech Skills</h3>
        <div className=" h-[2px] w-full mt-1 bg-[#B0BEC5]" />
      </div>
      <motion.div
        ref={scrollRef}
        className="overflow-hidden mt-[1.5rem] w-full"
      >
        <motion.div
          className="flex gap-[2.7rem] items-center justify-between"
          animate={{ x: [0, -300] }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          onHoverStart={(e) => e.stopPropagation()}
        >
          {duplicatedSkills.map((skill, index) => (
            <div key={index}>{skill.img}</div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
