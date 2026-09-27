'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CSRPage() {
  const [csrList, setCsrList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    fetch('/api/cms?type=csr')
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setCsrList(res.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* SECTION 1: Hero Banner "CSR"                              */}
        {/* ========================================================= */}
        <section 
          className="relative py-20 sm:py-28 bg-[#183156] text-white flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/orva-studio-YC8qqp50BdA-unsplash-scaled.jpg')",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-[#22406F]/[0.88] backdrop-blur-[1px]"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3">
            <h1 className="text-[38px] sm:text-[54px] font-extrabold uppercase tracking-[3px] text-white font-sans drop-shadow-md">
              CSR
            </h1>
            <p className="text-[17px] sm:text-[21px] text-white/90 font-medium tracking-wide">
              Kota Satu Pillars of Sustainable Social Contribution
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: CSR Activities Grid                            */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-24 bg-[#22406F]/[0.05]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-16">
            
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-[28px] sm:text-[38px] font-extrabold uppercase tracking-[2px] text-[#22406F] font-sans">
                Kegiatan Sosial &amp; Lingkungan
              </h2>
              <div className="w-[18%] max-w-[100px] h-[4px] bg-[#22406F] mx-auto mt-3"></div>
            </div>

            {loading ? (
              <div className="py-20 text-center text-[#22406F] font-bold">
                Memuat data kegiatan CSR...
              </div>
            ) : csrList.length === 0 ? (
              <div className="py-20 text-center text-slate-500 font-medium">
                Belum ada kegiatan CSR yang dipublikasikan.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {csrList.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer"
                    onClick={() => setActiveItem(item)}
                  >
                    {/* Thumbnail Left */}
                    <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-slate-100 relative flex-shrink-0">
                      <img
                        src={item.image || '/images/Web_Award_KSP.jpg'}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content Right */}
                    <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[12px] font-bold text-slate-400 uppercase tracking-wider">
                          <span>{item.date}</span>
                          {item.location && <span className="text-[#007BBB]">{item.location}</span>}
                        </div>
                        <h3 className="text-[17px] sm:text-[18px] font-extrabold text-[#22406F] leading-snug group-hover:text-[#007BBB] transition-colors line-clamp-3">
                          {item.title}
                        </h3>
                        <p className="text-[14px] text-slate-600 leading-relaxed text-justify line-clamp-3">
                          {item.summary}
                        </p>
                      </div>

                      <div className="pt-2 text-[13px] font-bold text-[#007BBB] group-hover:text-[#22406F] transition-colors flex items-center gap-1">
                        <span>Lihat Selengkapnya</span>
                        <span>&rsaquo;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* Modal Detail CSR */}
        {activeItem && (
          <div 
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in duration-200 cursor-default"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Tutup"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-2 pr-8">
                <p className="text-[13px] text-[#007BBB] font-bold">{activeItem.date} {activeItem.location && `• ${activeItem.location}`}</p>
                <h3 className="text-[22px] sm:text-[26px] font-extrabold text-[#22406F] leading-tight">
                  {activeItem.title}
                </h3>
              </div>

              {activeItem.image && (
                <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] shadow-sm">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="text-[16px] text-slate-700 leading-relaxed text-justify space-y-4 pt-2 font-sans">
                <p>{activeItem.summary}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
