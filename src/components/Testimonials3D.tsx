'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Robert Romero Jr',
    initial: 'R',
    rating: 5,
    text: 'Best private professional detailer I\'ve had in San Antonio yet. The results were way beyond my expectations, his professionalism was on point paired with the communication skills which I\'ve never had before with other detailing businesses. He would text me updates frequently through out the day of service. Thank you ODAAT for making my ride look clean AF!',
    service: 'Professional Auto Detailing',
    date: '3 years ago',
  },
  {
    id: 2,
    name: 'Kian 1117',
    initial: 'K',
    rating: 5,
    text: 'I absolutely love the way my car smells and how it turned out. I would give this more stars if I could because of how much my car transformed from dirty to clean. Thank you so much Robert, he was amazing at his job and even shined up my...',
    service: 'Interior Detail',
    date: '4 weeks ago',
  },
  {
    id: 3,
    name: 'Emily Seargeant',
    initial: 'E',
    rating: 5,
    text: 'I was in desperate need of an interior detail with a short suspense date. I brought Robert a 2020 Toyota Sienna that had been used as a daily driver for a family of 6 with 4 kids under 10. Please make no mistake. The van was an utter mess and Robert worked miracles...',
    service: 'Interior Deep Clean',
    date: '2 years ago',
  },
  {
    id: 4,
    name: 'Hybrid Pokemon',
    initial: 'H',
    rating: 5,
    text: 'I would give 10 stars if I could! He really puts detail into everything and loves what he does and is such a nice dude. Let me sit down get food and water and made me feel more like family than a customer I\'m so grateful to be a customer of Robert\'s and WILL be coming back. 5 star business. 5 star person. 10 stars',
    service: 'Full Service Detail',
    date: '5 months ago',
  },
  {
    id: 5,
    name: 'Madison Springer',
    initial: 'M',
    rating: 5,
    text: 'I brought my car in quite dirty. It had water spots that I could never get out with a car wash anymore. One Detail at a Time gave my car new life! I scheduled an exterior detail, including clay bar treatment. When I picked it up it was like driving a brand new car!',
    service: 'Exterior Detail + Clay Bar',
    date: '3 years ago',
  },
  {
    id: 6,
    name: 'Nicholas Boudewijn',
    initial: 'N',
    rating: 5,
    text: 'Robert single handedly exceeded every conceivable expectation I had. His extraordinary level of thoroughness and attention to detail transformed my 19 year old Buick from the stain and odor ridden vehicle I dropped off into an elegant piece of automotive art.',
    service: 'Complete Restoration Detail',
    date: '4 years ago',
  },
  {
    id: 7,
    name: 'Raymond Longinos',
    initial: 'R',
    rating: 5,
    text: 'If you\'re looking for a detail done this is the man to go to. Rob is very honest, courteous and respectful. He answered all of my questions and concerns thoroughly with a game plan to provide me solutions I was looking for my vehicle. I will def use his detail services again in the future - thanks for being awesome Rob!',
    service: 'Professional Consultation + Detail',
    date: '2 years ago',
  },
  {
    id: 8,
    name: 'Elise Kibler',
    initial: 'E',
    rating: 5,
    text: 'I never knew my car could look and smell this good!!!! 210k miles and 2 kids later and car looks brand new!! I am so grateful!!!!!',
    service: 'High-Mileage Restoration',
    date: '2 years ago',
  },
];

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center" role="img" aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }, (_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'text-teal-400' : 'text-gray-600'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when carousel is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the carousel is visible
        rootMargin: '50px', // Start animation slightly before it comes into view
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Auto-rotation effect - only when visible
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible]);

  // Navigation functions

  const goToSlide = useCallback((index: number) => {
    // Clear any existing timeout
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }

    setCurrentIndex(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 10 seconds
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
      autoPlayTimeoutRef.current = null;
    }, 10000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  }, []);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800" aria-label="Customer testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <StarRating rating={5} />
            <span className="text-lg font-semibold text-white ml-2">5.0</span>
            <span className="text-gray-400">(28 reviews)</span>
            <a
              href="#google-reviews"
              className="text-teal-400 hover:text-teal-300 ml-2 underline"
              aria-label="View all Google reviews"
            >
              View on Google
            </a>
          </div>
        </div>

        {/* 3D Testimonials Carousel */}
        <div
          ref={carouselRef}
          className="relative testimonials-3d max-w-4xl mx-auto h-96 md:h-[500px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Testimonials carousel"
        >
          <div
            className={`relative w-full h-full testimonial-carousel ${
              isVisible ? 'is-visible' : ''
            } ${
              isAutoPlaying ? '' : 'paused'
            }`}
            style={{
              transform: `rotateY(${-currentIndex * (360 / TESTIMONIALS.length)}deg)`,
            }}
          >
            {TESTIMONIALS.map((testimonial, index) => {
              const rotation = (index * 360) / TESTIMONIALS.length;
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-full h-full testimonial-card ${
                    isActive ? 'active' : 'inactive'
                  }`}
                  style={{
                    transform: `rotateY(${rotation}deg) translateZ(${
                      isActive ? '300px' : '150px'
                    })`,
                  }}
                  onClick={() => goToSlide(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View testimonial from ${testimonial.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      goToSlide(index);
                    }
                  }}
                >
                  <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 h-full flex flex-col justify-center shadow-2xl hover:border-teal-500/50 transition-all duration-300">
                    {/* Testimonial Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {testimonial.initial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center gap-3 mb-2">
                          <StarRating rating={testimonial.rating} />
                          <span className="text-sm text-gray-400">{testimonial.date}</span>
                        </div>
                        <p className="text-sm text-teal-400 font-medium">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-300 text-base md:text-lg leading-relaxed flex-1">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-3" role="navigation" aria-label="Testimonials navigation">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-teal-400 dot-active'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-pressed={index === currentIndex}
            />
          ))}
        </div>

        {/* Navigation Arrows for desktop */}
        <div className="hidden md:block">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-400 hover:text-white text-sm underline"
            aria-label={isAutoPlaying ? 'Pause auto-rotation' : 'Resume auto-rotation'}
          >
            {isAutoPlaying ? 'Pause Auto-rotation' : 'Resume Auto-rotation'}
          </button>
        </div>
      </div>
    </section>
  );
}