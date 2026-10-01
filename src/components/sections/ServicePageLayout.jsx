import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ContactCTA from '../sections/ContactCTA';
import SectionHeading from '../common/SectionHeading';
import CallButton from '../common/CallButton';
import WhatsAppButton from '../common/WhatsAppButton';
import RequestServiceButton from '../common/RequestServiceButton';
import { SERVICES } from '../../data/services';

/**
 * ServicePageLayout — Shared layout for all individual service pages.
 * Provides consistent structure: hero, overview, services list,
 * benefits, problems, why us, process, CTA, related services.
 */
export default function ServicePageLayout({ service, image }) {
  const Icon = service.icon;
  const related = SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 'calc(100vh - 4rem)' }}
        aria-labelledby={`${service.id}-hero-heading`}
      >
        {/* Background */}
        {image ? (
          <>
            <div className="absolute inset-0">
              <img src={image} alt={`${service.title} in Riyadh`} className="w-full h-full object-cover" loading="eager" />
            </div>
            <div className="hero-overlay" aria-hidden="true" />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${service.heroGradient}`} aria-hidden="true" />
        )}

        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-white rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ minHeight: 'calc(100vh - 4rem)' }}>
          <div className="py-20 max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Icon size={14} aria-hidden="true" />
              <span>{service.title}</span>
            </div>

            <h1 id={`${service.id}-hero-heading`} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {service.heroTitle}
            </h1>

            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              {service.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <CallButton size="lg" variant="white" />
              <WhatsAppButton size="lg" variant="outline-white" />
              <Link
                to={`/request-service?service=${encodeURIComponent(service.title)}`}
                className="btn-outline-white inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                {service.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Overview ─────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby={`${service.id}-overview`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Overview */}
            <div>
              <span className="section-badge">Overview</span>
              <h2 id={`${service.id}-overview`} className="text-3xl font-bold text-brand-dark mb-5 leading-tight">
                {service.title} in Riyadh
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-6">
                {service.shortDescription}
              </p>
              <p className="text-brand-muted leading-relaxed mb-6">
                Our experienced technicians provide professional {service.title.toLowerCase()} services for homes, offices and commercial properties across Riyadh, Saudi Arabia. We use quality materials and follow professional standards to ensure excellent results.
              </p>
              <div className="flex flex-wrap gap-3">
                <CallButton />
                <WhatsAppButton />
              </div>
            </div>

            {/* Services List */}
            <div className="bg-brand-light rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-brand-dark mb-4 text-lg">Services We Provide</h3>
              <ul className="space-y-3" role="list">
                {service.services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-brand-dark">
                    <CheckCircle2 size={18} className="text-brand-green flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  to={`/request-service?service=${encodeURIComponent(service.title)}`}
                  className="btn-primary w-full justify-center"
                >
                  {service.ctaLabel} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits + Problems ──────────────────────── */}
      <section className="section-padding bg-brand-light" aria-labelledby={`${service.id}-benefits`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 id={`${service.id}-benefits`} className="text-xl font-bold text-brand-dark mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-brand-green" />
                </span>
                Why Choose Our {service.title}
              </h2>
              <ul className="space-y-3" role="list">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-brand-muted text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Problems */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-brand-dark mb-5 flex items-center gap-2">
                <span className="w-8 h-8 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                  <Icon size={18} className="text-brand-orange" />
                </span>
                Common Problems We Solve
              </h3>
              <ul className="space-y-3" role="list">
                {service.problems.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-brand-muted text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Amana Care ───────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby={`${service.id}-why`}>
        <div className="container-custom">
          <SectionHeading
            badge="Why Amana Care"
            title={`Why Choose Amana Care for ${service.title}?`}
            subtitle={`Professional ${service.title.toLowerCase()} by a trusted Riyadh maintenance company.`}
            id={`${service.id}-why`}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: '⚡', label: 'Fast Response', desc: 'Quick response across Riyadh' },
              { icon: '✅', label: 'Quality Work', desc: 'Professional, careful workmanship' },
              { icon: '💰', label: 'Affordable', desc: 'Competitive, transparent pricing' },
              { icon: '👷', label: 'Qualified Team', desc: 'Experienced technicians' },
              { icon: '🔧', label: 'Full Service', desc: 'Complete maintenance solutions' },
              { icon: '📍', label: 'Riyadh Coverage', desc: 'Serving all Riyadh areas' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="bg-brand-light rounded-xl p-5 border border-gray-100 text-center">
                <span className="text-2xl block mb-2" aria-hidden="true">{icon}</span>
                <h3 className="font-bold text-brand-dark text-sm mb-1">{label}</h3>
                <p className="text-brand-muted text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────── */}
      <section className="section-padding bg-brand-light" aria-labelledby={`${service.id}-process`}>
        <div className="container-custom">
          <SectionHeading
            badge="How It Works"
            title="Our Service Process"
            id={`${service.id}-process`}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.process.map(({ step, title, description }) => (
              <div key={step} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step}</span>
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ─────────────────────────────── */}
      <section className="py-12 bg-brand-navy" aria-labelledby={`${service.id}-mid-cta`}>
        <div className="container-custom text-center">
          <h2 id={`${service.id}-mid-cta`} className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need {service.title} in Riyadh?
          </h2>
          <p className="text-white/80 mb-6">Call or WhatsApp Amana Care Maintenance today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CallButton size="lg" variant="white" />
            <WhatsAppButton size="lg" variant="outline-white" />
            <Link
              to={`/request-service?service=${encodeURIComponent(service.title)}`}
              className="btn-outline-white inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              {service.ctaLabel}
            </Link>
          </div>
          <a href="tel:0595304358" className="block mt-4 text-white/70 font-medium hover:text-white transition-colors">
            0595304358
          </a>
        </div>
      </section>

      {/* ── Related Services ─────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby={`${service.id}-related`}>
        <div className="container-custom">
          <SectionHeading
            badge="Related Services"
            title="Other Services We Offer"
            id={`${service.id}-related`}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => {
              const RelIcon = rel.icon;
              return (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="bg-brand-light rounded-xl p-6 border border-gray-100 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-200 group"
                >
                  <div className={`${rel.iconBg} ${rel.iconColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <RelIcon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-3">
                    {rel.shortDescription}
                  </p>
                  <span className="text-brand-blue text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Service <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────── */}
      <ContactCTA
        title={`Need ${service.title} in Riyadh?`}
        subtitle="Contact Amana Care Maintenance — fast, professional and affordable."
      />
    </main>
  );
}
