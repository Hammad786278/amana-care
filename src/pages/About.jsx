import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Award, MapPin, Clock } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import WhyChooseCard from '../components/sections/WhyChooseCard';
import ContactCTA from '../components/sections/ContactCTA';
import SectionHeading from '../components/common/SectionHeading';
import CallButton from '../components/common/CallButton';
import WhatsAppButton from '../components/common/WhatsAppButton';
import PageSEO from '../components/common/PageSEO';
import { WHY_CHOOSE_US, SERVICES } from '../data/services';
import teamImg from '../assets/brand/team-reference.jpeg';
import logoImg from '../assets/brand/logo-reference.jpeg';

const VALUES = [
  { title: 'Fast Response', desc: 'We respond quickly to every maintenance inquiry in Riyadh.' },
  { title: 'Quality Workmanship', desc: 'Every job is executed by trained, uniformed technicians using high-grade materials.' },
  { title: 'Affordable Pricing', desc: 'Transparent, competitive pricing with zero hidden charges.' },
  { title: 'Customer First Guarantee', desc: 'Your home and business peace of mind is our highest priority.' },
];

export default function About() {
  return (
    <main>
      <PageSEO
        title="About Amana Care Maintenance | Professional Team in Riyadh"
        description="Learn about Amana Care Maintenance (أمانة كير للصيانة) — Riyadh's trusted maintenance company providing AC, electrical, plumbing, painting & handyman services."
        canonical="/about"
      />

      {/* Hero */}
      <PageHero
        title="About Amana Care Maintenance"
        subtitle="Fast, Reliable & Affordable Maintenance Services in Riyadh, Saudi Arabia."
        gradient="from-brand-navy via-brand-dark to-blue-900"
        showRequest={true}
      />

      {/* Company Introduction with Team Showcase */}
      <section className="section-padding bg-white" aria-labelledby="about-intro">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImg} alt="Amana Care Logo" className="h-12 w-auto bg-white p-1 rounded-lg border border-gray-200" />
                <div>
                  <h2 id="about-intro" className="text-2xl sm:text-3xl font-black text-brand-navy">
                    Amana Care Maintenance
                  </h2>
                  <span className="text-brand-green font-bold text-sm">أمانة كير للصيانة</span>
                </div>
              </div>

              <p className="text-brand-muted text-base leading-relaxed mb-4">
                <strong>Amana Care Maintenance</strong> is a premier maintenance firm headquartered in Riyadh, Saudi Arabia. We deliver comprehensive maintenance solutions for residential homes, apartments, villas, offices, and commercial establishments.
              </p>
              <p className="text-brand-muted text-sm leading-relaxed mb-4">
                Our qualified maintenance technicians are equipped with official uniforms, branded safety gear, professional toolsets, and high-quality materials to fix any AC, electrical, plumbing, painting, or handyman issue efficiently.
              </p>
              <p className="text-brand-muted text-sm leading-relaxed mb-6 dir-rtl font-semibold text-brand-navy">
                خدمات صيانة سريعة وموثوقة وبأسعار مناسبة في الرياض. نقدم أفضل الخدمات بأعلى معايير الجودة والاحترافية.
              </p>

              <div className="flex flex-wrap gap-3">
                <CallButton size="default" />
                <WhatsAppButton size="default" />
                <Link to="/services" className="btn-outline">
                  View Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Official Team Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src={teamImg}
                alt="Amana Care Maintenance Uniformed Technicians Team"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full w-fit mb-2">
                  <ShieldCheck size={14} /> Official Company Team
                </div>
                <h3 className="text-xl font-black text-white">Your Home, Our Priority</h3>
                <p className="text-white/80 text-xs dir-rtl">فريق أمانة كير للصيانة — الرياض</p>
              </div>
            </div>

          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map(({ title, desc }) => (
              <div key={title} className="bg-brand-light rounded-2xl p-5 border border-gray-200/80 hover:border-brand-blue transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-brand-green flex-shrink-0" />
                  <h3 className="font-extrabold text-brand-dark text-sm">{title}</h3>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Amana Care */}
      <section className="section-padding bg-brand-light" aria-labelledby="why-about-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Why Choose Us"
            title="Why Amana Care Maintenance?"
            subtitle="Trusted by property owners and businesses across Riyadh."
            id="why-about-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <WhyChooseCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ContactCTA
        title="Ready to Book Maintenance in Riyadh?"
        subtitle="Call or WhatsApp Amana Care Maintenance today for instant support."
      />
    </main>
  );
}
