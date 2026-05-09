import { LazyMotion, domAnimation, m } from 'framer-motion';
import EmbedProjectCard from '../components/EmbedProjectCard';
import { productionProjects } from '../data/mediaProjects';

export default function Production() {
  return (
    <LazyMotion features={domAnimation}>
      <main>
        <section className="noise-surface bg-ciel-primary px-4 py-10 text-ciel-cream sm:px-6 lg:px-8 lg:py-14" aria-labelledby="production-heading">
          <div className="mx-auto max-w-[1400px]">
            <m.div
              className="mb-10 flex flex-col gap-4 border-b-[5px] border-ciel-cyan pb-8 lg:flex-row lg:items-end"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
            >
              <div>
                <p className="mb-4 inline-block border-[4px] border-ciel-ink bg-ciel-blue px-3 py-2 font-display text-xs uppercase text-ciel-ink shadow-[4px_4px_0_var(--ciel-logo-purple)]">
                  Production
                </p>
                <h1 id="production-heading" className="font-display text-[clamp(2.8rem,8vw,7.5rem)] uppercase leading-[0.82]">
                  Films
                </h1>
              </div>
            </m.div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {productionProjects.map((project, index) => (
                <EmbedProjectCard key={project.id} project={project} index={index} accent="var(--ciel-logo-purple)" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
}