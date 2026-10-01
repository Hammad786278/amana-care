import { Link } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';

export default function RequestServiceButton({ className = '', size = 'default', variant = 'orange' }) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  const variantClasses = {
    orange: 'bg-brand-orange text-white hover:bg-orange-600',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-brand-navy',
    outline: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
  };

  return (
    <Link
      to="/request-service"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <ClipboardList size={size === 'lg' ? 20 : 18} aria-hidden="true" />
      <span>Request a Service</span>
    </Link>
  );
}
