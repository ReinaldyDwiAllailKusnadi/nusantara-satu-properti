'use client';

import { useState } from 'react';

const units = [
  {
    id: 'amaya',
    name: 'The Amaya Home Resort',
    subtitle: 'Hunian Resort Eksklusif Bernuansa Pegunungan Ungaran',
    category: 'Residential Development',
    location: 'Ungaran, Kab. Semarang, Jawa Tengah',
    badge: 'Flagship Project',
    tagline: 'Life of Comfort, Harmony with Nature',
    description: 'The Amaya Home Resort adalah mahakarya kawasan hunian terpadu persembahan PT Nusantara Satu Properti Tbk. Mengusung konsep resort tropis modern di lereng Gunung Ungaran dengan udara sejuk, vegetasi asri, dan sistem utilitas kabel bawah tanah yang rapi.',
    features: [
      'Amaya Care: Layanan home service & maintenance 24/7',
      'Amaya Club House: Infinity pool, fitness center, lounge & cafe',
      'One Gate System & Smart Security Card 24 Jam',
      'Sertifikat Hak Milik (SHM) & Legalitas Terjamin',
      'Akses 3 Menit ke Gerbang Tol Ungaran (Akses Cepat ke Semarang & Solo)'
    ],
    models: [
      {
        name: 'Tipe Linea',
        img: '/images/Web_Linea_TheAmaya.png',
        specs: 'LT 84 m² / LB 65 m² • 3 Kamar Tidur • 2 Kamar Mandi • 1 Carport',
        desc: 'Desain minimalis kontemporer yang memaksimalkan sirkulasi udara dan pencahayaan alami, sempurna untuk keluarga muda dinamis.'
      },
      {
        name: 'Tipe Alysa',
        img: '/images/Web_Alysa_TheAmaya.png',
        specs: 'LT 120 m² / LB 95 m² • 3+1 Kamar Tidur • 3 Kamar Mandi • 2 Carport',
        desc: 'Hunian elegan berlantai dua dengan ruang keluarga lapang, master bedroom mewah, dan balkon panorama pegunungan.'
      },
      {
        name: 'Tipe Foresta',
        img: '/images/Web_Foresta_TheAmaya.png',
        specs: 'LT 160 m² / LB 135 m² • 4+1 Kamar Tidur • 4 Kamar Mandi • 2 Carport',
        desc: 'Tipe premium paling prestisius dengan halaman hijau luas, high ceiling ceiling, dan privasi optimal untuk ketenangan sempurna.'
      }
    ],
    contactUrl: 'https://wa.me/6281234567890?text=Halo%20The%20Amaya,%20saya%20tertarik%20dengan%20tipe%20rumah%20di%20The%20Amaya%20Home%20Resort'
  },
  {
    id: 'allstay-semarang',
    name: 'Allstay Hotel Semarang',
    subtitle: 'Boutique Lifestyle Hotel di Jantung Kota Semarang',
    category: 'Hospitality & Leisure',
    location: 'Jl. Erlangga Raya No. 14, Pleburan, Simpang Lima, Semarang',
    badge: '3-Star Premium',
    tagline: 'Modern Comfort for Business & Leisure',
    description: 'Allstay Hotel Semarang menawarkan kenyamanan akomodasi berkelas bagi para pelancong bisnis maupun wisatawan keluarga. Terletak hanya beberapa menit dari ikon Simpang Lima Semarang, hotel ini memadukan kenyamanan kamar berdesain modern dengan santapan lezat di Bistropolis Restaurant.',
    features: [
      'Bistropolis Restaurant & Cafe bernuansa kontemporer',
      'Meeting Room & Conference Hall untuk event korporasi & seminar',
      'High-Speed Wi-Fi & Smart TV di seluruh tipe kamar',
      'Lokasi prima: 5 menit dari Mall Ciputra, Simpang Lima & Kuliner Pandanaran',
      'Layanan front desk & concierge ramah 24 jam'
    ],
    gallery: [
      { img: '/images/7.png', caption: 'Kamar Superior & Deluxe Nyaman' },
      { img: '/images/8.png', caption: 'Lobby & Bistropolis Dinamis' },
      { img: '/images/9.png', caption: 'Fasilitas Meeting & Gathering' }
    ],
    contactUrl: 'https://wa.me/6281234567890?text=Halo%20Allstay%20Hotel%20Semarang,%20saya%20ingin%20reservasi%20kamar%20atau%20meeting%20room'
  },
  {
    id: 'allstay-yogya',
    name: 'Allstay Ecotel Yogyakarta',
    subtitle: 'Hotel Ramah Lingkungan & Artistik di Kawasan Yogyakarta',
    category: 'Eco-Hospitality',
    location: 'Jl. Wahid Hasyim No. 37, Caturtunggal, Depok, Sleman, Yogyakarta',
    badge: 'Eco Boutique',
    tagline: 'Green Architecture & Cultured Hospitality',
    description: 'Allstay Ecotel Yogyakarta mengusung filosofi keramahan lingkungan dengan pemanfaatan efisiensi energi, tata ruang terbuka hijau, dan sentuhan seni khas Jogja yang hangat. Ideal untuk wisatawan yang menghargai keberlanjutan dan kenyamanan praktis.',
    features: [
      'Konsep ramah lingkungan dengan sirkulasi udara terbuka',
      'Artistic green court & refreshing courtyard area',
      'Kamar compact bernuansa kayu alami & pencahayaan hangat',
      'Akses cepat ke pusat kampus UGM, UNY, mall, dan kuliner hits Yogya',
      'Parkir aman, 24/7 Security & Room Service'
    ],
    gallery: [
      { img: '/images/4.png', caption: 'Suasana Kamar Eco-Minimalis' },
      { img: '/images/5.png', caption: 'Interior Kamar Modern Elegan' },
      { img: '/images/6.png', caption: 'Fasilitas & Layanan Unggulan' }
    ],
    contactUrl: 'https://wa.me/6281234567890?text=Halo%20Allstay%20Ecotel%20Yogyakarta,%20saya%20ingin%20reservasi%20kamar'
  }
];

