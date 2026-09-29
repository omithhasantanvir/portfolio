/**
 * Single source of truth for identity, contact details and navigation.
 * Verified details only — update the TODOs before publishing.
 */
export const site = {
  name: 'Omith Hasan',
  role: 'IT & Network Engineer',
  url: 'https://omith-hasan.vercel.app',
  email: 'omithhasan940@gmail.com',
  phone: '+880 1740 721194',
  phoneHref: '+8801740721194',
  location: 'Dhaka, Bangladesh',
  disciplines: ['Networking', 'Security', 'Systems', 'Broadcast IT'],
  positioning:
    'Building reliable infrastructure, secure networks, and resilient systems for real-world operations.',
  intro:
    'I’m an IT professional focused on Networking, Cybersecurity, System Administration and Broadcast IT. I solve infrastructure problems, automate repetitive work, and help keep critical systems reliable.',
  availability: 'Available for opportunities',
  cv: '/cv/omith-hasan-resume.pdf',
  cvPage: '/cv',
  socials: {
    github: 'https://github.com/omithhasantanvir',
    // TODO: confirm this is your LinkedIn profile, or replace it with your real URL.
    linkedin: 'https://www.linkedin.com/in/omithhasantanvir',
  },
  nav: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export const navSections = site.nav
  .filter((item) => item.href.startsWith('#'))
  .map((item) => item.href.slice(1));
