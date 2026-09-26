'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#19375e] text-white pt-14 pb-8 font-sans">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/10">
          {/* Column 1: Social & Contact Links */}
          <div className="md:col-span-4 space-y-4">
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              <li>
                <a
                  href="mailto:info@nusantarasatuproperti.com"
                  className="flex items-center gap-3 hover:text-[#0099d8] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#0099d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@nusantarasatuproperti.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#0099d8] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#0099d8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  <span>Nusantara Satu Properti Tbk</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#0099d8] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#0099d8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@nusantarasatuproperti</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><Link href="#beranda" className="hover:text-[#0099d8] transition-colors">Beranda</Link></li>
              <li><Link href="#profil-perusahaan" className="hover:text-[#0099d8] transition-colors">Profil Perusahaan</Link></li>
              <li><Link href="#informasi-investor" className="hover:text-[#0099d8] transition-colors">Informasi Investor</Link></li>
              <li><Link href="#tata-kelola" className="hover:text-[#0099d8] transition-colors">Tata Kelola</Link></li>
              <li><Link href="#berita" className="hover:text-[#0099d8] transition-colors">Berita</Link></li>
              <li><Link href="#csr" className="hover:text-[#0099d8] transition-colors">CSR</Link></li>
              <li><Link href="#karir" className="hover:text-[#0099d8] transition-colors">Karir</Link></li>
            </ul>
          </div>

          {/* Column 3: Office Addresses & Logo */}
          <div className="md:col-span-5 space-y-4">
            {/* White Logo Branding */}
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 100 80" className="w-8 h-6">
                <path
                  d="M15,40 C15,20 35,10 65,10 C85,10 90,25 75,32 C60,39 30,35 25,48 C20,61 40,70 70,70 C90,70 95,55 95,55"
                  fill="none"
                  stroke="#0099d8"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-black tracking-tight text-white uppercase">
                NUSANTARA<span className="text-[#0099d8]">SATU</span>
              </span>
            </div>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              <div>
                <p className="font-bold text-white mb-0.5">Ungaran Office :</p>
                <p>Jl. M.T. Haryono, Club House Amaya Home Resort</p>
                <p>Ungaran – 50511</p>
                <p className="text-slate-400">T: +62 24 7690 1000</p>
              </div>

              <div>
                <p className="font-bold text-white mb-0.5">Semarang Office :</p>
                <p>Jl. Veteran No. 51 Semarang – 50231</p>
                <p className="text-slate-400">T: +62 24 8311 001</p>
                <p className="text-slate-400">E: info@nusantarasatuproperti.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; {currentYear} <strong>PT Nusantara Satu Properti Tbk</strong>. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <span>IDX: NUSA</span>
            <span>&bull;</span>
            <Link href="#beranda" className="hover:text-white transition-colors">Kembali ke Atas &uarr;</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
