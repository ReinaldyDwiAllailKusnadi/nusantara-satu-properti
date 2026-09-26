'use client';

import { useState } from 'react';

const businessUnits = [
  {
    title: 'Amaya Home Resort',
    url: 'https://www.amayahomeresort.com/',
    mapUrl: 'https://maps.app.goo.gl/tp1uq74zpZ4TYTV18',
    desc: 'Amaya Home Resort adalah perumahan modern dengan konsep green living yang memenuhi kriteria hunian berkualitas, nyaman, asri dan sehat, menawarkan gaya hidup yang mengagumkan dengan fasilitas sekelas resort. Amaya Home Resort memiliki lokasi yang sangat strategis yaitu tepat di seberang exit tol Ungaran, tepatnya di Jl. MT Haryono – Ungaran, Kabupaten Semarang.',
    images: [
      { src: '/images/Web_Linea_TheAmaya.png', caption: 'LINEA 65/81' },
      { src: '/images/Web_Alysa_TheAmaya.png', caption: 'ALYSA 95/120' },
      { src: '/images/Web_Foresta_TheAmaya.png', caption: 'FORESTA 135/160' }
    ]
  },
  {
    title: 'Allstay Hotel Semarang',
    url: 'https://allstayhotel.com/allstay-hotel-semarang/',
    mapUrl: 'https://maps.app.goo.gl/pAwwkZHYAGZogqeK7',
    desc: 'Allstay Hotel Semarang yang mengusung tema modern lifestyle sudah berdiri sejak 26 November 2015 dan memperoleh klasifikasi hotel bintang 3. Allstay Hotel Semarang berlokasi di area Simpang Lima, tepatnya beralamat di Jalan Veteran No. 51, Semarang – Jawa Tengah.',
    images: [
      { src: '/images/7.png', caption: 'Exterior View' },
      { src: '/images/9.png', caption: 'Bistropolis Restaurant' },
      { src: '/images/8.png', caption: 'Deluxe Room' }
    ]
  },
  {
    title: 'Allstay Ecotel Yogyakarta',
    url: 'https://allstayhotel.com/allstay-ecotel-yogyakarta/',
    mapUrl: 'https://maps.app.goo.gl/KyD1XRR2QeSStZRP8',
    desc: 'Allstay Ecotel Yogyakarta yang terletak di Jl.Wahid Hasyim No.41 Nologaten, Dabag, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta telah beroperasi sejak September 2015. Hotel kontemporer yang mengusung tema modern eco-lifestyle dengan nuansa interior modern minimalis ini menyajikan suasana trendi, pilihan tepat untuk profesional muda, traveler dan rekreasi.',
    images: [
      { src: '/images/4.png', caption: 'Modern Eco Minimalist' },
      { src: '/images/6.png', caption: 'Lobby & Courtyard' },
      { src: '/images/5.png', caption: 'Cozy Room' }
    ]
  }
];

function UnitItem({ unit }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % unit.images.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + unit.images.length) % unit.images.length);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
      {/* Left: Image with rounded corners and slide controls */}
      <div className="lg:col-span-4 xl:col-span-4">
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl bg-slate-900 border border-white/10 aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] max-w-[420px] mx-auto lg:mx-0">
          <img
            src={unit.images[currentIdx].src}
            alt={unit.title}
            className="w-full h-full object-cover transition-all duration-700 block"
          />

          {/* Slide Arrow Left */}
          <button
            onClick={prevSlide}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide Arrow Right */}
          <button
            onClick={nextSlide}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {unit.images.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                  currentIdx === i ? 'bg-white w-4' : 'bg-white/50'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: White Title, Clean White Text, and Google Map Link */}
      <div className="lg:col-span-8 xl:col-span-8 text-white flex flex-col items-start">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-white">
          <a href={unit.url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
            {unit.title}
          </a>
        </h3>

        <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal mb-6 max-w-3xl">
          {unit.desc}
        </p>

        <a
          href={unit.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-medium text-sm hover:text-amber-300 transition-colors group"
        >
          {/* Map pin icon */}
          <svg className="w-4 h-4 text-amber-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="underline underline-offset-4 group-hover:text-amber-300">Google Map</span>
        </a>
      </div>
    </div>
  );
}

export default function BusinessUnits() {
  return (
    <section 
      id="unit-bisnis" 
      className="py-16 sm:py-24 relative bg-[#22406F] bg-cover bg-center text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(34, 64, 111, 0.92), rgba(34, 64, 111, 0.92)), url("/images/Web_Ruko_TheAmaya.webp")'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Centered Heading with White Divider matching user screenshot */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Kegiatan Usaha
          </h2>
          <div className="w-16 h-[3px] bg-white mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Business Units matching the screenshot */}
        <div className="space-y-16 sm:space-y-20">
          {businessUnits.map((unit, idx) => (
            <UnitItem key={idx} unit={unit} />
          ))}
        </div>
      </div>
    </section>
  );
}
