import ServicePageLayout from '../components/sections/ServicePageLayout';
import PageSEO from '../components/common/PageSEO';
import { SERVICES } from '../data/services';
import heroImg from '../assets/images/hero/hero-home.png';

const service = SERVICES.find(s => s.id === 'painting');

export default function Painting() {
  return (
    <>
      <PageSEO
        title="Painting Services in Riyadh"
        description="Professional interior and exterior painting services for homes, offices and commercial properties in Riyadh. Amana Care Maintenance — call 0595304358."
        canonical="/services/painting"
      />
      <ServicePageLayout service={service} image={heroImg} />
    </>
  );
}
