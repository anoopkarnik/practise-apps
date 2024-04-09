/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/ui","@repo/next-auth",'@repo/prisma-db','@repo/recoil-store'],
};

export default nextConfig;
