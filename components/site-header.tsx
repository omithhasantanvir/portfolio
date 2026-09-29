'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

import { navSections, site } from '@/lib/site';

/**
 * Sticky navigation. Shrinks subtly after scrolling, highlights the section in
 * view, and turns into a full-width panel on small screens.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActive(current.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-condensed' : ''}`}>
      <div className="container site-header__inner">
        <a className="brand" href="/#top" onClick={close}>
          <span className="brand__mark">
            <Image src="/images/omith-hasan-avatar.jpg" alt="" width={756} height={944} priority />
          </span>
          <span className="brand__text">
            <strong>{site.name}</strong>
            <em>{site.role}</em>
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {site.nav.map((item) => (
              <li key={item.label}>
                <a
                  className={`nav__link${active === item.href.slice(1) ? ' is-active' : ''}`}
                  href={`/${item.href}`}
                  aria-current={active === item.href.slice(1) ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="btn btn--ghost btn--sm" href={site.cv}>
            <Download size={15} aria-hidden="true" />
            Download CV
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav${open ? ' is-open' : ''}`} id="mobile-nav" hidden={!open}>
        <ul>
          {site.nav.map((item) => (
            <li key={item.label}>
              <a href={`/${item.href}`} onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav__meta">
          <a href={`mailto:${site.email}`} onClick={close}>
            <Mail size={16} aria-hidden="true" /> {site.email}
          </a>
          <a href={site.socials.github} onClick={close} rel="noreferrer" target="_blank">
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          <a href={site.socials.linkedin} onClick={close} rel="noreferrer" target="_blank">
            <Linkedin size={16} aria-hidden="true" /> LinkedIn
          </a>
          <a href={site.cv} onClick={close}>
            <Download size={16} aria-hidden="true" /> Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
