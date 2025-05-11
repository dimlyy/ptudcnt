/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
};

module.exports = nextConfig;
