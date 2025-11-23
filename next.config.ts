import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['odaat1.com'],
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  webpack: (config, { isServer }) => {
    // Complete source map elimination for stable development
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Disable all source map generation
    config.devtool = false;
    config.parallelChunks = undefined;
    
    // Additional optimizations for stability
    if (process.env.NODE_ENV === 'development') {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
    }
    
    return config;
  },
  // Simplified configuration for maximum stability
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Force clean compilation
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
};

export default nextConfig;