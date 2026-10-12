import { useState } from "react";

// Renders an <img>, falling back to a gradient monogram if the file is missing.
export default function SmartImage({ src, alt = "", className = "", text = "" }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    const initials = (alt || text || "?").split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    return <div className={`${className} smart-img__fallback`} aria-label={alt}>{initials}</div>;
  }
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}
