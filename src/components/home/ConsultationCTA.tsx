import { InfoIcon, ClockIcon, LocationIcon, GlobeIcon } from "@/components/icons";

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
          <p className="consultation-detail"><InfoIcon className="detail-icon" /><span>Book me and I will never give up. Cal will never let you down. Open Source will never run around and desert you.</span></p>
          <ul className="consultation-details">
            <li><ClockIcon className="detail-icon" /><span>30 min</span></li>
            <li><LocationIcon className="detail-icon" /><span>Zoom</span></li>
            <li><GlobeIcon className="detail-icon" /><span>Heredia / Costa Rica</span></li>
          </ul>
        </div>
      </div>
      {email ? <a className="consultation-link" href={`mailto:${email}`} aria-label="Email Bruno to discuss a free consultation">LET&apos;S TALK</a> : <span className="consultation-link" aria-disabled="true">LET&apos;S TALK<span className="sr-only"> — contact link awaiting confirmation</span></span>}
    </section>
  );
}
