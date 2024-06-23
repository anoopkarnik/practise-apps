/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/ui","@repo/prisma-db","@repo/next-auth-v5"]
};

export default nextConfig;
