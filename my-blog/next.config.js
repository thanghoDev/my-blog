/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co'],
  },
  async rewrites() {
    return [
      {
        source: '/category/:category',
        destination: '/category/:category/1',
      },
    ];
  },
};

module.exports = nextConfig;
