import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import CallButton from '../common/CallButton';
import WhatsAppButton from '../common/WhatsAppButton';
import logoImg from '../../assets/brand/logo-reference.jpeg';

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery',  to: '/gallery' },
  { label: 'Contact',  to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
          scrolled ? 'shadow-md py-1' : 'shadow-sm py-2'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Official Logo & Company Name */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group" aria-label="Amana Care Maintenance — Home">
              <img
                src={logoImg}
                alt="Amana Care Maintenance Logo"
                className="h-11 md:h-14 w-auto object-contain rounded-md transition-transform duration-200 group-hover:scale-105"
              />
              <div className="leading-tight flex flex-col justify-center">
                <span className="font-black text-brand-navy text-base md:text-lg tracking-tight uppercase">
                  Amana Care <span className="text-brand-blue font-bold">Maintenance</span>
                </span>
                <span className="text-brand-green font-bold text-xs md:text-sm">
                  أمانة كير للصيانة
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-blue bg-brand-blue/10'
                        : 'text-brand-dark hover:text-brand-blue hover:bg-gray-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTAs (In-line) */}
            <div className="hidden lg:flex items-center gap-2">
              <CallButton size="sm" />
              <WhatsAppButton size="sm" />
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:0595304358"
                className="p-2 text-brand-navy hover:text-brand-blue transition-colors rounded-lg border border-gray-200"
                aria-label="Call Amana Care Maintenance"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-brand-dark hover:text-brand-blue transition-colors rounded-lg border border-gray-200 focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Spacer to prevent header overlap */}
      <div className="h-16 md:h-20" aria-hidden="true" />

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-16 md:top-20 right-0 bottom-0 z-40 w-full max-w-xs bg-white border-l border-gray-100 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="p-6 overflow-y-auto">
          {/* Logo in Drawer */}
          <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-100">
            <img src={logoImg} alt="Amana Care Maintenance" className="h-10 w-auto object-contain" />
            <div>
              <div className="font-extrabold text-brand-navy text-sm">Amana Care Maintenance</div>
              <div className="text-brand-green font-bold text-xs">أمانة كير للصيانة</div>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
                    isActive
                      ? 'text-brand-blue bg-brand-blue/10 font-bold'
                      : 'text-brand-dark hover:bg-gray-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Drawer CTAs */}
        <div className="p-6 border-t border-gray-100 bg-brand-light flex flex-col gap-3">
          <CallButton className="w-full justify-center" size="lg" />
          <WhatsAppButton className="w-full justify-center" size="lg" />
        </div>
      </div>
    </>
  );
}
