/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['static3.agimonline.com', 'localhost', 'affitti-co.it'],
  },
};

module.exports = nextConfig; 