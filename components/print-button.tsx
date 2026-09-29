'use client';

import { Printer } from 'lucide-react';

/** Opens the browser print dialog so the CV page can be saved as a PDF. */
export function PrintButton() {
  return (
    <button className="btn btn--outline btn--sm no-print" type="button" onClick={() => window.print()}>
      <Printer size={15} aria-hidden="true" />
      Print / Save as PDF
    </button>
  );
}
