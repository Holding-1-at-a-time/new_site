'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  initial: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

// Replace these with your actual 28 Google reviews
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    initial: 'M',
    rating: 5,
    text: 'Robert did an amazing job on my car! The attention to detail is incredible. My vehicle looks better than when I first bought it. Highly recommend One Detail At A Time!',
    service: 'Full Detail Package',
    date: '2 months ago',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    initial: 'S',
    rating: 5,
    text: 'Best detailing service in San Antonio! The ceramic coating has kept my car looking showroom fresh. Worth every penny. Robert is a true professional.',
    service: 'Ceramic Coating',
    date: '3 months ago',
  },
  {
    id: 3,
    name: 'David Chen',
    initial: 'D',
    rating: 5,
    text: 'Professional, punctual, and meticulous. Robert transformed my interior from disaster to pristine. The stains I thought were permanent are completely gone!',
    service: 'Interior Deep Cleansing',
    date: '1 month ago',
  },
  {
    id: 4,
    name: 'Jennifer Martinez',
    initial: 'J',
    rating: 5,
    text: 'IDA certified and it shows! The paint correction removed years of swirls and scratches. My black car finally has that deep mirror finish I wanted.',
    service: 'Paint Correction',
    date: '4 months ago',
  },
  {
    id: 5,
    name: 'Alex Thompson',
    initial: 'A',
    rating: 5,
    text: 'Supporting local business and getting the best service - perfect! Love that 10% goes to Junior Achievement. Will be a repeat customer for life.',
    service: 'Exterior Hand Wash & Sealant',
    date: '2 weeks ago',
  },
  {
    id: 6,
    name: 'Lisa Patel',
    initial: 'L',
    rating: 5,
    text: 'My headlights were so foggy I could barely see at night. Now they look brand new and driving is so much safer! Robert is an artist.',
    service: 'Headlight Restoration',
    date: '3 weeks ago',
  },
  { id: 7, name: 'Emily White', initial: 'E', rating: 5, text: 'The Full Detail Package was worth every penny. My car is spotless inside and out. It feels like a brand new vehicle again!', service: 'Full Detail Package', date: '1 month ago' },
  { id: 8, name: 'James Green', initial: 'J', rating: 5, text: 'I was skeptical about paint correction, but the results are undeniable. All the fine scratches and swirls are gone. Amazing work!', service: 'Paint Correction', date: '5 months ago' },
  { id: 9, name: 'Jessica Black', initial: 'J', rating: 4, text: 'Great job on the interior. My kids made a huge mess and now it looks great. A few tough spots remain but overall I\'m very happy.', service: 'Interior Deep Cleansing', date: '2 months ago' },
  { id: 10, name: 'Chris Brown', initial: 'C', rating: 5, text: 'The headlight restoration made a huge difference. Night driving is so much safer now. Quick, professional, and effective service.', service: 'Headlight Restoration', date: '6 weeks ago' },
  { id: 11, name: 'Amanda Blue', initial: 'A', rating: 5, text: 'The ceramic coating is a game changer. Water just beads up and rolls off. My car stays cleaner for longer. Highly recommended!', service: 'Ceramic Coating', date: '6 months ago' },
  { id: 12, name: 'Kevin Gray', initial: 'K', rating: 5, text: 'An exterior hand wash has never looked this good. The sealant they used gives it a beautiful shine. Will be back for sure.', service: 'Exterior Hand Wash & Sealant', date: '3 weeks ago' },
  { id: 13, name: 'Laura Pink', initial: 'L', rating: 5, text: 'I\'m so impressed with the Full Detail Package. The level of detail is just incredible. Robert is a true artist with a passion for cars.', service: 'Full Detail Package', date: '2 months ago' },
  { id: 14, name: 'Brian Purple', initial: 'B', rating: 5, text: 'My car\'s paint was in rough shape. The paint correction service brought it back to life. Looks better than it did from the factory.', service: 'Paint Correction', date: '7 months ago' },
  { id: 15, name: 'Megan Orange', initial: 'M', rating: 5, text: 'Spilled a whole coffee in my car and thought the stain was permanent. The Interior Deep Cleansing made it disappear completely. Magic!', service: 'Interior Deep Cleansing', date: '1 month ago' },
  { id: 16, name: 'Steven Yellow', initial: 'S', rating: 5, text: 'Foggy headlights were making my car look old. The restoration service made them crystal clear. It took years off the car\'s look.', service: 'Headlight Restoration', date: '5 weeks ago' },
  { id: 17, name: 'Rachel Indigo', initial: 'R', rating: 5, text: 'The ceramic coating is phenomenal. Not only does it look great, but it also protects the paint. Robert\'s application was flawless.', service: 'Ceramic Coating', date: '8 months ago' },
  { id: 18, name: 'Paul Violet', initial: 'P', rating: 4, text: 'A very thorough exterior wash. The sealant is holding up well. Good value for the price. Would recommend.', service: 'Exterior Hand Wash & Sealant', date: '1 month ago' },
  { id: 19, name: 'Brenda Teal', initial: 'B', rating: 5, text: 'Got the Full Detail Package for my wife as a gift and she was thrilled. The car looks and smells amazing. Thank you, Robert!', service: 'Full Detail Package', date: '3 months ago' },
  { id: 20, name: 'Gary Gold', initial: 'G', rating: 5, text: 'I\'m a repeat customer for a reason. The paint correction is top-notch. Robert has an incredible eye for detail.', service: 'Paint Correction', date: '9 months ago' },
  { id: 21, name: 'Fiona Silver', initial: 'F', rating: 5, text: 'The interior of my minivan was a disaster zone thanks to my toddlers. Now it looks and smells brand new. I am so grateful!', service: 'Interior Deep Cleansing', date: '4 months ago' },
  { id: 22, name: 'Tom Bronze', initial: 'T', rating: 5, text: 'Don\'t replace your headlights, restore them! The difference is night and day. Robert did a fantastic job.', service: 'Headlight Restoration', date: '2 months ago' },
  { id: 23, name: 'Tina Copper', initial: 'T', rating: 5, text: 'After getting the ceramic coating, I\'m spending less time washing my car and more time admiring it. The gloss is unreal!', service: 'Ceramic Coating', date: '10 months ago' },
  { id: 24, name: 'Henry Platinum', initial: 'H', rating: 5, text: 'The Exterior Hand Wash & Sealant service is the best in town. The attention to detail is unmatched. My car has never looked better.', service: 'Exterior Hand Wash & Sealant', date: '2 weeks ago' },
  { id: 25, name: 'Irene Diamond', initial: 'I', rating: 5, text: 'My car was in desperate need of a deep clean. The Full Detail Package was exactly what it needed. It looks incredible!', service: 'Full Detail Package', date: '5 months ago' },
  { id: 26, name: 'Jack Ruby', initial: 'J', rating: 5, text: 'The swirl marks on my car were driving me crazy. The paint correction service made them vanish. The paint is like a mirror now.', service: 'Paint Correction', date: '11 months ago' },
  { id: 27, name: 'Karen Sapphire', initial: 'K', rating: 5, text: 'I was embarrassed by the state of my car\'s interior. Now I\'m proud of it. The deep cleansing service is a must-have.', service: 'Interior Deep Cleansing', date: '6 months ago' },
  { id: 28, name: 'Larry Emerald', initial: 'L', rating: 5, text: 'My headlights were yellow and cloudy. Now they are crystal clear. The restoration service is a great value.', service: 'Headlight Restoration', date: '3 months ago' },
];

