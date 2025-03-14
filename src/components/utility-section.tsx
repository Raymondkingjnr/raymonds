import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const UtilitySection = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Let&apos;s Connect
      </h2>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/Raymondkingjnr"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 md:p-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          <Github className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://twitter.com/raymond_dwebdev"
          target="_blank"
          className="p-2 md:p-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="mailto:nnajiarinze001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 md:p-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          <Mail className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://twitter.com/raymond_dwebdev"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 md:p-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          <Twitter className="w-6 h-6 md:w-8 md:h-8" />
        </a>

        <Link href="/guest-book">
          <Button className=" w-[180px] h-[40px] bg-slate-800 cursor-pointer">
            GuestBook
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UtilitySection;
