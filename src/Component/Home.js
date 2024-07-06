// src/InteractiveBackground.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import { Vector3 } from 'three';
import { Link } from 'react-router-dom';
import Gmail from '/Users/bhanudahal/blog/blogben/src/icons/Gmail.svg';
import Linkd from '/Users/bhanudahal/blog/blogben/src/icons/Linkd.svg';
import Github from '/Users/bhanudahal/blog/blogben/src/icons/Github.svg';
import Twitter from '/Users/bhanudahal/blog/blogben/src/icons/Twitter.svg';
import Insta from '/Users/bhanudahal/blog/blogben/src/icons/Insta.svg';
import Youtube from '/Users/bhanudahal/blog/blogben/src/icons/Youtube.svg';
import scroll from '/Users/bhanudahal/blog/blogben/src/icons/scroll.svg';
import Button from '/Users/bhanudahal/blog/blogben/src/Component/button.js';

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

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showScrollImage, setShowScrollImage] = useState(true);
  const scrollContainerRef = useRef(null);

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

  const blogPosts = [
    {
      id: 1,
      title: 'Blog Post 1',
      content: 'This is the content of the first blog post. It has a certain number of words.',
      date: 'June 30, 2024',
}]

return (
<div className="h-screen overflow-hidden">  {/* The outer div acts as a container that limits the height to the viewport and hides any overflow. */}

  <div ref={scrollContainerRef} className="h-full overflow-auto">  {/* The inner div allows the content to scroll if it overflows the viewport. This
    setup is useful for creating sections that can individually scroll while the overall layout remains fixed to the viewport. This is the container which allows to have multiple section as it has overflow-auto and also we refer
  to this div to check whether user have scrolled or not to decide whether to show that bouncing down arrow in first page */}
  

    <div className="relative w-screen h-screen overflow-hidden bg-white">
      <Canvas className="absolute h-full w-full inset-0">
        <Scene className="w-full h-full" />
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

  <div className="h-screen flex flex-col items-center justify-center bg-blue-500">
    <p className="text-white text-[90px] text-center font-semibold">About me</p>
    <br />
    <p className="text-white text-[25px] text-left w-[1000px] font-medium">
      Hello, I am 21 years old from Nepal currently studying Computer Science in Canada. My original name is Bhanu Dahal, but I am frequently known by Ben D.
    </p>
    <br />
    <p className="text-white text-[25px] text-left w-[1000px] font-medium">
      I always liked being in touch with technology. When I was 8 years old, I first saw a computer in my school. I barely knew about computers before 13 years old, then I got a chance to use a computer when I was in 7th class as part of a computer class practical where I used Paint to draw a house.
    </p>
    <Link to="/about">
      <Button title="Read more" />
    </Link>
  </div>

 <div className=" relative h-screen bg-slate-100 flex flex-col items-center justify-center overflow-hidden">

  <div className="flex relative justify-center items-center flex-col bg-white mt-10 max-w-3xl p-6 rounded-lg shadow-2xl w-[900px] h-[600px]">
    
      <div className="relative p-2 flex flex-col w-full h-full overflow-hidden bg-gradient-to-b from-transparent to-white">
       <h1 className="font-bold text-xl mb-2">{blogPosts[0].title}</h1>
        <p className="text-sm text-gray-600 mb-4">{blogPosts[0].date}</p>
        <p className="mb-4">{blogPosts[0].content}</p>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        
      </div>

      <Link to={`/blogs/${blogPosts[0].id}`} className="absolute bottom-3 text-blue-500 hover:underline">
        Read More
      </Link>

    </div>
    
    <Link  to={'/Blogs/page/1'} className='absolute bottom-2 ' >
    <Button title='More Posts'/>
    </Link>
  </div>
</div>
</div>
);
}

export default Home;
