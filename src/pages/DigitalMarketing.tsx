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
            </m.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {clients.map((client, i) =>
                client.caseStudy ? (
                  <m.article
                    key={client.id}
                    className="flex flex-col border-[4px] border-ciel-ink bg-ciel-primary p-6 shadow-brutal text-ciel-cream"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                  >
                    <p className="mb-1 font-display text-xs uppercase text-ciel-purple">{client.caseStudy.category}</p>
                    <h3 className="mb-2 font-display text-[clamp(1.6rem,3vw,2.2rem)] uppercase leading-[0.9] text-ciel-cream">
                      {client.name}
                    </h3>
                    <p className="mb-5 text-sm leading-snug text-ciel-cream/70">{client.caseStudy.headline}</p>

                    <div className="mb-5 border-[4px] border-ciel-ink bg-ciel-purple px-4 py-3 shadow-[4px_4px_0_var(--ciel-ink)]">
                      <p className="font-display text-[clamp(2.2rem,5vw,3.5rem)] uppercase leading-none text-ciel-ink">
                        {client.caseStudy.roas}x ROAS
                      </p>
                      <p className="mt-1 font-display text-xs uppercase text-ciel-ink">
                        Delivered Within {client.caseStudy.days} Days
                      </p>
                    </div>

                    <div className="mb-5">
                      <p className="mb-2 font-display text-xs uppercase text-ciel-cream/50">What We Did</p>
                      <div className="flex flex-wrap gap-2">
                        {client.caseStudy.whatWeDid.map((item) => (
                          <span
                            key={item}
                            className="border-[2px] border-ciel-ink bg-ciel-cream px-2 py-1 font-display text-[10px] uppercase text-ciel-ink"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto border-t-[3px] border-ciel-ink/30 pt-4">
                      <p className="font-display text-xs uppercase text-ciel-cream/50">Result</p>
                      <p className="mt-1 text-sm leading-snug text-ciel-cream/80">{client.caseStudy.result}</p>
                    </div>
                  </m.article>
                ) : (
                  <BrandCard
                    key={client.id}
                    name={client.name}
                    services={client.services}
                    videos={client.videos}
                    accent={getBrandAccent(client)}
                    logo={client.logo}
                    website={client.website}
                  />
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
}
