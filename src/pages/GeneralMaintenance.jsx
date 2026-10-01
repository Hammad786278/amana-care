import ServicePageLayout from '../components/sections/ServicePageLayout';
import PageSEO from '../components/common/PageSEO';
import { SERVICES } from '../data/services';
import heroImg from '../assets/brand/team-reference.jpeg';

const service = SERVICES.find(s => s.id === 'general-maintenance');

export default function GeneralMaintenance() {
  return (
    <>
      <PageSEO
        title="General Maintenance Services in Riyadh"
        description="Complete general maintenance services for homes, offices and commercial properties in Riyadh. Gypsum, water tanks, kitchen, bathroom and more. Call 0595304358."
        canonical="/services/general-maintenance"
      />
      <ServicePageLayout service={service} image={heroImg} />
    </>
  );
}
