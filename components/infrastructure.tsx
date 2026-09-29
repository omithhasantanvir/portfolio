import { Reveal } from '@/components/reveal';
import { infrastructureLayers } from '@/lib/data';

/** Layered infrastructure model with an animated flow between the layers. */
export function Infrastructure() {
  return (
    <section className="section" id="infrastructure">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">05 / Approach</p>
            <h2>How I think about infrastructure</h2>
            <p className="section-head__note">
              Each layer depends on the one below it, and on having visibility into the one above.
              Diagnosing an incident means working through this stack in order.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ol className="stack">
            {infrastructureLayers.map((layer, index) => (
              <li className="stack__layer" key={layer.label}>
                <span className="stack__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="stack__label">{layer.label}</span>
                <span className="stack__note">{layer.note}</span>
                <span className="stack__flow" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
