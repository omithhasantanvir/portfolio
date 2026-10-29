import Image from 'next/image';
import { ArrowRight, Award, Download, Github, Linkedin, Mail, MapPin, ShieldCheck } from 'lucide-react';

import { site } from '@/lib/site';

/** Hero: personal portrait, verified badge highlights, headline and primary actions. */
export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__status">
            <span className="hero__status-badge">
              <span className="hero__status-dot" aria-hidden="true" />
              {site.availability}
            </span>
            <span className="hero__location">
              <MapPin size={13} aria-hidden="true" />
              {site.location}
            </span>
          </div>

          <p className="hero__role">{site.role}</p>

          <h1 className="hero__name">
            Hi, I&apos;m <span className="hero__name-accent">{site.name}</span>
          </h1>

          <p className="hero__positioning">{site.positioning}</p>
          <p className="hero__intro">{site.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#experience">
              View Experience
              <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a className="btn btn--outline" href="#contact">
              Let&apos;s Connect
            </a>
            <a className="btn btn--ghost" href={site.cv} download="Omith-Hasan-Resume.pdf">
              <Download size={15} aria-hidden="true" />
              Download CV
            </a>
          </div>

          <ul className="hero__links" aria-label="Social and professional links">
            <li>
              <a href={site.socials.github} target="_blank" rel="noreferrer" title="GitHub">
                <Github size={16} aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                <Linkedin size={16} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={site.socials.credly} target="_blank" rel="noreferrer" title="Credly Badges">
                <Award size={16} aria-hidden="true" />
                <span>Credly (5 Badges)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} title="Email">
                <Mail size={16} aria-hidden="true" />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero-portrait">
            <div className="hero-portrait__glow" aria-hidden="true" />
            <div className="hero-portrait__frame">
              <Image
                src="/images/omith-hasan-portrait.jpg"
                alt="Portrait of Omith Hasan — IT & Network Engineer"
                width={520}
                height={620}
                className="hero-portrait__img"
                priority
              />
              <div className="hero-portrait__overlay" />

              {/* Floating verified badge tag */}
              <a
                href="#education"
                className="hero-portrait__tag hero-portrait__tag--top"
                title="View Credly Badges"
              >
                <ShieldCheck size={16} className="hero-portrait__tag-icon" aria-hidden="true" />
                <div>
                  <strong>5 Digital Badges</strong>
                  <span>Cisco &amp; Red Hat Verified</span>
                </div>
              </a>

              {/* Floating credentials pill */}
              <div className="hero-portrait__tag hero-portrait__tag--bottom">
                <Award size={16} className="hero-portrait__tag-icon" aria-hidden="true" />
                <div>
                  <strong>CCNA · RHCSA · CEHv12</strong>
                  <span>Networking &amp; Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
