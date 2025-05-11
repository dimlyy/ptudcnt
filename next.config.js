/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  basePath: "/ptudcnt",
};

module.exports = nextConfig;
