import { LazyMotion, domAnimation } from 'framer-motion';
import TechProjectCard from '../components/TechProjectCard';
import { techCategories, techProjects } from '../data/techProjects';

function getCategoryAccent(category: string) {
  return category === 'Website Development' ? 'var(--ciel-logo-cyan)' : 'var(--ciel-logo-purple)';
}

export default function Tech() {
  return (
    <LazyMotion features={domAnimation}>
      <main>
        <section className="noise-surface bg-ciel-primary px-4 py-10 text-ciel-cream sm:px-6 lg:px-8 lg:py-14" aria-labelledby="tech-heading">
          <div className="mx-auto max-w-[1400px]">
            <h1 id="tech-heading" className="sr-only">
              Tech
            </h1>
            <div className="grid gap-10">
              {techCategories.map((category) => {
                const categoryProjects = techProjects.filter((project) => project.category === category);

                return (
                  <section key={category} aria-labelledby={`${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-heading`}>
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end">
                      <h2
                        id={`${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-heading`}
                        className="font-display text-[clamp(2.3rem,6vw,5.5rem)] uppercase leading-[0.84]"
                      >
                        {category}
                      </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                      {categoryProjects.map((project, index) => (
                        <TechProjectCard key={project.id} project={project} index={index} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
}