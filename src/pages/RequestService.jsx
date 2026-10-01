import { useEffect, useState } from 'react';
import { Phone, CheckCircle2, Snowflake, Zap, Wrench, Paintbrush, Home, Clock, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactCTA from '../components/sections/ContactCTA';
import CallButton from '../components/common/CallButton';
import WhatsAppButton from '../components/common/WhatsAppButton';
import PageSEO from '../components/common/PageSEO';

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

const SERVICES_LIST = [
  {
    id: 'ac',
    title: 'AC Maintenance & Repair',
    arabic: 'صيانة وتكييف الهواء',
    icon: Snowflake,
    description: 'Split AC, duct cleaning, gas refilling, compressor repairs & installation in Riyadh.',
    waMessage: 'Hello Amana Care Maintenance, I need AC Maintenance & Repair services in Riyadh.',
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    arabic: 'الخدمات الكهربائية',
    icon: Zap,
    description: 'Distribution box wiring, circuit breaker replacements, lighting & short circuit repairs.',
    waMessage: 'Hello Amana Care Maintenance, I need Electrical Services in Riyadh.',
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    arabic: 'خدمات السباكة',
    icon: Wrench,
    description: 'Leak detection, pipe installation, water heater repair & drainage unclogging.',
    waMessage: 'Hello Amana Care Maintenance, I need Plumbing Services in Riyadh.',
  },
  {
    id: 'painting',
    title: 'Painting & Finishing',
    arabic: 'الدهان والتطشيب',
    icon: Paintbrush,
    description: 'Interior wall painting, exterior villa coating & dampness waterproofing.',
    waMessage: 'Hello Amana Care Maintenance, I need Painting & Finishing services in Riyadh.',
  },
  {
    id: 'general',
    title: 'General Maintenance & Handyman',
    arabic: 'الصيانة العامة',
    icon: Home,
    description: 'Door repairs, cabinet fixing, drywall repair & general property upkeep.',
    waMessage: 'Hello Amana Care Maintenance, I need General Maintenance services in Riyadh.',
  },
];

export default function RequestService() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      const match = SERVICES_LIST.find(s => s.title.toLowerCase().includes(serviceParam.toLowerCase()) || serviceParam.toLowerCase().includes(s.id));
      if (match) {
        setSelectedService(match);
      }
    }
  }, []);

  return (
    <main>
      <PageSEO
        title="Instant Maintenance Service Contact | Call or WhatsApp Riyadh 0595304358"
        description="Book professional maintenance services in Riyadh directly via WhatsApp or Phone call. AC, electrical, plumbing, painting & handyman services. Call 0595304358."
        canonical="/request-service"
      />

      {/* Hero */}
      <PageHero
        title="Direct Service Booking"
        subtitle="No forms needed — call or message us directly on WhatsApp for instant assistance in Riyadh."
        gradient="from-brand-navy via-brand-dark to-blue-900"
        showRiyadh={true}
      />

      {/* Primary Call & WhatsApp Highlight */}
      <section className="section-padding bg-brand-light" aria-labelledby="booking-methods-heading">
        <div className="container-custom">

          {/* Featured Highlight Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl max-w-4xl mx-auto mb-16">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-4">
                <Sparkles size={16} aria-hidden="true" />
                Fastest Contact — No Forms Required
              </span>
              <h2 id="booking-methods-heading" className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
                Connect Directly with Our Technicians
              </h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                Contact Amana Care Maintenance instantly in Riyadh via Phone or WhatsApp. Our team will assist you immediately.
              </p>

              {/* Main Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/966595304358?text=Hello%20Amana%20Care%20Maintenance%2C%20I%20would%20like%20to%20request%20a%20maintenance%20service%20in%20Riyadh."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-brand-green hover:bg-green-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
                >
                  <WhatsAppIcon />
                  <span>WhatsApp 0595304358</span>
                </a>

                {/* Call Direct */}
                <a
                  href="tel:0595304358"
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-brand-navy hover:bg-brand-blue text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
                >
                  <Phone size={22} className="group-hover:rotate-12 transition-transform duration-200" />
                  <span>Call 0595304358</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap justify-center items-center gap-6 text-sm text-brand-muted">
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-brand-green" />
                  Quick Response
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-brand-orange" />
                  All Areas in Riyadh
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand-blue" />
                  Licensed Technicians
                </span>
              </div>
            </div>
          </div>

          {/* Pre-Selected Service Notification (if coming from individual service page) */}
          {selectedService && (
            <div className="bg-brand-navy text-white rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <selectedService.icon size={28} className="text-brand-orange" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Selected Service</span>
                  <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
                  <p className="text-white/70 text-sm">{selectedService.description}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href={`https://wa.me/966595304358?text=${encodeURIComponent(selectedService.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green px-6 py-3 text-sm justify-center whitespace-nowrap"
                >
                  <WhatsAppIcon />
                  Book via WhatsApp
                </a>
                <a
                  href="tel:0595304358"
                  className="btn-white-text px-6 py-3 text-sm justify-center whitespace-nowrap"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>
          )}

          {/* Select by Specific Service Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                Book a Specific Maintenance Service
              </h3>
              <p className="text-brand-muted">
                Select your required service below to launch WhatsApp with a pre-configured message or call us immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_LIST.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={srv.id}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-navy mb-4">
                        <Icon size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-brand-dark mb-1">{srv.title}</h4>
                      <p className="text-xs font-semibold text-brand-muted mb-3">{srv.arabic}</p>
                      <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      <a
                        href={`https://wa.me/966595304358?text=${encodeURIComponent(srv.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-brand-green hover:bg-green-700 text-white font-semibold text-sm rounded-xl transition-colors"
                      >
                        <WhatsAppIcon />
                        <span>WhatsApp for {srv.title.split(' ')[0]}</span>
                      </a>
                      <a
                        href="tel:0595304358"
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gray-100 hover:bg-brand-navy hover:text-white text-brand-dark font-semibold text-sm rounded-xl transition-colors"
                      >
                        <Phone size={15} />
                        <span>Call 0595304358</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <ContactCTA
        title="Need Immediate Maintenance Assistance?"
        subtitle="Our team in Riyadh is ready to respond to your phone call or WhatsApp message."
        showRequestService={false}
      />
    </main>
  );
}
