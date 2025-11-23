import Link from 'next/link';
import type { Service } from '../../types';
import { businessInfo } from '../../lib/data';

interface HeroSectionProps {
  service: Service;
}

export default function HeroSection({ service }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/file.svg')] bg-repeat" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Service Badge */}
        <div className="inline-block bg-teal-500/20 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-teal-500/30">
          Professional Service • San Antonio TX
        </div>
        
        {/* Large Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {service.name}
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          {service.shortDescription}
        </p>
        
        {/* Pricing and Duration Cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          {/* Pricing Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-sm text-gray-400 mb-1">Starting at</div>
            <div className="text-3xl lg:text-4xl font-bold text-teal-400">
              {service.price}
            </div>
          </div>
          
          {/* Duration Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-sm text-gray-400 mb-1">Duration</div>
            <div className="text-xl lg:text-2xl font-semibold text-white">
              {service.duration}
            </div>
          </div>
        </div>
        
        {/* Primary CTA Button */}
        <div className="mb-16">
          <a
            href={`tel:${businessInfo.phone}`}
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Book Now - Call {businessInfo.phone}
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-16 text-gray-400">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            IDA-Certified
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            10+ Years Experience
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            San Antonio, TX
          </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-teal-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}