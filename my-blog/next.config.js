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
        source: '/category/:category*',
        has: [
          {
            type: 'query',
            key: 'page',
            value: '(?<page>.*)',
          },
        ],
        destination: '/category/:category*/:page',
      },
      {
        source: '/category/:category',
        destination: '/category/:category/1',
      },

      {
        source: '/search/:search*',
        has: [
          {
            type: 'query',
            key: 'page',
            value: '(?<page>.*)',
          },
        ],
        destination: '/search/:search*/:page',
      },
      {
        source: '/search/:search',
        destination: '/search/:search/1',
      },
    ];
  },
};

module.exports = nextConfig;
