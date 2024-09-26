import React, { useEffect, useRef } from "react";

const About = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    elementsRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach((el) => {
          if (el) {
            observer.unobserve(el);
          }
        });
      }
    };
  }, []);

  return (
    <div className="bg-slate-600 min-h-screen flex flex-col justify-center items-center text-white font-bold">
      {Array.from({ length: 50 }, (_, i) => (
        <p
          key={i}
          className="mb-4 hidden"
          ref={(el) => {
            elementsRef.current[i] = el;
          }}
        >
          This is some scrollable content. Scroll down to see the sticky div
          change color.
        </p>
      ))}
    </div>
  );
};

export default About;
