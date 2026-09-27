'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TataKelolaPage() {
  const [data, setData] = useState([]);
  const [activeTabKey, setActiveTabKey] = useState('pedoman-kerja');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cms?type=tataKelola')
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setData(res.data);
          if (res.data.length > 0) {
            setActiveTabKey(res.data[0].tabKey || 'pedoman-kerja');
          }
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const currentTab = data.find((item) => item.tabKey === activeTabKey) || data[0];

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* SECTION: TATA KELOLA Header & Interactive Tabs            */}
        {/* ========================================================= */}
        <section className="bg-[#22406F]/[0.11] pt-14 sm:pt-20 pb-20 sm:pb-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-16">
            
            {/* Page Title & Divider */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-[34px] sm:text-[45px] font-extrabold uppercase tracking-[2.1px] text-[#22406F] font-sans">
                TATA KELOLA
              </h1>
              <div className="w-[18%] max-w-[120px] h-[4px] bg-[#22406F] mx-auto mt-4"></div>
            </div>

            {loading ? (
              <div className="py-20 text-center text-[#22406F] font-bold">
                Memuat data tata kelola...
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                
                {/* Left: Vertical Navigation Tabs */}
                <div className="lg:col-span-4 flex flex-col space-y-3">
                  {data.map((item) => {
                    const isActive = activeTabKey === item.tabKey;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTabKey(item.tabKey)}
                        className={`w-full text-left px-6 py-4 rounded-full font-bold text-[15px] sm:text-[16px] transition-all cursor-pointer shadow-sm ${
                          isActive
                            ? 'bg-[#22406F] text-white shadow-md'
                            : 'bg-white text-[#22406F] hover:bg-slate-50 border border-slate-200/80'
                        }`}
                      >
                        {item.tabTitle}
                      </button>
                    );
                  })}
                </div>

                {/* Right: Tab Content Container */}
                <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100">
                  {currentTab && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      
                      {/* Sections inside Tab */}
                      {currentTab.sections && currentTab.sections.map((sec, idx) => (
                        <div key={idx} className="space-y-4">
                          <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#22406F] tracking-wide">
                            {sec.heading}
                          </h2>
                          
                          <p className="text-[16px] sm:text-[17px] text-[#1c1c1c] leading-[1.8] text-justify font-sans">
                            {sec.content}
                          </p>

                          {sec.duties && sec.duties.length > 0 && (
                            <div className="space-y-3 pt-2">
                              {sec.dutiesTitle && (
                                <h3 className="text-[17px] font-bold text-[#22406F]">
                                  {sec.dutiesTitle}
                                </h3>
                              )}
                              <ol className="list-decimal pl-5 space-y-2 text-[15px] sm:text-[16px] text-slate-700 leading-relaxed">
                                {sec.duties.map((duty, dIdx) => (
                                  <li key={dIdx} className="pl-1">
                                    {duty}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Download PDF Card */}
                      {currentTab.pdfUrl && (
                        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 p-5 rounded-xl">
                          <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-lg bg-[#22406F]/10 text-[#22406F] flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-[15px] font-bold text-[#22406F]">
                                {currentTab.documentTitle || currentTab.tabTitle}
                              </p>
                              <p className="text-[12px] text-slate-500 font-medium">Dokumen Resmi PDF</p>
                            </div>
                          </div>

                          <a
                            href={currentTab.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#22406F] hover:bg-[#183054] text-white text-[14px] font-bold rounded-lg transition-colors shadow-xs"
                          >
                            <span>Download</span>
                            <span className="text-base">&rsaquo;</span>
                          </a>
                        </div>
                      )}

                    </div>
                  )}
                </div>

              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
