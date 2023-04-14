/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    HOST: process.env.HOST,
  },
};

module.exports = nextConfig;
