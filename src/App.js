import React from 'react'
import {Link,Routes,Route } from 'react-router-dom';
import  About  from './Component/About';
import Vote  from './Component/Vote';
import Blogs  from './Component/Blogs';
import Blog from './Component/Blog';
import SharedLayout from './Component/SharedLayout';
 import NotFoundPage  from './Component/NotFoundPage';
 import InteractiveBackground from './Component/Home';

 const App = () => {
  return (
      <>
      <div className="h-screen overflow-hidden">
      <div  className="h-full overflow-auto">  
        <InteractiveBackground />
        
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
    {/* <ul>
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
  </Routes> */}
   </>
  )
}
export default App