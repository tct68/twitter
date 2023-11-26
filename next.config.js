/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'pbs.twimg.com',
        port: '',
        protocol: 'https',
      }
    ]
  }
}

module.exports = nextConfig
