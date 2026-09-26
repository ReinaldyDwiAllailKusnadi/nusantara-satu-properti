'use client';

import { useState } from 'react';

const businessUnits = [
  {
    title: 'Amaya Home Resort',
    url: 'https://www.amayahomeresort.com/',
    mapUrl: 'https://maps.app.goo.gl/tp1uq74zpZ4TYTV18',
    desc: 'Amaya Home Resort adalah perumahan modern dengan konsep green living yang memenuhi kriteria hunian berkualitas, nyaman, asri dan sehat, menawarkan gaya hidup yang mengagumkan dengan fasilitas sekelas resort. Amaya Home Resort memiliki lokasi yang sangat strategis yaitu tepat di seberang exit tol Ungaran, tepatnya di Jl. MT Haryono – Ungaran, Kabupaten Semarang.',
    images: [
      '/images/Web_Linea_TheAmaya.png',
      '/images/Web_Alysa_TheAmaya.png',
      '/images/Web_Foresta_TheAmaya.png'
    ]
  },
  {
    title: 'Allstay Hotel Semarang',
    url: 'https://allstayhotel.com/allstay-hotel-semarang/',
    mapUrl: 'https://maps.app.goo.gl/pAwwkZHYAGZogqeK7',
    desc: 'Allstay Hotel Semarang yang mengusung tema modern lifestyle sudah berdiri sejak 26 November 2015 dan memperoleh klasifikasi hotel bintang 3. Allstay Hotel Semarang berlokasi di area Simpang Lima, tepatnya beralamat di Jalan Veteran No. 51, Semarang – Jawa Tengah.',
    images: [
      '/images/7.png',
      '/images/9.png',
      '/images/8.png'
    ]
  },
  {
    title: 'Allstay Ecotel Yogyakarta',
    url: 'https://allstayhotel.com/allstay-ecotel-yogyakarta/',
    mapUrl: 'https://maps.app.goo.gl/KyD1XRR2QeSStZRP8',
    desc: 'Allstay Ecotel Yogyakarta yang terletak di Jl.Wahid Hasyim No.41 Nologaten, Dabag, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta telah beroperasi sejak September 2015. Hotel kontemporer yang mengusung tema modern eco-lifestyle dengan nuansa interior modern minimalis ini menyajikan suasana trendi, pilihan tepat untuk profesional muda, traveler dan rekreasi.',
    images: [
      '/images/4.png',
      '/images/6.png',
      '/images/5.png'
    ]
  }
];

function UnitCard({ unit }) {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    setCurrentImg((prev) => (prev + 1) % unit.images.length);
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev - 1 + unit.images.length) % unit.images.length);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      {/* Image Carousel (Left) */}
      <div className="lg:col-span-6 relative group overflow-hidden rounded">
        <div className="aspect-[16/10] bg-slate-100 flex items-center justify-center overflow-hidden">
          <img
            src={unit.images[currentImg]}
            alt={unit.title}
            className="w-full h-full object-cover object-center transition-all duration-500"
          />
        </div>

        {/* Carousel arrows */}
        <button
          onClick={prevImg}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-slate-800 hover:bg-[#19375e] hover:text-white flex items-center justify-center shadow transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextImg}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-slate-800 hover:bg-[#19375e] hover:text-white flex items-center justify-center shadow transition-colors"
          aria-label="Next image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {unit.images.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentImg(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                currentImg === i ? 'bg-[#19375e] w-4' : 'bg-white/80'
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Description & Links (Right) */}
      <div className="lg:col-span-6 flex flex-col items-start">
        <h3 className="text-xl sm:text-2xl font-black text-[#19375e] uppercase tracking-tight mb-3">
          <a href={unit.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#0099d8] transition-colors">
            {unit.title}
          </a>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {unit.desc}
        </p>

        <a
          href={unit.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#19375e] hover:text-[#0099d8] uppercase tracking-wider transition-colors py-1"
        >
          <svg className="w-4 h-4 text-[#0099d8]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>Google Map &rarr;</span>
        </a>
      </div>
    </div>
  );
}

export default function BusinessUnits() {
  return (
    <section id="unit-bisnis" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Heading matching original */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#19375e] uppercase tracking-tight mb-3">
            Kegiatan Usaha
          </h2>
          <div className="w-16 h-1 bg-[#19375e]"></div>
        </div>

        {/* 3 Main Business Units */}
        <div className="space-y-10">
          {businessUnits.map((unit, idx) => (
            <UnitCard key={idx} unit={unit} />
          ))}
        </div>
      </div>
    </section>
  );
}
