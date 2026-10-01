import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, CheckCircle2, Wrench, Zap, Droplets, Snowflake, PaintBucket, Sparkles } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ServiceCard from '../components/sections/ServiceCard';
import WhyChooseCard from '../components/sections/WhyChooseCard';
import TestimonialCard from '../components/sections/TestimonialCard';
import ContactCTA from '../components/sections/ContactCTA';
import SectionHeading from '../components/common/SectionHeading';
import CallButton from '../components/common/CallButton';
import WhatsAppButton from '../components/common/WhatsAppButton';
import RequestServiceButton from '../components/common/RequestServiceButton';
import { SERVICES, WHY_CHOOSE_US } from '../data/services';
import { TESTIMONIALS } from '../data/testimonials';
import PageSEO from '../components/common/PageSEO';
import heroImg from '../assets/images/hero/hero-home.png';

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Contact Us',
    description: 'Call or WhatsApp 0595304358 to reach our maintenance team.',
    color: 'bg-brand-navy',
  },
  {
    step: '02',
    title: 'Tell Us What You Need',
    description: 'Share the maintenance issue or service required and we will advise you.',
    color: 'bg-brand-blue',
  },
  {
    step: '03',
    title: 'Get Professional Service',
    description: 'Our qualified team handles the required maintenance service for you.',
    color: 'bg-brand-green',
  },
];

