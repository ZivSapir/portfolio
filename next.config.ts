import type { NextConfig } from "next";

/** Set in GitHub Actions so assets/links work under https://zivsapir.github.io/portfolio/ */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    // Used by resolveMedia for <img>/<video> src (Image does not always prefix on static export)
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
