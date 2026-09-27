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
        {/* ========================================================= */}
        {/* SECTION 1: Informasi Perusahaan (Exact Match to Screenshot) */}
        {/* ========================================================= */}
        <section 
          className="relative pt-[70px] sm:pt-[90px] pb-[50px] sm:pb-[65px] bg-[#22406F]/[0.11] overflow-hidden"
          style={{
            backgroundImage: "url('/images/rm222batch2-mind-03-scaled.jpg')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
            {/* Subtitle */}
            <h3 className="text-[16px] sm:text-[20px] font-extrabold tracking-[3.7px] text-[#22406F] font-sans mb-1">
              Kota Satu Properti, Tbk.
            </h3>

            {/* Main Title (No divider line, exact match) */}
            <h1 className="text-[32px] sm:text-[45px] font-extrabold uppercase tracking-[2.1px] text-[#22406F] font-sans mb-6 sm:mb-8 leading-tight">
              INFORMASI PERUSAHAAN
            </h1>

            {/* Paragraphs with exact #007BBB cyan/blue color and justified text */}
            <div className="space-y-6 text-[16px] sm:text-[19px] leading-[1.75] text-[#007BBB] text-justify font-sans">
              <p>
                PT Kota Satu Properti Tbk (&ldquo;Perseroan&rdquo;), berkedudukan di Kabupaten Semarang, dengan akta pendiriannya sebagaimana dimuat dalam Akta Pendirian Perseroan Terbatas No. 6 tanggal 3 Oktober 2012, dibuat di hadapan Maria Yosefa Deni, S.H., Notaris di Kota Semarang. Akta Pendirian Perseroan telah memperoleh pengesahan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia sebagaimana ternyata dari Surat Keputusannya No. AHU-58590.AH.01.01.Tahun 2012 tanggal 19 November 2012
              </p>

              <p>
                Pada tahun 2018 Perseroan melaksanakan Penawaran Umum Perdana Saham atau Initial Public Offering (IPO) kepada masyarakat dengan menerbitkan 500.000.000 lembar saham dengan nilai nominal Rp 100,- di Bursa Efek Indonesia. Perseroan dengan kode ticker SATU telah mendapatkan pernyataan efektif dari Otoritas Jasa Keuangan pada tanggal 5 November 2018.
              </p>

              <p>
                Perseroan berkedudukan di Kabupaten Semarang, memiliki dua kegiatan usaha utama yaitu di bidang pengembangan properti dan perhotelan. Posisi Perseroan merupakan induk perusahaan, atas seluruh entitas anak perusahaan yang dimiliki melalui investasi penyertaan kepemilikan saham.
              </p>

              <p>
                Kegiatan usaha yang saat ini dilaksanakan oleh Perseroan adalah di bidang pembangunan, pengelolaan, dan perdagangan real estate/properti. Kegiatan usaha Perseroan dan Entitas Anak memiliki keterkaitan satu sama lain yaitu melakukan kegiatan pembangunan, pengelolaan dan perdagangan real estate/properti
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: Visi, Misi & Values 4P                         */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
              
              {/* Visi */}
              <div className="flex flex-col items-start space-y-4">
                <div className="w-20 h-20 flex items-center justify-start">
                  <img src="/images/1.png" alt="Visi Icon" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-[26px] sm:text-[30px] font-extrabold uppercase tracking-[2.1px] text-[#22406F]">
                  Visi :
                </h3>
                <p className="text-[17px] sm:text-[18px] text-[#007BBB] leading-relaxed text-justify">
                  Number one is delivering superior performance through SATU philosophy
                </p>
              </div>

              {/* Values 4P */}
              <div className="flex flex-col items-start space-y-4">
                <div className="w-20 h-20 flex items-center justify-start">
                  <img src="/images/2.png" alt="Values 4P Icon" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-[26px] sm:text-[30px] font-extrabold uppercase tracking-[2.1px] text-[#22406F]">
                  Values 4P :
                </h3>
                <div className="text-[17px] sm:text-[18px] text-[#007BBB] space-y-1 font-normal leading-[32px]">
                  <div>Profit</div>
                  <div>Professional</div>
                  <div>Prestige</div>
                  <div>Public Oriented</div>
                </div>
              </div>

              {/* Misi */}
              <div className="flex flex-col items-start space-y-4">
                <div className="w-20 h-20 flex items-center justify-start">
                  <img src="/images/3.png" alt="Misi Icon" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-[26px] sm:text-[30px] font-extrabold uppercase tracking-[2.1px] text-[#22406F]">
                  Misi :
                </h3>
                <div className="text-[16px] sm:text-[17px] text-[#007BBB] space-y-2.5 text-justify leading-relaxed">
                  <p>Synergy, internal & external for sustainable best result</p>
                  <p>Automation, by digital system for professional business operation</p>
                  <p>Talent development, as continuous organization growth and best place to work</p>
                  <p>Unique concept, for competitive and profitable business</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: Manajemen                                      */}
        {/* ========================================================= */}
        <section className="bg-white">
          <div className="text-center pt-12 pb-8">
            <h2 className="text-[34px] sm:text-[45px] font-extrabold uppercase tracking-[2.1px] text-[#22406F]">
              Manajemen
            </h2>
            <div className="w-[18%] max-w-[120px] h-[4px] bg-[#22406F] mx-auto mt-3"></div>
          </div>

          {/* Executive 1: Arief Sugiyo (Deep Blue Overlay, Photo Left, Text Right) */}
          <div 
            className="relative py-12 sm:py-16 text-white overflow-hidden"
            style={{
              backgroundImage: "url('/images/orva-studio-YC8qqp50BdA-unsplash-scaled.jpg')",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="absolute inset-0 bg-[#22406F]/[0.85] z-0"></div>
            <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-10 gap-8 lg:gap-12 items-center">
                {/* Photo 30% */}
                <div className="md:col-span-3 flex justify-center md:justify-start">
                  <div className="w-52 sm:w-60 max-w-full overflow-hidden shadow-2xl rounded-sm">
                    <img 
                      src="/images/arief-profil.png" 
                      alt="Arief Sugiyo" 
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                </div>
                {/* Text 70% */}
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
                    Arief Sugiyo
                  </h3>
                  <h4 className="text-[17px] sm:text-[18px] font-extrabold uppercase text-white tracking-wider pb-1">
                    Komisaris Utama
                  </h4>
                  <div className="text-[15px] sm:text-[17px] text-white/95 leading-relaxed text-justify space-y-3 font-normal">
                    <p>
                      Beliau merupakan seorang profesional berpengalaman di industri pasar modal, dengan latar belakang akademis dalam bidang Manajemen Informatika dari Universitas Bina Nusantara. Setelah lulus, beliau memulai kariernya di beberapa perusahaan sekuritas ternama, di mana beliau terus mengembangkan keahlian serta jaringan yang kuat di industri keuangan dan investasi.
                    </p>
                    <p>
                      Beliau juga memiliki pengalaman mendalam dalam pengelolaan ekuitas dan penjualan surat berharga, dengan peran penting di PDFCI Sekuritas dan Quantum Qapita Sekuritas. Saat ini, Arief Sugiyo menjabat sebagai Senior Equity Sales di PT Semesta Indovest Sekuritas, ia bertanggung jawab untuk membangun dan mempertahankan portofolio investasi yang strategis bagi para klien. Keahliannya dalam merancang strategi pasar modal yang tepat, ditambah dengan kemampuan networking yang luas, menjadikannya salah satu tokoh penting di bidang sekuritas dan investasi. Sebagai Komisaris Utama, Arief Sugiyo memainkan peran kunci dalam pengambilan keputusan strategis perusahaan, dengan fokus pada pertumbuhan bisnis yang berkelanjutan dan profitabilitas jangka panjang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive 2: Ibnu Dody Prayitno (White Overlay, Text Left, Photo Right) */}
          <div 
            className="relative py-12 sm:py-16 text-[#22406F] overflow-hidden"
            style={{
              backgroundImage: "url('/images/valeriia-bugaiova-_pPHgeHz1uk-unsplash-scaled.jpg')",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="absolute inset-0 bg-white/[0.88] z-0"></div>
            <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-10 gap-8 lg:gap-12 items-center">
                {/* Text 70% */}
                <div className="md:col-span-7 space-y-3 order-2 md:order-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#22406F] tracking-wide">
                    Ibnu Dody Prayitno
                  </h3>
                  <h4 className="text-[17px] sm:text-[18px] font-extrabold uppercase text-[#22406F] tracking-wider pb-1">
                    Komisaris Independen
                  </h4>
                  <div className="text-[15px] sm:text-[17px] text-[#22406F]/95 leading-relaxed text-justify space-y-3 font-normal">
                    <p>
                      Beliau telah membawa lebih dari 16 tahun pengalaman profesional dalam bidang hukum dan manajemen operasional ke jabatannya sebagai Komisaris Independen di PT Kota Satu Properti Tbk. Beliau adalah lulusan Sarjana Hukum dari Universitas 17 Agustus Semarang pada tahun 2009, dan telah membangun karier yang sukses dengan berbagai peran manajerial di sektor koperasi dan lembaga keuangan. Salah satu pencapaian penting dalam kariernya adalah saat menjabat sebagai Manager Operasional Kospin SEKARTAMA pada periode 2018–2019, di mana beliau berhasil mengimplementasikan berbagai inisiatif strategis untuk meningkatkan efisiensi dan kepatuhan operasional.
                    </p>
                    <p>
                      Sejak tahun 2020, Ibnu Dody Prayitno memegang peran sebagai Manager Kepatuhan di Kospin SEKARTAMA, di mana ia bertanggung jawab untuk memastikan bahwa operasi perusahaan berjalan sesuai dengan regulasi dan standar industri yang berlaku. Dengan pengetahuan hukum yang mendalam serta pengalaman operasional yang solid, Ibnu Dody Prayitno memberikan perspektif independen yang berharga dalam pengawasan dan tata kelola perusahaan. Sebagai Komisaris Independen, Ibnu Dody Prayitno memiliki tanggung jawab untuk memastikan bahwa kepentingan pemegang saham dilindungi dan bahwa keputusan perusahaan dibuat dengan integritas dan transparansi yang tinggi.
                    </p>
                  </div>
                </div>
                {/* Photo 30% */}
                <div className="md:col-span-3 flex justify-center md:justify-end order-1 md:order-2">
                  <div className="w-52 sm:w-60 max-w-full overflow-hidden shadow-2xl rounded-sm">
                    <img 
                      src="/images/ibnu-dody-profil.png" 
                      alt="Ibnu Dody Prayitno" 
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive 3: Momog Irnawan (Deep Blue Overlay, Photo Left, Text Right) */}
          <div 
            className="relative py-12 sm:py-16 text-white overflow-hidden"
            style={{
              backgroundImage: "url('/images/sara-dubler-Koei_7yYtIo-unsplash-scaled.jpg')",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="absolute inset-0 bg-[#22406F]/[0.85] z-0"></div>
            <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-10 gap-8 lg:gap-12 items-center">
                {/* Photo 30% */}
                <div className="md:col-span-3 flex justify-center md:justify-start">
                  <div className="w-52 sm:w-60 max-w-full overflow-hidden shadow-2xl rounded-sm">
                    <img 
                      src="/images/momog-irnawan-profil.png" 
                      alt="Momog Irnawan" 
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                </div>
                {/* Text 70% */}
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
                    Momog Irnawan
                  </h3>
                  <h4 className="text-[17px] sm:text-[18px] font-extrabold uppercase text-white tracking-wider pb-1">
                    Direktur Utama
                  </h4>
                  <div className="text-[15px] sm:text-[17px] text-white/95 leading-relaxed text-justify space-y-3 font-normal">
                    <p>
                      Berkewarganegaraan Indonesia, dengan merupakan lulusan Sarjana Ekonomi Alumni Universitas Mahasaraswati. Beliau menjabat sebagai Direktur Utama di PT Kota Satu Properti Tbk. sejak mulai bergabung pada Agustus 2022 hingga kini. Memiliki pengalaman yang luas di bidang Senior Executive pada industri FMCG dan B to C Automotive selama 26 tahun.
                    </p>
                    <p>
                      Tercatat beliau pernah menjabat sebagai Direktur Danone Aqua sejak Tahun 2012 – 2018, lalu juga menjabat sebagai CEO dari PT Putra Mustika dari Juli 2018 – April 2020, dan saat ini selain memegang PT Kota Satu Properti Tbk, beliau juga menjabat sebagai CEO PT RT Mart Group Indonesia sejak Mei 2020.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive 4: Leo Agung Vito Wicaksana (White Overlay, Text Left, Photo Right) */}
          <div 
            className="relative py-12 sm:py-16 text-[#22406F] overflow-hidden"
            style={{
              backgroundImage: "url('/images/li-yang-a8iCZvtrHpQ-unsplash-scaled.jpg')",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="absolute inset-0 bg-white/[0.88] z-0"></div>
            <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-10 gap-8 lg:gap-12 items-center">
                {/* Text 70% */}
                <div className="md:col-span-7 space-y-3 order-2 md:order-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#22406F] tracking-wide">
                    Leo Agung Vito Wicaksana
                  </h3>
                  <h4 className="text-[17px] sm:text-[18px] font-extrabold uppercase text-[#22406F] tracking-wider pb-1">
                    Direktur
                  </h4>
                  <div className="text-[15px] sm:text-[17px] text-[#22406F]/95 leading-relaxed text-justify space-y-3 font-normal">
                    <p>
                      Berkewarganegaraan Indonesia, beliau merupakan lulusan Sarjana Ekonomi dari Universitas Pelita Harapan dengan pengalaman yang luas di beberapa Perusahaan dimana pada riwayat karirnya pernah menjabat sebagai Public Relations di Kospin Sekartama di tahun 2015, Komisaris PT RT Mart Indonesia tahun 2020, dan Direktur PT Rizki Piara Sejahtera tahun 2020. Saat ini beliau bertanggung jawab sebagai Direktur untuk PT Kota Satu Tbk. sejak mulai Begabung pada Agustus 2022 hingga kini dengen membawai seluruh lini bisnis yang berjalan di dalamnya.
                    </p>
                  </div>
                </div>
                {/* Photo 30% */}
                <div className="md:col-span-3 flex justify-center md:justify-end order-1 md:order-2">
                  <div className="w-52 sm:w-60 max-w-full overflow-hidden shadow-2xl rounded-sm">
                    <img 
                      src="/images/leo-agung-profil.png" 
                      alt="Leo Agung Vito Wicaksana" 
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: Struktur Perusahaan                            */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <h2 className="text-[34px] sm:text-[45px] font-extrabold uppercase tracking-[2.1px] text-[#22406F]">
              Struktur Perusahaan
            </h2>
            <div className="w-[18%] max-w-[120px] h-[4px] bg-[#22406F] mx-auto mt-3 mb-10"></div>

            <div 
              onClick={() => setShowOrgModal(true)}
              className="cursor-pointer group inline-block max-w-full"
            >
              <img
                src="/images/69d33072821d7_struktur-organisasi-perusahaan-scaled-e1775452552601.webp"
                alt="Struktur Organisasi"
                className="w-full h-auto object-contain block mx-auto group-hover:opacity-95 transition-opacity"
              />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: Komposisi Pemegang Saham                       */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-[#22406F]/[0.11]">
          <div className="max-w-[1100px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <h2 className="text-[34px] sm:text-[45px] font-extrabold uppercase tracking-[2.1px] text-[#22406F]">
              Komposisi Pemegang Saham
            </h2>
            <div className="w-[18%] max-w-[120px] h-[4px] bg-[#22406F] mx-auto mt-3 mb-10"></div>

            {/* Table */}
            <div className="bg-white overflow-x-auto shadow-sm rounded-sm mb-10">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-6 font-extrabold text-[18px] sm:text-[20px] text-[#007BBB] uppercase tracking-wide">
                      PEMEGANG SAHAM
                    </th>
                    <th className="py-4 px-6 font-extrabold text-[18px] sm:text-[20px] text-[#007BBB] uppercase tracking-wide">
                      JUMLAH SAHAM
                    </th>
                    <th className="py-4 px-6 font-extrabold text-[18px] sm:text-[20px] text-[#007BBB] uppercase tracking-wide">
                      PROSENTASE
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[17px] sm:text-[19px] text-[#007BBB] font-normal">
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="py-3.5 px-6">PT Kota Satu Indonesia</td>
                    <td className="py-3.5 px-6">456.250.000</td>
                    <td className="py-3.5 px-6">33,18%</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="py-3.5 px-6">Anton Stefian Dwi Kristanto</td>
                    <td className="py-3.5 px-6">137.500.000</td>
                    <td className="py-3.5 px-6">10,00%</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="py-3.5 px-6">Leo Agung Vito Wicaksana</td>
                    <td className="py-3.5 px-6">161.048.400</td>
                    <td className="py-3.5 px-6">11,71%</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="py-3.5 px-6">Nyauw Farida AK</td>
                    <td className="py-3.5 px-6">97.689.600</td>
                    <td className="py-3.5 px-6">7,10%</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="py-3.5 px-6">R.Y Kristian Hardianto</td>
                    <td className="py-3.5 px-6">176.296.100</td>
                    <td className="py-3.5 px-6">12,82%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3.5 px-6">Masyarakat &lt; 5%</td>
                    <td className="py-3.5 px-6">137.500.000</td>
                    <td className="py-3.5 px-6">25,18%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Button Lihat Grafik */}
            <button
              onClick={() => setShowChartModal(true)}
              className="px-8 py-3 bg-[#22406F] hover:bg-[#183156] text-white text-[15px] font-bold uppercase tracking-wider rounded-[5px] transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Lihat Grafik
            </button>
          </div>
        </section>

        {/* Modal: Grafik Pemegang Saham */}
        {showChartModal && (
          <div 
            onClick={() => setShowChartModal(false)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-2xl w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200"
            >
              <button
                onClick={() => setShowChartModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Tutup"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-xl font-bold text-[#22406F] mb-4 pr-10">
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
