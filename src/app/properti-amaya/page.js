'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PropertiAmayaPage() {
  const [activeTahap, setActiveTahap] = useState(1);

  const products = [
    { name: 'BUSINESS SQUARE', sub: '', image: '/images/Web_Ruko_TheAmaya.webp' },
    { name: 'FONTANA', sub: '195/207', image: '/images/Web_Fontana_TheAmaya.png' },
    { name: 'MONTANA', sub: '135/120', image: '/images/Web_Montana_TheAmaya.png' },
    { name: 'FRESSIA', sub: '80/152', image: '/images/Web_Fressia_TheAmaya.png' },
    { name: 'FORESTA', sub: '65/120', image: '/images/Web_Foresta_TheAmaya.png' },
    { name: 'ALYSSA', sub: '65/120', image: '/images/Web_Alysa_TheAmaya.png' },
  ];

  const facilities = [
    { title: 'Club House', image: '/images/Club-House.webp' },
    { title: 'RFID Gate', image: '/images/Gerbang-RFID.webp' },
    { title: 'Internet', image: '/images/Internet.webp' },
    { title: 'Security & CCTV 24 Jam', image: '/images/Security-CCTV-24-Jam.webp' },
    { title: 'Swimming Pool', image: '/images/Swimming-Pool.webp' },
    { title: 'Basketball Court', image: '/images/Basketball-Court.webp' },
    { title: "Children's Playground", image: '/images/Taman-Bermain-Anak.webp' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* SECTION 1: Hero & AMAYA HOME RESORT Description           */}
        {/* ========================================================= */}
        <section className="bg-[#22406F]/[0.11] pt-12 sm:pt-16 pb-14 sm:pb-20">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16">
            
            {/* Logo */}
            <div className="w-28 sm:w-32 mb-6">
              <img
                src="/images/logo-amaya-home-resort.png"
                alt="Amaya Home Resort"
                className="w-full h-auto object-contain block"
              />
            </div>

            {/* Subtitle & Title */}
            <h3 className="text-[17px] sm:text-[20px] font-extrabold tracking-[2px] text-[#22406F] mb-1 font-sans">
              Properti
            </h3>
            <h1 className="text-[34px] sm:text-[45px] font-extrabold uppercase tracking-[2.1px] text-[#22406F] mb-6 leading-tight font-sans">
              AMAYA HOME RESORT
            </h1>

            {/* Description */}
            <div className="text-[16px] sm:text-[18px] text-[#1c1c1c] leading-[1.8] text-justify font-sans space-y-4 max-w-[1150px]">
              <p>
                A good life. Perumahan Amaya Home Resort berada di lingkungan segar dalam suasana alam pegunungan. Menyuguhkan hunian estetis dengan layanan setara resort. Membuat Anda bisa menikmati waktu berkualitas bersama keluarga tercinta. Nikmati aktivitas pagi yang menyenangkan karena kualitas udaranya bersih dan terbebas dari polusi udara. View perbukitan juga menjadi sajian khas di lingkungan Amaya Home Resort. Raih juga kehidupan yang bebas stres karena kemudahan akses. Lokasi perumahan begitu dekat ke Exit Tol Ungaran dan 15 menit dari Kota Semarang. Amaya Home Resort dilengkapi dengan Amaya Care, bagian dari smart facilities yang bisa meningkatkan kenyamanan hidup Anda.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: PRODUK & FASILITAS                             */}
        {/* ========================================================= */}
        <section className="bg-[#22406F]/[0.11] pt-4 pb-16 sm:pb-24 border-t border-[#22406F]/[0.06]">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12">
            
            <h2 className="text-center text-[26px] sm:text-[34px] font-extrabold uppercase tracking-[2px] text-[#22406F] mb-10 sm:mb-14 font-sans">
              PRODUK & FASILITAS
            </h2>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {products.map((p, idx) => (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-[15px] shadow-md bg-slate-900 aspect-[3/4] flex items-end cursor-pointer"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                  
                  <div className="relative z-10 p-3.5 text-white leading-tight">
                    <p className="text-[13px] sm:text-[14px] font-extrabold uppercase tracking-wide">
                      {p.name}
                    </p>
                    {p.sub && (
                      <p className="text-[11px] sm:text-[12px] opacity-85 font-semibold">
                        {p.sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: FASILITAS AMAYA HOME RESORT                    */}
        {/* ========================================================= */}
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
            
            <h2 className="text-[32px] sm:text-[45px] font-extrabold uppercase tracking-[2.1px] text-[#22406F] font-sans">
              FASILITAS<br />AMAYA HOME RESORT
            </h2>
            <div className="w-[18%] max-w-[120px] h-[4px] bg-[#22406F] mx-auto mt-4 mb-8"></div>

            <p className="text-[16px] sm:text-[18px] text-[#1c1c1c] leading-[1.8] text-center max-w-[1000px] mx-auto mb-12 sm:mb-16 font-sans">
              Amaya Home Resort menyediakan clubhouse dengan beragam fasilitas, mulai dari kolam renang, lapangan basket, dan trek lari. Manfaatkan fasilitas tersebut untuk meningkatkan kualitas hidup dan produktivitas Anda. Lalu terdapat juga Amaya Care, smart facilities yang akan membuat kenyamanan hidup meningkat. Fasilitas itu terdiri dari penanganan situasi darurat, perbaikan rumah, perawatan taman, jasa laundry, dan pembersihan rumah. Lingkungan pun aman dari aktivitas mengganggu karena dilengkapi dengan keamanan 24 jam, CCTV, hingga smart home gate sistem dengan RFID Card.
            </p>

            {/* Facility Cards Grid / Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-start">
              {facilities.slice(0, 4).map((f, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-full aspect-[4/3] rounded-[15px] overflow-hidden shadow-md bg-slate-100 mb-3.5">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#007BBB] tracking-wide text-center">
                    {f.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Additional Facility Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-start mt-8 max-w-[900px] mx-auto">
              {facilities.slice(4).map((f, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-full aspect-[4/3] rounded-[15px] overflow-hidden shadow-md bg-slate-100 mb-3.5">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-[#007BBB] tracking-wide text-center">
                    {f.title}
                  </h4>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: AMAYA LIFESTYLE                                */}
        {/* ========================================================= */}
        <section className="bg-[#22406F] py-16 sm:py-24 text-white overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left: 2x2 Grid with Logo cards and Photos */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                {/* 1. White logo card */}
                <div className="bg-white rounded-[15px] aspect-square p-6 flex items-center justify-center shadow-lg">
                  <img
                    src="/images/Web_Logo-Amaya-Lifestyle.png"
                    alt="amaya lifestyle"
                    className="w-full h-auto object-contain max-w-[150px]"
                  />
                </div>

                {/* 2. Kitchen photo */}
                <div className="relative rounded-[15px] overflow-hidden aspect-square shadow-lg group">
                  <img
                    src="/images/Web_AmayaLifestyle_Kitchen.png"
                    alt="Kitchen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-[14px] font-bold">Kitchen</p>
                    <p className="text-[11px] opacity-80">*rumah contoh Fressia</p>
                  </div>
                </div>

                {/* 3. Bedroom photo */}
                <div className="relative rounded-[15px] overflow-hidden aspect-square shadow-lg group">
                  <img
                    src="/images/Web_AmayaLifestyle_Bedroom.png"
                    alt="Bedroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-[14px] font-bold">Bedroom</p>
                    <p className="text-[11px] opacity-80">*rumah contoh Montana</p>
                  </div>
                </div>

                {/* 4. White logo card */}
                <div className="bg-white rounded-[15px] aspect-square p-6 flex items-center justify-center shadow-lg">
                  <img
                    src="/images/Web_Logo-Amaya-Lifestyle.png"
                    alt="amaya lifestyle"
                    className="w-full h-auto object-contain max-w-[150px]"
                  />
                </div>
              </div>

              {/* Right: Text */}
              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-[32px] sm:text-[42px] font-extrabold uppercase tracking-[2.1px] text-white font-sans leading-tight">
                  AMAYA LIFESTYLE
                </h2>
                <div className="text-[16px] sm:text-[18px] text-white/95 leading-[1.8] text-justify font-sans space-y-4">
                  <p>
                    Memahami kesibukan anda dimana waktu adalah sesuatu yang berharga, Amaya Lifestyle menawarkan kemudahan dalam meningkatkan kualitas hidup penghuni Amaya Home Resort. Layanan ini meliputi fasilitas one stop service jasa desain arsitektur, furniture dan penataan interior.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: DEVELOPMENT                                    */}
        {/* ========================================================= */}
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Heading and Phase Badges */}
              <div className="lg:col-span-6 space-y-8">
                <h2 className="text-[34px] sm:text-[45px] font-extrabold uppercase tracking-[2.1px] text-[#22406F] font-sans">
                  DEVELOPMENT
                </h2>

                <div className="space-y-4 max-w-md">
                  {/* Badge 1: Gray */}
                  <div className="bg-[#7B8288] text-white rounded-xl p-5 shadow-sm">
                    <p className="font-extrabold text-[17px] mb-1">Tahap 1 : 3 11 ha</p>
                    <p className="text-[15px] font-semibold text-white/90">Landed Residential</p>
                  </div>

                  {/* Badge 2: Blue */}
                  <div className="bg-[#3B82F6] text-white rounded-xl p-5 shadow-sm">
                    <p className="font-extrabold text-[17px] mb-1">Tahap 2 : 3 10 ha</p>
                    <p className="text-[15px] font-semibold text-white/90">Modern Residences</p>
                  </div>

                  {/* Badge 3: Deep Navy */}
                  <div className="bg-[#1E293B] text-white rounded-xl p-5 shadow-sm">
                    <p className="font-extrabold text-[17px] mb-1">Tahap 3 : 3 25 ha</p>
                    <p className="text-[15px] font-semibold text-white/90">Commercial, Retail, & Recreational</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Accordion Panels */}
              <div className="lg:col-span-6 space-y-4 pt-4 lg:pt-14">
                
                {/* TAHAP 1 */}
                <div className="rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveTahap(activeTahap === 1 ? null : 1)}
                    className="w-full flex items-center justify-between px-7 py-4.5 bg-[#007BBB] text-white font-extrabold text-[17px] uppercase tracking-wider text-left transition-colors cursor-pointer"
                  >
                    <span>TAHAP 1</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${activeTahap === 1 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeTahap === 1 && (
                    <div className="bg-slate-50 border border-slate-200 border-t-0 p-6 space-y-3 text-[16px] text-slate-700 font-medium">
                      <p className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007BBB]"></span>
                        <span>Fase 1 & 2 : Residential & Club House</span>
                      </p>
                      <p className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007BBB]"></span>
                        <span>Fase 3 : Cluster The Beverly Park</span>
                      </p>
                      <p className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007BBB]"></span>
                        <span>Fase 4 : Cluster Rosewood</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* TAHAP 2 */}
                <div className="rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveTahap(activeTahap === 2 ? null : 2)}
                    className="w-full flex items-center justify-between px-7 py-4.5 bg-[#22406F] text-white font-extrabold text-[17px] uppercase tracking-wider text-left transition-colors cursor-pointer"
                  >
                    <span>TAHAP 2</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${activeTahap === 2 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeTahap === 2 && (
                    <div className="bg-slate-50 border border-slate-200 border-t-0 p-6 space-y-3 text-[16px] text-slate-700 font-medium">
                      <p className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22406F]"></span>
                        <span>Fase 5 & 6 : Modern Residences & Commercial Area</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* TAHAP 3 */}
                <div className="rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveTahap(activeTahap === 3 ? null : 3)}
                    className="w-full flex items-center justify-between px-7 py-4.5 bg-[#22406F] text-white font-extrabold text-[17px] uppercase tracking-wider text-left transition-colors cursor-pointer"
                  >
                    <span>TAHAP 3</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${activeTahap === 3 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeTahap === 3 && (
                    <div className="bg-slate-50 border border-slate-200 border-t-0 p-6 space-y-3 text-[16px] text-slate-700 font-medium">
                      <p className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22406F]"></span>
                        <span>Fase 7 : Commercial, Retail, & Recreational District</span>
                      </p>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
