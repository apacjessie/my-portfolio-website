import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <section className="w-full bg-white">
      <Navbar />
      <Hero />
      <About />
    </section>
  );
};

export default App;
