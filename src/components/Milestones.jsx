'use client';

import { useState } from 'react';

const milestonesData = [
  {
    year: '2012',
    title: 'Pendirian Perseroan',
    desc: 'PT Nusantara Satu Properti Tbk didirikan dengan visi menjadi pengembang properti terintegrasi berstandar tinggi yang mengedepankan kelestarian lingkungan dan harmoni kehidupan.',
    image: '/images/Kota-Satu-24-September-2024.webp',
    tag: 'Fondasi Utama'
  },
  {
    year: '2013',
    title: 'Peluncuran The Amaya Home Resort Fase 1',
    desc: 'Memulai pembangunan The Amaya Home Resort di Ungaran, Jawa Tengah — sebuah kawasan hunian terpadu berkonsep resort hijau dengan fasilitas Amaya Care, Amaya Club house, dan keamanan 24 jam.',
    image: '/images/Kota-Satu-24-September-2024-1.png',
    tag: 'Pengembangan Properti'
  },
  {
    year: '2016',
    title: 'Ekspansi Hospitality: Allstay Hotel Semarang',
    desc: 'Membuka Allstay Hotel Semarang, hotel butik bintang 3 modern dengan fasilitas lengkap di kawasan strategis Simpang Lima Semarang, memperkuat pilar hospitality perseroan.',
    image: '/images/Kota-Satu-24-September-2024-2.png',
    tag: 'Hospitality'
  },
  {
    year: '2018',
    title: 'Pembukaan Allstay Ecotel Yogyakarta',
    desc: 'Melanjutkan ekspansi hospitality dengan meluncurkan Allstay Ecotel Yogyakarta di kawasan Jalan Wahid Hasyim, berkonsep eco-friendly dan arsitektur kontemporer.',
    image: '/images/Kota-Satu-24-September-2024-3.png',
    tag: 'Eco Hospitality'
  },
  {
    year: '2019',
    title: 'Go Public: IPO di Bursa Efek Indonesia (IDX: NUSA)',
    desc: 'Perseroan resmi mencatatkan saham perdananya di Bursa Efek Indonesia (BEI) dengan kode saham NUSA, menandai babak baru transparansi dan pertumbuhan modal publik.',
    image: '/images/Kota-Satu-24-September-2024-4.png',
    tag: 'Corporate Milestone'
  },
  {
    year: '2024 - Kini',
    title: 'Ekspansi The Amaya Fase 2 & Kemitraan Strategis',
    desc: 'Pengembangan kawasan klaster baru The Amaya Home Resort seluas puluhan hektar serta sinergi strategis untuk memperkuat cadangan lahan dan proyek hospitality masa depan.',
    image: '/images/Kota-Satu-24-September-2024-5.png',
    tag: 'Pertumbuhan Berkelanjutan'
  }
];

export default function Milestones() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="milestones" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="site-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            Jejak Langkah &amp; Perjalanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
            Milestones Perseroan
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Komitmen lebih dari satu dekade menciptakan ruang kehidupan berkelas dan pelayanan perhotelan unggul di Indonesia.
          </p>
        </div>

        {/* Timeline Navigation Grid / Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {milestonesData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIdx(index)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                activeIdx === index
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700/60'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeIdx === index ? 'bg-slate-950' : 'bg-amber-400'}`}></span>
              <span>{item.year}</span>
            </button>
          ))}
        </div>

        {/* Active Milestone Card */}
        <div className="max-w-4xl mx-auto bg-slate-950/70 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Icon / Illustration */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 p-6 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
                  <img
                    src={milestonesData[activeIdx].image}
                    alt={milestonesData[activeIdx].title}
                    className="w-24 h-24 object-contain mb-3 drop-shadow-[0_4px_12px_rgba(245,158,11,0.3)] transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                    {milestonesData[activeIdx].year}
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                    {milestonesData[activeIdx].tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="md:col-span-7">
              <div className="inline-block px-3 py-1 rounded-md bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3">
                {milestonesData[activeIdx].tag}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                {milestonesData[activeIdx].title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {milestonesData[activeIdx].desc}
              </p>

              {/* Progress Steps / Dots */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : milestonesData.length - 1))}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  aria-label="Previous milestone"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="text-xs text-slate-400 font-medium">
                  Tahap {activeIdx + 1} dari {milestonesData.length}
                </div>
                <button
                  onClick={() => setActiveIdx((prev) => (prev < milestonesData.length - 1 ? prev + 1 : 0))}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  aria-label="Next milestone"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full Timeline Flow List (for SEO & Readability) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestonesData.map((m, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeIdx === idx 
                  ? 'bg-slate-800/80 border-amber-500/50 shadow-md shadow-amber-500/5' 
                  : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-amber-400">{m.year}</span>
                <span className="text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  {m.tag}
                </span>
              </div>
              <h4 className="text-base font-semibold text-white mb-2 line-clamp-1">{m.title}</h4>
              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
