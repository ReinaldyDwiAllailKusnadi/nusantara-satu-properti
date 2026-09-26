'use client';

import { useState } from 'react';

export default function CompanyProfile() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <section id="profil-perusahaan" className="py-16 sm:py-20 bg-white text-slate-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Intro Grid matching original kotasatuproperti.com */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Image */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-sm shadow-md">
              <img
                src="/images/scott-graham-5fNmWej4tAA-unsplash-1-1-1024x683.jpg"
                alt="PT Nusantara Satu Properti Tbk"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Top Divider */}
            <div className="w-16 h-1 bg-[#19375e] mb-4"></div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#19375e] tracking-tight uppercase mb-4">
              PT Nusasatu Properti Tbk
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
              PT Nusasatu Properti Tbk (“Perseroan”), berkedudukan di Kabupaten Semarang, dengan akta pendiriannya sebagaimana dimuat dalam Akta Pendirian Perseroan Terbatas No. 6 tanggal 3 Oktober 2012, dibuat di hadapan Maria Yosefa Deni, S.H., Notaris di Kota Semarang. Akta Pendirian Perseroan telah memperoleh pengesahan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia sebagaimana ternyata dari Surat Keputusannya No. AHU-58590.AH.01.01.Tahun 2012 tanggal 19 November 2012.
            </p>

            <button
              onClick={() => setModalOpen(!modalOpen)}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#19375e] hover:bg-[#0f233d] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm"
            >
              <span>{modalOpen ? 'Tutup Rincian' : 'Lihat Lebih Lengkap'}</span>
              <svg className={`w-3.5 h-3.5 transition-transform ${modalOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Detailed Tabs (Visible when clicking 'Lihat Lebih Lengkap') */}
        {modalOpen && (
          <div className="mt-12 pt-10 border-t border-slate-200 animate-fadeIn">
            {/* Tab navigation matching original scripts */}
            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-8">
              <button
                onClick={() => setActiveTab('profil')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-md transition-colors ${
                  activeTab === 'profil'
                    ? 'bg-[#19375e] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Profil Perusahaan
              </button>
              <button
                onClick={() => setActiveTab('visimisi')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-md transition-colors ${
                  activeTab === 'visimisi'
                    ? 'bg-[#19375e] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Visi, Misi &amp; Nilai
              </button>
              <button
                onClick={() => setActiveTab('manajemen')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-md transition-colors ${
                  activeTab === 'manajemen'
                    ? 'bg-[#19375e] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Manajemen (Komisaris &amp; Direksi)
              </button>
              <button
                onClick={() => setActiveTab('saham')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-md transition-colors ${
                  activeTab === 'saham'
                    ? 'bg-[#19375e] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Kepemilikan Saham
              </button>
            </div>

            {/* Tab Content 1: Profil Perusahaan */}
            {activeTab === 'profil' && (
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-[#19375e] uppercase">Sekilas Perseroan</h3>
                <p>
                  Sesuai dengan Pasal 3 Anggaran Dasar Perseroan, maksud dan tujuan Perseroan adalah berusaha dalam bidang real estat, perhotelan, perdagangan besar dan jasa konsultasi manajemen.
                </p>
                <p>
                  Kegiatan usaha utama yang saat ini dijalankan oleh Perseroan dan entitas anak adalah pembangunan kawasan perumahan resort <strong>The Amaya Home Resort</strong> di Ungaran, Kabupaten Semarang, serta pengoperasian <strong>Allstay Hotel Semarang</strong> (hotel bintang 3 di Simpang Lima) dan <strong>Allstay Ecotel Yogyakarta</strong> (Jl. Wahid Hasyim, Depok, Sleman).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <span className="text-xs text-slate-400 block font-semibold">KODE SAHAM</span>
                    <span className="text-xl font-black text-[#19375e]">IDX: NUSA</span>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <span className="text-xs text-slate-400 block font-semibold">TANGGAL IPO</span>
                    <span className="text-xl font-black text-[#19375e]">5 November 2018</span>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <span className="text-xs text-slate-400 block font-semibold">KANTOR PUSAT</span>
                    <span className="text-sm font-bold text-slate-800">Semarang, Jawa Tengah</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content 2: Visi Misi */}
            {activeTab === 'visimisi' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-lg border border-slate-200 text-sm">
                <div className="bg-white p-6 rounded border border-slate-200">
                  <h4 className="text-base font-bold text-[#19375e] uppercase mb-2">Visi Perseroan</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Menjadi pengembang properti terintegrasi terkemuka dan terpercaya di Indonesia yang menghasilkan karya berkualitas tinggi, berwawasan lingkungan, serta memberikan nilai optimal yang berkelanjutan bagi seluruh pemangku kepentingan.
                  </p>
                </div>
                <div className="bg-white p-6 rounded border border-slate-200">
                  <h4 className="text-base font-bold text-[#19375e] uppercase mb-2">Misi Perseroan</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                    <li>Mengembangkan kawasan hunian ramah lingkungan dan berkualitas prima.</li>
                    <li>Memberikan layanan hospitality berstandar internasional dengan keramahan Indonesia.</li>
                    <li>Menciptakan pertumbuhan usaha yang sehat, menguntungkan, dan berkelanjutan.</li>
                    <li>Menerapkan prinsip Tata Kelola Perusahaan yang Baik (Good Corporate Governance).</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab Content 3: Manajemen */}
            {activeTab === 'manajemen' && (
              <div className="space-y-6 bg-slate-50 p-6 rounded-lg border border-slate-200 text-sm">
                <div>
                  <h4 className="text-base font-bold text-[#19375e] uppercase mb-3">Dewan Komisaris</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <div className="font-bold text-slate-900">Herry Santoso</div>
                      <div className="text-xs text-[#0099d8] font-semibold">Komisaris Utama</div>
                    </div>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <div className="font-bold text-slate-900">Dr. Ir. Bambang Supriyadi</div>
                      <div className="text-xs text-[#0099d8] font-semibold">Komisaris Independen</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-[#19375e] uppercase mb-3">Direksi</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <div className="font-bold text-slate-900">Johan P. Santoso</div>
                      <div className="text-xs text-[#0099d8] font-semibold">Direktur Utama</div>
                    </div>
                    <div className="bg-white p-4 rounded border border-slate-200">
                      <div className="font-bold text-slate-900">Stevanus Ryan Santoso</div>
                      <div className="text-xs text-[#0099d8] font-semibold">Direktur</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content 4: Kepemilikan Saham */}
            {activeTab === 'saham' && (
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-sm">
                <h4 className="text-base font-bold text-[#19375e] uppercase mb-4">Struktur Pemegang Saham Perseroan</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse bg-white rounded border border-slate-200">
                    <thead>
                      <tr className="bg-[#19375e] text-white text-xs uppercase">
                        <th className="py-3 px-4">Nama Pemegang Saham</th>
                        <th className="py-3 px-4">Jumlah Saham</th>
                        <th className="py-3 px-4">Persentase (%)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-800">PT Kota Satu Investama</td>
                        <td className="py-3 px-4">715.000.000</td>
                        <td className="py-3 px-4 font-bold text-[#19375e]">52,00%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-800">PT Sentra Investama Properti</td>
                        <td className="py-3 px-4">275.000.000</td>
                        <td className="py-3 px-4 font-bold text-[#19375e]">20,00%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-800">Masyarakat (Publik)</td>
                        <td className="py-3 px-4">385.000.000</td>
                        <td className="py-3 px-4 font-bold text-[#19375e]">28,00%</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td className="py-3 px-4">TOTAL</td>
                        <td className="py-3 px-4">1.375.000.000</td>
                        <td className="py-3 px-4">100,00%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
