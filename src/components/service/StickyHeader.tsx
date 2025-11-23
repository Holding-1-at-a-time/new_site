import Link from 'next/link';
import { businessInfo } from '../../lib/data';

interface StickyHeaderProps {
  serviceName: string;
}

export default function StickyHeader({ serviceName }: StickyHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Back to Services Link */}
          <Link
            href="/services"
            className="flex items-center text-gray-300 hover:text-teal-400 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Services
          </Link>

          {/* Service Name */}
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold text-white truncate max-w-xs">
              {serviceName}
            </h1>
          </div>

          {/* Phone CTA Button */}
          <a
            href={`tel:${businessInfo.phone}`}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {businessInfo.phone}
          </a>
        </div>
      </div>
    </div>
  );
}