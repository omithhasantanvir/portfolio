import { Reveal } from '@/components/reveal';
import { expertise } from '@/lib/data';

/** Technical expertise, grouped by discipline. */
export function Expertise() {
  return (
    <section className="section section--alt" id="expertise">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">02 / Expertise</p>
            <h2>Technical expertise</h2>
            <p className="section-head__note">
              Grouped by discipline — the areas I configure, administer, monitor and troubleshoot.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="expertise">
            {expertise.map((group, index) => (
              <article className="expertise__group" key={group.id}>
                <header className="expertise__head">
                  <p className="label label--muted">{String(index + 1).padStart(2, '0')}</p>
                  <h3>{group.title}</h3>
                  <p className="expertise__summary">{group.summary}</p>
                </header>
                <ul className="expertise__items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
