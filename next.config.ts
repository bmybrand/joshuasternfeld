import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    const slugs = [
      "winter-solstice",
      "meskada",
      "market-trip",
      "amy-makes-three",
      "peloton",
      "fortress-snipers-eye",
      "civic-architecture",
    ];

    return [
      ...slugs.map((slug) => ({
        source: `/projects/${slug}`,
        destination: `/${slug}`,
        permanent: true,
      })),
      {
        source: "/projects/showreel",
        destination: "/showreel",
        permanent: true,
      },
      {
        source: "/civic-architecture.html",
        destination: "/civic-architecture",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
