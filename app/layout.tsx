import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { ScrollProgress } from '@/components/scroll-progress';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { site } from '@/lib/site';
import './globals.css';

const sans = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500'],
});

const description =
  'Omith Hasan is an IT & Network Engineer focused on networking, cybersecurity, system administration, broadcast IT and infrastructure reliability.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    'Omith Hasan',
    'IT engineer',
    'network engineer',
    'network administration',
    'cybersecurity',
    'system administration',
    'broadcast IT',
    'infrastructure monitoring',
    'IT automation',
    'Dhaka Bangladesh',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  category: 'technology',
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} | ${site.role}`,
    description,
    locale: 'en_US',
    images: [
      {
        url: '/images/omith-hasan.jpg',
        width: 1402,
        height: 1122,
        alt: `Portrait of ${site.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.role}`,
    description,
    images: ['/images/omith-hasan.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f6f9' },
    { media: '(prefers-color-scheme: dark)', color: '#07090c' },
  ],
  colorScheme: 'dark light',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description,
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  sameAs: [site.socials.github, site.socials.linkedin],
  knowsAbout: [
    'Computer networking',
    'Network security',
    'Cybersecurity',
    'System administration',
    'Broadcast IT systems',
    'Infrastructure monitoring',
    'IT automation',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'International University of Business Agriculture and Technology (IUBAT)',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${site.name} — ${site.role}`,
  url: site.url,
  description,
  inLanguage: 'en',
  publisher: { '@type': 'Person', name: site.name },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Set theme before paint — prevents dark/light flash on reload. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('omith-theme');var t=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema]) }}
        />
      </body>
    </html>
  );
}

