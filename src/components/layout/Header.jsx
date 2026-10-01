import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import CallButton from '../common/CallButton';
import WhatsAppButton from '../common/WhatsAppButton';

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

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
          scrolled ? 'shadow-md py-0' : 'shadow-sm py-0'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16 md:h-18'}`}>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Amana Care Maintenance — Home">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <div className="leading-tight">
                  <div className="font-bold text-brand-navy text-sm md:text-base">Amana Care</div>
                  <div className="text-brand-muted text-xs hidden sm:block">أمانة كير للصيانة</div>
                </div>
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
                    `px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-blue bg-brand-blue/5'
                        : 'text-brand-dark hover:text-brand-blue hover:bg-gray-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <CallButton size="sm" />
              <WhatsAppButton size="sm" />
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:0595304358"
                className="p-2 text-brand-navy hover:text-brand-blue transition-colors"
                aria-label="Call Amana Care Maintenance"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-brand-dark hover:text-brand-blue transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <nav
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile navigation"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 pt-16">
            <div>
              <div className="font-bold text-brand-navy">Amana Care</div>
              <div className="text-brand-muted text-xs">أمانة كير للصيانة</div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-brand-muted hover:text-brand-dark transition-colors rounded-md"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto py-4">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3.5 text-base font-medium border-l-4 transition-colors ${
                    isActive
                      ? 'border-brand-blue text-brand-blue bg-brand-blue/5'
                      : 'border-transparent text-brand-dark hover:border-brand-blue hover:text-brand-blue hover:bg-gray-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/request-service"
              className={({ isActive }) =>
                `flex items-center px-6 py-3.5 text-base font-medium border-l-4 transition-colors ${
                  isActive
                    ? 'border-brand-orange text-brand-orange bg-orange-50'
                    : 'border-transparent text-brand-dark hover:border-brand-orange hover:text-brand-orange hover:bg-orange-50'
                }`
              }
            >
              Request a Service
            </NavLink>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="p-4 border-t border-gray-100 space-y-3 pb-24">
            <CallButton className="w-full justify-center" />
            <WhatsAppButton className="w-full justify-center" />
            <div className="text-center text-sm text-brand-muted pt-1">
              <a href="tel:0595304358" className="font-semibold text-brand-navy hover:underline">
                0595304358
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-18" aria-hidden="true" />
    </>
  );
}
