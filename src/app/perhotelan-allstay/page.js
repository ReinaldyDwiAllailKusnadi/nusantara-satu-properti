'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PerhotelanAllstayPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* SECTION 1: PERHOTELAN Title & ALLSTAY HOTEL Semarang      */}
        {/* ========================================================= */}
        <section className="bg-[#22406F]/[0.11] pt-14 sm:pt-20 pb-16 sm:pb-24">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16">
            
            {/* Page Heading & Divider */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-[34px] sm:text-[45px] font-extrabold uppercase tracking-[2.1px] text-[#22406F] font-sans">
                PERHOTELAN
              </h1>
              <div className="w-[18%] max-w-[120px] h-[4px] bg-[#22406F] mx-auto mt-4"></div>
            </div>

            {/* Hotel 1: Allstay Hotel Semarang */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Photo Left */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[540px] overflow-hidden rounded-[15px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <img
                    src="/images/ahs-thumb.jpg"
                    alt="Allstay Hotel Semarang"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-6 space-y-4">
                <div className="w-44 sm:w-48 mb-2">
                  <img
                    src="/images/ahs-logo-hitam.png"
                    alt="allstay HOTEL"
                    className="w-full h-auto object-contain block"
                  />
                </div>

                <div>
                  <h2 className="text-[28px] sm:text-[34px] font-extrabold uppercase tracking-[2px] text-[#22406F] leading-tight">
                    ALLSTAY HOTEL
                  </h2>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-[#22406F] mt-1 tracking-wide">
                    Semarang
                  </h3>
                </div>

                <div className="space-y-4 text-[16px] sm:text-[18px] text-[#1c1c1c] leading-[1.8] text-justify font-sans pt-1">
                  <p>
                    <strong className="font-bold text-[#1c1c1c]">Kota Satu Group</strong> memperkenalkan produk hotel terbarunya, Allstay Hotel Simpang Lima yang berlokasi di Jalan Veteran no. 51-53, Semarang.
                  </p>
                  <p>
                    <strong className="font-bold text-[#1c1c1c]">Allstay Hotel Semarang Simpang Lima</strong> mengusung konsep modern lifestyle hotel, dengan interior nuansa modern natural, yang beroperasi sejak awal 2016.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: ALLSTAY ECOTEL Yogyakarta                      */}
        {/* ========================================================= */}
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Text Left */}
              <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
                <div className="w-44 sm:w-48 mb-2">
                  <img
                    src="/images/logo-aey-hitam.png"
                    alt="allstay ECOTEL"
                    className="w-full h-auto object-contain block"
                  />
                </div>

                <div>
                  <h2 className="text-[28px] sm:text-[34px] font-extrabold uppercase tracking-[2px] text-[#22406F] leading-tight">
                    ALLSTAY ECOTEL
                  </h2>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-[#22406F] mt-1 tracking-wide">
                    Yogyakarta
                  </h3>
                </div>

                <div className="space-y-4 text-[16px] sm:text-[18px] text-[#1c1c1c] leading-[1.8] text-justify font-sans pt-1">
                  <p>
                    <strong className="font-bold text-[#1c1c1c]">Allstay Ecotel Yogyakarta</strong> mengusung tema modern eco-lifestyle hotel dengan nuansa interior modern minimalis, terletak di daerah Nologaten, pilihan tepat untuk profesional muda, traveler dan rekreasi.
                  </p>
                  <p>
                    <strong className="font-bold text-[#1c1c1c]">Allstay Ecotel Yogyakarta</strong> telah beroperasi sejak awal 2016.
                  </p>
                </div>
              </div>

              {/* Photo Right */}
              <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
                <div className="w-full max-w-[540px] overflow-hidden rounded-[15px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <img
                    src="/images/allstay-yogyakarta.jpg"
                    alt="Allstay Ecotel Yogyakarta"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: Bottom Call-To-Action Banner                    */}
        {/* ========================================================= */}
        <section className="bg-[#22406F] py-12 sm:py-16 text-white">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Left Logo and Text */}
              <div className="space-y-4 text-center md:text-left">
                <div className="w-48 sm:w-56 mx-auto md:mx-0">
                  <img
                    src="/images/allstay-banner-white-logo.png"
                    alt="allstay HOTEL"
                    className="w-full h-auto object-contain block"
                  />
                </div>
                <p className="text-[17px] sm:text-[20px] text-white/95 font-medium tracking-wide">
                  Untuk Info Lebih Lanjut Mengenai Hotel-Hotel Kami, Silakan Kunjungi
                </p>
              </div>

              {/* Right Button */}
              <div className="flex-shrink-0">
                <a
                  href="https://allstayhotel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-3.5 bg-white text-[#22406F] text-[16px] sm:text-[17px] font-extrabold rounded-full hover:bg-slate-100 hover:shadow-xl transition-all shadow-md cursor-pointer"
                >
                  Allstay Hotel
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
