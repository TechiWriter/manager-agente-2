/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_DB_ID: process.env.NOTION_DB_ID,
  },
}
export default nextConfig
