import type { Service } from '../../types';

interface LocalBenefitsProps {
  service: Service;
}

export default function LocalBenefits({ service }: LocalBenefitsProps) {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Benefits for San Antonio Drivers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.localBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-gray-200 text-xl">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
