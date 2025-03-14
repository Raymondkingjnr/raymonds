import React from "react";

const Hero = () => {
  return (
    <div>
      {/* <h2 className="text-sm text-gray-400 mb-2">welcome</h2> */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Hi I&apos;m <span className="text-blue-400">Raymond</span>
      </h1>
      <p className="text-gray-300 text-base md:text-lg">
        A software developer with a passion for creating beautiful and
        functional web experiences and mobile applications
      </p>
    </div>
  );
};

export default Hero;
