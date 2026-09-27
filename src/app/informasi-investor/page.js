'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TABS = [
  'Prospektus',
  'Laporan Tahunan',
  'Informasi Keuangan',
  'Rapat Pemegang Saham',
  'Public Expose',
  'Keterbukaan Informasi Lainnya'
];

const ITEMS_PER_PAGE = 12;

export default function InformasiInvestorPage() {
  const [activeTab, setActiveTab] = useState('Prospektus');
  const [investorData, setInvestorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const contentTopRef = useRef(null);

  useEffect(() => {
    fetch('/api/cms?type=investor')
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setInvestorData(res.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Reset page whenever filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery, selectedYear]);

  // Filter items based on activeTab, searchQuery, and selectedYear
  const filteredItems = useMemo(() => {
    return investorData.filter((item) => {
      const matchTab = item.category === activeTab;
      const matchSearch = searchQuery.trim() === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchYear = selectedYear === 'Semua' || 
        item.title.includes(selectedYear) || (item.date && item.date.includes(selectedYear));
      return matchTab && matchSearch && matchYear;
    });
  }, [investorData, activeTab, searchQuery, selectedYear]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (contentTopRef.current) {
        contentTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Extract available years for the active tab for easy filtering
  const availableYears = useMemo(() => {
    const tabItems = investorData.filter((i) => i.category === activeTab);
    const years = new Set();
    tabItems.forEach((i) => {
      const match = i.title.match(/\b(20\d{2})\b/);
      if (match) years.add(match[1]);
    });
    return ['Semua', ...Array.from(years).sort().reverse()];
  }, [investorData, activeTab]);

  return (
    <div className="min-h-screen bg-[#F1F4F8] text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Title Section */}
          <div className="text-center mb-10" ref={contentTopRef}>
            <h1 className="text-[32px] sm:text-[45px] font-extrabold uppercase tracking-[2.1px] text-[#000077] font-sans">
              Informasi Investor
            </h1>
            {/* Center Line Accent */}
            <div className="w-[120px] h-[4px] bg-[#22406F] mx-auto mt-4 mb-2"></div>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
              Keterbukaan informasi, laporan keuangan, dan tata kelola terpercaya PT Kota Satu Properti Tbk untuk para pemegang saham dan publik.
            </p>
          </div>

          {/* Tab Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              const count = investorData.filter((i) => i.category === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSearchQuery('');
                    setSelectedYear('Semua');
                  }}
                  className={`px-4 sm:px-6 py-3 rounded-none text-xs sm:text-[14px] font-bold uppercase tracking-[1px] transition-all duration-200 cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-[#007BBB] text-white shadow-md'
                      : 'bg-[#22406F] text-white hover:bg-[#007BBB]'
                  }`}
                >
                  {tab} {count > 0 && <span className="opacity-80 text-[11px] ml-1">({count})</span>}
                </button>
              );
            })}
          </div>

          {/* Search & Year Filter Controls */}
          <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-slate-200/80 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder={`Cari dokumen di ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-[#007BBB] text-slate-800"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {availableYears.length > 2 && (
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-bold uppercase text-slate-500 whitespace-nowrap">Tahun:</span>
                <div className="flex flex-wrap gap-1.5">
                  {availableYears.slice(0, 7).map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`px-3 py-1 text-xs font-semibold rounded border transition-colors ${
                        selectedYear === yr
                          ? 'bg-[#007BBB] text-white border-[#007BBB]'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {yr}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Showing Items Counter */}
          {!loading && filteredItems.length > 0 && (
            <div className="flex items-center justify-between mb-6 text-xs sm:text-sm text-slate-500 font-medium">
              <div>
                Menampilkan <span className="font-bold text-[#22406F]">{(currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, filteredItems.length)}</span> dari <span className="font-bold text-[#22406F]">{filteredItems.length}</span> dokumen
              </div>
              {totalPages > 1 && (
                <div>
                  Halaman <span className="font-bold text-[#007BBB]">{currentPage}</span> dari {totalPages}
                </div>
              )}
            </div>
          )}

          {/* Content Loading State */}
          {loading ? (
            <div className="py-20 text-center">
              <div className="w-10 h-10 border-4 border-[#007BBB] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-sm font-semibold text-slate-500">Memuat data dokumen investor...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="bg-white rounded-[10px] p-12 text-center border border-slate-200 shadow-sm">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-bold text-slate-700 mb-1">Tidak Ada Dokumen Ditemukan</h3>
              <p className="text-sm text-slate-500">
                {searchQuery || selectedYear !== 'Semua' 
                  ? 'Coba ubah kata kunci pencarian atau filter tahun Anda.' 
                  : 'Belum ada dokumen yang diunggah untuk kategori ini.'}
              </p>
            </div>
          ) : (
            <>
              {/* Card Grid Layout (Paginated) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paginatedItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col border border-slate-100 group"
                  >
                    {/* Thumbnail / Cover Image with safe onError fallback */}
                    <div className="h-[180px] bg-slate-50 relative overflow-hidden flex items-center justify-center p-3 border-b border-slate-100">
                      <img
                        src={item.image || '/images/orig-logo.png'}
                        alt={item.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/images/orig-logo.png';
                        }}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Body Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 leading-snug line-clamp-3 mb-3 group-hover:text-[#007BBB] transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      {/* Download Button / Link */}
                      <div className="pt-3 border-t border-slate-100">
                        <a
                          href={item.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[15px] font-bold tracking-[2px] text-[#007BBB] hover:text-[#000077] transition-colors uppercase group/link"
                        >
                          <span>{item.buttonText || 'Download >'}</span>
                          <svg
                            className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm font-bold text-slate-600 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    &larr; Sebelumnya
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                      const isActive = p === currentPage;
                      return (
                        <button
                          key={p}
                          onClick={() => handlePageChange(p)}
                          className={`w-9 h-9 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                            isActive
                              ? 'bg-[#007BBB] text-white shadow-sm'
                              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm font-bold text-slate-600 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Selanjutnya &rarr;
                  </button>
                </div>
              )}
            </>
          )}

          {/* Keterangan Saham Footer Info Box if in Keterbukaan Informasi Lainnya */}
          {activeTab === 'Keterbukaan Informasi Lainnya' && (
            <div className="mt-12 bg-white rounded-[10px] p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-extrabold text-[#000077] uppercase tracking-wide">
                  Informasi Saham SATU
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Pantau pergerakan harga saham, grafik perdagangan historis, dan keterbukaan informasi emiten PT Kota Satu Properti Tbk langsung di Bursa Efek Indonesia (IDX).
                </p>
              </div>
              <a
                href="https://www.idx.co.id/id/perusahaan-tercatat/profil-perusahaan-tercatat/SATU"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#007BBB] hover:bg-[#000077] text-white font-bold text-sm uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow"
              >
                Kunjungi IDX SATU &rarr;
              </a>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
