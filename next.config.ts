import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "standalone",
  async redirects() {
    const slugs = [
      "winter-solstice",
      "meskada",
      "market-trip",
      "amy-makes-three",
      "showreel",
      "peloton",
      "fortress-snipers-eye",
      "civic-architecture",
    ];

    return [
      ...slugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/projects/${slug}`,
        permanent: true,
      })),
      {
        source: "/civic-architecture.html",
        destination: "/projects/civic-architecture",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
