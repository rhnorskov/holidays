/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/en",
        destination: "/api/hello",
      },
    ];
  },
};

module.exports = nextConfig;
