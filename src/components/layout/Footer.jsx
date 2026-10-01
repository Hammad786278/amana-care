import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import CallButton from '../common/CallButton';
import WhatsAppButton from '../common/WhatsAppButton';
import logoImg from '../../assets/brand/logo-reference.jpeg';

function WhatsAppIcon({ size = 20, color = 'currentColor' }) {
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

const SERVICES_LINKS = [
  { name: 'AC Maintenance', to: '/services/ac-maintenance' },
  { name: 'Electrical Services', to: '/services/electrical-services' },
  { name: 'Plumbing Services', to: '/services/plumbing-services' },
  { name: 'Painting Services', to: '/services/painting-services' },
  { name: 'General Maintenance', to: '/services/general-maintenance' },
];

const QUICK_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'All Services', to: '/services' },
  { name: 'Photo Gallery', to: '/gallery' },
  { name: 'Contact Us', to: '/contact' },
  { name: 'Book Service', to: '/request-service' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-12 pb-8 border-t border-blue-900" role="contentinfo">
      <div className="container-custom">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Col 1: Brand Info */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
              <img
                src={logoImg}
                alt="Amana Care Maintenance Logo"
                className="h-12 w-auto bg-white p-1 rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="leading-tight">
                <div className="font-extrabold text-white text-base tracking-tight">Amana Care Maintenance</div>
                <div className="text-brand-green font-bold text-xs">أمانة كير للصيانة</div>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              Fast, Reliable &amp; Affordable Maintenance Services in Riyadh, Saudi Arabia.
              <br />
              <span className="text-white/60 text-xs dir-rtl">خدمات صيانة سريعة وموثوقة وبأسعار مناسبة في الرياض</span>
            </p>
            {/* Inline Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <CallButton size="sm" variant="white" />
              <WhatsAppButton size="sm" variant="green" />
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-bold text-base text-white mb-4 uppercase tracking-wider text-xs text-brand-orange">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {SERVICES_LINKS.map(({ name, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white hover:underline transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="font-bold text-base text-white mb-4 uppercase tracking-wider text-xs text-brand-orange">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {QUICK_LINKS.map(({ name, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white hover:underline transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Full-Clickable Contact Cards */}
          <div>
            <h3 className="font-bold text-base text-white mb-4 uppercase tracking-wider text-xs text-brand-orange">
              Contact &amp; Support
            </h3>

            <div className="space-y-3">
              {/* Full Click Phone Card */}
              <a
                href="tel:0595304358"
                className="block p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all duration-200 group card-clickable"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Phone Call</div>
                    <div className="font-extrabold text-white text-base group-hover:text-brand-orange transition-colors">
                      0595304358
                    </div>
                  </div>
                </div>
              </a>

              {/* Full Click WhatsApp Card */}
              <a
                href="https://wa.me/966595304358"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3.5 bg-brand-green/20 hover:bg-brand-green/30 rounded-xl border border-brand-green/40 transition-all duration-200 group card-clickable"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <WhatsAppIcon size={18} color="#FFFFFF" />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">WhatsApp Chat</div>
                    <div className="font-extrabold text-white text-base group-hover:text-brand-green transition-colors">
                      0595304358
                    </div>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                <MapPin size={18} className="text-brand-orange flex-shrink-0" />
                <span className="text-xs text-white/80">Riyadh, Saudi Arabia — الرياض</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            &copy; {new Date().getFullYear()} Amana Care Maintenance (أمانة كير للصيانة). All rights reserved.
          </div>
          <div>
            Serving All Areas Across Riyadh, Saudi Arabia
          </div>
        </div>
      </div>
    </footer>
  );
}
