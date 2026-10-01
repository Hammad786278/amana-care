import { Phone } from 'lucide-react';

const PHONE = '0595304358';
const PHONE_TEL = 'tel:0595304358';

export default function CallButton({ className = '', size = 'default', variant = 'primary' }) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  const variantClasses = {
    primary: 'bg-brand-navy text-white hover:bg-brand-blue',
    outline: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-brand-navy',
    white: 'bg-white text-brand-navy hover:bg-brand-light',
  };

  return (
    <a
      href={PHONE_TEL}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label={`Call Amana Care Maintenance at ${PHONE}`}
    >
      <Phone size={size === 'lg' ? 20 : 18} aria-hidden="true" />
      <span>Call Now</span>
    </a>
  );
}
