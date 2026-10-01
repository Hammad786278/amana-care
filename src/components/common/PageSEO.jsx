import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Amana Care Maintenance';
const BASE_URL  = 'https://amanacaremaintenance.com'; // update when domain is known
const DEFAULT_OG_IMAGE = '/og-image.jpg'; // place a 1200x630 image in /public

/**
 * PageSEO — Helmet-based SEO component used on every page.
 *
 * Props:
 *   title        — Page <title>. Appended with " | Amana Care Maintenance"
 *   description  — Meta description (max ~160 chars recommended)
 *   canonical    — Canonical URL path, e.g. "/services/ac-maintenance"
 *   ogImage      — Open Graph image URL (absolute), falls back to default
 *   noIndex      — Set true for 404 or private pages
 */
export default function PageSEO({
  title,
  description,
  canonical = '/',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}) {
  const fullTitle    = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      {/* ── Primary Meta ──────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description"      content={description} />
      <meta name="robots"           content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical"         href={canonicalUrl} />

      {/* ── Open Graph (Facebook / WhatsApp / LinkedIn) ───── */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:image"       content={ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`} />
      <meta property="og:locale"      content="en_SA" />

      {/* ── Twitter Card ──────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`} />

      {/* ── Geo / Local Business ──────────────────────────── */}
      <meta name="geo.region"    content="SA-01" />
      <meta name="geo.placename" content="Riyadh" />
      <meta name="language"      content="English" />
    </Helmet>
  );
}
