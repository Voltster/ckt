import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Project from "../components/Home/Project";
import Testimonials from "../components/Home/Testimonials";
import Contact from "../components/Home/Contact";
import InfinityScroll from "../components/Home/InfiniteScroll";

const Home = () => {
  return (
    <main className="heroBg">
      <Hero />
      <Services />
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <InfinityScroll />
    </main>
  );
};

export default Home;
