import ServicePageLayout from '../components/sections/ServicePageLayout';
import PageSEO from '../components/common/PageSEO';
import { SERVICES } from '../data/services';

const service = SERVICES.find(s => s.id === 'plumbing');

export default function Plumbing() {
  return (
    <>
      <PageSEO
        title="Plumbing Services in Riyadh"
        description="Professional plumbing services including water leakage repair, pipe work and drainage in Riyadh. Amana Care Maintenance — call 0595304358."
        canonical="/services/plumbing"
      />
      <ServicePageLayout service={service} />
    </>
  );
}
