'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section id="beranda" className="relative bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
      {/* Background Graphic & Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/scott-graham-5fNmWej4tAA-unsplash-1-1-1024x683.jpg" 
          alt="Nusantara Satu Properti" 
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      <div className="site-container relative z-10 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            Developer Properti & Hospitality Terkemuka
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Membangun Harmoni <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Hunian Hijau & Hospitality
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            PT Nusantara Satu Properti Tbk adalah pengembang terkemuka <strong>Amaya Home Resort</strong> dengan konsep green living berkualitas, serta pengelola jaringan hotel bergengsi <strong>Allstay Hotel Semarang</strong> &amp; <strong>Allstay Ecotel Yogyakarta</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#unit-bisnis" className="btn-primary">
              <span>Lihat Unit Bisnis</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <Link href="#profil" className="btn-secondary">
              <span>Profil Perseroan</span>
            </Link>

            <Link 
              href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Satu%20Properti,%20saya%20tertarik%20dengan%20properti%20Anda" 
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors ml-2 py-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              Konsultasi WhatsApp Langsung &rarr;
            </Link>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-amber-400">2012</div>
            <div className="text-xs text-slate-400 mt-0.5">Tahun Pendirian Perseroan</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-white">Amaya Resort</div>
            <div className="text-xs text-slate-400 mt-0.5">Kawasan Green Living Ungaran</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-white">Allstay Hotel</div>
            <div className="text-xs text-slate-400 mt-0.5">Semarang &amp; Yogyakarta</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-emerald-400">IDX: NUSA</div>
            <div className="text-xs text-slate-400 mt-0.5">Emiten Saham Terdaftar</div>
          </div>
        </div>
      </div>
    </section>
  );
}
