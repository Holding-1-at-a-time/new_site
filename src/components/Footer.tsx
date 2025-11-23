import Link from 'next/link';
import { businessInfo } from '../lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-teal-400 mb-4">
              One Detail At A Time
            </div>
            <p className="text-gray-300 mb-4">
              Professional car detailing services in San Antonio, TX. We bring your vehicle back to showroom condition with attention to every detail.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 mr-3 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {businessInfo.address}, {businessInfo.city}, {businessInfo.state} {businessInfo.zipCode}
              </div>
              <div className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 mr-3 text-teal-400"
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
              </div>
              <div className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 mr-3 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {businessInfo.email}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Services
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-teal-400 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <div className="space-y-2">
              <Link href="/services/exterior-hand-wash-sealant" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Exterior Hand Wash
              </Link>
              <Link href="/services/interior-deep-cleansing" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Interior Deep Cleaning
              </Link>
              <Link href="/services/paint-correction" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Paint Correction
              </Link>
              <Link href="/services/ceramic-coating" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Ceramic Coating
              </Link>
              <Link href="/services/headlight-restoration" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Headlight Restoration
              </Link>
              <Link href="/services/full-detail-package" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Full Detail Package
              </Link>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 text-sm">
            {Object.entries(businessInfo.hours).map(([day, hours]) => (
              <div key={day} className="text-gray-300">
                <div className="capitalize font-medium text-white">{day}</div>
                <div>{hours}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} {businessInfo.name}. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Licensed & Insured</span>
            <span className="text-gray-400 text-sm">San Antonio, TX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}