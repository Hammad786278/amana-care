import { Clock, Shield, Tag, Users, Star, MapPin } from 'lucide-react';

const ICON_MAP = { clock: Clock, shield: Shield, tag: Tag, users: Users, star: Star, 'map-pin': MapPin };

export default function WhyChooseCard({ item }) {
  const Icon = ICON_MAP[item.icon] || Shield;
  return (
    <article className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm card-hover text-center">
      <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
        <Icon size={26} className="text-brand-blue" aria-hidden="true" />
      </div>
      <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
    </article>
  );
}
