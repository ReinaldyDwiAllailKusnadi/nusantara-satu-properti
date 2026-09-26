'use client';

import { useState, useEffect, useRef } from 'react';

const milestoneData = [
  {
    year: '2012',
    desc: 'Pendirian PT Nusasatu Properti Tbk di Semarang, Jawa Tengah',
  },
  {
    year: '2013',
    desc: 'Mulai Pengembangan Amaya Home Resort',
  },
  {
    year: '2014',
    desc: 'Pendirian PT Nusasatu Persada & PT Nusasatu Manajemen',
  },
  {
    year: '2014',
    desc: 'Mulai Pengembangan Allstay Hotel Semarang & Allstay Ecotel Yogyakarta',
  },
  {
    year: '2014',
    desc: 'Mulai Pengembangan Unit Rumah Fase 1 Amaya Home Resort',
  },
  {
    year: '2015',
    desc: 'Mulai Pengembangan Unit Rumah Fase 2 Amaya Home Resort',
  },
  {
    year: '2016',
    desc: 'Diluncurkannya Fase 3 Amaya Home Resort',
  },
  {
    year: '2016',
    desc: 'Mulai beroperasi Allstay Hotel semarang Bintang *** & Allstay Ecotel Yogyakarta Bintang ***',
  },
  {
    year: '2017',
    desc: 'PT Nusasatu Properti Menjadi Holding PT Nusasatu Persada & PT Nusasatu Manajemen',
  },
  {
    year: '2018',
    desc: 'PT Nusasatu Properti Tbk Menawarkan Saham Perdana (IPO) dengan Ticker NUSA',
  },
  {
    year: '2021',
    desc: 'Penandatanganan MOU Bumi Sekartama',
  },
];

// Tripled for seamless infinite looping
const extendedItems = [...milestoneData, ...milestoneData, ...milestoneData];

function MilestoneCard({ year, desc }) {
  return (
    <div className="w-[142px] sm:w-[155px] h-[200px] sm:h-[212px] relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-300">
      {/* Background Vector SVG Shield & Floating Circular Badge */}
      <svg
        viewBox="0 0 145 195"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <filter id={`card-shadow-${year}`} x="-15%" y="-10%" width="130%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.16" />
          </filter>
        </defs>

        {/* Deep Architectural Blue Shield Body with angled shoulders matching reference */}
        <path
          d="M 8 58 
             C 8 50, 12 47, 20 44
             L 46 34
             C 54 31, 62 30, 72.5 30
             C 83 30, 91 31, 99 34
             L 125 44
             C 133 47, 137 50, 137 58
             L 137 182
             C 137 189, 131 194, 123 194
             L 22 194
             C 14 194, 8 189, 8 182
             Z"
          fill="#224472"
          filter={`url(#card-shadow-${year})`}
        />

        {/* Floating Circular Badge */}
        <circle cx="72.5" cy="30" r="32" fill="#224472" />
        <circle cx="72.5" cy="30" r="26" fill="#FFFFFF" />

        {/* Centered Nusasatu Vector Logo inside Circle */}
        <g transform="translate(57, 14) scale(0.31)">
          <path
            d="M 36,18 C 16,18 8,36 8,54 C 8,78 28,92 56,92 C 84,92 98,76 98,60 C 98,40 74,36 48,31 C 26,27 18,21 18,13 C 18,5 29,2 42,2 C 58,2 74,9 84,18"
            fill="none"
            stroke="#0099d8"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 20,54 C 20,70 36,80 56,80 C 78,80 86,68 86,60"
            fill="none"
            stroke="#224472"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
        <text
          x="72.5"
          y="47.5"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="5.5"
          fontWeight="800"
          fill="#224472"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          NUSASATU
        </text>
      </svg>

      {/* Crystal Clear HD Typography Overlaid */}
      <div className="relative z-10 pt-[68px] sm:pt-[72px] px-3 sm:px-4 text-center text-white flex flex-col items-center">
        {/* HD Year */}
        <h4 className="text-[17px] sm:text-[18px] font-extrabold tracking-wide font-sans text-white leading-tight">
          {year}
        </h4>
        {/* HD Description */}
        <p className="text-[10px] sm:text-[11px] font-medium leading-[1.38] mt-1.5 sm:mt-2 text-white/95 font-sans line-clamp-4">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Milestones() {
  const [currentIndex, setCurrentIndex] = useState(milestoneData.length);
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

  // Handle seamless infinite wrap-around
  const handleTransitionEnd = () => {
    if (currentIndex >= milestoneData.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - milestoneData.length);
    } else if (currentIndex < milestoneData.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + milestoneData.length);
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
      className="py-8 sm:py-10 bg-white relative overflow-hidden select-none"
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
            className="flex items-center"
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
                <MilestoneCard year={item.year} desc={item.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
