import CallButton from '../common/CallButton';
import WhatsAppButton from '../common/WhatsAppButton';
import RequestServiceButton from '../common/RequestServiceButton';

export default function ContactCTA({
  title = 'Need Reliable Maintenance in Riyadh?',
  subtitle = 'Call or WhatsApp Amana Care Maintenance today.',
  showRequestService = true,
}) {
  return (
    <section className="bg-cta-gradient py-16 md:py-20" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {title}
        </h2>
        <p className="text-white/80 text-lg mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <CallButton size="lg" variant="outline-white" />
          <WhatsAppButton size="lg" variant="outline-white" />
          {showRequestService && (
            <RequestServiceButton size="lg" variant="outline-white" />
          )}
        </div>
        <a
          href="tel:0595304358"
          className="text-white/90 font-semibold text-xl hover:text-white transition-colors"
          aria-label="Call 0595304358"
        >
          0595304358
        </a>
      </div>
    </section>
  );
}