export default function BusinessUnits() {
  const [selectedUnit, setSelectedUnit] = useState('amaya');
  const unit = units.find((u) => u.id === selectedUnit) || units[0];

  return (
    <section id="unit-bisnis" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
            Portofolio &amp; Investasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight text-slate-950">
            Unit Bisnis Perseroan
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Inovasi berkelanjutan dalam sektor properti residensial berkualitas prima dan perhotelan modern di titik-titik strategis Jawa Tengah &amp; D.I. Yogyakarta.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {units.map((u) => (
            <button
              key={u.id}
              onClick={() => setSelectedUnit(u.id)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border flex items-center gap-2 ${
                selectedUnit === u.id
                  ? 'bg-slate-950 text-white border-slate-950 shadow-md shadow-slate-950/15'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${selectedUnit === u.id ? 'bg-amber-400' : 'bg-slate-400'}`}></span>
              <span>{u.name}</span>
            </button>
          ))}
        </div>

        {/* Unit Bisnis Showcase Box */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-slate-100 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  {unit.category}
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {unit.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {unit.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-500 mt-1 font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {unit.location}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={unit.contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.983.536 1.794.814 2.791.814 3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.505-4.475 9.97-9.969 9.97-1.748 0-3.385-.453-4.81-1.244l-5.221 1.369 1.393-5.093c-.9-1.488-1.431-3.23-1.431-5.002 0-5.505 4.475-9.969 9.969-9.969 5.505 0 10.069 4.464 10.069 9.969z" />
                </svg>
                <span>Tanya Marketing / Reservasi</span>
              </a>
            </div>
          </div>

          {/* Description & Key Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
            <div className="lg:col-span-7">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Tentang Proyek</h4>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {unit.description}
              </p>
            </div>
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Keunggulan &amp; Fasilitas
              </h4>
              <ul className="space-y-2.5">
                {unit.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Showcase Section: If Amaya -> Models; If Hotels -> Gallery */}
          {unit.models && (
            <div className="mt-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Pilihan Tipe Unit The Amaya</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Koleksi hunian resort berkelas dengan spesifikasi premium</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {unit.models.map((model, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
                    <div className="relative bg-slate-100 overflow-hidden aspect-[4/3]">
                      <img
                        src={model.img}
                        alt={model.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                        {model.name}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md mb-2.5 inline-block">
                          {model.specs}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {model.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100">
                        <a
                          href={`https://wa.me/6281234567890?text=Halo%20The%20Amaya,%20saya%20tertarik%20dengan%20info%20brosur%20dan%20harga%20${encodeURIComponent(model.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <span>Minta Brosur &amp; Pricelist</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {unit.gallery && (
            <div className="mt-10">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Galeri &amp; Suasana</h4>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">Kenyamanan fasilitas akomodasi dan keramahan layanan Allstay</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {unit.gallery.map((g, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                      <img
                        src={g.img}
                        alt={g.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3.5 bg-white text-center">
                      <p className="text-xs font-semibold text-slate-700">{g.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
