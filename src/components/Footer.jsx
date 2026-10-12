import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>Designed &amp; built by {profile.name} — React + Framer Motion</p>
        <p>© {new Date().getFullYear()} · All rights reserved</p>
      </div>
    </footer>
  );
}
