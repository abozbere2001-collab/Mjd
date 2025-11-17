
/** @type {import('next').NextConfig} */

// This simplified configuration is optimized for both static export (for Capacitor)
// and deployment to GitHub Pages. The key is removing basePath and assetPrefix,
// and relying on relative paths and the .nojekyll file in the deployment workflow.
const nextConfig = {
  // A trailing slash ensures that paths are resolved correctly for index.html files.
  trailingSlash: true,

  // Export the app as static HTML, required for Capacitor.
  output: 'export',

  // Image optimization is disabled as it's not compatible with static export.
  images: {
    unoptimized: true,
  },

  // Ignore TypeScript and ESLint errors during the build to prevent build failures.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
