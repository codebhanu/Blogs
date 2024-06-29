// src/InteractiveBackground.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import { Vector3 } from 'three';

import Gmail from '/Users/bhanudahal/blog/blogben/src/icons/Gmail.svg';
import Linkd from '/Users/bhanudahal/blog/blogben/src/icons/Linkd.svg';
import Github from '/Users/bhanudahal/blog/blogben/src/icons/Github.svg';
import Twitter from '/Users/bhanudahal/blog/blogben/src/icons/Twitter.svg';
import Insta from '/Users/bhanudahal/blog/blogben/src/icons/Insta.svg';
import Youtube from '/Users/bhanudahal/blog/blogben/src/icons/Youtube.svg';
import scroll from '/Users/bhanudahal/blog/blogben/src/icons/scroll.svg';

const numDots = 150;
const maxDistance = 1.4;

const generateDot = () => ({
  position: new Vector3(Math.random() * 10 - 5, Math.random() * 10 - 5, 0),
  velocity: new Vector3((Math.random() - 0.9) * 0.03, (Math.random() - 0.5) * 0.03, 0)
});

const dots = Array.from({ length: numDots }, generateDot);

function Dot({ dot, setElectricFlow }) {
  const ref = useRef();

  useFrame(() => {
    dot.position.add(dot.velocity);
    if (dot.position.x > 10 || dot.position.x < -10) dot.velocity.x *= -1;
    if (dot.position.y > 5 || dot.position.y < -5) dot.velocity.y *= -1;
    ref.current.position.copy(dot.position);
  });

  return (
    <Sphere
      ref={ref}
      args={[0.08, 16, 16]}
      position={dot.position}
      onClick={() => setElectricFlow(dot)}
    >
      <meshBasicMaterial attach="material" color="#c3c7c4" />
    </Sphere>
  );
}

function Lines({ connections, electricFlow }) {
  return connections.map((connection, index) => (
    <Line
      key={index}
      points={[connection.start, connection.end]}
      color={(electricFlow && (electricFlow.start === connection.start || electricFlow.end === connection.end)) ? 'red' : '#c3c7c4'}
      lineWidth={(electricFlow && (electricFlow.start === connection.start || electricFlow.end === connection.end)) ? 2 : 1}
    />
  ));
}

function Scene() {
  const [electricFlow, setElectricFlow] = useState(null);
  const [connections, setConnections] = useState([]);

  useFrame(() => {
    const newConnections = [];
    for (let i = 0; i < numDots; i++) {
      for (let j = i + 1; j < numDots; j++) {
        const distance = dots[i].position.distanceTo(dots[j].position);
        if (distance < maxDistance) {
          newConnections.push({ start: dots[i].position, end: dots[j].position });
        }
      }
    }
    setConnections(newConnections);
  });

  return (
    <>
      {dots.map((dot, index) => (
        <Dot key={index} dot={dot} setElectricFlow={setElectricFlow} />
      ))}
      <Lines connections={connections} electricFlow={electricFlow} />
    </>
  );
}

function InteractiveBackground({ scrollContainerRef }) {
  const [loaded, setLoaded] = useState(false);
  const [showScrollImage, setShowScrollImage] = useState(true);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      if (scrollContainerRef.current.scrollTop > 0) {
        setShowScrollImage(false);
      } else {
        setShowScrollImage(true);
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainerRef]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      <Canvas className=" absolute h-full w-full inset-0">
        <Scene className='w-full h-full' />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-black">
        <div className={`text-9xl mb-8 ${loaded ? 'name-animation' : ''}`}>Ben D</div>
      
        <div className="flex gap-4">

          
          <a href="https://youtube.com" className={`aCssInLinkInHomePage ${loaded ? 'link-animation' : ''}`}>
            <img src={Youtube} alt="YouTube" className="imageSizeCssInHomePage" />
            <span className="nameSizeCssInHomePage">YouTube</span>
          </a>
          <a href="https://www.instagram.com/bhanu_dahal007/" className={`aCssInLinkInHomePage ${loaded ? 'link-animation' : ''}`}>
            <img src={Insta} alt="Instagram" className="imageSizeCssInHomePage" />
            <span className="nameSizeCssInHomePage">Instagram</span>
          </a>
          <a href="https://twitter.com/BhanuDahal7" className={`aCssInLinkInHomePage ${loaded ? 'link-animation' : ''}`}>
            <img src={Twitter} alt="Twitter" className="imageSizeCssInHomePage" />
            <span className="nameSizeCssInHomePage">Twitter</span>
          </a>
          <a href="https://github.com/codebhanu" className={`aCssInLinkInHomePage ${loaded ? 'link-animation' : ''}`}>
            <img src={Github} alt="GitHub" className="imageSizeCssInHomePage" />
            <span className="nameSizeCssInHomePage">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ben0/" className={`aCssInLinkInHomePage ${loaded ? 'link-animation' : ''}`}>
            <img src={Linkd} alt="LinkedIn" className="imageSizeCssInHomePage" />
            <span className="nameSizeCssInHomePage">LinkedIn</span>
          </a>
          <a href="mailto:bhanudahal112a@gmail.com" className={`aCssInLinkInHomePage ${loaded ? 'link-animation' : ''}`}>
            <img src={Gmail} alt="Email" className="imageSizeCssInHomePage" />
            <span className="nameSizeCssInHomePage">Email</span>
          </a>
        </div>
        {showScrollImage && (
          <img src={scroll} className="absolute bottom-4 animate-bounce w-[80px]" alt="Scrolldown" />
        )}
      </div>
    </div>
  );
}

export default InteractiveBackground;
