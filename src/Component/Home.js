import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gmail from "/Users/bhanudahal/blog/blogben/src/icons/Gmail.svg";
import Linkd from "/Users/bhanudahal/blog/blogben/src/icons/Linkd.svg";
import Github from "/Users/bhanudahal/blog/blogben/src/icons/Github.svg";
import Twitter from "/Users/bhanudahal/blog/blogben/src/icons/Twitter.svg";
import Insta from "/Users/bhanudahal/blog/blogben/src/icons/Insta.svg";
import Youtube from "/Users/bhanudahal/blog/blogben/src/icons/Youtube.svg";
import scroll from "/Users/bhanudahal/blog/blogben/src/icons/scroll.svg";
import Button from "/Users/bhanudahal/blog/blogben/src/Component/button.js";
import blogPosts from "/Users/bhanudahal/blog/blogben/src/Content/BlogsContent.js";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

function Home() {
  const [showScrollImage, setShowScrollImage] = useState(true);
  const scrollContainerRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".hide");
    elements.forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current.scrollTop > 0) {
        setShowScrollImage(false);
      } else {
        setShowScrollImage(true);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  useEffect(() => {
    const getPostion = sessionStorage.getItem("postion");

    if (getPostion && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, parseInt(getPostion, 10));
      sessionStorage.removeItem("postion");
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem("postion", scrollContainerRef.current.scrollTop);
    };

    window.addEventListener("beforeunload", handleScroll);

    return () => {
      window.removeEventListener("beforeunload", handleScroll);
    };
  }, [scrollContainerRef]);

  const socialLink = [
    { link: "https://youtube.com", src: Youtube, title: "YouTube" },
    {
      link: "https://www.instagram.com/bhanu_dahal007/",
      src: Insta,
      title: "Instagram",
    },
    { link: "https://twitter.com/BhanuDahal7", src: Twitter, title: "Twitter" },
    { link: "https://github.com/codebhanu", src: Github, title: "GitHub" },
    {
      link: "https://www.linkedin.com/in/ben0/",
      src: Linkd,
      title: "LinkedIn",
    },
    { link: "mailto:bhanudahal112a@gmail.com", src: Gmail, title: "Email" },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden antialiased">
      <div
        ref={scrollContainerRef}
        id="lazyLoading"
        className="h-full overflow-auto"
      >
        <div className="hide relative w-screen h-screen bg-white">
          <Canvas className="absolute h-full w-full inset-0">
            <Scene className="w-full h-full" />
          </Canvas>
          <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-black">
            <div className="hide mb-11 text-6xl sm:text-8xl md:text-9xl font-semibold">
              Ben D
            </div>
            <div className="navLinkFadeAnimation flex flex-wrap justify-center items-center gap-4">
              {socialLink.map((socialLink) => (
                <a
                  key={socialLink.link}
                  href={socialLink.link}
                  className="aCssInLinkInHomePage hide"
                >
                  <img
                    src={socialLink.src}
                    alt={socialLink.title}
                    className="imageSizeCssInHomePage"
                  />
                  {socialLink.title}
                </a>
              ))}
            </div>
            {showScrollImage && (
              <img
                src={scroll}
                className="absolute bottom-4 animate-bounce w-[80px]"
                alt="Scrolldown"
              />
            )}
          </div>
        </div>

        <div className="hide h-screen w-screen flex flex-col items-center justify-center bg-blue-500 overflow-hidden gap-y-1">
          <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-4/5 xl:w-1/2 lg:p-8 md:p-6 p-3 text-center break-all hyphens-auto">
            <h2 className="hide text-white text-6xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              About Me
            </h2>
            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 text-left">
              Hello, I am 21 years old from Nepal currently studying Computer
              Science in Canada. My original name is Bhanu Dahal, but I am
              frequently known by Ben D.
            </p>
            <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 text-left">
              I always liked being in touch with technology. When I was 8 years
              old, I first saw a computer in my school. I barely knew about
              computers before 13 years old, then I got a chance to use a
              computer when I was in 7th class.
            </p>
          </div>
          <Link to="/about">
            <Button title="Read more" className="mt-6" />
          </Link>
        </div>

        <div className="hide h-screen w-screen bg-slate-100 flex flex-col items-center justify-center overflow-hidden">
          <p className="hide text-black text-6xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            Blog
          </p>

          <div className="flex relative justify-center items-center flex-col bg-white w-11/12 sm:p-4 rounded-lg shadow-2xl h-2/3 sm:w-4/5 md:w-3/5 lg:w-4/5 xl:w-1/2 lg:p-8 md:p-6 p-3 break-word mb-4">
            <div className="relative p-2 flex flex-col w-full h-full overflow-hidden bg-gradient-to-b from-transparent text to-white">
              <h2 className="font-bold text-3xl mb-2">
                {blogPosts[blogPosts.length - 1].title}
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                {blogPosts[blogPosts.length - 1].date}
              </p>
              <p className="text-black text-sm sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 text-left">
                {blogPosts[blogPosts.length - 1].content}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>
            <Link
              to={`/blogs/${blogPosts[blogPosts.length - 1].id}`}
              className="absolute bottom-3 text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
          <Link to={"/Blogs/page/1"}>
            <Button title="More Posts" />
          </Link>
          <p className="fixed bottom-0 font-sans text-sm">
            bhanudddd all rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
