import { LazyMotion, domAnimation, m } from 'framer-motion';
import BrandCard from '../components/BrandCard';
import { clients, serviceMeta, type Client, type Service } from '../data/clients';

const accentPriority: Service[] = ['FMCG', 'Performance', 'Influencer', 'SMM'];

function getBrandAccent(client: Client) {
  const primaryService = accentPriority.find((service) => client.services.includes(service)) ?? client.services[0];
  return serviceMeta[primaryService].cssVar;
}

export default function DigitalMarketing() {
  return (
    <LazyMotion features={domAnimation}>
      <main>
        <section
          className="noise-surface border-b-[5px] border-ciel-cyan bg-ciel-primary px-4 py-10 text-ciel-cream sm:px-6 lg:px-8 lg:py-14"
          aria-labelledby="brand-grid-heading"
        >
          <div className="mx-auto max-w-[1400px]">
            <m.div
              className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
            >
              <div>
                <p className="mb-4 inline-block border-[4px] border-ciel-ink bg-ciel-blue px-3 py-2 font-display text-xs uppercase text-ciel-ink shadow-[4px_4px_0_var(--ciel-logo-purple)]">
                  Digital Marketing
                </p>
                <h1 id="brand-grid-heading" className="font-display text-[clamp(2.9rem,8vw,7.5rem)] uppercase leading-[0.82]">
                  Client Portfolio
                </h1>
              </div>
              <p className="border-[4px] border-ciel-ink bg-ciel-purple px-4 py-3 font-display text-sm uppercase text-ciel-ink shadow-[5px_5px_0_var(--ciel-logo-cyan)]">
                {clients.length} Brand Cards
              </p>
            </m.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {clients.map((client) => (
                <BrandCard key={client.id} name={client.name} services={client.services} videos={client.videos} accent={getBrandAccent(client)} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
}
