import type { Service } from '../../types';

interface ServiceAreasProps {
  service: Service;
}

export default function ServiceAreas({ service }: ServiceAreasProps) {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Serving Greater San Antonio</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {service.serviceAreas?.map((area, index) => (
            <div key={index} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <p className="text-gray-300">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
