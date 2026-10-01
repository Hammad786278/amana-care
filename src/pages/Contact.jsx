import { Phone, MapPin } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import ContactCTA from '../components/sections/ContactCTA';
import CallButton from '../components/common/CallButton';
import WhatsAppButton from '../components/common/WhatsAppButton';
import RequestServiceButton from '../components/common/RequestServiceButton';
import PageSEO from '../components/common/PageSEO';

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function Contact() {

  return (
    <main>
      <PageSEO
        title="Contact Amana Care Maintenance | Riyadh 0595304358"
        description="Contact Amana Care Maintenance in Riyadh. Call or WhatsApp 0595304358 for professional AC, electrical, plumbing, painting and general maintenance services."
        canonical="/contact"
      />
      {/* Hero */}
      <PageHero
        title="Contact Amana Care Maintenance"
        subtitle="Need professional maintenance services in Riyadh? Call or WhatsApp us today."
        gradient="from-brand-navy via-brand-dark to-blue-900"
        showRequest={true}
      />

      {/* Contact Cards */}
      <section className="section-padding bg-white" aria-labelledby="contact-main-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-badge">Get In Touch</span>
            <h2 id="contact-main-heading" className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Reach Amana Care Maintenance
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              We are available for maintenance enquiries and service requests across Riyadh, Saudi Arabia.
            </p>
          </div>

          {/* Phone Number Highlight */}
          <div className="bg-brand-navy rounded-2xl p-8 md:p-12 text-center text-white mb-10 max-w-2xl mx-auto">
            <p className="text-white/70 text-sm uppercase tracking-widest mb-3">Call or WhatsApp</p>
            <a
              href="tel:0595304358"
              className="text-4xl md:text-6xl font-bold text-white hover:text-brand-orange transition-colors block mb-6"
            >
              0595304358
            </a>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CallButton size="lg" variant="white" />
              <WhatsAppButton size="lg" variant="outline-white" />
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-brand-light rounded-xl p-6 text-center border border-gray-100">
              <div className="w-14 h-14 bg-brand-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-white" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Phone</h3>
              <a href="tel:0595304358" className="text-brand-blue font-semibold hover:text-brand-navy text-lg transition-colors">
                0595304358
              </a>
              <p className="text-brand-muted text-sm mt-1">Available for calls</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-brand-light rounded-xl p-6 text-center border border-gray-100">
              <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mx-auto mb-4">
                <WhatsAppIcon />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/966595304358"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green font-semibold hover:text-green-700 text-lg transition-colors"
              >
                0595304358
              </a>
              <p className="text-brand-muted text-sm mt-1">Message us anytime</p>
            </div>

            {/* Service Area */}
            <div className="bg-brand-light rounded-xl p-6 text-center border border-gray-100">
              <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-white" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Service Area</h3>
              <p className="text-brand-dark font-semibold text-lg">Riyadh, Saudi Arabia</p>
              <p className="text-brand-muted text-sm mt-1">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>

          {/* Business Info */}
          <div className="bg-brand-light rounded-2xl p-8 border border-gray-100 max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-brand-dark mb-1">Amana Care Maintenance</h2>
            <p className="text-brand-muted mb-1">أمانة كير للصيانة</p>
            <p className="text-brand-muted text-sm mb-6">Professional Maintenance Services — Riyadh, Saudi Arabia</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CallButton />
              <WhatsAppButton />
              <RequestServiceButton />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ContactCTA
        title="Contact Amana Care Maintenance Today"
        subtitle="Professional maintenance services across Riyadh. Call or WhatsApp us now."
      />
    </main>
  );
}
