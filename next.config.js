/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

module.exports = withMDX(nextConfig)
