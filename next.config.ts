import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
