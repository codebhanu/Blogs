import React, { useRef } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import About from './Component/About';
import Vote from './Component/Vote';
import Blogs from './Component/Blogs';
import Blog from './Component/Blog';
import SharedLayout from './Component/SharedLayout';
import NotFoundPage from './Component/NotFoundPage';
import InteractiveBackground from './Component/Home';
import Button from './Component/button'
const App = () => {
  const scrollContainerRef = useRef(null);

  return (
    <>
      <div className="h-screen overflow-hidden">
        <div ref={scrollContainerRef} className="h-full overflow-auto">
          <InteractiveBackground scrollContainerRef={scrollContainerRef} />

          {/* Add more content here */}


          <div className="h-screen flex flex-col items-center justify-center bg-blue-500">
           

              <p className='text-white text-[90px] text-center font-semibold '>About me</p>
              <br></br>

              <p className='text-white text-[25px] text-left   w-[1000px]  font-medium'>Hello i am 21 years old from nepal currently studying Computer science in canada.My original name is Bhanu Dahal,but i am frequently known by Ben D</p>
              <br></br>
              <p className='text-white text-[25px] text-left  w-[1000px]  font-medium '>I always liked being in touch with technolgy, when i was 8 years old i first saw computer in my school. I barely knew about computer before 13 year then i i got a cance to use computer when i was in 7 class as computer class practical where i used pint to draw a house  </p>
              <Link to="/About" >
              <Button title='Read more'/>
              </Link>

          </div>



          <div className="h-screen flex items-center justify-center bg-white">
           
              <span>Blogs</span>
              <Link to ='/Blogs'>
              <Button title ='More posts'/></Link>
              
  
           
          </div>
        </div>
      </div>
     <ul>
      <li><Link to='/vote'>Vote</Link></li>
      <li><Link to='/About'>About</Link></li>
      <li><Link to='/Blogs'>Blogs</Link></li>
    </ul>
    <Routes>
    <Route path ='/Vote' element={<Vote/>}/>
    <Route path ='/About' element={<About/>}/>
    
    <Route path ='/Blogs' element={<SharedLayout/>}> //if we give it without the path then it will be shared across all route without the path we can use that to do coool stuuf'
    <Route index element = {<Blogs/>}/>
    <Route path =':id' element={<Blog/>}/>
     </Route>
    <Route path ='*'element={<NotFoundPage/>}/>
  </Routes>
    </>
  );
};

export default App;
