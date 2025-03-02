"use client";
import React from "react";
import Giscus from "@giscus/react";

const GiscusComments = () => {
  return (
    <Giscus
      repo="Raymondkingjnr/raymonds"
      repoId="R_kgDOOBnw7Q"
      category="Announcements"
      categoryId="DIC_kwDOOBnw7c4Cnd_M"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      theme="dark_tritanopia"
      inputPosition="top"
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComments;
