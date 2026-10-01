import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import CallButton from '../common/CallButton';
import WhatsAppButton from '../common/WhatsAppButton';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-blue transition-all duration-300 overflow-hidden flex flex-col justify-between group">

      {/* Card Header Banner */}
      <div className={`relative py-6 px-4 bg-gradient-to-r ${service.heroGradient || 'from-brand-navy to-brand-blue'} text-center text-white overflow-hidden`}>
        {/* Subtle accent blur */}
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-xl" aria-hidden="true" />

        {/* Centered Icon Container (Client requirement [i]) */}
        <div className="w-14 h-14 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300 border border-white/20">
          <Icon size={28} className="text-white" aria-hidden="true" />
        </div>

        {/* Centered Title */}
        <h3 className="text-xl font-extrabold text-white tracking-tight mb-1">
          {service.title}
        </h3>
        <p className="text-xs font-bold text-white/80 uppercase tracking-widest">
          أمانة كير للصيانة
        </p>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Concise Description */}
          <p className="text-brand-muted text-sm leading-relaxed mb-4 text-center">
            {service.shortDescription}
          </p>

          {/* Key Services List */}
          <ul className="space-y-1.5 mb-5 pt-3 border-t border-gray-100" role="list">
            {service.services.slice(0, 3).map((s) => (
              <li key={s} className="flex items-center gap-2 text-xs font-semibold text-brand-dark">
                <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" aria-hidden="true" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Actions (Client requirement [a] & [h]: single line alignment + border) */}
        <div className="pt-3 border-t border-gray-100 space-y-2">
          {/* Direct Call & WhatsApp Buttons in One Line */}
          <div className="grid grid-cols-2 gap-2">
            <CallButton size="sm" className="w-full justify-center text-xs px-2" />
            <WhatsAppButton size="sm" className="w-full justify-center text-xs px-2" />
          </div>

          {/* View Details Link */}
          <Link
            to={`/services/${service.slug}`}
            className="flex items-center justify-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-blue py-1 transition-colors"
          >
            <span>View Full Service Details</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </article>
  );
}
