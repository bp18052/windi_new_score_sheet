/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
