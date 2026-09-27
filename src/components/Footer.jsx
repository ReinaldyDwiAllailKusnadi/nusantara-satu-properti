'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#244C84] text-white pt-14 pb-14 font-sans">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
          
          {/* Column 1: Contact & Social Icons */}
          <div className="pt-1">
            <ul className="space-y-4 text-[15px] font-semibold text-white">
              <li>
                <a
                  href="mailto:info@nusasatuproperti.com"
                  className="inline-flex items-center gap-3.5 hover:text-amber-300 transition-colors"
                >
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@nusasatuproperti.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3.5 hover:text-amber-300 transition-colors"
                >
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  <span>Nusasatu Properti Tbk</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3.5 hover:text-amber-300 transition-colors"
                >
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@nusasatuproperti</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[17px] font-extrabold uppercase tracking-wider text-white mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-[14px] font-bold text-white tracking-wide">
              <li><Link href="/" className="hover:text-amber-300 transition-colors">BERANDA</Link></li>
              <li><Link href="/profil-perusahaan" className="hover:text-amber-300 transition-colors">PROFIL PERUSAHAAN</Link></li>
              <li><Link href="/#informasi-investor" className="hover:text-amber-300 transition-colors">INFORMASI INVESTOR</Link></li>
              <li><Link href="/tata-kelola" className="hover:text-amber-300 transition-colors">TATA KELOLA</Link></li>
              <li><Link href="/berita" className="hover:text-amber-300 transition-colors">BERITA</Link></li>
              <li><Link href="/csr" className="hover:text-amber-300 transition-colors">CSR</Link></li>
              <li><Link href="/career" className="hover:text-amber-300 transition-colors">KARIR</Link></li>
            </ul>
          </div>

          {/* Column 3: White Logo and Office Addresses */}
          <div className="space-y-4">
            {/* White Logo matching user screenshot */}
            <div className="mb-3">
              <img
                src="/images/nusasatu-logo-white.svg"
                alt="Nusasatu Properti Tbk"
                className="w-[195px] sm:w-[220px] h-auto object-contain block"
              />
            </div>

            <div className="text-[14.5px] text-white space-y-4 leading-relaxed font-normal">
              <div>
                <p className="font-bold text-white mb-1">Ungaran Office :</p>
                <p className="text-white/95">Jl. M.T. Haryono, Club House Amaya Home Resort</p>
                <p className="text-white/95">Ungaran – 50511</p>
                <p className="text-white/95">T:+62 24 7690 1000</p>
              </div>

              <div>
                <p className="font-bold text-white mb-1">Semarang Office :</p>
                <p className="text-white/95">Jl. Veteran No. 51 Semarang - 50231</p>
                <p className="text-white/95">T:+62 24 8311 001</p>
                <p className="text-white/95">E: info@nusasatuproperti.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
