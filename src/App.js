import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import About from './Component/About';
import Vote from './Component/Vote';
import Blogs from './Component/Blogs';
import Blog from './Component/Blog';
import NotFoundPage from './Component/NotFoundPage';
import Home from './Component/Home';
const App = () => {
 

  return (         
    <>
  
         
    <Routes>
      <Route path ='/' element ={<Home />}/>

      <Route ></Route>
      <Route path ='/Vote' element={<Vote/>}/>

    <Route path ='/About' element={<About/>}/>
    
    <Route path ='/Blogs/page/:page' element={<Blogs/>}/> 
    <Route path="/blogs" element={<Blogs/>} exact />
    <Route path ='/blogs/:id' element={<Blog/>}/>
    
    <Route path ='*'element={<NotFoundPage/>}/>
  </Routes>
       
      
     
    </>
  );
};

export default App;


