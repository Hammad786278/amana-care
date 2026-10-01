import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm card-hover">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-brand-orange fill-brand-orange" aria-hidden="true" />
        ))}
      </div>

      {/* Review Text */}
      <blockquote className="text-brand-dark text-sm leading-relaxed mb-4">
        "{testimonial.text}"
      </blockquote>

      {/* Author */}
      <footer className="flex items-center justify-between">
        <div>
          <cite className="font-semibold text-brand-dark text-sm not-italic">{testimonial.name}</cite>
          <p className="text-brand-muted text-xs">{testimonial.location}</p>
        </div>
        <span className="text-xs px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full font-medium">
          {testimonial.service}
        </span>
      </footer>
    </article>
  );
}
