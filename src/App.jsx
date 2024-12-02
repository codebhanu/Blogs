import React from "react";
import BlogpostFront from "./components/BlogpostFront.jsx";
import { Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import Navbar from "./sections/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import Clients from "./sections/Clients.jsx";
import Projects from "./sections/Projects.jsx";
import WorkExperience from "./sections/Experience.jsx";
import Home from "./Component/Home.jsx";
import NavButtons from "./Component/NavButtons.jsx";
import Vote from "./Component/Vote.jsx";
import BlogAbout from "./Component/About.jsx";
import Blogs from "./Component/Blogs.jsx";
import Blog from "./Component/Blog.jsx";
import NotFoundPage from "./Component/NotFoundPage.jsx";
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="max-w-7xl mx-auto relative">
            <Navbar />
            <WorkExperience />
            <Hero />
            <About />
            <Projects />
            <Clients />
            <BlogpostFront />
            <Contact />
            <Footer />
          </main>
        }
      />
      <Route path="/Home" element={<Home />} />

      <Route element={<NavButtons />}>
        <Route path="/Vote" element={<Vote />} />
        <Route path="/About" element={<BlogAbout />} />
        <Route path="/Blogs/page/:page" element={<Blogs />} />
        <Route path="/blogs" element={<Blogs />} exact />
        <Route path="/blogs/:id" element={<Blog />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
