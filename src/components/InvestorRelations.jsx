'use client';

import { useState } from 'react';

const reports = [
  {
    category: 'Laporan Tahunan (Annual Report)',
    items: [
      { title: 'Laporan Tahunan 2024: Accelerating Sustainable Growth', date: 'April 2025', size: '12.4 MB' },
      { title: 'Laporan Tahunan 2023: Navigating Resilience and Excellence', date: 'April 2024', size: '10.8 MB' },
      { title: 'Laporan Tahunan 2022: Embracing Sustainable Living Harmony', date: 'Mei 2023', size: '9.5 MB' }
    ]
  },
  {
    category: 'Laporan Keuangan Berkala (Financial Report)',
    items: [
      { title: 'Laporan Keuangan Interim Q3 2025 (Tidak Diaudit)', date: 'Oktober 2025', size: '3.2 MB' },
      { title: 'Laporan Keuangan Interim Q2 2025 (Tidak Diaudit)', date: 'Juli 2025', size: '2.9 MB' },
      { title: 'Laporan Keuangan Tahunan Diaudit 2024 (Audited)', date: 'Maret 2025', size: '4.8 MB' }
    ]
  },
  {
    category: 'Tata Kelola Perusahaan (Good Corporate Governance)',
    items: [
      { title: 'Pedoman Kerja Dewan Komisaris & Direksi (Board Manual)', date: 'Update 2024', size: '1.4 MB' },
      { title: 'Piagam Komite Audit & Manajemen Risiko', date: 'Update 2023', size: '1.1 MB' },
      { title: 'Pedoman Sistem Pelaporan Pelanggaran (Whistleblowing System)', date: 'Update 2023', size: '890 KB' }
    ]
  },
  {
    category: 'Rapat Umum Pemegang Saham (RUPS / AGMS)',
    items: [
      { title: 'Risalah Rapat Umum Pemegang Saham Tahunan (RUPST) Tahun Buku 2024', date: 'Juni 2025', size: '2.1 MB' },
      { title: 'Pemanggilan & Mata Acara RUPST Tahun Buku 2024', date: 'Mei 2025', size: '1.2 MB' },
      { title: 'Pemberitahuan Pelaksanaan RUPST & RUPSLB 2024', date: 'April 2025', size: '850 KB' }
    ]
  }
];

export default function InvestorRelations() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="hubungan-investor" className="py-20 bg-slate-100 text-slate-900 relative">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-800 bg-amber-200/60 border border-amber-300 px-3 py-1 rounded-full">
            Keterbukaan Informasi &amp; Pasar Modal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight text-slate-950">
            Hubungan Investor (Investor Relations)
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Sebagai perusahaan terbuka yang tercatat di Bursa Efek Indonesia (IDX: NUSA), kami berkomitmen pada transparansi, akuntabilitas, dan nilai tambah jangka panjang bagi seluruh pemangku kepentingan.
          </p>
        </div>

        {/* Stock Ticker & Snapshot Card */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
              <div className="text-xs text-amber-400 uppercase tracking-widest font-bold">Kode Saham (Ticker)</div>
              <div className="text-3xl sm:text-4xl font-black mt-1 text-white flex items-center gap-3">
                IDX: NUSA
              </div>
              <div className="text-xs text-slate-400 mt-1">Papan Pengembangan BEI</div>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
              <div className="text-xs text-slate-400">Total Saham Tercatat</div>
              <div className="text-2xl font-bold mt-1 text-white">1.375.000.000</div>
              <div className="text-xs text-slate-400 mt-1">Lembar Saham Biasa</div>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
              <div className="text-xs text-slate-400">Biro Administrasi Efek (BAE)</div>
              <div className="text-base font-bold mt-1 text-white">PT Sinartama Gunita</div>
              <div className="text-xs text-slate-400 mt-1">Pengelola Registrasi Pemegang Saham</div>
            </div>

            <div>
              <div className="text-xs text-slate-400">Hubungi Corporate Secretary</div>
              <div className="text-sm font-semibold mt-1 text-amber-300">corsec@nusantarasatuproperti.com</div>
              <div className="text-xs text-slate-400 mt-1">Tel: (024) 841 8888</div>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {reports.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                activeTab === idx
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.category.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Document List */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              {reports[activeTab].category}
            </h3>
            <span className="text-xs text-slate-500 font-medium">Format: PDF Terverifikasi</span>
          </div>

          <div className="divide-y divide-slate-100">
            {reports[activeTab].items.map((doc, idx) => (
              <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-amber-800 transition-colors">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Dipublikasikan: {doc.date} &bull; Ukuran File: {doc.size}
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => alert(`Mengunduh dokumen: ${doc.title}`)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Unduh PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
