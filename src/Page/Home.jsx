import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <main className="heroBg">
      <Hero />
      <Services />
      <About />
    </main>
  );
};

export default Home;
