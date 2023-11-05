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
          {
            protocol: 'https',
            hostname: 'cdn.getyourguide.com',
            port: '',
            pathname: '/img/**',
          },
          {
            protocol: 'https',
            hostname: 'dynamic-media-cdn.tripadvisor.com',
            port: '',
            pathname: '/media/**',
          },
          {
            protocol: 'https',
            hostname: 'static.apidae-tourisme.com',
            port: '',
            pathname: '/filestore/**',
          },
          {
            protocol: 'https',
            hostname: 'lespepitesdefrance.com',
            port: '',
            pathname: '/wp-content/**',
          },
          {
            protocol: 'https',
            hostname: 'woody.cloudly.space',
            port: '',
            pathname: '/app/**',
          },
          {
            protocol: 'https',
            hostname: 'www.opera-nice.org',
            port: '',
            pathname: '/media/**',
          },
          {
            protocol: 'https',
            hostname: 'medias.lejourduseigneur.com',
            port: '',
            pathname: '/2023/**',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/hzekpb1cg/**',
          },
          {
            protocol: 'https',
            hostname: 'www.marseille-tourisme.com',
            port: '',
            pathname: '/app/**',
          },
          {
            protocol: 'https',
            hostname: 'www.calanques-if.com',
            port: '',
            pathname: '/uploads/**',
          }
        ],
      },
};

module.exports = nextConfig;