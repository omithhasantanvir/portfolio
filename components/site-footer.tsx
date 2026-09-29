import { Github, Linkedin, Mail } from 'lucide-react';

import { site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{site.name}</p>
          <p className="label label--muted">{site.role}</p>
        </div>

        <p className="site-footer__disciplines">{site.disciplines.join(' · ')}</p>

        <ul className="site-footer__links">
          <li>
            <a href={site.socials.github} target="_blank" rel="noreferrer">
              <Github size={15} aria-hidden="true" />
              GitHub
            </a>
          </li>
          <li>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={15} aria-hidden="true" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>
              <Mail size={15} aria-hidden="true" />
              Email
            </a>
          </li>
        </ul>
      </div>

      <div className="container site-footer__base">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js &amp; TypeScript</p>
      </div>
    </footer>
  );
}