export default function Testimonials3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleCardClick = (index: number) => {
    if (index !== activeIndex && !isAnimating) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absIndex = Math.abs(diff);
    const isActive = index === activeIndex;

    if (absIndex > 2) {
      return { display: 'none' };
    }

    const translateZ = isActive ? 0 : -absIndex * 150;
    const translateX = diff * 120;
    const scale = isActive ? 1 : 1 - absIndex * 0.15;
    const opacity = isActive ? 1 : 1 - absIndex * 0.3;
    const rotateY = diff * 15;

    return {
      transform: `translateX(${translateX}%) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex: 100 - absIndex,
    };
  };

  return (
    <>
      <section className="py-32 bg-gray-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xl text-gray-400">28 Five-Star Reviews Since 2019</p>
            <p className="text-lg text-gray-500">One Detail At A Time LLC</p>
          </div>

          {/* 3D Carousel */}
          <div
            className="relative h-[500px] mb-12"
            style={{ perspective: '2000px' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="absolute w-full max-w-2xl transition-all duration-700 ease-out cursor-pointer"
                  style={getCardStyle(index)}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-primary transition-colors shadow-2xl">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg shadow-primary/30">
                        {testimonial.initial}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{testimonial.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm text-gray-400">{testimonial.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="px-3 py-1 bg-primary/10 text-primary rounded-lg border border-primary/30">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                className={`transition-all ${index === activeIndex
                  ? 'w-12 h-3 bg-primary'
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                  } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Google Review Link */}
          <div className="text-center mt-12">
            <a
              href="https://g.page/r/EWNPodM6yvzsEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>
    </>

  );
}