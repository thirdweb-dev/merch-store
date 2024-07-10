/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "thirdweb.com",
      },
      {
        protocol: "https",
        hostname: "gelato-api-live.s3.eu-west-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
