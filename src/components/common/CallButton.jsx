import { Phone } from 'lucide-react';

const PHONE = '0595304358';
const PHONE_TEL = 'tel:0595304358';

export default function CallButton({ className = '', size = 'default', variant = 'primary', label = 'Call Now' }) {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs sm:text-sm',
    default: 'px-5 py-2.5 text-sm md:text-base',
    lg: 'px-7 py-3.5 text-base md:text-lg',
  };
  const variantClasses = {
    primary: 'bg-brand-navy text-white hover:bg-brand-blue border border-brand-navy shadow-sm',
    outline: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-brand-navy',
    white: 'bg-white text-brand-navy hover:bg-brand-light border border-gray-200 shadow-sm',
  };

  return (
    <a
      href={PHONE_TEL}
      className={`inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all duration-200 active:scale-95 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label={`Call Amana Care Maintenance at ${PHONE}`}
    >
      <Phone size={size === 'lg' ? 20 : size === 'sm' ? 16 : 18} className="flex-shrink-0" aria-hidden="true" />
      <span>{label}: {PHONE}</span>
    </a>
  );
}
