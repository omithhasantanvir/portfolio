/**
 * Light / dark theme toggle. Persists to localStorage and respects
 * prefers-color-scheme on first visit. No flash — theme is set
 * synchronously by an inline script in layout.tsx.
 */
'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const saved = document.documentElement.dataset.theme;
    if (saved === 'light' || saved === 'dark') return saved;
  }
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem('omith-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  }
  return 'dark';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage.setItem('omith-theme', theme);
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  }, [theme, mounted]);

  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(next)}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {mounted && theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      </span>
      <span className="theme-toggle__label">{mounted ? next : 'theme'}</span>
    </button>
  );
}
