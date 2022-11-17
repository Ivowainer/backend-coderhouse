/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['d22fxaf9t8d39k.cloudfront.net', 'd2r9epyceweg5n.cloudfront.net', 'd3ugyf2ht6aenh.cloudfront.net'],
  },
}

module.exports = nextConfig
