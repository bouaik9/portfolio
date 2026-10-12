import Reveal, { SectionHeading } from "./Reveal";
import { projects } from "../data";
import { events } from "../analytics";

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeading kicker="05 · shipped" title="Featured Projects" />
        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} className="project-card glass">
              <div className="project-card__top">
                <span className="project-card__folder" aria-hidden="true">🗀</span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                  onClick={() => events.projectClick(p.title)}
                >
                  GitHub ↗
                </a>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tech.map((t) => <span key={t} className="tag tag--mono">{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
