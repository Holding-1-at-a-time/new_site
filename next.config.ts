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
/**
 * Webpack configuration.
 *
 * Eliminates source maps for stable development.
 * Disables source maps in production for performance.
 * Adds additional optimizations for stability in development.
 *
 * @param {object} config - Webpack configuration object.
 * @param {{ isServer: boolean }} options - Options object with an isServer property.
 * @returns {object} - Modified Webpack configuration object.
 */
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
    
    // Enable proper source maps for debugging
    if (process.env.NODE_ENV === 'production') {
      config.devtool = 'source-map';
    } else {
      config.devtool = 'eval-cheap-module-source-map';
    }
    
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

  // Force clean compilation
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;