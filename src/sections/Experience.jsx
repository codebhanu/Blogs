import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState("salute");

  const words = ["developer", "YouTuber", "freelancer"];
  let index = 0;

  function changeWord() {
    const dynamicWord = document.getElementById("dynamic-word");
    dynamicWord.textContent = words[index];
    index = (index + 1) % words.length; // Cycle through the array
  }

  // Change the word every 2 seconds
  setInterval(changeWord, 2000);
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-black-600">
        <div className="work-container">
          <div className="work-canvas flex flex-col h-full justify-start items-center py-2">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>
          <div
            onPointerOver={() => setAnimationName("salute")}
            onPointerOut={() => setAnimationName("idle")}
            class="work-content"
          >
            <div class="work-content_container flex flex-col h-full justify-start items-center py-2 group">
              <div class="work-content_text">
                <h1 className=" font-style: italic font-bold text-[100px] mb-2">
                  {" "}
                  Hi! I am Ben{" "}
                </h1>
                <span
                  id="dynamic-word"
                  class=" font-style: italic text-green-400 text-[50px] font-bold"
                >
                  developer
                </span>

                <p class="text-white-400   sm:text-xl">
                  <span className="mt-3 block text-[25px]">
                    I am a passionate web developer with a love for
                    problem-solving. My drive to find solutions for everything,
                    no matter how long it takes, is fueled by my desire to make
                    things more efficient and easier. Maybe my laziness plays a
                    part in this, as it constantly pushes me to automate and
                    simplify tasks in creative ways. I’ve been using computers
                    since I was in 7th grade, and my favorite part of computer
                    science has always been algorithms. The intersection of math
                    and technology fascinates me, whether it’s translating
                    algorithms into vector images or building neural networks.
                    To me, everything is math, and I love exploring how
                    mathematical concepts can bring ideas to life through code.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
