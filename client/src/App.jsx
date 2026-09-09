import { useEffect, useState } from "react";

import ThreeBackground from "./components/ThreeBackground";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ThreeBackground />
      <div className="bg-veil" aria-hidden="true" />

      <Loader done={loaded} />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
