import { FileText, Github, Linkedin, Mail, Phone } from 'lucide-react';

import { ContactForm } from '@/components/contact-form';
import { Reveal } from '@/components/reveal';
import { site } from '@/lib/site';

/** Contact details plus a simple, honest contact form. */
export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-grid__copy">
            <p className="label">08 / Contact</p>
            <h2>Have a technical challenge?</h2>
            <p className="lede">
              Open to opportunities, technical collaborations, infrastructure projects, and
              conversations around networking, cybersecurity and IT systems.
            </p>

            <ul className="contact-list">
              <li>
                <Mail size={17} aria-hidden="true" />
                <span>
                  <em>Email</em>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </li>
              <li>
                <Phone size={17} aria-hidden="true" />
                <span>
                  <em>Phone</em>
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                </span>
              </li>
            </ul>

            <div className="contact-grid__actions">
              <a className="btn btn--ghost" href={site.socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a className="btn btn--ghost" href={site.socials.github} target="_blank" rel="noreferrer">
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
              <a className="btn btn--ghost" href={site.cv} download="Omith-Hasan-Resume.pdf">
                <FileText size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-grid__form" delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
