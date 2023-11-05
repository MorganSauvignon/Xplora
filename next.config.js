/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cdn.getyourguide.com',
            port: '',
            pathname: '/img/**',
        },
          {
            protocol: 'https',
            hostname: 'frenchriviera.travel',
            port: '',
            pathname: '/wp-content/**',
          },
          {
            protocol: 'https',
            hostname: 'www.nice.fr',
            port: '',
            pathname: '/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'www.geolithe.fr',
            port: '',
            pathname: '/wp-content/**',
          },
          {
            protocol: 'https',
            hostname: 'www.francebleu.fr',
            port: '',
            pathname: '/s3/**',
          },
        ],
      },
};

module.exports = nextConfig;