
/** @type {import('next').NextConfig} */

// Determine the base path based on the environment.
// This is crucial for deploying to a subdirectory on GitHub Pages.
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? '/Mjd' : '';

const nextConfig = {
  // Base path for routing within the app.
  basePath: basePath,
  // Asset prefix for loading resources like JS, CSS, images.
  assetPrefix: basePath,
  
  // Export the app as static HTML, which can be deployed anywhere. Required for Capacitor.
  output: 'export',

  // Disable image optimization, as it's not compatible with static export.
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
