import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

function GalleryItem({ item, onClick }) {
  return (
    <button
      className="relative overflow-hidden rounded-xl group cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue"
      onClick={onClick}
      aria-label={`View ${item.title} — ${item.category}`}
    >
      {/* Image / Gradient Placeholder */}
      <div className={`w-full aspect-[4/3] ${item.gradient || 'bg-gradient-to-br from-brand-navy to-brand-blue'} relative`}>
        {item.src ? (
          <img
            src={item.src}
            alt={item.alt || item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white/80 p-4">
              <item.Icon size={36} className="mx-auto mb-2 opacity-70" />
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs opacity-60 mt-1">Service Example</p>
            </div>
          </div>
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/50 transition-all duration-300 flex items-center justify-center">
          <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
        </div>
      </div>
      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-sm font-semibold">{item.title}</p>
        <p className="text-white/70 text-xs">{item.category}</p>
      </div>
    </button>
  );
}

function Lightbox({ items, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(i => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    document.body.classList.add('lightbox-open');
    return () => document.body.classList.remove('lightbox-open');
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  const item = items[current];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors p-2 rounded-full hover:bg-white/10"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <X size={28} />
      </button>

      {/* Prev */}
      {items.length > 1 && (
        <button
          className="absolute left-4 text-white hover:text-brand-orange transition-colors p-3 rounded-full hover:bg-white/10"
          onClick={prev}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Image */}
      <div className="max-w-4xl w-full mx-auto">
        <div className={`w-full aspect-video rounded-xl overflow-hidden ${item.gradient || 'bg-gradient-to-br from-brand-navy to-brand-blue'}`}>
          {item.src ? (
            <img
              src={item.src}
              alt={item.alt || item.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-white/80">
                <item.Icon size={64} className="mx-auto mb-4 opacity-60" />
                <p className="text-lg font-medium">{item.title}</p>
                <p className="text-sm opacity-60 mt-1">Representative Service Example</p>
              </div>
            </div>
          )}
        </div>
        <div className="text-center mt-4">
          <p className="text-white font-semibold">{item.title}</p>
          <p className="text-white/60 text-sm">{item.category} · {current + 1} / {items.length}</p>
        </div>
      </div>

      {/* Next */}
      {items.length > 1 && (
        <button
          className="absolute right-4 text-white hover:text-brand-orange transition-colors p-3 rounded-full hover:bg-white/10"
          onClick={next}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      )}
    </div>
  );
}

export default function GalleryGrid({ items }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list" aria-label="Gallery images">
        {items.map((item, i) => (
          <div key={item.id} role="listitem">
            <GalleryItem item={item} onClick={() => setLightboxIndex(i)} />
          </div>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
