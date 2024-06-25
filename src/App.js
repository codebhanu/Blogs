import React, { useRef } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import About from './Component/About';
import Vote from './Component/Vote';
import Blogs from './Component/Blogs';
import Blog from './Component/Blog';
import SharedLayout from './Component/SharedLayout';
import NotFoundPage from './Component/NotFoundPage';
import InteractiveBackground from './Component/Home';

const App = () => {
  const scrollContainerRef = useRef(null);

  return (
    <>
      <div className="h-screen overflow-hidden">
        <div ref={scrollContainerRef} className="h-full overflow-auto">
          <InteractiveBackground scrollContainerRef={scrollContainerRef} />

          {/* Add more content here */}
          <div className="h-screen flex items-center justify-center bg-gray-300">
            <section className="p-8 bg-white rounded shadow-md">
              <h1 className="text-2xl font-bold mb-4">Additional Content Section 1</h1>
              <p className="text-lg">This is some additional content that appears below the interactive background.</p>
            </section>
          </div>
          <div className="h-screen flex items-center justify-center bg-gray-400">
            <section className="p-8 bg-white rounded shadow-md">
              <h1 className="text-2xl font-bold mb-4">Additional Content Section 2</h1>
              <p className="text-lg">Here is another section of content.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
