import Reveal, { SectionHeading } from "./Reveal";
import { profile, education, aboutData } from "../data";

export default function About() {
  const current = education[0];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          kicker="01 · whoami"
          title="About Me"
        />

        <div className="about__grid">
          <Reveal className="about__card glass">
            <div className="about__avatar">
              <img
                src={aboutData.avatar}
                alt="Portrait of me"
              />
            </div>

            <div className="about__education">
              <h3>{current.degree}</h3>
              <p className="about__school">
                {current.school}
              </p>
              <p className="about__period">
                {current.period}
              </p>
            </div>
          </Reveal>

          <div className="about__text">
            {profile.about.map((paragraph, index) => (
              <Reveal
                key={index}
                delay={index * 0.08}
              >
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}