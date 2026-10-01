import ServicePageLayout from '../components/sections/ServicePageLayout';
import PageSEO from '../components/common/PageSEO';
import { SERVICES } from '../data/services';
import heroImg from '../assets/images/hero/hero-electrical.png';

const service = SERVICES.find(s => s.id === 'electrical');

export default function Electrical() {
  return (
    <>
      <PageSEO
        title="Electrical Services in Riyadh"
        description="Professional electrical fault repair, installation and maintenance services in Riyadh. Amana Care Maintenance — call 0595304358."
        canonical="/services/electrical"
      />
      <ServicePageLayout service={service} image={heroImg} />
    </>
  );
}
