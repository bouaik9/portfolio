import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";
import { events } from "../analytics";

function useTyped(words) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 45 : 95;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTyped(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__content">
        <motion.p className="hero__hello" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          👋 Hi, my name is
        </motion.p>
        <motion.h1 className="hero__name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          {profile.name}
        </motion.h1>
        <motion.p className="hero__typed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <span className="hero__typed-prefix">I'm a </span>
          <span className="hero__typed-text">{typed}</span>
          <span className="hero__cursor">▍</span>
        </motion.p>
        <motion.p className="hero__tagline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          Backend developer &amp; data engineer. Django core contributor, Oracle-certified DevOps professional,
          competitive programmer, I build systems that scale.
        </motion.p>

        <motion.div className="hero__cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <a
            className="btn btn--primary"
            href={profile.resumeUrl}
            download
            onClick={() => events.resumeDownload()}
          >
            ⬇ Download Resume
          </a>
          <button className="btn btn--ghost" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View my work →
          </button>
        </motion.div>

        <motion.div className="hero__stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <div><strong>10K+</strong><span>records/day processed</span></div>
          <div><strong>50K+</strong><span>SKUs monitored</span></div>
          <div><strong>Django</strong><span>core contributor</span></div>
        </motion.div>
      </div>

      <div className="hero__scroll" aria-hidden="true"><span /></div>
    </section>
  );
}
