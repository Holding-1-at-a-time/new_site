import type { Service } from '../../types';
import { businessInfo } from '../../lib/data';

interface ServiceAreasProps {
  service: Service;
}

export default function ServiceAreas({ service }: ServiceAreasProps) {
  // Enhanced neighborhood data with local characteristics
  const neighborhoodInfo: { [key: string]: { description: string; icon: string } } = {
    "San Antonio": { description: "City-wide professional service", icon: "🏙️" },
    "Alamo Heights": { description: "Luxury vehicle specialists", icon: "🏛️" },
    "Terrell Hills": { description: "Premium residential service", icon: "🏡" },
    "Olmos Park": { description: "Historic district expertise", icon: "🏘️" },
    "Leon Valley": { description: "Convenient access location", icon: "🚗" },
    "Castle Hills": { description: "Established neighborhood care", icon: "🏰" },
    "Balcones Heights": { description: "Central San Antonio service", icon: "🏢" },
    "Stone Oak": { description: "High-end community specialists", icon: "💎" },
    "Dominion": { description: "Golf course community service", icon: "⛳" },
    "Shavano Park": { description: "Suburban luxury vehicles", icon: "🌳" },
    "Hollywood Park": { description: "Residential area expertise", icon: "🎬" },
    "Windcrest": { description: "Northeast San Antonio service", icon: "🌬️" }
  };

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Serving Premium San Antonio Neighborhoods
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional {service.name.toLowerCase()} services across San Antonio's most desirable communities. 
            From luxury estates to suburban homes, we bring expert care directly to your neighborhood.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {service.serviceAreas?.map((area, index) => {
            const areaInfo = neighborhoodInfo[area] || { description: "Professional service area", icon: "🚗" };
            
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{areaInfo.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{area}</h3>
                  <p className="text-sm text-gray-400">{areaInfo.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coverage Statistics */}
        <div className="bg-teal-900/20 rounded-2xl p-8 border border-teal-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">12+</div>
              <div className="text-white font-semibold">Premium Neighborhoods</div>
              <div className="text-gray-400 text-sm">San Antonio area coverage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">15min</div>
              <div className="text-white font-semibold">Average Response Time</div>
              <div className="text-gray-400 text-sm">For service inquiries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
              <div className="text-white font-semibold">Local Satisfaction</div>
              <div className="text-gray-400 text-sm">Across all service areas</div>
            </div>
          </div>
        </div>

        {/* Local Benefits Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Why San Antonio Residents Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.localBenefits?.slice(0, 4).map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Don't see your neighborhood listed? We serve the greater San Antonio area!
          </p>
          <a
            href={`tel:${businessInfo.phone.replace(/[^\d]/g, '')}`}
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Call {businessInfo.phone} to Confirm Service in Your Area
          </a>
        </div>

        {/* SEO-Optimized Content */}
        <div className="sr-only">
          <h4>Service Areas for {service.name} in San Antonio Texas</h4>
          <p>Professional {service.name.toLowerCase()} services available in: {service.serviceAreas?.join(', ')} and surrounding San Antonio metro area neighborhoods.</p>
        </div>
      </div>
    </section>
  );
}