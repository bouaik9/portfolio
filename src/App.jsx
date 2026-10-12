import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { events } from "./analytics";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Track section views once each
  useEffect(() => {
    const seen = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !seen.has(e.target.id)) {
          seen.add(e.target.id);
          events.sectionView(e.target.id);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <About />
	
        <Experience />
        
        <Projects />
        <Skills />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
