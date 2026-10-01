import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  { label: 'Request a Service', to: '/request-service' },
];

const SERVICE_LINKS = [
  { label: 'AC Maintenance', to: '/services/ac-maintenance' },
  { label: 'Electrical Services', to: '/services/electrical' },
  { label: 'Plumbing Services', to: '/services/plumbing' },
  { label: 'Painting Services', to: '/services/painting' },
  { label: 'General Maintenance', to: '/services/general-maintenance' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5" aria-label="Amana Care Maintenance">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">AC</span>
              </div>
              <div>
                <div className="font-bold text-white text-base">Amana Care</div>
                <div className="text-white/60 text-xs">أمانة كير للصيانة</div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Professional maintenance services for homes, offices and commercial properties in Riyadh, Saudi Arabia.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
              <MapPin size={14} className="text-brand-orange flex-shrink-0" />
              <span>Riyadh, Saudi Arabia</span>
            </div>
            <a
              href="tel:0595304358"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Phone size={14} className="text-brand-orange flex-shrink-0" />
              <span>0595304358</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5" role="list">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/70 hover:text-white text-sm transition-colors hover:pl-1 duration-200 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5" role="list">
              {SERVICE_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/70 hover:text-white text-sm transition-colors hover:pl-1 duration-200 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Phone & WhatsApp</p>
                <a
                  href="tel:0595304358"
                  className="text-white font-semibold text-lg hover:text-brand-orange transition-colors"
                >
                  0595304358
                </a>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href="tel:0595304358"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-md hover:bg-brand-blue transition-colors"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/966595304358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-green text-white text-sm font-semibold rounded-md hover:bg-green-700 transition-colors"
                >
                  <WhatsAppIcon />
                  WhatsApp Us
                </a>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Service Area</p>
                <p className="text-white/80 text-sm flex items-center gap-1.5">
                  <MapPin size={14} className="text-brand-orange" />
                  Riyadh, Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© 2026 Amana Care Maintenance. All Rights Reserved.</p>
          <p className="text-xs">أمانة كير للصيانة — Riyadh, Saudi Arabia</p>
        </div>
      </div>
    </footer>
  );
}
