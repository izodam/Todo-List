import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["sprint-fe-project.s3.ap-northeast-2.amazonaws.com"], // 외부 도메인 추가
  },
};

export default nextConfig;
