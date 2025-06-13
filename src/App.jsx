import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import Services from "@/components/Services";
import ChainModels from "@/components/ChainModels";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background scroll-smooth">
        <Header />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="products">
            <FeaturedProducts />
          </section>
          <section id="chain-models">
            <ChainModels />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
