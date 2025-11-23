import type { Service } from '../../types';

interface WhatsIncludedProps {
  service: Service;
}

export default function WhatsIncluded({ service }: WhatsIncludedProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What's Included
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for professional results. Our comprehensive service includes:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.includes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-teal-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-teal-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Value Statement */}
        <div className="mt-16 text-center">
          <div className="bg-teal-50 rounded-2xl p-8 border border-teal-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Quality Guaranteed
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Every service includes our commitment to excellence. We use only premium products and proven techniques to ensure your vehicle receives the best possible care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}