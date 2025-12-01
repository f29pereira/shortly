import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static export for GitHub Pages
  basePath: "/shortly",
  assetPrefix: "/shortly/", // Prefix assets with repo path
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

export default nextConfig;
