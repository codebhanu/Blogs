import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Component/About';
import Vote from './Component/Vote';
import Blogs from './Component/Blogs';
import Blog from './Component/Blog';
import NotFoundPage from './Component/NotFoundPage';
import Home from './Component/Home';
import NavButtons from './Component/NavButtons';
const App = () => {
 

  return (         
    <>
  
         
    <Routes>

      <Route path='/'  element ={<Home />}/>

      <Route  element={<NavButtons/>}  >
      <Route path ='/Vote' element={<Vote/>}/>

    <Route path ='/About' element={<About/>}/>
    
    <Route path ='/Blogs/page/:page' element={<Blogs/>}/> 
    <Route path="/blogs" element={<Blogs/>} exact />
    <Route path ='/blogs/:id' element={<Blog/>}/>
    
    <Route path ='*'element={<NotFoundPage/>}/>
    
    </Route>
  </Routes>
       
      
     
    </>
  );
};

export default App;


