'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BeritaPage() {
  const [news, setNews] = useState([]);
  const [selectedDate, setSelectedDate] = useState('ALL');
  const [loading, setLoading] = useState(true);
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    fetch('/api/cms?type=berita')
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setNews(res.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Extract unique year-months for date filter
  const dateOptions = Array.from(
    new Set(
      news.map((item) => {
        const d = new Date(item.date);
        return isNaN(d.getTime()) ? '' : `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      }).filter(Boolean)
    )
  );

  const filteredNews = news.filter((item) => {
    if (selectedDate === 'ALL') return true;
    return item.date.startsWith(selectedDate);
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* SECTION 1: Hero Banner "BERITA"                           */}
        {/* ========================================================= */}
        <section 
          className="relative py-20 sm:py-28 bg-[#183156] text-white flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/scott-graham-5fNmWej4tAA-unsplash-1-1-1024x683.jpg')",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-[#22406F]/[0.85] backdrop-blur-[1px]"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-[38px] sm:text-[54px] font-extrabold uppercase tracking-[3px] text-white font-sans drop-shadow-md">
              BERITA
            </h1>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: Filter and News Cards Grid                     */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-16">
            
            {/* Filter Bar */}
            <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-3">
                <label htmlFor="dateFilter" className="text-[14px] font-bold text-slate-600 uppercase tracking-wider">
                  Filter Tanggal:
                </label>
                <select
                  id="dateFilter"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-[14px] font-semibold text-[#22406F] bg-white focus:outline-none focus:ring-2 focus:ring-[#22406F]/30"
                >
                  <option value="ALL">Semua Tanggal</option>
                  {dateOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-[14px] text-slate-500 font-medium">
                Menampilkan <span className="font-bold text-[#22406F]">{filteredNews.length}</span> Berita
              </div>
            </div>

            {loading ? (
              <div className="py-20 text-center text-[#22406F] font-bold">
                Memuat data berita...
              </div>
            ) : filteredNews.length === 0 ? (
              <div className="py-20 text-center text-slate-500 font-medium">
                Tidak ada berita pada tanggal yang dipilih.
              </div>
            ) : (
              /* 3-Column Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {filteredNews.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 group"
                  >
                    {/* Thumbnail Image with Tag */}
                    <Link href={`/berita/${item.id}`} className="relative aspect-[16/10] overflow-hidden bg-slate-100 block">
                      <img
                        src={item.image || '/images/Web_Award_1_KSP.jpg'}
                        alt={item.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/images/ahs-thumb.jpg';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-[#22406F] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
                        {item.tag || 'NEWS'}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">
                          {item.date}
                        </div>
                        <h2 className="text-[18px] sm:text-[19px] font-extrabold text-[#22406F] leading-snug group-hover:text-[#007BBB] transition-colors line-clamp-3">
                          <Link href={`/berita/${item.id}`}>
                            {item.title}
                          </Link>
                        </h2>
                        <p className="text-[14px] text-slate-600 leading-relaxed text-justify line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>

                      {/* Read More Action */}
                      <div className="flex items-center justify-between pt-2">
                        <Link
                          href={`/berita/${item.id}`}
                          className="inline-flex items-center text-[14px] font-bold text-[#007BBB] hover:text-[#22406F] uppercase tracking-wide group/btn"
                        >
                          <span>READ MORE</span>
                          <span className="ml-1 text-base group-hover/btn:translate-x-1 transition-transform">»</span>
                        </Link>

                        <button
                          onClick={() => setActiveArticle(item)}
                          className="text-xs font-semibold text-slate-400 hover:text-slate-700 underline cursor-pointer"
                        >
                          Preview Cepat
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* Modal Detail Berita */}
        {activeArticle && (
          <div 
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in duration-200 cursor-default"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Tutup"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-4 pr-6">
                <span className="inline-block bg-[#22406F] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                  {activeArticle.tag || 'NEWS'}
                </span>
                <p className="text-[13px] text-slate-400 font-semibold">{activeArticle.date}</p>
                <h3 className="text-[22px] sm:text-[26px] font-extrabold text-[#22406F] leading-tight">
                  {activeArticle.title}
                </h3>
              </div>

              {activeArticle.image && (
                <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] shadow-sm">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="text-[16px] text-slate-700 leading-relaxed text-justify space-y-4 pt-2 font-sans">
                <p>{activeArticle.excerpt}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
