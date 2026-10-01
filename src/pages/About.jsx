import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import WhyChooseCard from '../components/sections/WhyChooseCard';
import ContactCTA from '../components/sections/ContactCTA';
import SectionHeading from '../components/common/SectionHeading';
import CallButton from '../components/common/CallButton';
import PageSEO from '../components/common/PageSEO';
import { WHY_CHOOSE_US, SERVICES } from '../data/services';

const VALUES = [
  { title: 'Fast Response', desc: 'We respond quickly to every maintenance request in Riyadh.' },
  { title: 'Quality Workmanship', desc: 'Every job is completed professionally with attention to quality.' },
  { title: 'Affordable Pricing', desc: 'Competitive, transparent pricing with no hidden costs.' },
  { title: 'Customer Satisfaction', desc: 'We are not satisfied until our customers are satisfied.' },
];

export default function About() {
  return (
    <main>
      <PageSEO
        title="About Amana Care Maintenance | Professional Services in Riyadh"
        description="Learn about Amana Care Maintenance — a professional maintenance company providing reliable AC, electrical, plumbing, painting and general maintenance services across Riyadh."
        canonical="/about"
      />

      {/* Hero */}
      <PageHero
        title="Reliable Maintenance Services You Can Trust"
        subtitle="Amana Care Maintenance provides professional maintenance services for homes, offices and commercial properties across Riyadh, Saudi Arabia."
        gradient="from-brand-navy via-brand-dark to-blue-900"
        showRequest={true}
      />

      {/* Company Introduction */}
      <section className="section-padding bg-white" aria-labelledby="about-intro">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-badge">About Amana Care</span>
              <h2 id="about-intro" className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Amana Care Maintenance
                <span className="block text-xl text-brand-muted font-normal mt-1">أمانة كير للصيانة</span>
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-5">
                Amana Care Maintenance is a professional maintenance company based in Riyadh, Saudi Arabia. We provide comprehensive maintenance services to residential, commercial and corporate clients across Riyadh.
              </p>
              <p className="text-brand-muted leading-relaxed mb-5">
                Our team of qualified technicians specialises in AC maintenance, electrical services, plumbing, painting and general maintenance. We are committed to delivering high-quality, reliable service at affordable prices.
              </p>
              <p className="text-brand-muted leading-relaxed mb-8">
                We understand the importance of trust when allowing a maintenance team into your home or business. That is why we train our staff to be professional, respectful and tidy in all their work.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary">
                  Our Services <ArrowRight size={16} className="inline ml-1" />
                </Link>
                <CallButton variant="outline" />
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map(({ title, desc }) => (
                <div key={title} className="bg-brand-light rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={20} className="text-brand-green flex-shrink-0" aria-hidden="true" />
                    <h3 className="font-bold text-brand-dark text-sm">{title}</h3>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Amana Care */}
      <section className="section-padding bg-brand-light" aria-labelledby="why-about-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Why Choose Us"
            title="Why Choose Amana Care?"
            subtitle="Thousands of satisfied customers across Riyadh trust Amana Care for their maintenance needs."
            id="why-about-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <WhyChooseCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white" aria-labelledby="about-services-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Our Services"
            title="What We Offer"
            subtitle="A complete range of professional maintenance services for homes, offices and commercial properties in Riyadh."
            id="about-services-heading"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="bg-brand-light hover:bg-brand-blue/10 rounded-xl p-5 flex items-center gap-4 border border-gray-100 hover:border-brand-blue/30 transition-all duration-200 group"
                >
                  <div className={`${service.iconBg} ${service.iconColor} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <span className="font-semibold text-brand-dark text-sm group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ContactCTA
        title="Ready to Book a Maintenance Service?"
        subtitle="Call or WhatsApp Amana Care Maintenance in Riyadh today."
      />
    </main>
  );
}
