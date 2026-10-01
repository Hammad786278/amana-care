import { Link } from 'react-router-dom';
import { Home, Phone, ArrowLeft } from 'lucide-react';
import PageSEO from '../components/common/PageSEO';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-light flex items-center justify-center px-4" aria-labelledby="notfound-heading">
      <PageSEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Visit Amana Care Maintenance for professional maintenance services in Riyadh."
        canonical="/404"
        noIndex={true}
      />
      <div className="text-center max-w-lg">
        {/* 404 */}
        <div className="text-8xl font-bold text-brand-navy/10 mb-2" aria-hidden="true">404</div>
        <div className="w-16 h-16 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Home size={28} className="text-brand-navy" aria-hidden="true" />
        </div>

        <h1 id="notfound-heading" className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
          Page Not Found
        </h1>
        <p className="text-brand-muted mb-8 leading-relaxed">
          Sorry, the page you are looking for does not exist. Please use the navigation above or contact Amana Care Maintenance directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <a href="tel:0595304358" className="btn-outline inline-flex items-center gap-2 px-6 py-3">
            <Phone size={16} />
            Call 0595304358
          </a>
        </div>

        <p className="text-brand-muted text-sm">
          Need maintenance services in Riyadh?{' '}
          <Link to="/services" className="text-brand-blue hover:underline font-medium">
            View all our services
          </Link>
        </p>
      </div>
    </main>
  );
}
