/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["www.notion.so", "github.com"],
  },
};

module.exports = nextConfig;
