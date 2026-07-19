import type { NextConfig } from "next";

/** Set in GitHub Actions so assets/links work under https://zivsapir.github.io/portfolio/ */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isGithubPages
    ? {
        basePath: "/portfolio",
        assetPrefix: "/portfolio",
      }
    : {}),
};

export default nextConfig;
