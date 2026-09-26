'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [unitBisnisDropdown, setUnitBisnisDropdown] = useState(false);
  const [activeMenu, setActiveMenu] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.08)]">
      {/* 1. Top Flag Bar matching original #244370 */}
      <div className="bg-[#244370] text-white py-1.5 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-end">
          <div className="flex items-center gap-[15px]">
            {/* Indonesian Flag (20px x 15px) */}
            <button 
              title="Bahasa Indonesia"
              className="w-[20px] h-[15px] border border-white/20 overflow-hidden flex flex-col hover:opacity-80 transition-opacity"
            >
              <div className="h-1/2 bg-[#CE1126]"></div>
              <div className="h-1/2 bg-white"></div>
            </button>
            {/* US Flag (20px x 15px) */}
            <button 
              title="English"
              className="w-[20px] h-[15px] border border-white/20 overflow-hidden relative bg-[#B22234] hover:opacity-80 transition-opacity"
            >
              <div className="absolute top-0 left-0 w-[10px] h-[8px] bg-[#3C3B6E] flex items-center justify-center">
                <span className="text-[6px] text-white leading-none">&#9733;</span>
              </div>
              <div className="h-[2px] bg-white mt-[3px]"></div>
              <div className="h-[2px] bg-white mt-[2px]"></div>
              <div className="h-[2px] bg-white mt-[2px]"></div>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar with exact dimensions and spacing */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 min-h-[76px] sm:min-h-[80px] flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <Link href="#beranda" className="flex items-center">
            <img
              src="/images/nusasatu-logo.svg"
              alt="Nusasatu Properti Tbk"
              className="w-[195px] sm:w-[215px] h-auto object-contain block"
            />
          </Link>
        </div>

        {/* Right: Navigation Menu with exact 14px Gotham/Sans, 1.2px letter-spacing, #2A2A2A */}
        <nav className="hidden lg:flex items-center justify-end flex-1 ml-4 xl:ml-8">
          {/* BERANDA */}
          <Link
            href="#beranda"
            onClick={() => setActiveMenu('beranda')}
            className={`nav-link-item ${activeMenu === 'beranda' ? 'active' : ''}`}
          >
            BERANDA
          </Link>

          {/* PROFIL PERUSAHAAN */}
          <Link
            href="#profil-perusahaan"
            onClick={() => setActiveMenu('profil-perusahaan')}
            className={`nav-link-item ${activeMenu === 'profil-perusahaan' ? 'active' : ''}`}
          >
            PROFIL PERUSAHAAN
          </Link>

          {/* UNIT BISNIS ˅ */}
          <div 
            className="relative"
            onMouseEnter={() => setUnitBisnisDropdown(true)}
            onMouseLeave={() => setUnitBisnisDropdown(false)}
          >
            <button
              onClick={() => {
                setActiveMenu('unit-bisnis');
                const el = document.getElementById('unit-bisnis');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`nav-link-item gap-1.5 ${activeMenu === 'unit-bisnis' ? 'active' : ''}`}
            >
              <span>UNIT BISNIS</span>
              <svg className="w-2.5 h-2.5 text-[#2A2A2A] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {unitBisnisDropdown && (
              <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 shadow-xl rounded-b-md py-2 z-50">
                <Link
                  href="#unit-bisnis"
                  onClick={() => setUnitBisnisDropdown(false)}
                  className="block px-4 py-2.5 text-[13px] font-[500] text-[#2A2A2A] hover:bg-slate-50 hover:text-[#000077] transition-colors"
                >
                  Perhotelan
                </Link>
                <Link
                  href="#unit-bisnis"
                  onClick={() => setUnitBisnisDropdown(false)}
                  className="block px-4 py-2.5 text-[13px] font-[500] text-[#2A2A2A] hover:bg-slate-50 hover:text-[#000077] transition-colors"
                >
                  Properti
                </Link>
              </div>
            )}
          </div>

          {/* INFORMASI INVESTOR */}
          <Link
            href="#informasi-investor"
            onClick={() => setActiveMenu('informasi-investor')}
            className={`nav-link-item ${activeMenu === 'informasi-investor' ? 'active' : ''}`}
          >
            INFORMASI INVESTOR
          </Link>

          {/* TATA KELOLA */}
          <Link
            href="#tata-kelola"
            onClick={() => setActiveMenu('tata-kelola')}
            className={`nav-link-item ${activeMenu === 'tata-kelola' ? 'active' : ''}`}
          >
            TATA KELOLA
          </Link>

          {/* BERITA */}
          <Link
            href="#berita"
            onClick={() => setActiveMenu('berita')}
            className={`nav-link-item ${activeMenu === 'berita' ? 'active' : ''}`}
          >
            BERITA
          </Link>

          {/* CSR */}
          <Link
            href="#csr"
            onClick={() => setActiveMenu('csr')}
            className={`nav-link-item ${activeMenu === 'csr' ? 'active' : ''}`}
          >
            CSR
          </Link>

          {/* KARIR */}
          <Link
            href="#karir"
            onClick={() => setActiveMenu('karir')}
            className={`nav-link-item ${activeMenu === 'karir' ? 'active' : ''}`}
          >
            KARIR
          </Link>
        </nav>

        {/* Mobile Burger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2A2A2A] hover:text-[#000077] focus:outline-none"
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 font-[500] text-[13px] text-[#2A2A2A] tracking-[1.2px] uppercase shadow-lg">
          <Link href="#beranda" onClick={() => setMobileMenuOpen(false)} className="block py-1">Beranda</Link>
          <Link href="#profil-perusahaan" onClick={() => setMobileMenuOpen(false)} className="block py-1">Profil Perusahaan</Link>
          <Link href="#unit-bisnis" onClick={() => setMobileMenuOpen(false)} className="block py-1">Unit Bisnis</Link>
          <Link href="#informasi-investor" onClick={() => setMobileMenuOpen(false)} className="block py-1">Informasi Investor</Link>
          <Link href="#tata-kelola" onClick={() => setMobileMenuOpen(false)} className="block py-1">Tata Kelola</Link>
          <Link href="#berita" onClick={() => setMobileMenuOpen(false)} className="block py-1">Berita</Link>
          <Link href="#csr" onClick={() => setMobileMenuOpen(false)} className="block py-1">CSR</Link>
          <Link href="#karir" onClick={() => setMobileMenuOpen(false)} className="block py-1">Karir</Link>
        </div>
      )}
    </header>
  );
}
