/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/ui","@repo/next-auth","@repo/prisma-db"],
    images: {
        domains: ['raw.githubusercontent.com']
    }
};

export default nextConfig;
