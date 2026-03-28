import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/LD-Redesign-optie1" : "",
  assetPrefix: isGithubPages ? "/LD-Redesign-optie1/" : "",
};

export default nextConfig;
