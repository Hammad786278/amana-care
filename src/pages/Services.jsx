import PageHero from '../components/sections/PageHero';
import ServiceCard from '../components/sections/ServiceCard';
import ContactCTA from '../components/sections/ContactCTA';
import SectionHeading from '../components/common/SectionHeading';
import CallButton from '../components/common/CallButton';
import WhatsAppButton from '../components/common/WhatsAppButton';
import RequestServiceButton from '../components/common/RequestServiceButton';
import PageSEO from '../components/common/PageSEO';
import { SERVICES } from '../data/services';

export default function Services() {
  return (
    <main>
      <PageSEO
        title="Maintenance Services in Riyadh"
        description="Complete maintenance services in Riyadh — AC maintenance, electrical, plumbing, painting, cleaning and general maintenance by Amana Care. Call 0595304358."
        canonical="/services"
      />

      {/* Hero */}
      <PageHero
        title="Complete Maintenance Services in Riyadh"
        subtitle="Professional AC, electrical, plumbing, painting, cleaning and general maintenance services for homes, offices and commercial properties across Riyadh."
        gradient="from-brand-navy via-brand-dark to-brand-blue"
        showRequest={true}
      />

      {/* Services Grid */}
      <section className="section-padding bg-white" aria-labelledby="services-main-heading">
        <div className="container-custom">
          <SectionHeading
            badge="All Services"
            title="Our Professional Services"
            subtitle="Reliable and affordable maintenance services for residential, commercial and corporate clients in Riyadh."
            id="services-main-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 bg-brand-light border-y border-gray-100" aria-labelledby="services-cta-heading">
        <div className="container-custom text-center">
          <h2 id="services-cta-heading" className="text-3xl font-bold text-brand-dark mb-4">
            Need Maintenance Help?
          </h2>
          <p className="text-brand-muted text-lg mb-8">
            Call or WhatsApp us today for any maintenance requirement in Riyadh.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <CallButton size="lg" />
            <WhatsAppButton size="lg" />
            <RequestServiceButton size="lg" />
          </div>
          <a href="tel:0595304358" className="text-brand-navy text-xl font-bold hover:underline">
            0595304358
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <ContactCTA />
    </main>
  );
}
