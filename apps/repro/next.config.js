const { join } = require('path');

const withTM = require('next-transpile-modules')(['ui']);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
    outputFileTracingRoot: join(__dirname, '../../'),
  },
  swcMinify: true,
});
