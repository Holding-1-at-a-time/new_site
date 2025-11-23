import type { Service } from '../../types';

interface ProcessProps {
  service: Service;
}

export default function Process({ service }: ProcessProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure consistent, professional results every time.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-teal-300"></div>
          
          <div className="space-y-12">
            {service.process.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-teal-500 rounded-full items-center justify-center z-10 border-4 border-white shadow-lg">
                  <span className="text-white font-bold text-lg">{step.id}</span>
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    {/* Mobile Timeline Dot */}
                    <div className="md:hidden flex items-center mb-6">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">{step.id}</span>
                      </div>
                      <div className="h-px bg-teal-300 flex-1"></div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Our Process?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Join hundreds of satisfied customers who trust us with their vehicles.
            </p>
            <a
              href="tel:(726) 207-1007"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Schedule Your Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}