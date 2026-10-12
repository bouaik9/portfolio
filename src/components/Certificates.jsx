import Reveal, { SectionHeading } from "./Reveal";
import { certificates } from "../data";
import { events } from "../analytics";

export default function Certificates() {
  return (
    <section id="certificates" className="section section--alt">
      <div className="container">
        <SectionHeading kicker="07 · certified" title="Certificates" />
        <div className="cert__grid">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="glass cert-card">
              <span className="cert-card__badge" aria-hidden="true">✓</span>
              <h3>{c.title}</h3>
              <p className="cert-card__issuer">{c.issuer}</p>
              <p className="cert-card__date">Issued {c.date}</p>
              <a href={c.verify} target="_blank" rel="noopener noreferrer" className="cert-card__link" onClick={() => events.certificateClick(c.title)}>
                Verify →
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
