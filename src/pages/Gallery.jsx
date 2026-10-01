import { useState } from 'react';
import { Snowflake, Zap, Droplets, PaintBucket, Wrench, Sparkles } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import GalleryGrid from '../components/sections/GalleryGrid';
import ContactCTA from '../components/sections/ContactCTA';
import SectionHeading from '../components/common/SectionHeading';
import PageSEO from '../components/common/PageSEO';

const CATEGORIES = ['All', 'AC', 'Electrical', 'Plumbing', 'Painting', 'Cleaning', 'Maintenance'];

const GALLERY_ITEMS = [
  { id: 'ac-1',  category: 'AC',          title: 'AC Unit Servicing',       gradient: 'from-blue-800 to-blue-900',      Icon: Snowflake,   alt: 'AC maintenance service example' },
  { id: 'ac-2',  category: 'AC',          title: 'AC Installation',         gradient: 'from-cyan-800 to-blue-900',     Icon: Snowflake,   alt: 'AC installation service example' },
  { id: 'el-1',  category: 'Electrical',  title: 'Electrical Panel Work',   gradient: 'from-yellow-700 to-orange-900', Icon: Zap,         alt: 'Electrical work service example' },
  { id: 'el-2',  category: 'Electrical',  title: 'Lighting Installation',   gradient: 'from-amber-700 to-yellow-900',  Icon: Zap,         alt: 'Lighting installation service example' },
  { id: 'pl-1',  category: 'Plumbing',    title: 'Pipe Repair',             gradient: 'from-cyan-700 to-teal-900',     Icon: Droplets,    alt: 'Plumbing pipe repair service example' },
  { id: 'pl-2',  category: 'Plumbing',    title: 'Bathroom Plumbing',       gradient: 'from-sky-700 to-cyan-900',      Icon: Droplets,    alt: 'Bathroom plumbing service example' },
  { id: 'pa-1',  category: 'Painting',    title: 'Interior Painting',       gradient: 'from-purple-700 to-purple-900', Icon: PaintBucket, alt: 'Interior painting service example' },
  { id: 'pa-2',  category: 'Painting',    title: 'Wall Painting',           gradient: 'from-violet-700 to-purple-900', Icon: PaintBucket, alt: 'Wall painting service example' },
  { id: 'cl-1',  category: 'Cleaning',    title: 'Deep Cleaning',           gradient: 'from-teal-700 to-emerald-900',  Icon: Sparkles,    alt: 'Deep cleaning service example' },
  { id: 'cl-2',  category: 'Cleaning',    title: 'Water Tank Cleaning',     gradient: 'from-emerald-700 to-teal-900',  Icon: Sparkles,    alt: 'Water tank cleaning service example' },
  { id: 'ma-1',  category: 'Maintenance', title: 'General Maintenance',     gradient: 'from-green-700 to-green-900',   Icon: Wrench,      alt: 'General maintenance service example' },
  { id: 'ma-2',  category: 'Maintenance', title: 'Gypsum & Decoration',     gradient: 'from-lime-700 to-green-900',    Icon: Wrench,      alt: 'Gypsum and decoration service example' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');


  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <main>
      <PageSEO
        title="Gallery — Our Work &amp; Services"
        description="View service examples from Amana Care Maintenance in Riyadh — AC, electrical, plumbing, painting, cleaning and general maintenance work."
        canonical="/gallery"
      />
      {/* Hero */}
      <PageHero
        title="Our Work & Services"
        subtitle="Browse representative service examples from Amana Care Maintenance — professional maintenance across Riyadh."
        gradient="from-brand-navy via-brand-dark to-blue-900"
        showRequest={true}
      />

      {/* Gallery */}
      <section className="section-padding bg-white" aria-labelledby="gallery-heading">
        <div className="container-custom">
          <SectionHeading
            badge="Gallery"
            title="Service Examples"
            subtitle="Representative examples of our professional maintenance services in Riyadh. Images are service illustrations."
            id="gallery-heading"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Gallery categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-brand-light text-brand-muted hover:bg-brand-blue/10 hover:text-brand-blue border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <GalleryGrid items={filtered} />

          {/* Disclaimer */}
          <p className="text-center text-brand-muted text-sm mt-8">
            * Images above are representative service examples. Contact us at{' '}
            <a href="tel:0595304358" className="text-brand-blue font-medium hover:underline">0595304358</a>{' '}
            for information about our services.
          </p>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
