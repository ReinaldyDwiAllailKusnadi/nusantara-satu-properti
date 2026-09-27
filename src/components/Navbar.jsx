'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileUnitBisnisOpen, setMobileUnitBisnisOpen] = useState(false);
  const [unitBisnisDropdown, setUnitBisnisDropdown] = useState(false);
  const getActiveMenu = (path) => {
    if (path === '/profil-perusahaan') return 'profil-perusahaan';
    if (path === '/perhotelan-allstay' || path === '/properti-amaya') return 'unit-bisnis';
    if (path === '/tata-kelola') return 'tata-kelola';
    if (path === '/berita') return 'berita';
    if (path === '/csr') return 'csr';
    if (path === '/career' || path === '/karir') return 'karir';
    return 'beranda';
  };

  const [activeMenu, setActiveMenu] = useState(getActiveMenu(pathname));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (['/profil-perusahaan', '/perhotelan-allstay', '/properti-amaya', '/tata-kelola', '/berita', '/csr', '/career', '/karir'].includes(pathname)) {
      setActiveMenu(getActiveMenu(pathname));
      return;
    }

    const handleScroll = () => {
      // Toggle sticky opacity blur effect when scrolled down
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for underline on homepage
      const sections = ['beranda', 'profil-perusahaan', 'unit-bisnis', 'milestone', 'penghargaan', 'informasi-investor', 'kontak'];
      const scrollPos = window.scrollY + 140;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveMenu(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* 1. Top Flag Bar (#244370) - hidden when scrolled */}
      <div 
        className={`bg-[#244370] text-white overflow-hidden transition-all duration-300 ${
          isScrolled ? 'max-h-0 py-0 opacity-0 pointer-events-none' : 'max-h-12 py-1.5 opacity-100'
        } px-4 sm:px-8`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-end">
          <div className="flex items-center gap-[12px]">
            {/* Indonesian Flag */}
            <button 
              title="Bahasa Indonesia"
              className="w-[22px] h-[15px] border border-white/20 overflow-hidden flex flex-col hover:opacity-85 transition-opacity cursor-pointer"
            >
              <div className="h-1/2 bg-[#CE1126] w-full"></div>
              <div className="h-1/2 bg-white w-full"></div>
            </button>
            {/* US Flag */}
            <button 
              title="English"
              className="w-[22px] h-[15px] border border-white/20 overflow-hidden relative bg-[#B22234] hover:opacity-85 transition-opacity cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-[10px] h-[8px] bg-[#3C3B6E] flex items-center justify-center">
                <span className="text-[6px] text-white leading-none font-bold">&#9733;</span>
              </div>
              <div className="h-[2px] bg-white mt-[2.5px]"></div>
              <div className="h-[2px] bg-white mt-[2px]"></div>
              <div className="h-[2px] bg-white mt-[2px]"></div>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar with smooth translucent effect when scrolled (opacity mengurang / samar-samar) */}
      <div 
        className={`w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)]' 
            : 'bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 min-h-[76px] sm:min-h-[80px] flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/images/orig-logo.png"
                alt="Kota Satu Properti Tbk"
                className="w-[195px] sm:w-[220px] h-auto object-contain block"
              />
            </Link>
          </div>

          {/* Right: Bold Navigation Menu with 14px Gotham/Sans, 1.2px letter-spacing, #1c1c1c */}
          <nav className="hidden lg:flex items-center justify-end flex-1 ml-4 xl:ml-8">
            {/* BERANDA */}
            <Link
              href="/"
              onClick={() => setActiveMenu('beranda')}
              className={`nav-link-item ${activeMenu === 'beranda' ? 'active' : ''}`}
            >
              BERANDA
            </Link>

            {/* PROFIL PERUSAHAAN */}
            <Link
              href="/profil-perusahaan"
              onClick={() => setActiveMenu('profil-perusahaan')}
              className={`nav-link-item ${activeMenu === 'profil-perusahaan' ? 'active' : ''}`}
            >
              PROFIL PERUSAHAAN
            </Link>

            {/* UNIT BISNIS ˅ */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setUnitBisnisDropdown(true)}
              onMouseLeave={() => setUnitBisnisDropdown(false)}
            >
              <Link
                href="/#unit-bisnis"
                onClick={() => setActiveMenu('unit-bisnis')}
                className={`nav-link-item gap-1.5 ${
                  activeMenu === 'unit-bisnis' || unitBisnisDropdown ? 'active' : ''
                }`}
              >
                <span>UNIT BISNIS</span>
                <svg
                  className={`w-3 h-3 text-[#1c1c1c] transition-transform duration-200 ${
                    unitBisnisDropdown ? 'rotate-180 text-[#000077]' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu (Exact match to kotasatuproperti.com) */}
              <div 
                className={`absolute top-full left-0 w-[240px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-none z-50 transition-all duration-200 ${
                  unitBisnisDropdown 
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto' 
                    : 'opacity-0 invisible translate-y-1 pointer-events-none'
                }`}
              >
                <Link
                  href="/perhotelan-allstay"
                  onClick={() => {
                    setActiveMenu('unit-bisnis');
                    setUnitBisnisDropdown(false);
                  }}
                  className="block px-6 py-3.5 text-[15px] font-bold text-[#1c1c1c] hover:text-[#000077] hover:bg-[#f8f9fa] border-b border-[#f0f0f0] transition-colors"
                >
                  Perhotelan
                </Link>
                <Link
                  href="/properti-amaya"
                  onClick={() => {
                    setActiveMenu('unit-bisnis');
                    setUnitBisnisDropdown(false);
                  }}
                  className="block px-6 py-3.5 text-[15px] font-bold text-[#1c1c1c] hover:text-[#000077] hover:bg-[#f8f9fa] transition-colors"
                >
                  Properti
                </Link>
              </div>
            </div>

            {/* INFORMASI INVESTOR */}
            <Link
              href="/#informasi-investor"
              onClick={() => setActiveMenu('informasi-investor')}
              className={`nav-link-item ${activeMenu === 'informasi-investor' ? 'active' : ''}`}
            >
              INFORMASI INVESTOR
            </Link>

            {/* TATA KELOLA */}
            <Link
              href="/tata-kelola"
              onClick={() => setActiveMenu('tata-kelola')}
              className={`nav-link-item ${activeMenu === 'tata-kelola' ? 'active' : ''}`}
            >
              TATA KELOLA
            </Link>

            {/* BERITA */}
            <Link
              href="/berita"
              onClick={() => setActiveMenu('berita')}
              className={`nav-link-item ${activeMenu === 'berita' ? 'active' : ''}`}
            >
              BERITA
            </Link>

            {/* CSR */}
            <Link
              href="/csr"
              onClick={() => setActiveMenu('csr')}
              className={`nav-link-item ${activeMenu === 'csr' ? 'active' : ''}`}
            >
              CSR
            </Link>

            {/* KARIR */}
            <Link
              href="/career"
              onClick={() => setActiveMenu('karir')}
              className={`nav-link-item ${activeMenu === 'karir' ? 'active' : ''}`}
            >
              KARIR
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1c1c1c] hover:text-[#000077] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-4 space-y-3 font-bold text-[13px] text-[#1c1c1c] tracking-[1.2px] uppercase shadow-lg">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-1">Beranda</Link>
          <Link href="/profil-perusahaan" onClick={() => setMobileMenuOpen(false)} className="block py-1">Profil Perusahaan</Link>
          
          {/* Unit Bisnis with sub-items */}
          <div>
            <div 
              onClick={() => setMobileUnitBisnisOpen(!mobileUnitBisnisOpen)}
              className="flex items-center justify-between py-1 cursor-pointer select-none"
            >
              <span>Unit Bisnis</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileUnitBisnisOpen ? 'rotate-180 text-[#000077]' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {mobileUnitBisnisOpen && (
              <div className="pl-4 pt-1.5 pb-1 space-y-2 text-[13px] font-semibold text-[#007BBB]">
                <Link 
                  href="/perhotelan-allstay" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block py-1 hover:text-[#22406F]"
                >
                  • Perhotelan
                </Link>
                <Link 
                  href="/properti-amaya" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block py-1 hover:text-[#22406F]"
                >
                  • Properti
                </Link>
              </div>
            )}
          </div>

          <Link href="/#informasi-investor" onClick={() => setMobileMenuOpen(false)} className="block py-1">Informasi Investor</Link>
          <Link href="/tata-kelola" onClick={() => setMobileMenuOpen(false)} className="block py-1">Tata Kelola</Link>
          <Link href="/berita" onClick={() => setMobileMenuOpen(false)} className="block py-1">Berita</Link>
          <Link href="/csr" onClick={() => setMobileMenuOpen(false)} className="block py-1">CSR</Link>
          <Link href="/career" onClick={() => setMobileMenuOpen(false)} className="block py-1">Karir</Link>
        </div>
      )}
    </header>
  );
}
