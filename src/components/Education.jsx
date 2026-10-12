import Reveal, { SectionHeading } from "./Reveal";
import { education, leadership } from "../data";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading kicker="03 · education" title="Education" />
        <div className="edu__grid">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08} className="glass edu-card">
              <div className="edu-card__icon" aria-hidden="true">🎓</div>
              <div>
                <h3>{e.degree} {e.current && <span className="edu-card__now">current</span>}</h3>
                <p className="edu-card__school">{e.school}</p>
                <p className="edu-card__period">{e.period}</p>
                {e.note && <p className="edu-card__note">{e.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="glass edu-lead">
          <span className="edu-lead__icon" aria-hidden="true">🧭</span>
          <div>
            <h3>{leadership.role}</h3>
            <p className="edu-card__school">{leadership.org} · <span className="edu-card__period">{leadership.period}</span></p>
            <p className="edu-card__note">{leadership.detail}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
