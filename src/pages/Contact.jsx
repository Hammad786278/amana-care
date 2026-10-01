import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactCTA from '../components/sections/ContactCTA';
import CallButton from '../components/common/CallButton';
import WhatsAppButton from '../components/common/WhatsAppButton';
import RequestServiceButton from '../components/common/RequestServiceButton';
import PageSEO from '../components/common/PageSEO';
import logoImg from '../assets/brand/logo-reference.jpeg';
import teamImg from '../assets/brand/team-reference.jpeg';

function WhatsAppIcon({ size = 26, color = '#FFFFFF' }) {
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

export default function Contact() {
  return (
    <main>
      <PageSEO
        title="Contact Amana Care Maintenance | Riyadh Call or WhatsApp 0595304358"
        description="Contact Amana Care Maintenance (أمانة كير للصيانة) in Riyadh. Call or WhatsApp 0595304358 for AC, electrical, plumbing, painting & handyman services."
        canonical="/contact"
      />

      {/* Hero */}
      <PageHero
        title="Contact Amana Care Maintenance"
        subtitle="Fast, Reliable & Affordable Maintenance Services in Riyadh. Tap any contact card below to reach us."
        gradient="from-brand-navy via-brand-dark to-blue-900"
        showRequest={true}
      />

      {/* ── Contact Main Cards (Reduced padding, whole-card clickable [e,g,j]) ── */}
      <section className="section-padding bg-white" aria-labelledby="contact-main-heading">
        <div className="container-custom">

          <div className="text-center mb-8">
            <span className="section-badge">Direct Contact</span>
            <h2 id="contact-main-heading" className="text-2xl md:text-4xl font-extrabold text-brand-dark mb-2">
              Reach Amana Care Maintenance in Riyadh
            </h2>
            <p className="text-brand-muted text-base max-w-2xl mx-auto">
              Tap anywhere on the cards below to instantly call or message our maintenance technicians.
            </p>
          </div>

          {/* Primary Phone Highlight Banner (Whole Clickable Container) */}
          <a
            href="tel:0595304358"
            className="block bg-brand-navy rounded-3xl p-6 md:p-10 text-center text-white mb-8 max-w-3xl mx-auto shadow-xl hover:bg-brand-blue border border-brand-navy transition-all duration-300 card-clickable group"
            aria-label="Call Amana Care Maintenance at 0595304358"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-3">
              <Phone size={14} className="text-brand-orange" />
              Tap Anywhere to Dial 0595304358
            </div>

            {/* Single Line Phone Alignment with Border [h] */}
            <div className="flex items-center justify-center gap-3 text-3xl sm:text-5xl md:text-6xl font-black text-white group-hover:text-brand-orange transition-colors my-2">
              <Phone size={36} className="text-brand-orange flex-shrink-0" />
              <span>0595304358</span>
            </div>

            <p className="text-white/80 text-sm mt-2 font-medium">
              Call Amana Care Maintenance Directly — Available across Riyadh
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 pt-4 border-t border-white/15">
              <span className="btn-white-text px-6 py-2.5 text-sm font-bold rounded-xl shadow-sm">
                📞 Call Now
              </span>
              <span className="btn-green px-6 py-2.5 text-sm font-bold rounded-xl shadow-sm">
                <WhatsAppIcon size={18} color="#FFFFFF" /> WhatsApp Us
              </span>
            </div>
          </a>

          {/* Grid of 3 Contact Cards (Centered Icon & Title [i], Whole Div Clickable [e,g,j]) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">

            {/* Phone Card (Whole Div Clickable) */}
            <a
              href="tel:0595304358"
              className="bg-brand-light hover:bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-navy transition-all duration-300 card-clickable group flex flex-col items-center justify-between"
            >
              <div className="w-full flex flex-col items-center">
                {/* Centered Icon Container [i] */}
                <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <Phone size={28} className="text-white" />
                </div>
                <h3 className="font-extrabold text-lg text-brand-dark mb-1">Phone Call</h3>
                <p className="text-xs font-semibold text-brand-muted mb-3">اتصال مباشر</p>

                {/* Single line phone + border [h] */}
                <div className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-brand-navy font-black text-lg group-hover:border-brand-navy group-hover:text-brand-blue transition-colors mb-2 w-full">
                  📞 0595304358
                </div>
              </div>
              <p className="text-xs text-brand-muted mt-2">Tap to call our team immediately</p>
            </a>

            {/* WhatsApp Card (Whole Div Clickable, White Icon [j]) */}
            <a
              href="https://wa.me/966595304358?text=Hello%20Amana%20Care%20Maintenance%2C%20I%20need%20a%20maintenance%20service%20in%20Riyadh."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green/10 hover:bg-white rounded-2xl p-6 text-center border border-brand-green/30 shadow-sm hover:shadow-xl hover:border-brand-green transition-all duration-300 card-clickable group flex flex-col items-center justify-between"
            >
              <div className="w-full flex flex-col items-center">
                {/* Centered Icon Container with White Icon [j, i] */}
                <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <WhatsAppIcon size={30} color="#FFFFFF" />
                </div>
                <h3 className="font-extrabold text-lg text-brand-dark mb-1">WhatsApp Chat</h3>
                <p className="text-xs font-semibold text-brand-muted mb-3">مراسلة واتساب</p>

                {/* Single line WhatsApp + border [h] */}
                <div className="px-4 py-2 bg-brand-green text-white rounded-xl border border-brand-green font-black text-lg shadow-sm mb-2 w-full flex items-center justify-center gap-2">
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  <span>0595304358</span>
                </div>
              </div>
              <p className="text-xs text-brand-muted mt-2">Tap to chat on WhatsApp instantly</p>
            </a>

            {/* Service Area Card */}
            <div className="bg-brand-light rounded-2xl p-6 text-center border border-gray-200 shadow-sm flex flex-col items-center justify-between">
              <div className="w-full flex flex-col items-center">
                {/* Centered Icon Container [i] */}
                <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center mb-4 shadow-md">
                  <MapPin size={28} className="text-white" />
                </div>
                <h3 className="font-extrabold text-lg text-brand-dark mb-1">Service Area</h3>
                <p className="text-xs font-semibold text-brand-muted mb-3">منطقة الخدمة</p>
                <div className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-brand-dark font-extrabold text-base mb-2 w-full">
                  Riyadh, Saudi Arabia
                </div>
              </div>
              <p className="text-xs text-brand-muted mt-2">الرياض، المملكة العربية السعودية</p>
            </div>

          </div>

          {/* Official Company Branding Card */}
          <div className="bg-brand-light rounded-3xl p-8 border border-gray-200 max-w-3xl mx-auto text-center shadow-sm">
            <div className="flex justify-center mb-4">
              <img src={logoImg} alt="Amana Care Maintenance" className="h-16 w-auto object-contain bg-white p-1 rounded-xl shadow-sm" />
            </div>
            <h2 className="text-2xl font-black text-brand-navy mb-1">Amana Care Maintenance</h2>
            <p className="text-brand-green font-bold text-base mb-2">أمانة كير للصيانة</p>
            <p className="text-brand-muted text-sm max-w-xl mx-auto mb-6">
              Fast, Reliable &amp; Affordable Maintenance Services in Riyadh. AC Maintenance, Electrical, Plumbing, Painting &amp; General Handyman.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <CallButton size="default" />
              <WhatsAppButton size="default" />
              <RequestServiceButton size="default" />
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <ContactCTA
        title="Need Maintenance in Riyadh?"
        subtitle="Our team is ready to respond to your phone call or WhatsApp message instantly."
      />
    </main>
  );
}
