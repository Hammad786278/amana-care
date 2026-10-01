import { useEffect, useState } from 'react';
import { Phone, CheckCircle2, Snowflake, Zap, Wrench, Paintbrush, Home, Clock, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactCTA from '../components/sections/ContactCTA';
import PageSEO from '../components/common/PageSEO';
import logoImg from '../assets/brand/logo-reference.jpeg';

function WhatsAppIcon({ size = 22, color = '#FFFFFF' }) {
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
        title="Instant Maintenance Service Booking | Call or WhatsApp Riyadh 0595304358"
        description="Book professional maintenance services in Riyadh directly via WhatsApp or Phone call. AC, electrical, plumbing, painting & handyman services. Call 0595304358."
        canonical="/request-service"
      />

      {/* Hero */}
      <PageHero
        title="Direct Service Booking"
        subtitle="No lengthy forms required. Tap any contact option below to connect with Amana Care Maintenance in Riyadh."
        gradient="from-brand-navy via-brand-dark to-blue-900"
        showRiyadh={true}
      />

      {/* Primary Call & WhatsApp Highlight Cards (Whole Div Clickable [e,g,j]) */}
      <section className="section-padding bg-brand-light" aria-labelledby="booking-methods-heading">
        <div className="container-custom">

          {/* Featured Highlight Card */}
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-200 shadow-xl max-w-4xl mx-auto mb-10">
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center mb-3">
                <img src={logoImg} alt="Amana Care Logo" className="h-12 w-auto object-contain bg-white p-1 rounded-xl shadow-sm" />
              </div>
              <h2 id="booking-methods-heading" className="text-2xl md:text-4xl font-black text-brand-navy mb-2">
                Connect Directly with Amana Care Maintenance
              </h2>
              <p className="text-brand-muted text-base mb-6 leading-relaxed">
                Tap either option below to open WhatsApp chat or dial our technicians directly.
              </p>

              {/* Main Whole-Clickable Cards Grid [e,g,j] */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

                {/* Whole Click WhatsApp Card */}
                <a
                  href="https://wa.me/966595304358?text=Hello%20Amana%20Care%20Maintenance%2C%20I%20would%20like%20to%20request%20a%20maintenance%20service%20in%20Riyadh."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-brand-green hover:bg-green-700 text-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 group card-clickable"
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <WhatsAppIcon size={24} color="#FFFFFF" />
                    </div>
                    <div>
                      <div className="text-xs text-white/80 uppercase font-semibold">WhatsApp Chat</div>
                      <div className="text-lg font-black text-white">0595304358</div>
                    </div>
                  </div>
                  <span className="text-xs bg-white text-brand-green font-extrabold px-3 py-1.5 rounded-lg shadow-sm">
                    Open Chat
                  </span>
                </a>

                {/* Whole Click Phone Call Card */}
                <a
                  href="tel:0595304358"
                  className="flex items-center justify-between p-4 bg-brand-navy hover:bg-brand-blue text-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 group card-clickable"
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Phone size={22} />
                    </div>
                    <div>
                      <div className="text-xs text-white/80 uppercase font-semibold">Direct Call</div>
                      <div className="text-lg font-black text-white">0595304358</div>
                    </div>
                  </div>
                  <span className="text-xs bg-white text-brand-navy font-extrabold px-3 py-1.5 rounded-lg shadow-sm">
                    Call Now
                  </span>
                </a>

              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-brand-muted">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-brand-green" /> Quick Response
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-brand-orange" /> All Areas in Riyadh
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-brand-blue" /> Uniformed Technicians
                </span>
              </div>
            </div>
          </div>

          {/* Pre-Selected Service Notification */}
          {selectedService && (
            <div className="bg-brand-navy text-white rounded-2xl p-6 max-w-4xl mx-auto mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <selectedService.icon size={24} className="text-brand-orange" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-orange uppercase">Pre-selected Service</span>
                  <h3 className="text-lg font-extrabold text-white">{selectedService.title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/966595304358?text=${encodeURIComponent(selectedService.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green px-5 py-2 text-xs font-bold"
                >
                  <WhatsAppIcon size={16} color="#FFFFFF" /> Book via WhatsApp
                </a>
                <a href="tel:0595304358" className="btn-white-text px-5 py-2 text-xs font-bold">
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
          )}

          {/* Select by Specific Service Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-brand-dark mb-2">
                Select Your Required Service
              </h3>
              <p className="text-brand-muted text-sm">
                Tap any service card to immediately open WhatsApp or call for that specific service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES_LIST.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={srv.id}
                    className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Centered Icon & Heading [i] */}
                      <div className="w-12 h-12 bg-brand-navy/10 text-brand-navy rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon size={24} />
                      </div>
                      <h4 className="text-base font-extrabold text-brand-dark text-center mb-0.5">{srv.title}</h4>
                      <p className="text-xs font-semibold text-brand-green text-center mb-3">{srv.arabic}</p>
                      <p className="text-brand-muted text-xs leading-relaxed text-center mb-4">
                        {srv.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-gray-100">
                      {/* Whole Clickable WhatsApp button [e, g, j] */}
                      <a
                        href={`https://wa.me/966595304358?text=${encodeURIComponent(srv.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-brand-green hover:bg-green-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
                      >
                        <WhatsAppIcon size={16} color="#FFFFFF" />
                        <span>WhatsApp for {srv.title.split(' ')[0]}</span>
                      </a>

                      {/* Single Line Phone Call [h] */}
                      <a
                        href="tel:0595304358"
                        className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-gray-100 hover:bg-brand-navy hover:text-white text-brand-dark font-bold text-xs rounded-xl border border-gray-200 transition-colors"
                      >
                        <Phone size={14} />
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
        subtitle="Call or WhatsApp Amana Care Maintenance in Riyadh now."
        showRequestService={false}
      />
    </main>
  );
}
