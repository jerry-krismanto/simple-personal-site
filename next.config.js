/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["sanity"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
}

module.exports = nextConfig
