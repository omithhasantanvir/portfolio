import { Reveal } from '@/components/reveal';
import { experience } from '@/lib/data';

/** Professional experience as a vertical engineering timeline. */
export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">03 / Experience</p>
            <h2>Professional experience</h2>
          </div>
        </Reveal>

        <ol className="timeline">
          {experience.map((job, index) => (
            <li className="timeline__item" key={job.company}>
              <Reveal delay={index * 70}>
                <article className="job">
                  <div className="job__meta">
                    <p className="label label--muted">{job.index}</p>
                    <p className="job__period">{job.period}</p>
                  </div>
                  <div className="job__body">
                    <h3>{job.role}</h3>
                    <p className="job__company">{job.company}</p>
                    <p className="job__description">{job.description}</p>
                    <ul className="chips" aria-label={`Areas involved at ${job.company}`}>
                      {job.areas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
