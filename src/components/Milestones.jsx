'use client';

import { useState } from 'react';

const milestonesList = [
  {
    year: '2012',
    img: '/images/Kota-Satu-24-September-2024.webp',
    title: 'Pendirian Nusantara Satu Properti',
    desc: 'Pendirian PT Nusantara Satu Properti Tbk di Semarang, Jawa Tengah.'
  },
  {
    year: '2013',
    img: '/images/Kota-Satu-24-September-2024-1.png',
    title: 'Mulai Pengembangan Amaya Home Resort',
    desc: 'Pencanangan proyek kawasan hunian resort hijau perdana di Ungaran.'
  },
  {
    year: '2014',
    img: '/images/Kota-Satu-24-September-2024-2.png',
    title: 'Pendirian PT NSP Persada & Manajemen',
    desc: 'Pembentukan entitas anak operasional properti dan hospitality.'
  },
  {
    year: '2014',
    img: '/images/Kota-Satu-24-September-2024-3.png',
    title: 'Pengembangan Allstay Hotel Semarang & Yogyakarta',
    desc: 'Memulai pembangunan Allstay Hotel Semarang dan Allstay Ecotel Yogyakarta.'
  },
  {
    year: '2014',
    img: '/images/Kota-Satu-24-September-2024-4.png',
    title: 'Pengembangan Unit Rumah Fase 1 Amaya',
    desc: 'Realisasi pembangunan klaster hunian tahap pertama The Amaya.'
  },
  {
    year: '2015',
    img: '/images/Kota-Satu-24-September-2024-5.png',
    title: 'Pengembangan Unit Rumah Fase 2 Amaya',
    desc: 'Ekspansi lanjutan klaster perumahan Amaya Home Resort.'
  },
  {
    year: '2016',
    img: '/images/Kota-Satu-24-September-2024-4.png',
    title: 'Peluncuran Fase 3 Amaya Home Resort',
    desc: 'Perluasan pembangunan hunian eksklusif tahap ketiga.'
  },
  {
    year: '2016',
    img: '/images/Kota-Satu-24-September-2024-3.png',
    title: 'Beroperasi Allstay Semarang & Yogyakarta',
    desc: 'Allstay Hotel Semarang Bintang 3 & Allstay Ecotel Yogyakarta resmi beroperasi.'
  },
  {
    year: '2017',
    img: '/images/Kota-Satu-24-September-2024-2.png',
    title: 'Holding Company',
    desc: 'PT Nusantara Satu Properti Tbk resmi menjadi holding company terpadu.'
  },
  {
    year: '2018',
    img: '/images/Kota-Satu-24-September-2024-1.png',
    title: 'IPO di Bursa Efek Indonesia',
    desc: 'Pencatatan saham perdana di Bursa Efek Indonesia dengan Ticker NUSA.'
  },
  {
    year: '2021',
    img: '/images/Kota-Satu-24-September-2024.webp',
    title: 'Penandatanganan MOU Bumi Sekartama',
    desc: 'Kemitraan strategis ekspansi landbank dan pengembangan kawasan baru.'
  }
];

export default function Milestones() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsVisible = 5;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : milestonesList.length - itemsVisible));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsVisible < milestonesList.length ? prev + 1 : 0));
  };

  return (
    <section id="milestone" className="py-12 bg-[#f8f9fa] border-y border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Carousel Header Controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="w-12 h-1 bg-[#19375e] mb-2"></div>
            <h3 className="text-xl sm:text-2xl font-black text-[#19375e] uppercase tracking-tight">
              Milestones
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white border border-slate-300 hover:border-[#19375e] text-[#19375e] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white border border-slate-300 hover:border-[#19375e] text-[#19375e] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Milestone Cards Carousel */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {milestonesList.slice(startIndex, startIndex + itemsVisible).map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <div className="w-24 h-28 flex items-center justify-center mb-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="inline-block px-2 py-0.5 rounded bg-slate-100 text-[#19375e] font-extrabold text-xs mb-1.5">
                {item.year}
              </div>
              <h4 className="text-xs font-bold text-slate-800 line-clamp-1 mb-1">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
