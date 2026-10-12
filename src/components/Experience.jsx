import { motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import SmartImage from "./SmartImage";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading kicker="02 · career" title="Experience" />
        <div className="timeline">
          {experience.map((job, i) => (
            <motion.article
              key={i}
              className="timeline__item glass"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="timeline__meta">
                <span className="timeline__period">{job.period}</span>
                <span className="timeline__company">{job.company}</span>
              </div>
              <div className="timeline__body">
                <div className="timeline__head">
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__team">{job.team}</p>
                  </div>
                </div>
                <ul className="timeline__points">
                  {job.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
