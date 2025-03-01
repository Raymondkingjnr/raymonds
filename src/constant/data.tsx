import {
  JavascriptIcon,
  NextjsIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  SanityIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
  GitIcon,
} from "@/assets/icons/skills-icon";

import { game, aiImg, sportify, hotel, cars, movie } from "@/assets/images";

export const skillsData = [
  {
    title: "Javascript",
    img: <JavascriptIcon />,
  },
  {
    title: "Typescript",
    img: <TypescriptIcon />,
  },
  {
    title: "Python",
    img: <PythonIcon />,
  },
  {
    title: "Reactjs",
    img: <ReactIcon />,
  },
  {
    title: "Nextjs",
    img: <NextjsIcon />,
  },
  {
    title: "Git",
    img: <GitIcon />,
  },
  {
    title: "Redux",
    img: <ReduxIcon />,
  },
  {
    title: "Tailwind",
    img: <TailwindIcon />,
  },
  {
    title: "Sass",
    img: <SassIcon />,
  },
  {
    title: "Sanity",
    img: <SanityIcon />,
  },
];

export const projectsData = [
  {
    gitLink: "https://github.com/Raymondkingjnr/Netflix-clone",
    url: "https://netflix-clone-drab-omega.vercel.app/",
    title: "view Hubs",
    stacks: ["React", "Redux", "Firebase"],
    des: [
      "View Hubs is a netflix website clone where users can can browser through movies and series. They can also watch a preview of their favorite movies and series so it can give them an overview of what to expect before they can actually see the movie",
    ],
  },
  {
    gitLink: "https://github.com/Raymondkingjnr/Carz-hub__next.js",
    url: "https://carz-hub-next-js.vercel.app/",
    title: "Carz Hub",
    stacks: ["Nextjs", "Tailwindcss", "Typescript", "Rapid API"],
    des: "Carz Hub is a car website where users can browser through cars and get information about them, like color, price, year of manufacture and so on",
  },
  {
    gitLink: "https://github.com/Raymondkingjnr/dice-game",
    url: "https://dice-game-amber-three.vercel.app/",
    title: "Pig Game",
    stacks: ["Vanilla Javascript", "HTML", "CSS"],
    des: "A gaming website where two players can play a game of dice rolling, user can either hold a score or keep playing until he gets a high number then he can hold the score and continue playing it was created with plain javascript",
  },
  {
    gitLink: "https://github.com/Raymondkingjnr/artist-profile-",
    url: "https://vercel.com/raymondkingjnrs-projects/tuneinbio",
    title: "Tune In Bio",
    stacks: ["React", "Javascript", "Tailwindcss", "Spoitfy API"],
    des: "A website that allows user to search any of their favorite artists that are avaliable on sportify they can also see the artist albums and top tracks",
  },
  {
    gitLink: "https://github.com/Raymondkingjnr/hotel-managment",
    url: "https://hotel-managment-three.vercel.app/",
    title: "Fabs Palace",
    stacks: [
      "Nextjs",
      "Tailwindcss",
      "Typescript",
      "Sanity",
      "Next Auth",
      "Sanity",
      "Stripe",
    ],
    des: " a hotel management platform, designed to streamline operations for hotels. It include features such as room booking, guest management, billing, and other administrative tools to help hotel staff efficiently manage their properties.",
  },
  {
    gitLink: "https://github.com/Raymondkingjnr/ai-nexus",
    url: "https://ainexus-xi.vercel.app/",
    title: "AI Nexus",
    stacks: ["Nextjs", "Tailwindcss", "Typescript", "Sanity", "Sanity"],
    des: "A blog website where AI related technologies can be read particularly AI technologies that developers can use to speed up productivity",
  },
];
