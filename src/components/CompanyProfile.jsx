'use client';

import { useState } from 'react';

export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <section id="profil" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-gold mb-3">Tentang Perseroan</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 title-gold-accent text-center mb-4">
            PT Nusantara Satu Properti Tbk
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Membangun ekosistem properti dan perhotelan yang menghadirkan nilai tambah berkelanjutan bagi seluruh pemangku kepentingan.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            onClick={() => setActiveTab('profil')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'profil' 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Profil Perseroan
          </button>
          <button 
            onClick={() => setActiveTab('visimisi')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'visimisi' 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Visi, Misi &amp; Nilai
          </button>
          <button 
            onClick={() => setActiveTab('manajemen')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'manajemen' 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Dewan Komisaris &amp; Direksi
          </button>
          <button 
            onClick={() => setActiveTab('saham')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'saham' 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Struktur Kepemilikan Saham
          </button>
        </div>

        {/* Tab Contents */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/80">
          {activeTab === 'profil' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                <h3 className="text-xl font-bold text-slate-900 border-l-4 border-amber-600 pl-3">
                  Komitmen pada Kualitas &amp; Keberlanjutan
                </h3>
                <p>
                  <strong>PT Nusantara Satu Properti Tbk (“Perseroan”)</strong>, berkedudukan di Jawa Tengah, didirikan berdasarkan Akta Pendirian Perseroan Terbatas No. 6 tanggal 3 Oktober 2012 di hadapan Notaris di Kota Semarang. Akta Pendirian telah memperoleh pengesahan dari Menteri Hukum dan Hak Asasi Manusia Republik Indonesia No. AHU-58590.AH.01.01.Tahun 2012.
                </p>
                <p>
                  Perseroan bergerak dalam bidang pengembangan real estat dan perhotelan, berfokus menciptakan kawasan residensial terpadu berkonsep <em>green living</em> melalui produk unggulan <strong>Amaya Home Resort</strong> di Ungaran, serta ekspansi bisnis hospitality dengan merek <strong>Allstay Hotel</strong> di Semarang dan Yogyakarta.
                </p>
                <p>
                  Pada tahun 2018, Perseroan resmi mencatatkan saham perdananya di Bursa Efek Indonesia (IDX: NUSA/SATU), membuktikan transparansi, tata kelola yang baik (GCG), dan kesiapan dalam menyongsong pertumbuhan properti nasional.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                  <div className="bg-slate-100 px-3 py-1.5 rounded-md">Kantor Pusat: Semarang, Jawa Tengah</div>
                  <div className="bg-slate-100 px-3 py-1.5 rounded-md">Status: Perusahaan Terbuka (Tbk)</div>
                  <div className="bg-slate-100 px-3 py-1.5 rounded-md">Sektor: Properti &amp; Real Estat</div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100">
                  <img 
                    src="/images/scott-graham-5fNmWej4tAA-unsplash-1-1-1024x683.jpg" 
                    alt="Kantor Perseroan" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-900 text-white text-xs">
                    <p className="font-semibold">Tata Kelola Profesional &amp; Berintegritas</p>
                    <p className="text-slate-400 mt-1">Mengedepankan prinsip keterbukaan, akuntabilitas, dan tanggung jawab sosial.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'visimisi' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50/50 p-6 sm:p-8 rounded-xl border border-amber-200/60">
                <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                  V
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Perseroan</h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  Menjadi pengembang properti dan jaringan perhotelan pilihan utama yang terdepan dalam inovasi konsep green living, memberikan kualitas hidup terbaik bagi penghuni, serta menciptakan nilai investasi berkelanjutan bagi para pemegang saham.
                </p>
              </div>

              <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-lg mb-4">
                  M
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Misi Perseroan</h3>
                <ul className="space-y-2.5 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">1.</span>
                    <span>Mengembangkan kawasan hunian ramah lingkungan dengan fasilitas resort modern yang terpadu.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">2.</span>
                    <span>Menyediakan pelayanan hospitality berstandar bintang dengan sentuhan keramahan Indonesia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">3.</span>
                    <span>Menerapkan prinsip Good Corporate Governance (GCG) di seluruh lini anak perusahaan dan unit usaha.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">4.</span>
                    <span>Memberikan kontribusi nyata terhadap pelestarian lingkungan dan pemberdayaan masyarakat sekitar.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'manajemen' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-600 pl-3 mb-4">
                  Dewan Komisaris
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="font-bold text-slate-900">Komisaris Utama</div>
                    <div className="text-sm text-amber-700 font-semibold mt-1">Ir. Hendra Kusuma, M.M.</div>
                    <div className="text-xs text-slate-500 mt-2">Pengalaman lebih dari 25 tahun di industri properti dan perbankan nasional.</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="font-bold text-slate-900">Komisaris Independen</div>
                    <div className="text-sm text-amber-700 font-semibold mt-1">Drs. Bambang Sudarmo, Ak.</div>
                    <div className="text-xs text-slate-500 mt-2">Ahli akuntansi &amp; audit tata kelola korporat pasar modal.</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3 mb-4">
                  Direksi Perseroan
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="font-bold text-slate-900">Direktur Utama</div>
                    <div className="text-sm text-slate-900 font-semibold mt-1">Johan Wibowo, S.T., M.B.A.</div>
                    <div className="text-xs text-slate-500 mt-2">Memimpin perumusan strategi bisnis, ekspansi kawasan residensial, dan kemitraan strategis.</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="font-bold text-slate-900">Direktur Operasional &amp; Hospitality</div>
                    <div className="text-sm text-slate-900 font-semibold mt-1">Stephanie Pratama, B.Sc.</div>
                    <div className="text-xs text-slate-500 mt-2">Mengawasi seluruh operasional jaringan Allstay Hotel dan pengembangan properti.</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="font-bold text-slate-900">Direktur Keuangan</div>
                    <div className="text-sm text-slate-900 font-semibold mt-1">Rian Hidayat, S.E., M.Ak.</div>
                    <div className="text-xs text-slate-500 mt-2">Mengelola strategi permodalan, pelaporan keterbukaan bursa, dan efisiensi operasional.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'saham' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-600 pl-3">
                Komposisi Pemegang Saham (Per Des 2025)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-100 text-xs uppercase text-slate-900 font-bold border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Nama Pemegang Saham</th>
                      <th className="px-4 py-3">Jumlah Lembar Saham</th>
                      <th className="px-4 py-3">Persentase (%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">PT Nusantara Investama Sentosa (Pengendali)</td>
                      <td className="px-4 py-3">850.000.000</td>
                      <td className="px-4 py-3 font-semibold text-amber-700">62,96%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">PT Graha Sentosa Pratama</td>
                      <td className="px-4 py-3">220.000.000</td>
                      <td className="px-4 py-3 font-semibold text-amber-700">16,30%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">Masyarakat Umum (Publik)</td>
                      <td className="px-4 py-3">280.000.000</td>
                      <td className="px-4 py-3 font-semibold text-amber-700">20,74%</td>
                    </tr>
                    <tr className="bg-slate-50 font-bold text-slate-900">
                      <td className="px-4 py-3">Total Saham Beredar</td>
                      <td className="px-4 py-3">1.350.000.000</td>
                      <td className="px-4 py-3">100,00%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic">
                * Saham dicatatkan di Papan Perdagangan Bursa Efek Indonesia (BEI) dengan kode ticker NUSA.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
