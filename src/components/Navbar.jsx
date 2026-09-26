'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);
  const [lang, setLang] = useState('ID');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar for Language & Quick Stock */}
      <div className="bg-[#0b1329] text-gray-300 text-xs py-1.5 border-b border-gray-800">
        <div className="site-container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-white">IDX: NUSA</span> (Nusantara Satu Properti Tbk)
            </span>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="hidden sm:inline text-gray-400">Hubungan Investor: ir@nusantarasatuproperti.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
              <button 
                onClick={() => setLang('ID')} 
                className={`font-semibold px-1 rounded transition-colors ${lang === 'ID' ? 'text-amber-400 bg-slate-700' : 'text-gray-400 hover:text-white'}`}
              >
                ID
              </button>
              <span className="text-gray-600">/</span>
              <button 
                onClick={() => setLang('EN')} 
                className={`font-semibold px-1 rounded transition-colors ${lang === 'EN' ? 'text-amber-400 bg-slate-700' : 'text-gray-400 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full py-4 transition-all duration-300 ${isScrolled ? 'nav-glass shadow-md py-3' : 'bg-white'}`}>
        <div className="site-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              N
            </div>
            <div>
              <span className="block font-bold tracking-tight text-lg text-slate-900 leading-tight">
                NUSANTARA SATU
              </span>
              <span className="block text-[10px] tracking-[2.5px] uppercase font-semibold text-amber-700">
                PROPERTI TBK
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <Link href="#beranda" className="hover:text-amber-600 transition-colors">Beranda</Link>
            <Link href="#profil" className="hover:text-amber-600 transition-colors">Profil Perusahaan</Link>
            
            {/* Unit Bisnis Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setBusinessDropdown(true)}
              onMouseLeave={() => setBusinessDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-amber-600 transition-colors py-2">
                <span>Unit Bisnis</span>
                <svg className={`w-4 h-4 transition-transform ${businessDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {businessDropdown && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-fadeIn z-50">
                  <Link href="#properti" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors">
                    <span className="font-semibold block">Properti Residensial</span>
                    <span className="text-xs text-slate-500">Amaya Home Resort & The Amaya</span>
                  </Link>
                  <Link href="#perhotelan" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors border-t border-slate-50">
                    <span className="font-semibold block">Hospitality & Hotel</span>
                    <span className="text-xs text-slate-500">Allstay Semarang & Yogyakarta</span>
                  </Link>
                </div>
              )}
            </div>

            <Link href="#milestone" className="hover:text-amber-600 transition-colors">Jejak Langkah</Link>
            <Link href="#penghargaan" className="hover:text-amber-600 transition-colors">Penghargaan</Link>
            <Link href="#investor" className="hover:text-amber-600 transition-colors">Investor</Link>
            <Link href="#kontak" className="hover:text-amber-600 transition-colors">Kontak</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Satu%20Properti,%20saya%20tertarik%20dengan%20proyek%20Anda" 
              target="_blank"
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-md flex items-center gap-2 transition-all hover:shadow-lg"
            >
              <span>Hubungi Kami</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-xl">
            <div className="flex flex-col gap-3 font-medium text-slate-800">
              <Link href="#beranda" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-50">Beranda</Link>
              <Link href="#profil" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-50">Profil Perusahaan</Link>
              <Link href="#properti" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-50 pl-2 text-amber-700">↳ Properti (Amaya Resort)</Link>
              <Link href="#perhotelan" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-50 pl-2 text-amber-700">↳ Perhotelan (Allstay)</Link>
              <Link href="#milestone" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-50">Jejak Langkah</Link>
              <Link href="#penghargaan" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-50">Penghargaan</Link>
              <Link href="#investor" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-50">Hubungan Investor</Link>
              <Link href="#kontak" onClick={() => setMobileMenuOpen(false)} className="py-2">Kontak</Link>
              <Link 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                className="mt-2 text-center bg-amber-600 text-white py-2.5 rounded font-semibold text-sm"
              >
                Konsultasi WhatsApp
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
