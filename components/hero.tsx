import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';

import { site } from '@/lib/site';
import { Topology } from '@/components/topology';

/** Hero: identity, positioning, primary actions and the infrastructure visual. */
export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="label hero__label">{site.role}</p>

          <h1 className="hero__name">{site.name}</h1>

          <p className="hero__positioning">{site.positioning}</p>
          <p className="hero__intro">{site.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="/#experience">
              View Experience
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn--outline" href="/#contact">
              Let&apos;s Connect
            </a>
          </div>

          <ul className="hero__links">
            <li>
              <a href={site.socials.github} target="_blank" rel="noreferrer">
                <Github size={15} aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={15} aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <Mail size={15} aria-hidden="true" /> Email
              </a>
            </li>
            <li>
              <a href={site.cv}>
                <FileText size={15} aria-hidden="true" /> CV / Resume
              </a>
            </li>
          </ul>

          <p className="availability">
            <span className="availability__dot" aria-hidden="true" />
            {site.availability}
            <span className="availability__meta">
              <MapPin size={13} aria-hidden="true" /> {site.location}
            </span>
          </p>
        </div>

        <div className="hero__visual">
          <div className="visual-frame">
            <div className="visual-frame__bar">
              <span className="visual-frame__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="visual-frame__title">network · path</span>
            </div>
            <Topology />
            <p className="visual-frame__caption">
              Traffic path — ingress, security inspection, distribution, monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
