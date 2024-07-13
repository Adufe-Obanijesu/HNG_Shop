/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.timbu.cloud',
        pathname: '/images/arries-place/**',
      },
    ],
  },
};

export default nextConfig;
