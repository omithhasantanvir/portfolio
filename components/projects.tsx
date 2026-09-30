import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { projects } from '@/lib/data';

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="project__detail">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

/** Projects / technical work, presented as case-study notes. */
export function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">04 / Projects</p>
            <h2>Technical work</h2>
            <p className="section-head__note">
              Case-study notes on systems and tooling I work with. Entries marked in progress are
              still being documented — no results are published until they can be measured.
            </p>
          </div>
        </Reveal>

        <div className="projects">
          {projects.map((project) => {
            const documented = project.status === 'documented';

            return (
              <Reveal key={project.title}>
                <article className={`project${documented ? '' : ' project--pending'}`}>
                  <header className="project__head">
                    <span className="project__index" aria-hidden="true">
                      {project.index}
                    </span>
                    <h3>{project.title}</h3>
                    {!documented && <p className="badge">Case study in progress</p>}
                  </header>

                  <p className="project__summary">{project.summary}</p>

                  {documented ? (
                    <dl className="project__details">
                      {project.problem && <Detail label="Problem" value={project.problem} />}
                      {project.solution && <Detail label="Solution" value={project.solution} />}
                      {project.role && <Detail label="Role" value={project.role} />}
                      {project.architecture && (
                        <Detail label="Architecture" value={project.architecture} />
                      )}
                      {project.outcome && <Detail label="Outcome" value={project.outcome} />}
                    </dl>
                  ) : (
                    <p className="project__pending">
                      Problem, solution, role, architecture and outcome will be documented here.
                    </p>
                  )}

                  <footer className="project__foot">
                    <ul className="chips chips--tech" aria-label={`Technologies used in ${project.title}`}>
                      {project.tech.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    {documented && project.links && (
                      <p className="project__links">
                        {project.links.caseStudy && (
                          <a href={project.links.caseStudy}>
                            View case study <ArrowUpRight size={14} aria-hidden="true" />
                          </a>
                        )}
                        {project.links.github && (
                          <a href={project.links.github} target="_blank" rel="noreferrer">
                            <Github size={14} aria-hidden="true" /> Repository
                          </a>
                        )}
                        {project.links.live && (
                          <a href={project.links.live} target="_blank" rel="noreferrer">
                            <ExternalLink size={14} aria-hidden="true" /> Live
                          </a>
                        )}
                      </p>
                    )}
                  </footer>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
