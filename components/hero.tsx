import Image from 'next/image';
import {
  ArrowRight,
  Award,
  BookOpen,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Radio,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { site } from '@/lib/site';

/** Hero Bento Grid: personal identity, portrait, verified credentials & quick stats. */
export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="bento-hero">
          {/* Main Introduction Bento Card */}
          <div className="bento-card bento-card--hero-main">
            <div className="bento-card__badge-row">
              <span className="status-pill">
                <span className="status-pill__dot" aria-hidden="true" />
                {site.availability}
              </span>
              <span className="location-pill">
                <MapPin size={13} aria-hidden="true" />
                {site.location}
              </span>
            </div>

            <div className="hero-intro-group">
              <p className="hero-eyebrow">
                <Sparkles size={14} className="hero-eyebrow__icon" aria-hidden="true" />
                {site.role}
              </p>
              <h1 className="hero-title">
                Hi, I&apos;m <span className="gradient-text">{site.name}</span>
              </h1>
              <p className="hero-tagline">{site.positioning}</p>
              <p className="hero-bio">{site.intro}</p>
            </div>

            <div className="hero-actions-row">
              <a className="btn btn--primary" href="#experience">
                View Experience
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a className="btn btn--outline" href="#contact">
                Let&apos;s Connect
              </a>
              <a className="btn btn--ghost" href={site.cv} download="Omith-Hasan-Resume.pdf">
                <Download size={15} aria-hidden="true" />
                Resume
              </a>
            </div>

            <div className="hero-socials-row">
              <a
                className="social-pill"
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <Github size={15} aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                className="social-pill"
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <Linkedin size={15} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                className="social-pill social-pill--credly"
                href={site.socials.credly}
                target="_blank"
                rel="noreferrer"
                title="Credly Profile"
              >
                <Award size={15} aria-hidden="true" />
                <span>Credly (5 Badges)</span>
              </a>
              <a className="social-pill" href={`mailto:${site.email}`} title="Email">
                <Mail size={15} aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Portrait Bento Card */}
          <div className="bento-card bento-card--hero-portrait">
            <div className="portrait-wrapper">
              <Image
                src="/images/omith-hasan-portrait.jpg"
                alt="Omith Hasan — IT & Network Engineer"
                width={520}
                height={620}
                priority
                className="portrait-img"
              />
              <div className="portrait-glass-overlay" />

              {/* Floating verified badge tag */}
              <a
                href="#education"
                className="floating-badge floating-badge--top"
                title="View Credly Badges"
              >
                <ShieldCheck size={16} className="floating-badge__icon" aria-hidden="true" />
                <div>
                  <strong>5 Digital Badges</strong>
                  <span>Cisco &amp; Red Hat Verified</span>
                </div>
              </a>

              {/* Floating credentials pill */}
              <div className="floating-badge floating-badge--bottom">
                <Award size={16} className="floating-badge__icon" aria-hidden="true" />
                <div>
                  <strong>CCNA · RHCSA · CEHv12</strong>
                  <span>Networking &amp; Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bento Metric 1: Verified Badges */}
          <div className="bento-card bento-card--metric">
            <div className="metric-icon metric-icon--cyan">
              <ShieldCheck size={20} aria-hidden="true" />
            </div>
            <div className="metric-body">
              <div className="metric-value">5 Verified Badges</div>
              <div className="metric-label">Credly Digital Credentials</div>
              <a href="#education" className="metric-link">
                View Badges <ArrowRight size={12} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Bottom Bento Metric 2: Academic Foundation */}
          <div className="bento-card bento-card--metric">
            <div className="metric-icon metric-icon--indigo">
              <BookOpen size={20} aria-hidden="true" />
            </div>
            <div className="metric-body">
              <div className="metric-value">B.Sc. Engineering</div>
              <div className="metric-label">Computer Engineering · IUBAT</div>
              <span className="metric-meta">Faculty of Engineering</span>
            </div>
          </div>

          {/* Bottom Bento Metric 3: Core Disciplines */}
          <div className="bento-card bento-card--metric">
            <div className="metric-icon metric-icon--violet">
              <Award size={20} aria-hidden="true" />
            </div>
            <div className="metric-body">
              <div className="metric-value">4 Specializations</div>
              <div className="metric-label">Core Technical Stack</div>
              <span className="metric-meta">Network · Security · Linux · AD</span>
            </div>
          </div>

          {/* Bottom Bento Metric 4: Broadcast IT */}
          <div className="bento-card bento-card--metric">
            <div className="metric-icon metric-icon--emerald">
              <Radio size={20} aria-hidden="true" />
            </div>
            <div className="metric-body">
              <div className="metric-value">24/7 Operations</div>
              <div className="metric-label">Broadcast IT &amp; NOC</div>
              <span className="metric-meta">Zero-Downtime Reliability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
