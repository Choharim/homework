/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/category',
        destination: '/category/all',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
