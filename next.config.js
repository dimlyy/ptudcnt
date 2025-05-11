/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
};

module.exports = nextConfig;
