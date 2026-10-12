import { useState } from "react";
import Reveal, { SectionHeading } from "./Reveal";
import { profile } from "../data";
import { events } from "../analytics";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const subject = encodeURIComponent(`Portfolio contact from ${fd.get("name")}`);
    const body = encodeURIComponent(`Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`);
    events.contactSubmit();
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading kicker="08 · hello" title="Get In Touch" />
        <Reveal className="contact__box glass">
          <p className="contact__sub">
            I'm currently looking for internship opportunities in web development or DevOps.
            Whether it's a role, a freelance project, or just a chat — my inbox is open.
          </p>
          <form className="contact__form" onSubmit={submit}>
            <input name="name" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
            <textarea name="message" rows="5" placeholder="Your message" required />
            <button type="submit" className="btn btn--primary">Send Message →</button>
            {sent && <p className="contact__ok">✅ Opening your email client…</p>}
          </form>
          <div className="contact__links">
            <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">💻 GitHub</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
