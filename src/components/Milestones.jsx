'use client';

import { useState, useEffect, useRef } from 'react';

const milestoneCards = [
  { img: '/images/Kota-Satu-24-September-2024.webp', alt: 'Milestone 2012 - Pendirian Perusahaan' },
  { img: '/images/Kota-Satu-24-September-2024-1.png', alt: 'Milestone 2013 - Pengembangan Amaya Home Resort' },
  { img: '/images/Kota-Satu-24-September-2024-2.png', alt: 'Milestone 2014 - Pendirian PT Persada & Manajemen' },
  { img: '/images/Kota-Satu-24-September-2024-3.png', alt: 'Milestone 2014 - Allstay Hotel Semarang & Yogyakarta' },
  { img: '/images/Kota-Satu-24-September-2024-4.png', alt: 'Milestone 2014 - Rumah Fase 1 Amaya' },
  { img: '/images/Kota-Satu-24-September-2024-5.png', alt: 'Milestone 2015 - Rumah Fase 2 Amaya' },
  { img: '/images/Kota-Satu-24-September-2024-10.png', alt: 'Milestone 2016 - Fase 3 Amaya' },
  { img: '/images/Kota-Satu-24-September-2024-8.png', alt: 'Milestone 2016 - Beroperasi Allstay Hotel' },
  { img: '/images/Kota-Satu-24-September-2024-9.png', alt: 'Milestone 2017 - Holding Company' },
  { img: '/images/Kota-Satu-24-September-2024-7.png', alt: 'Milestone 2018 - IPO di Bursa Efek Indonesia' },
  { img: '/images/Kota-Satu-24-September-2024-6-1.png', alt: 'Milestone 2021 - MOU Bumi Sekartama' },
];

// Tripled for seamless infinite looping
const extendedItems = [...milestoneCards, ...milestoneCards, ...milestoneCards];

export default function Milestones() {
  const [currentIndex, setCurrentIndex] = useState(milestoneCards.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const autoPlayRef = useRef(null);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2.5);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(4);
      } else {
        setVisibleCount(6);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay function - slides every 2.5 seconds
  useEffect(() => {
    if (isHovered) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isHovered]);

  // Handle wrap-around when reaching ends
  const handleTransitionEnd = () => {
    if (currentIndex >= milestoneCards.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - milestoneCards.length);
    } else if (currentIndex < milestoneCards.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + milestoneCards.length);
    }
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section 
      id="milestone" 
      className="py-10 bg-white relative overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1B477A]/85 hover:bg-[#1B477A] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 focus:outline-none"
          aria-label="Previous Milestone"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1B477A]/85 hover:bg-[#1B477A] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 focus:outline-none"
          aria-label="Next Milestone"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden py-4">
          <div
            className="flex"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
              transition: isTransitioning ? 'transform 650ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedItems.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-2 sm:px-3 flex items-center justify-center"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="w-full max-w-[170px] cursor-pointer transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-auto object-contain block drop-shadow-sm pointer-events-none"
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
