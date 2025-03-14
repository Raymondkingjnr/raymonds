import React from "react";
import { Separator } from "./ui/separator";

const WorkExperience = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <aside className="flex justify-between items-center">
              <h1 className="uppercase text-base md:text-lg font-semibold pb-4">
                OneWay
              </h1>
            </aside>
            <p className="pb-1 text-sm italic font-semibold">
              Role: Frontend (Contract)
            </p>
            <p className="text-sm italic font-semibold">
              Mar, 2024 - Dec, 2024
            </p>
            <ul className="flex flex-col gap-[1rem] mt-[1.8rem]">
              <li className="text-sm leading-[1.6rem] font-medium">
                * Tasked with turning the Figma web app design into React code
                and handling API integration for both the admin and user sides
              </li>
              <li className="text-sm leading-[1.6rem] font-medium">
                * Worked closely with backend developers to ensure smooth API
                integration
              </li>
            </ul>
          </div>
          {/* <span className="text-gray-400">2020 - Present</span> */}
        </div>
        <Separator />
        <div className="flex justify-between items-start">
          <div>
            <aside className="flex justify-between items-center">
              <h1 className="text-base capitalize md:text-lg font-semibold pb-4">
                IBX EXCHANGE{" "}
                <span className="text-sm pl-2 pb-1.5 italic">
                  (Fait currency Exchange)
                </span>
              </h1>
            </aside>
            <p className="pb-1 text-sm italic font-semibold">
              Role: Frontend Intern
            </p>
            <p className="text-sm italic font-semibold">
              Jan, 2024 - Jan, 2025
            </p>
            <ul className="flex flex-col gap-[1rem] mt-[1.8rem]">
              <li className="text-sm leading-[1.6rem] font-medium">
                * Worked with the wider development team
              </li>
              <li className="text-sm leading-[1.6rem] font-medium">
                * Managed website design and content
              </li>
              <li className="text-sm leading-[1.6rem] font-medium">
                * Worked closely with backend developers to ensure smooth API
                integration
              </li>
            </ul>
          </div>
          {/* <span className="text-gray-400">2018 - 2020</span> */}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
