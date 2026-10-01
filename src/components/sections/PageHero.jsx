import { MapPin } from 'lucide-react';
import CallButton from '../common/CallButton';
import WhatsAppButton from '../common/WhatsAppButton';
import RequestServiceButton from '../common/RequestServiceButton';

/**
 * PageHero — Full-screen hero used on every page.
 *
 * Props:
 *   title        — Main H1 headline
 *   subtitle     — Supporting paragraph
 *   image        — Optional image URL or import
 *   imageAlt     — Alt text for the image
 *   gradient     — Tailwind gradient classes for background (fallback when no image)
 *   showRiyadh   — Show "Serving Riyadh" badge (default true)
 *   showRequest  — Show Request Service CTA (default false)
 *   ctaLabel     — Custom label for RequestService button
 *   minHeight    — CSS min-height override (default 'calc(100vh - 4rem)')
 *   children     — Additional content below CTAs
 */
export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt = 'Amana Care Maintenance professional service',
  gradient = 'from-brand-navy via-brand-dark to-brand-blue',
  showRiyadh = true,
  showRequest = false,
  ctaLabel,
  minHeight = 'calc(100vh - 4rem)',
  children,
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight }}
      aria-labelledby="page-hero-heading"
    >
      {/* Background */}
      {image ? (
        <>
          <div className="absolute inset-0">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="hero-overlay" aria-hidden="true" />
        </>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} aria-hidden="true" />
      )}

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-full rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center" style={{ minHeight }}>
        <div className="py-20 lg:py-28 max-w-3xl">
          {/* Riyadh Badge */}
          {showRiyadh && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <MapPin size={14} className="text-brand-orange" aria-hidden="true" />
              <span>Serving Riyadh, Saudi Arabia</span>
            </div>
          )}

          {/* Headline */}
          <h1
            id="page-hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <CallButton size="lg" variant="white" />
            <WhatsAppButton size="lg" variant="outline-white" />
            {showRequest && <RequestServiceButton size="lg" variant="outline-white" />}
          </div>

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
