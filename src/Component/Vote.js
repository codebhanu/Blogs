// src/InteractiveBackground.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { Link } from 'react-router-dom';
import Gmail from '/Users/bhanudahal/blog/blogben/src/icons/Gmail.svg';
import Linkd from '/Users/bhanudahal/blog/blogben/src/icons/Linkd.svg';
import Github from '/Users/bhanudahal/blog/blogben/src/icons/Github.svg';
import Twitter from '/Users/bhanudahal/blog/blogben/src/icons/Twitter.svg';
import Insta from '/Users/bhanudahal/blog/blogben/src/icons/Insta.svg';
import Youtube from '/Users/bhanudahal/blog/blogben/src/icons/Youtube.svg';
import scroll from '/Users/bhanudahal/blog/blogben/src/icons/scroll.svg';
import Button from '/Users/bhanudahal/blog/blogben/src/Component/button.js';
import Scene from'./Scene'
import blogPosts from '/Users/bhanudahal/blog/blogben/src/Content/BlogsContent.js'


function Home() {
 
  const [showScrollImage, setShowScrollImage] = useState(true);
  const scrollContainerRef = useRef(null);
 
  const Observer= new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){

      }
    })
  },{threshold:1,
    rootMargin:"-200px",
    root:null,
    
  })

  useEffect(()=>{
    
  })
  
  

  useEffect(() => {
    
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
useEffect(() => {

  const handleSetpostion=()=>{
    const scrollPos=localStorage.getItem('scrollPos');
    if (scrollPos){
    window.scrollTo(0,scrollPos)  
    }
  }

  const handleLoad=()=>{
    localStorage.setItem('scrollPos',window.scrollY)
  }

  window.addEventListener('DOMContentLoaded',handleSetpostion );
  window.addEventListener(onbeforeunload,handleLoad)

  window.onbeforeunload=(event)=>{
    localStorage.setItem('scrollPos',window.scrollY)
  }

  return()=>{
    window.removeEventListener('DOMContentLoaded',handleSetpostion );
  window.removeEventListener('onbeforeunload',handleLoad)


  }

},[]);
  
  
  const socialLink=[{link:'https://youtube.com',src:Youtube,title:'YouTube'},
    {link:'https://www.instagram.com/bhanu_dahal007/',src:Insta,title:'Instagram'},
    {link:'https://twitter.com/BhanuDahal7',src:Twitter,title:'Twitter'},
    {link:'https://github.com/codebhanu',src:Github,title:'GitHub'},
    {link:'https://www.linkedin.com/in/ben0/',src:Linkd,title:'LinkedIn'},
    {link:'mailto:bhanudahal112a@gmail.com',src:Gmail,title:'Email'},
  ]



return (
<div className="h-screen overflow-hidden">  {/* The outer div acts as a container that limits the height to the viewport and hides any overflow. */}

  <div ref={scrollContainerRef} id='lazyLoading' className="h-full overflow-auto">  {/* The inner div allows the content to scroll if it overflows the viewport. This
    setup is useful for creating sections that can individually scroll while the overall layout remains fixed to the viewport. This is the container which allows to have multiple section as it has overflow-auto and also we refer
  to this div to check whether user have scrolled or not to decide whether to show that bouncing down arrow in first page */}
  

    <div className="relative w-screen h-screen overflow-hidden bg-white">
   {/*  <Canvas className="absolute h-full w-full inset-0">
        <Scene className="w-full h-full" />
      </Canvas> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-black">
        <div className={`invisible text-6xl sm:text-8xl md:text-9xl`}>Ben D</div>
        <div className="navLinkFadeAnimation flex flex-wrap justify-center items-center gap-4">

          {socialLink.map((socialLink) => (
            <a  key={socialLink.link} href={socialLink.link} className='aCssInLinkInHomePage'>
              <img src={socialLink.src} alt={socialLink.title} className='imageSizeCssInHomePage'/>
              {socialLink.title}
            </a>

          ))}
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
    <Link to="/about" className='delay-1000'>
      <Button title="Read more" />
    </Link>
  </div>

 <div className=" relative h-screen bg-slate-100 flex flex-col items-center justify-center overflow-hidden">
 <p className="text-black text-[90px] text-center font-semibold">Blog</p>

  <div className="flex relative justify-center items-center flex-col bg-white mt-10 max-w-3xl p-6 rounded-lg shadow-2xl w-[900px] h-[600px]">


    
      <div className="relative p-2 flex flex-col w-full h-full overflow-hidden bg-gradient-to-b from-transparent to-white">
       <h1 className="font-bold text-xl mb-2">{blogPosts[blogPosts.length-1].title}</h1>
        <p className="text-sm text-gray-600 mb-4">{blogPosts[blogPosts.length-1].date}</p>
        <p className="mb-4">{blogPosts[blogPosts.length-1].content}</p>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        
      </div>

      <Link to={`/blogs/${blogPosts[blogPosts.length-1].id}`} className="absolute bottom-3 text-blue-500 hover:underline">
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
