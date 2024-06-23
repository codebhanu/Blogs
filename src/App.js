import React from 'react'
import {Link,Routes,Route } from 'react-router-dom';
import  About  from './Component/About';
import Vote  from './Component/Vote';
import Blogs  from './Component/Blogs';
import Blog from './Component/Blog';
import SharedLayout from './Component/SharedLayout';
 import NotFoundPage  from './Component/NotFoundPage';
 const App = () => {
  return (
      <>
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
  )
}
export default App