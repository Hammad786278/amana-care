import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, CheckCircle2, Wrench, Zap, Droplets, Snowflake, PaintBucket, Sparkles, ShieldCheck, Clock, Award } from 'lucide-react';
import ServiceCard from '../components/sections/ServiceCard';
import WhyChooseCard from '../components/sections/WhyChooseCard';
import ContactCTA from '../components/sections/ContactCTA';
import SectionHeading from '../components/common/SectionHeading';
import CallButton from '../components/common/CallButton';
import WhatsAppButton from '../components/common/WhatsAppButton';
import RequestServiceButton from '../components/common/RequestServiceButton';
import { SERVICES, WHY_CHOOSE_US } from '../data/services';
import PageSEO from '../components/common/PageSEO';
import heroImg from '../assets/images/hero/hero-home.png';
import teamImg from '../assets/brand/team-reference.jpeg';
import logoImg from '../assets/brand/logo-reference.jpeg';

function WhatsAppIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <PageSEO
        title="Amana Care Maintenance | Fast, Reliable & Affordable Maintenance Services in Riyadh"
        description="Amana Care Maintenance (أمانة كير للصيانة) — Professional AC, electrical, plumbing, painting and general maintenance services in Riyadh, Saudi Arabia. Call 0595304358."
        canonical="/"
      />

      {/* ── Hero Section ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: 'calc(90vh - 4rem)' }}
        aria-label="Hero section"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Amana Care Maintenance technicians in Riyadh"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" aria-hidden="true" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-full rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-12 md:py-20" style={{ minHeight: 'calc(90vh - 4rem)' }}>
          <div className="max-w-3xl">

            {/* Logo Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 border border-white/20 text-white mb-6 backdrop-blur-md">
              <img src={logoImg} alt="Amana Care Maintenance" className="h-8 w-auto bg-white p-0.5 rounded" />
              <div>
                <span className="font-extrabold text-sm md:text-base">Amana Care Maintenance</span>
                <span className="text-brand-orange text-xs block">أمانة كير للصيانة — Riyadh, SA</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Fast, Reliable &amp; Affordable Maintenance in{' '}
              <span className="text-brand-orange">Riyadh</span>
            </h1>

            <p className="text-white/90 text-base md:text-xl leading-relaxed mb-6 max-w-2xl">
              Professional AC Maintenance, Electrical, Plumbing, Painting &amp; General Handyman Services across all areas in Riyadh, Saudi Arabia.
              <br />
              <span className="text-white/75 text-sm dir-rtl block mt-1">
                خدمات صيانة سريعة وموثوقة وبأسعار مناسبة في الرياض
              </span>
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Fast Response', 'Quality Work', 'Affordable Prices'].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-white/90 text-sm font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <CheckCircle2 size={16} className="text-brand-green" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons in single line */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <CallButton size="lg" variant="white" />
              <WhatsAppButton size="lg" variant="green" />
              <RequestServiceButton size="lg" variant="outline-white" />
            </div>

            {/* Direct Phone Highlight */}
            <div className="inline-flex items-center gap-2 text-white/85 text-sm font-medium">
              <Phone size={16} className="text-brand-orange" />
              <span>Direct Phone &amp; WhatsApp Support: </span>
              <a href="tel:0595304358" className="font-extrabold text-white underline hover:text-brand-orange">
                0595304358
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Direct Full-Card Clickable Contact Section (Client requirement [e, g, j]) ── */}
      <section className="bg-brand-navy py-6 text-white border-y border-blue-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Whole Clickable Phone Card */}
            <a
              href="tel:0595304358"
              className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 flex items-center justify-between transition-all duration-200 group card-clickable shadow-md"
              aria-label="Call Amana Care Maintenance now at 0595304358"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-brand-navy rounded-xl flex items-center justify-center font-bold group-hover:scale-110 transition-transform shadow">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs text-white/70 uppercase font-semibold tracking-wider">Tap to Call Directly</div>
                  <div className="text-2xl font-extrabold text-white group-hover:text-brand-orange transition-colors">
                    0595304358
                  </div>
                </div>
              </div>
              <span className="btn-white-text text-xs px-3 py-1.5 font-bold rounded-lg border border-white/30 hidden sm:inline-block">
                Call Now
              </span>
            </a>

            {/* Whole Clickable WhatsApp Card (White Icon [j]) */}
            <a
              href="https://wa.me/966595304358?text=Hello%20Amana%20Care%20Maintenance%2C%20I%20need%20a%20maintenance%20service%20in%20Riyadh."
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-brand-green/20 hover:bg-brand-green/35 rounded-2xl border border-brand-green/40 flex items-center justify-between transition-all duration-200 group card-clickable shadow-md"
              aria-label="WhatsApp Amana Care Maintenance now at 0595304358"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform shadow">
                  <WhatsAppIcon size={24} color="#FFFFFF" />
                </div>
                <div>
                  <div className="text-xs text-white/80 uppercase font-semibold tracking-wider">Tap to Open WhatsApp Chat</div>
                  <div className="text-2xl font-extrabold text-white group-hover:text-brand-green transition-colors">
                    0595304358
                  </div>
                </div>
              </div>
              <span className="btn-green text-xs px-3 py-1.5 font-bold rounded-lg hidden sm:inline-block">
                WhatsApp Us
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* ── Services Section ─────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="services-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Our Services"
            title="Complete Maintenance Services in Riyadh"
            subtitle="Fast, reliable & affordable home, office and commercial property maintenance services."
            id="services-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-outline px-8 py-3 text-base">
              View All Services <ArrowRight size={18} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────── */}
      <section className="section-padding bg-brand-light" aria-labelledby="why-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Why Choose Us"
            title="Why Amana Care Maintenance?"
            subtitle="We are committed to delivering top-tier maintenance services across Riyadh."
            id="why-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <WhyChooseCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Team & About Section (Featuring Client Team Reference Image) ── */}
      <section className="section-padding bg-white" aria-labelledby="about-intro-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left Column: Team Showcase Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
              <img
                src={teamImg}
                alt="Amana Care Maintenance Official Technician Team in Riyadh"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full w-fit mb-2">
                  <ShieldCheck size={14} /> Official Uniformed Team
                </span>
                <h3 className="text-xl font-bold text-white">Your Home, Our Priority</h3>
                <p className="text-white/80 text-xs dir-rtl">أمانة كير للصيانة — فريق فني متكامل ومحترف في الرياض</p>
              </div>
            </div>

            {/* Right Column: About Content */}
            <div>
              <span className="section-badge">About Amana Care Maintenance</span>
              <h2 id="about-intro-heading" className="text-2xl sm:text-4xl font-extrabold text-brand-dark mb-4 leading-tight">
                Professional Maintenance Services You Can Trust in Riyadh
              </h2>
              <p className="text-brand-muted text-base leading-relaxed mb-4">
                <strong>Amana Care Maintenance (أمانة كير للصيانة)</strong> provides high-quality maintenance solutions for residential homes, offices, apartments, villas, and commercial properties throughout Riyadh, Saudi Arabia.
              </p>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Our team of licensed, equipped technicians wears official company uniforms and uses state-of-the-art tools to resolve AC, electrical, plumbing, painting, and general maintenance problems quickly and affordably.
              </p>

              {/* Guarantees List */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: 'Fast Response Team', icon: Clock },
                  { label: 'Qualified Technicians', icon: ShieldCheck },
                  { label: 'Affordable Rates', icon: Award },
                  { label: 'Riyadh Coverage', icon: MapPin },
                ].map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-2.5 p-3 bg-brand-light rounded-xl border border-gray-100">
                    <Icon size={18} className="text-brand-blue flex-shrink-0" />
                    <span className="font-bold text-xs text-brand-dark">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
                <CallButton variant="outline" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact CTA Banner ─────────────────────────────────── */}
      <ContactCTA
        title="Need Immediate Maintenance Service in Riyadh?"
        subtitle="Call or WhatsApp Amana Care Maintenance now at 0595304358 for instant service."
      />
    </main>
  );
}
