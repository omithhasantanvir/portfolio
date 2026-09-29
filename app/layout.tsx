import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Omith Hasan | IT & Network Engineer',
  description: 'Portfolio of Omith Hasan — Networking, Cybersecurity, System Administration and Broadcast IT.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
