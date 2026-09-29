import { Reveal } from '@/components/reveal';
import { focusAreas } from '@/lib/data';

/** "Currently focused on" — a clean grid of active areas. */
export function FocusAreas() {
  return (
    <section className="section" id="focus">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">07 / Now</p>
            <h2>Currently focused on</h2>
          </div>
        </Reveal>

        <Reveal>
          <ul className="focus">
            {focusAreas.map((area) => (
              <li className="focus__item" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="focus__rule" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