export default function Home() {

  // Gallery preview items (6)
  const galleryPreview = [
    { gradient: 'from-blue-800 to-brand-navy', Icon: Snowflake, label: 'AC Service' },
    { gradient: 'from-yellow-700 to-orange-800', Icon: Zap, label: 'Electrical Work' },
    { gradient: 'from-cyan-800 to-brand-navy', Icon: Droplets, label: 'Plumbing' },
    { gradient: 'from-purple-800 to-brand-navy', Icon: PaintBucket, label: 'Painting' },
    { gradient: 'from-teal-800 to-brand-navy', Icon: Sparkles, label: 'Cleaning' },
    { gradient: 'from-green-800 to-brand-navy', Icon: Wrench, label: 'Maintenance' },
  ];

  return (
    <main>
      <PageSEO
        title="Amana Care Maintenance | Professional Maintenance Services in Riyadh"
        description="Amana Care Maintenance — Professional AC, electrical, plumbing, painting and general maintenance services in Riyadh, Saudi Arabia. Call 0595304358."
        canonical="/"
      />
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 'calc(100vh - 4rem)' }}
        aria-label="Hero section"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Amana Care Maintenance professional technicians in Riyadh"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" aria-hidden="true" />
        </div>

        {/* Decorative */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-full rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ minHeight: 'calc(100vh - 4rem)' }}>
          <div className="py-20 lg:py-28 max-w-3xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <MapPin size={14} className="text-brand-orange" aria-hidden="true" />
              <span>Serving Riyadh, Saudi Arabia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional Maintenance Services in{' '}
              <span className="text-brand-orange">Riyadh</span>
            </h1>

            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Reliable, Fast &amp; Professional Home, Office and Commercial Maintenance Services in Riyadh, Saudi Arabia.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Fast Response', 'Quality Work', 'Affordable Prices'].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-white/80 text-sm">
                  <CheckCircle2 size={14} className="text-brand-green" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <CallButton size="lg" variant="white" />
              <WhatsAppButton size="lg" variant="outline-white" />
              <RequestServiceButton size="lg" variant="outline-white" />
            </div>

            {/* Phone number */}
            <div className="mt-6">
              <a href="tel:0595304358" className="text-white/70 hover:text-white text-sm transition-colors font-medium">
                📞 0595304358
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="services-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Our Services"
            title="Complete Maintenance Services"
            subtitle="Professional maintenance services for homes, offices and commercial properties across Riyadh."
            id="services-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services <ArrowRight size={16} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────── */}
      <section className="section-padding bg-brand-light" aria-labelledby="why-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Why Choose Us"
            title="Why Choose Amana Care?"
            subtitle="We are committed to delivering reliable, professional maintenance services across Riyadh."
            id="why-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <WhyChooseCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About Intro ──────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="about-intro-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="section-badge">About Us</span>
              <h2 id="about-intro-heading" className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Reliable Maintenance Services You Can Trust
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-6">
                Amana Care Maintenance provides professional maintenance services for homes, offices and commercial properties across Riyadh, Saudi Arabia.
              </p>
              <p className="text-brand-muted leading-relaxed mb-8">
                Our experienced team of technicians delivers fast, reliable and affordable maintenance solutions — from AC servicing and electrical repairs to plumbing, painting and general maintenance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
                <CallButton variant="outline" />
              </div>
            </div>

            {/* Visual Card */}
            <div className="bg-brand-light rounded-2xl p-8 border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Fast Response', icon: '⚡', color: 'bg-yellow-50 text-yellow-700' },
                  { label: 'Quality Work', icon: '✅', color: 'bg-green-50 text-green-700' },
                  { label: 'Affordable', icon: '💰', color: 'bg-blue-50 text-blue-700' },
                  { label: 'Professional', icon: '👷', color: 'bg-purple-50 text-purple-700' },
                ].map(({ label, icon, color }) => (
                  <div key={label} className={`${color} rounded-xl p-5 flex flex-col items-center text-center gap-2`}>
                    <span className="text-2xl" aria-hidden="true">{icon}</span>
                    <span className="font-semibold text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-brand-navy rounded-xl text-white text-center">
                <div className="text-2xl font-bold">0595304358</div>
                <div className="text-white/70 text-sm mt-1">Call or WhatsApp anytime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Coverage ─────────────────────────────────── */}
      <section className="section-padding bg-brand-navy" aria-labelledby="coverage-heading">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-full mb-4">
            <MapPin size={14} className="text-brand-orange" />
            Service Coverage
          </span>
          <h2 id="coverage-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Serving All Areas Across Riyadh
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Amana Care Maintenance provides professional services across Riyadh, Saudi Arabia. Call us to confirm availability in your area.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CallButton size="lg" variant="white" />
            <WhatsAppButton size="lg" variant="outline-white" />
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="how-heading">
        <div className="container-custom">
          <SectionHeading
            badge="How It Works"
            title="Simple & Fast Service"
            subtitle="Getting professional maintenance services in Riyadh is easy with Amana Care."
            id="how-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gray-200" aria-hidden="true" />
            {HOW_IT_WORKS.map(({ step, title, description, color }) => (
              <div key={step} className="text-center relative">
                <div className={`w-20 h-20 ${color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="text-white font-bold text-2xl">{step}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
                <p className="text-brand-muted leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section-padding bg-brand-light" aria-labelledby="reviews-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Customer Reviews"
            title="What Our Customers Say"
            subtitle="Trusted by homeowners, businesses and commercial clients across Riyadh."
            id="reviews-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ───────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="gallery-preview-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Our Work"
            title="Service Gallery"
            subtitle="Representative examples of our professional maintenance services across Riyadh."
            id="gallery-preview-heading"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {galleryPreview.map(({ gradient, Icon, label }) => (
              <div
                key={label}
                className={`aspect-square rounded-xl bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2 text-white/80`}
                aria-label={`${label} — Service Example`}
              >
                <Icon size={36} className="opacity-70" aria-hidden="true" />
                <span className="text-sm font-medium">{label}</span>
                <span className="text-xs opacity-50">Service Example</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery <ArrowRight size={16} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <ContactCTA />

      {/* ── Contact Info ─────────────────────────────────────── */}
      <section className="section-padding bg-brand-light" aria-labelledby="contact-info-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <Phone size={32} className="text-brand-navy mx-auto mb-4" aria-hidden="true" />
              <h3 id="contact-info-heading" className="font-bold text-brand-dark mb-2">Call Us</h3>
              <a href="tel:0595304358" className="text-brand-blue text-xl font-bold hover:text-brand-navy transition-colors">
                0595304358
              </a>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="w-8 h-8 mx-auto mb-4 text-brand-green" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="font-bold text-brand-dark mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/966595304358"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green text-xl font-bold hover:text-green-700 transition-colors"
              >
                0595304358
              </a>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <MapPin size={32} className="text-brand-orange mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-bold text-brand-dark mb-2">Service Area</h3>
              <p className="text-brand-muted font-semibold">Riyadh, Saudi Arabia</p>
              <p className="text-brand-muted text-sm mt-1">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
