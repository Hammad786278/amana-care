export default function SectionHeading({ badge, title, subtitle, align = 'center', light = false }) {
  const alignClass = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  }[align];

  return (
    <div className={`mb-12 ${alignClass}`}>
      {badge && (
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold rounded-full border mb-4 ${
          light
            ? 'bg-white/10 text-white border-white/20'
            : 'bg-brand-blue/10 text-brand-blue border-brand-blue/20'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-brand-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
