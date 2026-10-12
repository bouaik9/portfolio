import Reveal, { SectionHeading } from "./Reveal";
import SmartImage from "./SmartImage";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading kicker="06 · podium" title="Achievements & Awards" />
        <div className="ach__grid">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.07} className="glass ach-card">
              <div className="ach-card__media">
                <SmartImage src={a.img} alt={a.title} className="ach-card__img" text={a.title} />
                <span className="ach-card__year">{a.year}</span>
              </div>
              <h3>{a.title}</h3>
              <p>{a.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
