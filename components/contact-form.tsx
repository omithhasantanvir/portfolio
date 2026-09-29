'use client';

import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';

import { site } from '@/lib/site';

type Status = 'idle' | 'opening' | 'error';

/**
 * Simple, backend-free contact form: it validates the input and hands the
 * message to the visitor's email client. Nothing is stored or submitted to a
 * third party.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      setFeedback('Please add your name, email address and a short message.');
      return;
    }

    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus('opening');
    setFeedback(`Opening your email app with the message ready to send to ${site.email}.`);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={5} required />
      </div>

      <button className="btn btn--primary" type="submit">
        <Send size={16} aria-hidden="true" />
        Send Message
      </button>

      <p className={`contact-form__status${status === 'error' ? ' is-error' : ''}`} role="status" aria-live="polite">
        {status === 'idle'
          ? 'This form opens your email app — nothing is stored on this site.'
          : feedback}
      </p>
    </form>
  );
}
