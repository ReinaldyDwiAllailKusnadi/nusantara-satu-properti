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
      const scrollPos = window.scrollY + 120;
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
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* 1. Top Bar (Dark Navy with Flags) */}
      <div className="bg-[#19375e] text-white py-1.5 px-4 sm:px-10 flex items-center justify-end">
        <div className="flex items-center gap-2 text-xs">
          {/* Indonesia Flag */}
          <button 
            title="Bahasa Indonesia"
            className="w-5 h-3.5 border border-white/30 overflow-hidden rounded-[2px] hover:opacity-80 transition-opacity flex flex-col"
          >
            <div className="h-1/2 bg-[#CE1126]"></div>
            <div className="h-1/2 bg-white"></div>
          </button>
          {/* US / English Flag */}
          <button 
            title="English"
            className="w-5 h-3.5 border border-white/30 overflow-hidden rounded-[2px] hover:opacity-80 transition-opacity relative bg-[#B22234]"
          >
            <div className="absolute top-0 left-0 w-2.5 h-2 bg-[#3C3B6E] flex items-center justify-center">
              <span className="text-[6px] text-white leading-none">&#9733;</span>
            </div>
            <div className="h-[2px] bg-white mt-[3px]"></div>
            <div className="h-[2px] bg-white mt-[2px]"></div>
            <div className="h-[2px] bg-white mt-[2px]"></div>
          </button>
        </div>
      </div>

      {/* 2. Main Header / Navigation */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#beranda" className="flex items-center gap-2 group">
          {/* Exact Logo Shape recreation: stylized curved wave icon in cyan */}
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 100 80" className="w-10 h-8">
              <path
                d="M15,40 C15,20 35,10 65,10 C85,10 90,25 75,32 C60,39 30,35 25,48 C20,61 40,70 70,70 C90,70 95,55 95,55"
                fill="none"
                stroke="#0099d8"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30,22 C40,16 65,16 75,25"
                fill="none"
                stroke="#19375e"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#19375e] uppercase">
              NUSANTARA<span className="font-extrabold text-[#0099d8]">SATU</span>
            </span>
            <span className="text-[9px] font-bold text-[#19375e] tracking-wider uppercase opacity-90 hidden sm:inline">
              PROPERTI TBK
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-bold tracking-wider text-[#19375e] uppercase">
          <Link
            href="#beranda"
            onClick={() => setActiveMenu('beranda')}
            className={`py-2 transition-colors relative hover:text-[#0099d8] ${
              activeMenu === 'beranda' ? 'text-[#19375e] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#19375e]' : ''
            }`}
          >
            Beranda
          </Link>

          <Link
            href="#profil-perusahaan"
            onClick={() => setActiveMenu('profil-perusahaan')}
            className={`py-2 transition-colors relative hover:text-[#0099d8] ${
              activeMenu === 'profil-perusahaan' ? 'text-[#19375e] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#19375e]' : ''
            }`}
          >
            Profil Perusahaan
          </Link>

          {/* Dropdown Unit Bisnis */}
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
              className={`py-2 inline-flex items-center gap-1 transition-colors hover:text-[#0099d8] ${
                activeMenu === 'unit-bisnis' ? 'text-[#19375e] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#19375e]' : ''
              }`}
            >
              <span>Unit Bisnis</span>
              <svg className="w-3 h-3 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {unitBisnisDropdown && (
              <div className="absolute top-full left-0 w-44 bg-white border border-slate-100 shadow-xl rounded-b-md py-2 z-50 animate-fadeIn">
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
                  Properti (The Amaya)
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#informasi-investor"
            onClick={() => setActiveMenu('informasi-investor')}
            className={`py-2 transition-colors relative hover:text-[#0099d8] ${
              activeMenu === 'informasi-investor' ? 'text-[#19375e] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#19375e]' : ''
            }`}
          >
            Informasi Investor
          </Link>

          <Link
            href="#tata-kelola"
            onClick={() => setActiveMenu('tata-kelola')}
            className={`py-2 transition-colors relative hover:text-[#0099d8] ${
              activeMenu === 'tata-kelola' ? 'text-[#19375e] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#19375e]' : ''
            }`}
          >
            Tata Kelola
          </Link>

          <Link
            href="#berita"
            onClick={() => setActiveMenu('berita')}
            className={`py-2 transition-colors relative hover:text-[#0099d8] ${
              activeMenu === 'berita' ? 'text-[#19375e] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#19375e]' : ''
            }`}
          >
            Berita
          </Link>

          <Link
            href="#csr"
            onClick={() => setActiveMenu('csr')}
            className={`py-2 transition-colors relative hover:text-[#0099d8] ${
              activeMenu === 'csr' ? 'text-[#19375e] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#19375e]' : ''
            }`}
          >
            CSR
          </Link>

          <Link
            href="#karir"
            onClick={() => setActiveMenu('karir')}
            className={`py-2 transition-colors relative hover:text-[#0099d8] ${
              activeMenu === 'karir' ? 'text-[#19375e] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#19375e]' : ''
            }`}
          >
            Karir
          </Link>
        </nav>

        {/* Mobile Menu Button */}
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
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 font-bold text-sm text-[#19375e] uppercase shadow-lg">
          <Link
            href="#beranda"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#0099d8]"
          >
            Beranda
          </Link>
          <Link
            href="#profil-perusahaan"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#0099d8]"
          >
            Profil Perusahaan
          </Link>
          <Link
            href="#unit-bisnis"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#0099d8]"
          >
            Unit Bisnis (Amaya &amp; Allstay)
          </Link>
          <Link
            href="#informasi-investor"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#0099d8]"
          >
            Informasi Investor
          </Link>
          <Link
            href="#tata-kelola"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#0099d8]"
          >
            Tata Kelola
          </Link>
          <Link
            href="#berita"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#0099d8]"
          >
            Berita
          </Link>
          <Link
            href="#csr"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#0099d8]"
          >
            CSR
          </Link>
          <Link
            href="#karir"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#0099d8]"
          >
            Karir
          </Link>
        </div>
      )}
    </header>
  );
}
