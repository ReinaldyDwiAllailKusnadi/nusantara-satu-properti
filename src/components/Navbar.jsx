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
    <header className="w-full sticky top-0 z-50 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] font-sans">
      {/* 1. Slim Top Bar with exact flags */}
      <div className="bg-[#19375e] text-white h-[28px] px-4 sm:px-12 flex items-center justify-end">
        <div className="flex items-center gap-2">
          {/* Indonesian Flag */}
          <button 
            title="Bahasa Indonesia"
            className="w-[19px] h-[13px] border border-white/20 overflow-hidden flex flex-col hover:opacity-85 transition-opacity"
          >
            <div className="h-1/2 bg-[#CE1126]"></div>
            <div className="h-1/2 bg-white"></div>
          </button>
          {/* US / English Flag */}
          <button 
            title="English"
            className="w-[19px] h-[13px] border border-white/20 overflow-hidden relative bg-[#B22234] hover:opacity-85 transition-opacity"
          >
            <div className="absolute top-0 left-0 w-[9px] h-[7px] bg-[#3C3B6E] flex items-center justify-center">
              <span className="text-[5px] text-white leading-none">&#9733;</span>
            </div>
            <div className="h-[2px] bg-white mt-[2.5px]"></div>
            <div className="h-[2px] bg-white mt-[1.5px]"></div>
            <div className="h-[2px] bg-white mt-[1.5px]"></div>
          </button>
        </div>
      </div>

      {/* 2. Main Navbar with exact proportions and concise logo */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 h-[68px] sm:h-[74px] flex items-center justify-between">
        {/* Brand Logo: Clean SVG Image matching kotasatu dimensions */}
        <Link href="#beranda" className="flex items-center">
          <img
            src="/images/nusasatu-logo.svg"
            alt="Nusasatu Properti Tbk"
            className="h-[36px] sm:h-[42px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu - Exact font size, spacing, and underline */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[12.5px] font-bold tracking-[0.04em] text-[#19375e] uppercase">
          {/* BERANDA */}
          <Link
            href="#beranda"
            onClick={() => setActiveMenu('beranda')}
            className="relative py-1.5 transition-colors hover:text-[#0099d8]"
          >
            <span>BERANDA</span>
            {activeMenu === 'beranda' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#19375e]"></span>
            )}
          </Link>

          {/* PROFIL PERUSAHAAN */}
          <Link
            href="#profil-perusahaan"
            onClick={() => setActiveMenu('profil-perusahaan')}
            className="relative py-1.5 transition-colors hover:text-[#0099d8]"
          >
            <span>PROFIL PERUSAHAAN</span>
            {activeMenu === 'profil-perusahaan' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#19375e]"></span>
            )}
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
              className="relative py-1.5 inline-flex items-center gap-1.5 transition-colors hover:text-[#0099d8]"
            >
              <span>UNIT BISNIS</span>
              <svg className="w-3 h-3 text-[#19375e] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
              {activeMenu === 'unit-bisnis' && (
                <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#19375e]"></span>
              )}
            </button>

            {unitBisnisDropdown && (
              <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 shadow-xl rounded-b-md py-2 z-50">
                <Link
                  href="#unit-bisnis"
                  onClick={() => setUnitBisnisDropdown(false)}
                  className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0099d8] transition-colors"
                >
                  Perhotelan (Allstay)
                </Link>
                <Link
                  href="#unit-bisnis"
                  onClick={() => setUnitBisnisDropdown(false)}
                  className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0099d8] transition-colors"
                >
                  Properti (Amaya)
                </Link>
              </div>
            )}
          </div>

          {/* INFORMASI INVESTOR */}
          <Link
            href="#informasi-investor"
            onClick={() => setActiveMenu('informasi-investor')}
            className="relative py-1.5 transition-colors hover:text-[#0099d8]"
          >
            <span>INFORMASI INVESTOR</span>
            {activeMenu === 'informasi-investor' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#19375e]"></span>
            )}
          </Link>

          {/* TATA KELOLA */}
          <Link
            href="#tata-kelola"
            onClick={() => setActiveMenu('tata-kelola')}
            className="relative py-1.5 transition-colors hover:text-[#0099d8]"
          >
            <span>TATA KELOLA</span>
            {activeMenu === 'tata-kelola' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#19375e]"></span>
            )}
          </Link>

          {/* BERITA */}
          <Link
            href="#berita"
            onClick={() => setActiveMenu('berita')}
            className="relative py-1.5 transition-colors hover:text-[#0099d8]"
          >
            <span>BERITA</span>
            {activeMenu === 'berita' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#19375e]"></span>
            )}
          </Link>

          {/* CSR */}
          <Link
            href="#csr"
            onClick={() => setActiveMenu('csr')}
            className="relative py-1.5 transition-colors hover:text-[#0099d8]"
          >
            <span>CSR</span>
            {activeMenu === 'csr' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#19375e]"></span>
            )}
          </Link>

          {/* KARIR */}
          <Link
            href="#karir"
            onClick={() => setActiveMenu('karir')}
            className="relative py-1.5 transition-colors hover:text-[#0099d8]"
          >
            <span>KARIR</span>
            {activeMenu === 'karir' && (
              <span className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-[#19375e]"></span>
            )}
          </Link>
        </nav>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#19375e] hover:text-[#0099d8] focus:outline-none"
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
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 font-bold text-xs text-[#19375e] uppercase shadow-lg">
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
