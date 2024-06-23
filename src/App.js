import React from 'react'
import {Link,Routes,Route } from 'react-router-dom';
import  About  from './Component/About';
import Vote  from './Component/Vote';
import Blog  from './Component/Blog';
 const App = () => {
  return (
      <>
    <ul>
      <li><Link to='/vote'>Vote</Link></li>
      <li><Link to='/About'>About</Link></li>
      <li><Link to='/Blog'>Blog</Link></li>
    </ul>
    <Routes>
    <Route path ='/Vote' element={<Vote/>}/>
    <Route path ='/About' element={<About/>}/>
    <Route path ='/Blog/:id' element={<SingleBlog/>}/>
  </Routes>
   </>
  )
}
export default App