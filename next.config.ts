/** @type {import('next').NextConfig} */
const isGhPages = Boolean(process.env.NEXT_PUBLIC_BASE_PATH?.length)

const nextConfig = {
  output: 'export', // penting: biar hasil build jadi static HTML
  images: { unoptimized: true }, // biar image jalan di GitHub Pages
  basePath: isGhPages ? process.env.NEXT_PUBLIC_BASE_PATH : undefined,
  assetPrefix: isGhPages ? process.env.NEXT_PUBLIC_BASE_PATH + '/' : undefined,
}

export default nextConfig
