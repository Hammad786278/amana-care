import CallButton from '../common/CallButton';
import WhatsAppButton from '../common/WhatsAppButton';
import RequestServiceButton from '../common/RequestServiceButton';

export default function ContactCTA({
  title = 'Need Reliable Maintenance in Riyadh?',
  subtitle = 'Call or WhatsApp Amana Care Maintenance today. Fast, reliable & affordable service across Riyadh.',
  showRequestService = true,
}) {
  return (
    <section className="bg-cta-gradient py-10 md:py-12 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2
          id="cta-heading"
          className="text-2xl md:text-4xl font-extrabold text-white mb-3"
        >
          {title}
        </h2>
        <p className="text-white/85 text-base md:text-lg mb-6 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Buttons aligned in a single inline row (Client requirement [a]) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <CallButton size="lg" variant="white" />
          <WhatsAppButton size="lg" variant="green" />
          {showRequestService && (
            <RequestServiceButton size="lg" variant="outline-white" />
          )}
        </div>

        <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">
          Amana Care Maintenance — أمانة كير للصيانة | Riyadh, SA
        </div>
      </div>
    </section>
  );
}
