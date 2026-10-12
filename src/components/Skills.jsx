import { motion } from "framer-motion";
import Reveal, { SectionHeading } from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading kicker="04 · toolbox" title="Technical Skills" />
        <div className="skills__grid">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.06} className="glass skill-card">
              <h3>{group.category}</h3>
              {group.items.map(([name, level]) => (
                <div className="skill-row" key={name}>
                  <div className="skill-row__head">
                    <span>{name}</span><span className="skill-row__pct">{level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: level + "%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    />
                  </div>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
