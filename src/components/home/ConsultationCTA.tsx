function DetailIcon({ kind }: { kind: "info" | "clock" | "pin" | "globe" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="detail-icon">
      {kind === "info" && <><circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10v1" /></>}
      {kind === "clock" && <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></>}
      {kind === "pin" && <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>}
      {kind === "globe" && <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 7h14M5 17h14" /></>}
    </svg>
  );
}

export function ConsultationCTA({ email }: { email?: string }) {
  return (
    <section className="consultation" aria-labelledby="consultation-title">
      <h2 id="consultation-title">Book a Free Consultation</h2>
      <div className="consultation-stage">
        <div className="consultation-decoration" aria-hidden="true">
          <span className="decoration-tile tile-left-one">12</span>
          <span className="decoration-tile tile-left-two">24</span>
          <span className="decoration-tile tile-left-three">02</span>
          <span className="decoration-tile tile-right-one">4</span>
          <span className="decoration-tile tile-right-two">12</span>
          <span className="decoration-tile tile-right-three">08</span>
        </div>
        <div className="consultation-card">
          <span className="consultation-mark" aria-hidden="true">&lt;&gt;</span>
          <h3>Let&apos;s talk</h3>
          <p className="consultation-detail"><DetailIcon kind="info" /><span>Book me and I will never give up. Cal will never let you down. Open Source will never run around and desert you.</span></p>
          <ul className="consultation-details">
            <li><DetailIcon kind="clock" /><span>30 min</span></li>
            <li><DetailIcon kind="pin" /><span>Zoom</span></li>
            <li><DetailIcon kind="globe" /><span>Heredia / Costa Rica</span></li>
          </ul>
        </div>
      </div>
      {email ? <a className="consultation-link" href={`mailto:${email}`} aria-label="Email Bruno to discuss a free consultation">LET&apos;S TALK</a> : <span className="consultation-link" aria-disabled="true">LET&apos;S TALK<span className="sr-only"> — contact link awaiting confirmation</span></span>}
    </section>
  );
}
