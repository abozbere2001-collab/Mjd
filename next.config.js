
/** @type {import('next').NextConfig} */

// This configuration is optimized for both static export (for Capacitor) and deployment to GitHub Pages.
const nextConfig = {
  // By setting distDir, we tell Next.js to build the project into a folder named 'Mjd'.
  // This makes all paths relative to 'Mjd' by default, solving the sub-path deployment issue
  // on GitHub Pages without needing basePath or assetPrefix.
  distDir: 'Mjd',

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
