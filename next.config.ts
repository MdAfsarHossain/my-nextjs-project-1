import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // OPTION-1:
  //   images: {
  //   remotePatterns: [new URL('https://images.unsplash.com/photo-1542683305-710078a12f73?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')],
  // },

  // OPTION-2:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**' // allow all url
      },
    ],
  },
};

export default nextConfig;
