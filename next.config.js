

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add assetPrefix for GitHub Pages
  assetPrefix: isGithubActions ? '/Mjd/' : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
