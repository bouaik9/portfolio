import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "../analytics";

const links = [
  ["home", "Home"], ["about", "About"], ["experience", "Experience"], ["education", "Education"], ["skills", "Skills"],
  ["projects", "Projects"], ["achievements", "Achievements"], ["certificates", "Certificates"], ["contact", "Contact"],
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const pos = window.scrollY + 160;
      let current = "home";
      for (const [id] of links) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <nav className="nav__inner container">
        <button className="nav__logo" onClick={() => go("home")} aria-label="Home">
          <span className="nav__logo-bracket">&lt;</span>ayoub<span className="nav__logo-accent">.</span>dev<span className="nav__logo-bracket">/&gt;</span>
        </button>

        <ul className={`nav__menu ${open ? "nav__menu--open" : ""}`}>
          {links.map(([id, label]) => (
            <li key={id}>
              <button
                className={`nav__link ${active === id ? "nav__link--active" : ""}`}
                onClick={() => go(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            className="icon-btn nav__burger"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && <motion.div className="nav__backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}
