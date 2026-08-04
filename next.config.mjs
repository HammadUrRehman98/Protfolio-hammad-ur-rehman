/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits a fully static site to ./out. Drop that folder straight onto
  // Cloudflare Pages (build command: `npm run build`, output dir: `out`).
  output: 'export',

  // Cloudflare Pages serves /work/ style URLs; trailing slashes keep the
  // exported HTML files and the served URLs in agreement.
  trailingSlash: true,

  // The export target has no Node image optimizer at runtime.
  images: { unoptimized: true },

  // Strip the `x-powered-by: Next.js` fingerprint.
  poweredByHeader: false,

  // Emit real filenames for changed chunks only, so long-lived CDN caches hit.
  productionBrowserSourceMaps: false,
};

export default nextConfig;
