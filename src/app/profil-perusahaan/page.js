'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProfilPerusahaanPage() {
  const [showChartModal, setShowChartModal] = useState(false);
  const [showOrgModal, setShowOrgModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* SECTION 1: Informasi Perusahaan */}
        <section className="pt-12 sm:pt-16 pb-12 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#19375e] tracking-tight mb-2">
                Nusasatu Properti, Tbk.
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-[#19375e] tracking-tight">
                Informasi Perusahaan
              </h2>
              <div className="w-[60px] h-[3px] bg-[#19375e] mt-3"></div>
            </div>

            <div className="space-y-5 text-[15px] sm:text-[16px] text-slate-700 leading-relaxed">
              <p>
                <strong className="text-slate-900">PT Nusasatu Properti Tbk</strong> (&ldquo;Perseroan&rdquo;), berkedudukan di Kabupaten Semarang, dengan akta pendiriannya sebagaimana dimuat dalam Akta Pendirian Perseroan Terbatas No. 6 tanggal 3 Oktober 2012, dibuat di hadapan Maria Yosefa Deni, S.H., Notaris di Kota Semarang. Akta Pendirian Perseroan telah memperoleh pengesahan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia sebagaimana ternyata dari Surat Keputusannya No. AHU-58590.AH.01.01.Tahun 2012 tanggal 19 November 2012.
              </p>
              <p>
                Pada tahun 2018 Perseroan melaksanakan Penawaran Umum Perdana Saham atau <em>Initial Public Offering</em> (IPO) kepada masyarakat dengan menerbitkan 500.000.000 lembar saham dengan nilai nominal Rp 100,- di Bursa Efek Indonesia. Perseroan dengan kode ticker <strong className="text-[#19375e]">NUSA</strong> telah mendapatkan pernyataan efektif dari Otoritas Jasa Keuangan pada tanggal 5 November 2018.
              </p>
              <p>
                Perseroan berkedudukan di Kabupaten Semarang, memiliki dua kegiatan usaha utama yaitu di bidang pengembangan properti dan perhotelan. Posisi Perseroan merupakan induk perusahaan, atas seluruh entitas anak perusahaan yang dimiliki melalui investasi penyertaan kepemilikan saham.
              </p>
              <p>
                Kegiatan usaha yang saat ini dilaksanakan oleh Perseroan adalah di bidang pembangunan, pengelolaan, dan perdagangan real estate/properti. Kegiatan usaha Perseroan dan Entitas Anak memiliki keterkaitan satu sama lain yaitu melakukan kegiatan pembangunan, pengelolaan dan perdagangan real estate/properti.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Visi, Misi & Values 4P */}
        <section className="py-12 bg-[#F8FAFC] border-y border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Visi */}
              <div className="bg-white p-7 rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <img src="/images/1.png" alt="Visi" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-extrabold text-[#19375e] mb-3">Visi :</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                  Number one is delivering superior performance through SATU philosophy
                </p>
              </div>

              {/* Card 2: Misi */}
              <div className="bg-white p-7 rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <img src="/images/3.png" alt="Misi" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-extrabold text-[#19375e] mb-3">Misi :</h3>
                <ul className="text-[13.5px] text-slate-600 text-left space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#19375e] font-bold mt-0.5">•</span>
                    <span><strong>Synergy</strong>, internal & external for sustainable best result</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#19375e] font-bold mt-0.5">•</span>
                    <span><strong>Automation</strong>, by digital system for professional business operation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#19375e] font-bold mt-0.5">•</span>
                    <span><strong>Talent development</strong>, as continuous organization growth and best place to work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#19375e] font-bold mt-0.5">•</span>
                    <span><strong>Unique concept</strong>, for competitive and profitable business</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Values 4P */}
              <div className="bg-white p-7 rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <img src="/images/2.png" alt="Values 4P" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-extrabold text-[#19375e] mb-3">Values 4P :</h3>
                <div className="text-[14px] text-slate-700 font-semibold space-y-2 w-full max-w-[180px]">
                  <div className="py-1.5 px-3 bg-slate-50 border border-slate-100 rounded-md">Profit</div>
                  <div className="py-1.5 px-3 bg-slate-50 border border-slate-100 rounded-md">Professional</div>
                  <div className="py-1.5 px-3 bg-slate-50 border border-slate-100 rounded-md">Prestige</div>
                  <div className="py-1.5 px-3 bg-slate-50 border border-slate-100 rounded-md">Public Oriented</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: Manajemen */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375e] tracking-tight uppercase">
                Manajemen
              </h2>
              <div className="w-[70px] h-[3.5px] bg-[#19375e] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="space-y-12 sm:space-y-16">
              
              {/* Executive 1: Arief Sugiyo */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#FDFDFD] p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="md:col-span-4 lg:col-span-3 flex justify-center">
                  <div className="w-48 sm:w-56 overflow-hidden rounded-xl shadow-md border-2 border-slate-100">
                    <img
                      src="/images/arief-profil.png"
                      alt="Arief Sugiyo - Komisaris Utama"
                      className="w-full h-auto object-cover hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:col-span-8 lg:col-span-9 space-y-3">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#19375e]">Arief Sugiyo</h3>
                    <p className="text-[15px] font-bold text-amber-600 uppercase tracking-wider">Komisaris Utama</p>
                  </div>
                  <div className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed space-y-3 font-normal">
                    <p>
                      Beliau merupakan seorang profesional berpengalaman di industri pasar modal, dengan latar belakang akademis dalam bidang Manajemen Informatika dari Universitas Bina Nusantara. Setelah lulus, beliau memulai kariernya di beberapa perusahaan sekuritas ternama, di mana beliau terus mengembangkan keahlian serta jaringan yang kuat di industri keuangan dan investasi.
                    </p>
                    <p>
                      Beliau juga memiliki pengalaman mendalam dalam pengelolaan ekuitas dan penjualan surat berharga, dengan peran penting di PDFCI Sekuritas dan Quantum Qapita Sekuritas. Saat ini, Arief Sugiyo menjabat sebagai Senior Equity Sales di PT Semesta Indovest Sekuritas, ia bertanggung jawab untuk membangun dan mempertahankan portofolio investasi yang strategis bagi para klien. Keahliannya dalam merancang strategi pasar modal yang tepat, ditambah dengan kemampuan networking yang luas, menjadikannya salah satu tokoh penting di bidang sekuritas dan investasi. Sebagai Komisaris Utama, Arief Sugiyo memainkan peran kunci dalam pengambilan keputusan strategis perusahaan, dengan fokus pada pertumbuhan bisnis yang berkelanjutan dan profitabilitas jangka panjang.
                    </p>
                  </div>
                </div>
              </div>

              {/* Executive 2: Ibnu Dody Prayitno */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#FDFDFD] p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="md:col-span-4 lg:col-span-3 flex justify-center">
                  <div className="w-48 sm:w-56 overflow-hidden rounded-xl shadow-md border-2 border-slate-100">
                    <img
                      src="/images/ibnu-dody-profil.png"
                      alt="Ibnu Dody Prayitno - Komisaris Independen"
                      className="w-full h-auto object-cover hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:col-span-8 lg:col-span-9 space-y-3">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#19375e]">Ibnu Dody Prayitno</h3>
                    <p className="text-[15px] font-bold text-amber-600 uppercase tracking-wider">Komisaris Independen</p>
                  </div>
                  <div className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed space-y-3 font-normal">
                    <p>
                      Beliau telah membawa lebih dari 16 tahun pengalaman profesional dalam bidang hukum dan manajemen operasional ke jabatannya sebagai Komisaris Independen di PT Nusasatu Properti Tbk. Beliau adalah lulusan Sarjana Hukum dari Universitas 17 Agustus Semarang pada tahun 2009, dan telah membangun karier yang sukses dengan berbagai peran manajerial di sektor koperasi dan lembaga keuangan. Salah satu pencapaian penting dalam kariernya adalah saat menjabat sebagai Manager Operasional Kospin SEKARTAMA pada periode 2018–2019, di mana beliau berhasil mengimplementasikan berbagai inisiatif strategis untuk meningkatkan efisiensi dan kepatuhan operasional.
                    </p>
                    <p>
                      Sejak tahun 2020, Ibnu Dody Prayitno memegang peran sebagai Manager Kepatuhan di Kospin SEKARTAMA, di mana ia bertanggung jawab untuk memastikan bahwa operasi perusahaan berjalan sesuai dengan regulasi dan standar industri yang berlaku. Dengan pengetahuan hukum yang mendalam serta pengalaman operasional yang solid, Ibnu Dody Prayitno memberikan perspektif independen yang berharga dalam pengawasan dan tata kelola perusahaan. Sebagai Komisaris Independen, Ibnu Dody Prayitno memiliki tanggung jawab untuk memastikan bahwa kepentingan pemegang saham dilindungi dan bahwa keputusan perusahaan dibuat dengan integritas dan transparansi yang tinggi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Executive 3: Momog Irnawan */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#FDFDFD] p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="md:col-span-4 lg:col-span-3 flex justify-center">
                  <div className="w-48 sm:w-56 overflow-hidden rounded-xl shadow-md border-2 border-slate-100">
                    <img
                      src="/images/momog-irnawan-profil.png"
                      alt="Momog Irnawan - Direktur Utama"
                      className="w-full h-auto object-cover hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:col-span-8 lg:col-span-9 space-y-3">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#19375e]">Momog Irnawan</h3>
                    <p className="text-[15px] font-bold text-amber-600 uppercase tracking-wider">Direktur Utama</p>
                  </div>
                  <div className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed space-y-3 font-normal">
                    <p>
                      Berkewarganegaraan Indonesia, beliau merupakan lulusan Sarjana Ekonomi Alumni Universitas Mahasaraswati. Beliau menjabat sebagai Direktur Utama di PT Nusasatu Properti Tbk. sejak mulai bergabung pada Agustus 2022 hingga kini. Memiliki pengalaman yang luas di bidang Senior Executive pada industri FMCG dan B to C Automotive selama 26 tahun.
                    </p>
                    <p>
                      Tercatat beliau pernah menjabat sebagai Direktur Danone Aqua sejak Tahun 2012 – 2018, lalu juga menjabat sebagai CEO dari PT Putra Mustika dari Juli 2018 – April 2020, dan saat ini selain memegang PT Nusasatu Properti Tbk, beliau juga menjabat sebagai CEO PT RT Mart Group Indonesia sejak Mei 2020.
                    </p>
                  </div>
                </div>
              </div>

              {/* Executive 4: Leo Agung Vito Wicaksana */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#FDFDFD] p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="md:col-span-4 lg:col-span-3 flex justify-center">
                  <div className="w-48 sm:w-56 overflow-hidden rounded-xl shadow-md border-2 border-slate-100">
                    <img
                      src="/images/leo-agung-profil.png"
                      alt="Leo Agung Vito Wicaksana - Direktur"
                      className="w-full h-auto object-cover hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:col-span-8 lg:col-span-9 space-y-3">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#19375e]">Leo Agung Vito Wicaksana</h3>
                    <p className="text-[15px] font-bold text-amber-600 uppercase tracking-wider">Direktur</p>
                  </div>
                  <div className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed space-y-3 font-normal">
                    <p>
                      Berkewarganegaraan Indonesia, beliau merupakan lulusan Sarjana Ekonomi dari Universitas Pelita Harapan dengan pengalaman yang luas di beberapa Perusahaan dimana pada riwayat karirnya pernah menjabat sebagai Public Relations di Kospin Sekartama di tahun 2015, Komisaris PT RT Mart Indonesia tahun 2020, dan Direktur PT Rizki Piara Sejahtera tahun 2020. Saat ini beliau bertanggung jawab sebagai Direktur untuk PT Nusasatu Tbk. sejak mulai bergabung pada Agustus 2022 hingga kini dengan membawahi seluruh lini bisnis yang berjalan di dalamnya.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: Struktur Perusahaan */}
        <section className="py-14 sm:py-16 bg-[#F8FAFC] border-y border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375e] tracking-tight uppercase">
                Struktur Perusahaan
              </h2>
              <div className="w-[70px] h-[3.5px] bg-[#19375e] mx-auto mt-4 rounded-full"></div>
            </div>

            <div 
              onClick={() => setShowOrgModal(true)}
              className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:shadow-lg transition-shadow group flex flex-col items-center"
            >
              <img
                src="/images/69d33072821d7_struktur-organisasi-perusahaan-scaled-e1775452552601.webp"
                alt="Struktur Organisasi PT Nusasatu Properti Tbk"
                className="w-full max-w-[1000px] h-auto object-contain block group-hover:scale-101 transition-transform"
              />
              <p className="text-xs text-slate-500 mt-4 flex items-center gap-1.5 font-medium">
                <svg className="w-4 h-4 text-[#19375e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                <span>Klik gambar untuk memperbesar</span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Komposisi Pemegang Saham */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375e] tracking-tight uppercase">
                Komposisi Pemegang Saham
              </h2>
              <div className="w-[70px] h-[3.5px] bg-[#19375e] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#19375e] text-white text-[14px] sm:text-[15px] font-extrabold uppercase tracking-wider">
                    <th className="py-4 px-6">PEMEGANG SAHAM</th>
                    <th className="py-4 px-6 text-right">JUMLAH SAHAM</th>
                    <th className="py-4 px-6 text-right">PROSENTASE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-slate-900">PT Nusasatu Indonesia</td>
                    <td className="py-3.5 px-6 text-right">456.250.000</td>
                    <td className="py-3.5 px-6 text-right font-bold text-[#19375e]">33,18%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-slate-900">Anton Stefian Dwi Kristanto</td>
                    <td className="py-3.5 px-6 text-right">137.500.000</td>
                    <td className="py-3.5 px-6 text-right font-bold text-[#19375e]">10,00%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-slate-900">Leo Agung Vito Wicaksana</td>
                    <td className="py-3.5 px-6 text-right">161.048.400</td>
                    <td className="py-3.5 px-6 text-right font-bold text-[#19375e]">11,71%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-slate-900">Nyauw Farida AK</td>
                    <td className="py-3.5 px-6 text-right">97.689.600</td>
                    <td className="py-3.5 px-6 text-right font-bold text-[#19375e]">7,10%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-slate-900">R.Y Kristian Hardianto</td>
                    <td className="py-3.5 px-6 text-right">176.296.100</td>
                    <td className="py-3.5 px-6 text-right font-bold text-[#19375e]">12,82%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                    <td className="py-3.5 px-6 font-semibold text-slate-900">Masyarakat &lt; 5%</td>
                    <td className="py-3.5 px-6 text-right">137.500.000</td>
                    <td className="py-3.5 px-6 text-right font-bold text-[#19375e]">25,18%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Button Lihat Grafik */}
            <div className="text-center">
              <button
                onClick={() => setShowChartModal(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#19375e] hover:bg-[#122744] text-white text-[14px] font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                <span>Lihat Grafik</span>
              </button>
            </div>
          </div>
        </section>

        {/* Modal: Grafik Pemegang Saham */}
        {showChartModal && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setShowChartModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Tutup"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-xl font-bold text-[#19375e] mb-4 pr-10">
                Grafik Komposisi Pemegang Saham
              </h3>
              <div className="flex items-center justify-center py-2">
                <img
                  src="/images/a0d2295b-1749-4d59-b31d-5e9074a399e8-1024x792.png"
                  alt="Grafik Komposisi Pemegang Saham"
                  className="max-h-[460px] w-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Modal: Struktur Organisasi Zoom */}
        {showOrgModal && (
          <div 
            onClick={() => setShowOrgModal(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div className="max-w-5xl w-full p-2 relative">
              <button
                onClick={() => setShowOrgModal(false)}
                className="absolute -top-10 right-0 text-white hover:text-amber-400 p-2 text-sm font-bold flex items-center gap-1"
                aria-label="Tutup"
              >
                <span>Tutup</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src="/images/69d33072821d7_struktur-organisasi-perusahaan-scaled-e1775452552601.webp"
                alt="Struktur Organisasi Full"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl bg-white p-2 shadow-2xl"
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
