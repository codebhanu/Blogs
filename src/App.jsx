// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import About from "./Component/About";
// import Vote from "./Component/Vote";
// import Blogs from "./Component/Blogs";
// import Blog from "./Component/Blog";
// import NotFoundPage from "./Component/NotFoundPage";
// import Home from "./Component/Home";
// import NavButtons from "./Component/NavButtons";
// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//
//         <Route element={<NavButtons />}>
//           <Route path="/Vote" element={<Vote />} />
//
//           <Route path="/About" element={<About />} />
//
//           <Route path="/Blogs/page/:page" element={<Blogs />} />
//           <Route path="/blogs" element={<Blogs />} exact />
//           <Route path="/blogs/:id" element={<Blog />} />
//
//           <Route path="*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };
//
// export default App;
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import Navbar from "./sections/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import Clients from "./sections/Clients.jsx";
import Projects from "./sections/Projects.jsx";
import WorkExperience from "./sections/Experience.jsx";
import Home from "./Component/Home.jsx"
import NavButtons from "./Component/NavButtons.jsx"
import Vote from "./Component/Vote.jsx"
import About from "./Component/About.jsx"
import Blogs from "./Component/Blogs.jsx"
import Blog from "./Component/Blog.jsx"
import NotFoundPage from "./Component/NotFoundPage.jsx"
const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
 <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<NavButtons />}>
          <Route path="/Vote" element={<Vote />} />

          <Route path="/About" element={<About />} />

          <Route path="/Blogs/page/:page" element={<Blogs />} />
          <Route path="/blogs" element={<Blogs />} exact />
          <Route path="/blogs/:id" element={<Blog />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

  );
};

export default App;
