'use client';

import { useState } from 'react';
import type { Service } from '../../types';
import { businessInfo } from '../../lib/data';

interface FAQAccordionProps {
  service: Service;
}

export default function FAQAccordion({ service }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our {service.name.toLowerCase()} service.
          </p>
        </div>
        
        <div className="space-y-4">
          {service.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-teal-600 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-teal-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-teal-50 rounded-2xl p-8 border border-teal-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Get in touch with us directly for personalized answers about your vehicle care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessInfo.phone?.replace(/[^\d]/g, '') ?? ''}`}
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Call {businessInfo.phone ?? 'Us'}
              </a>
              <a
                href={`mailto:${businessInfo.email}`}
                className="inline-block border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}