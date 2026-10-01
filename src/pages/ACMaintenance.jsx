import ServicePageLayout from '../components/sections/ServicePageLayout';
import PageSEO from '../components/common/PageSEO';
import { SERVICES } from '../data/services';
import heroImg from '../assets/images/hero/hero-ac.png';

const service = SERVICES.find(s => s.id === 'ac-maintenance');

export default function ACMaintenance() {
  return (
    <>
      <PageSEO
        title="AC Maintenance Services in Riyadh"
        description="Professional AC maintenance, installation, repair and cleaning services in Riyadh. Amana Care Maintenance — call 0595304358."
        canonical="/services/ac-maintenance"
      />
      <ServicePageLayout service={service} image={heroImg} />
    </>
  );
}
