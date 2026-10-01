import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden card-hover`}>
      {/* Colored Header */}
      <div className={`h-2 bg-gradient-to-r from-brand-navy to-brand-blue`} />

      <div className="p-6">
        {/* Icon */}
        <div className={`${service.iconBg} ${service.iconColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
          <Icon size={24} aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-brand-dark mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-brand-muted text-sm leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Sub-services */}
        <ul className="space-y-1 mb-5" role="list">
          {service.services.slice(0, 3).map((s) => (
            <li key={s} className="flex items-center gap-2 text-sm text-brand-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex flex-col gap-2 pt-2 border-t border-gray-50">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center justify-between text-brand-blue font-semibold text-sm hover:text-brand-navy transition-colors group"
            aria-label={`View details for ${service.title}`}
          >
            <span>View Details</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
          <Link
            to={`/request-service?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center justify-center px-4 py-2 bg-brand-navy text-white text-sm font-semibold rounded-md hover:bg-brand-blue transition-colors"
          >
            Request Service
          </Link>
        </div>
      </div>
    </article>
  );
}
