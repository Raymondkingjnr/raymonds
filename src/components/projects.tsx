"use client";

import React from "react";
import { Button } from "./ui/button";
import { projectsData } from "@/constant/data";
import { GithubIcon, LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="max-w-[1200px] px-[1.5rem] mx-auto pb-[3rem]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="w-fit">
        <h3 className="text-lg md:text-xl font-semibold">Projects</h3>
        <div className="h-[2px] w-full mt-1 bg-[#B0BEC5]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-x-[5rem] gap-y-[2rem]">
        {projectsData.map((projects, index) => (
          <motion.div
            key={index}
            className="mt-[1rem]"
            variants={itemVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.5 }}
          >
            <h2 className="font-medium text-xl capitalize">{projects.title}</h2>
            <span className="flex gap-[1rem] py-3">
              <a
                href={projects.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[40px] w-[40px] bg-orange-500 rounded-3xl grid place-content-around"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={projects.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[40px] w-[40px] bg-orange-500 rounded-3xl grid place-content-around"
              >
                <LinkIcon size={18} />
              </a>
            </span>
            <div className="flex flex-wrap  gap-[0.76rem] font-semibold">
              {projects.stacks?.map((items, index) => (
                <p key={index}>{items}</p>
              ))}
            </div>
            <p className="pt-3 text-sm font-semibold leading-[2rem]">
              {projects.des}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-[2rem]">
        <a
          href="https://github.com/Raymondkingjnr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#FF7F50] w-[200px] h-[50px] cursor-pointer">
            More
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
