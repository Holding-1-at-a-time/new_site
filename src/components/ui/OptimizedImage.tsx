'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '../../lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  localSEO?: {
    city?: string;
    state?: string;
    serviceType?: string;
    keywords?: string[];
  };
  onLoad?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  caption,
  className,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  fill = false,
  width,
  height,
  loading = 'lazy',
  localSEO,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Generate SEO-optimized alt text with local keywords
  const generateSEOAltText = useCallback((originalAlt: string): string => {
    if (!localSEO) return originalAlt;
    
    const { city = 'San Antonio', state = 'TX', serviceType, keywords = [] } = localSEO;
    
    let seoAlt = originalAlt;
    
    // Add service type if provided
    if (serviceType) {
      seoAlt = `${serviceType} ${seoAlt}`;
    }
    
    // Add location context
    seoAlt += ` in ${city}, ${state}`;
    
    // Add relevant keywords
    if (keywords.length > 0) {
      seoAlt += ` - ${keywords.slice(0, 3).join(', ')}`;
    }
    
    return seoAlt;
  }, [localSEO]);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setImageError(true);
    onError?.();
  }, [onError]);

  const seoAltText = generateSEOAltText(alt);

  return (
    <figure className={cn('relative overflow-hidden rounded-lg bg-gray-100', className)}>
      {/* Image Container */}
      <div className={cn('relative', fill ? 'h-full w-full' : '')}>
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        
        {imageError && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm">Image unavailable</p>
            </div>
          </div>
        )}

        <Image
          src={src}
          alt={seoAltText}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'transition-opacity duration-300',
            imageLoaded ? 'opacity-100' : 'opacity-0'
          )}
          // Add structured data for images
          itemProp="contentUrl"
        />
      </div>

      {/* Image Caption with local SEO */}
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 leading-relaxed">
          {caption}
          {localSEO && (
            <span className="block text-xs text-gray-500 mt-1">
              Professional {localSEO.serviceType?.toLowerCase()} services in {localSEO.city}, {localSEO.state}
            </span>
          )}
        </figcaption>
      )}

      {/* Hidden SEO div for additional metadata */}
      {localSEO && (
        <div className="sr-only">
          <span itemProp="locationCreated">{localSEO.city}, {localSEO.state}</span>
          <span itemProp="serviceType">{localSEO.serviceType}</span>
        </div>
      )}
    </figure>
  );
}