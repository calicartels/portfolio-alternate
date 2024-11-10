/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// next.config.js
module.exports = {
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};
