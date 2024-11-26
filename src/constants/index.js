export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 5,
    name: "Blog",
    href: "/Home",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "jhon doe",
    position: "Demo",
    img: "assets/review1.png",
    review:
      "Working with ben was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "jhon doe",
    position: "Demo",
    img: "assets/review2.png",
    review:
      "Ben's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "Jhon doe",
    position: "demo",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about ben. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "jhon doe",
    position: "demo",
    img: "assets/review4.png",
    review:
      "Ben  was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "HR Management Software",
    desc: "HR Management Software is a desktop application designed to manage employees and their related activities. The application includes features like employee management, session management, and activity logs.",
    subdesc:
      "Built using JavaFX, this desktop application was tested with JUnit tests. It includes login and logout functionality, with data stored in a MySQL database using XAMPP.",
    url: '  <iframe width="2133" height="907" src="https://www.youtube.com/embed/3HNyXCPDQ7Q?list=PLkY85cDHOEpulGsljjol5aPMfJOaM0tJI" title="Build and Deploy a Fullstack Responsive Portfolio Website | ULTIMATE Step By Step Tutorial 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "JavaFX",
        path: "/assets/javafx.png",
      },
      {
        id: 2,
        name: "JUnit",
        path: "/assets/junit.png",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/mysql.png",
      },
    ],
  },
  {
    title: "Hangman Game",
    desc: "Hangman Game is a simple web-based game where players have 5 chances to guess the correct word.",
    subdesc:
      "Built using Python with FastAPI for API control, cookies technology for storing session data, and Tailwind CSS for styling. The game allows users to add their own words to the word list.",
    url: ' <iframe width="2133" height="907" src="https://www.youtube.com/embed/3HNyXCPDQ7Q?list=PLkY85cDHOEpulGsljjol5aPMfJOaM0tJI" title="Build and Deploy a Fullstack Responsive Portfolio Website | ULTIMATE Step By Step Tutorial 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.png",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/fastapi.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "Banking Flutter Application",
    desc: "The Banking Flutter Application allows users to manage their checking and savings accounts, with the ability to transfer money between accounts. All transactions are stored on a server with FastAPI.",
    subdesc:
      "Built with Flutter for the front end and FastAPI for the backend. The application uses cookies to maintain session information, providing a secure and seamless banking experience.",
    url: " https://www.youtube.com/embed/3HNyXCPDQ7Q?list=PLkY85cDHOEpulGsljjol5aPMfJOaM0tJI    ",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/flutter.png",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/fastapi.png",
      },
      {
        id: 3,
        name: "Cookies",
        path: "/assets/cookies.png",
      },
    ],
  },
  {
    title: "Blog Website",
    desc: "The Blog Website allows users to post blogs, share them, and recommend similar posts based on their previous activity. It integrates technologies to suggest relevant blogs to users based on their interests.",
    subdesc:
      "Built with React, Tailwind CSS, TypeScript, and Node.js for the backend. The website uses cookies to track user activity and suggest similar blog posts based on past interactions.",
    url: "",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
