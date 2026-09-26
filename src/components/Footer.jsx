'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      {/* Upper Footer */}
      <div className="site-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#beranda" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-slate-950 text-xl tracking-wider shadow-lg shadow-amber-500/20">
                N
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white block">
                  NUSANTARA SATU
                </span>
                <span className="text-[10px] tracking-widest font-semibold text-amber-400 uppercase block -mt-1">
                  PROPERTI TBK &bull; IDX: NUSA
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              PT Nusantara Satu Properti Tbk adalah emiten pengembang properti dan perhotelan terkemuka di Indonesia. Menghadirkan kawasan The Amaya Home Resort Ungaran serta jaringan Allstay Hotel di Semarang &amp; Yogyakarta.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Terdaftar di Bursa Efek Indonesia: <strong>IDX: NUSA</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navigasi</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="#beranda" className="hover:text-amber-400 transition-colors">Beranda</Link></li>
              <li><Link href="#profil" className="hover:text-amber-400 transition-colors">Profil Perseroan</Link></li>
              <li><Link href="#unit-bisnis" className="hover:text-amber-400 transition-colors">Unit Bisnis</Link></li>
              <li><Link href="#milestones" className="hover:text-amber-400 transition-colors">Milestones Perjalanan</Link></li>
              <li><Link href="#penghargaan" className="hover:text-amber-400 transition-colors">Penghargaan</Link></li>
              <li><Link href="#hubungan-investor" className="hover:text-amber-400 transition-colors">Hubungan Investor</Link></li>
              <li><Link href="#kontak" className="hover:text-amber-400 transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Portofolio */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Portofolio Unggulan</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-slate-300 font-medium">The Amaya Home Resort</span>
                <span className="block text-[11px] text-slate-500">Kawasan Resort Living Ungaran</span>
              </li>
              <li>
                <span className="text-slate-300 font-medium">Allstay Hotel Semarang</span>
                <span className="block text-[11px] text-slate-500">Boutique Hotel Simpang Lima</span>
              </li>
              <li>
                <span className="text-slate-300 font-medium">Allstay Ecotel Yogyakarta</span>
                <span className="block text-[11px] text-slate-500">Eco-Friendly Hospitality di Sleman</span>
              </li>
              <li>
                <span className="text-slate-300 font-medium">Bistropolis Restaurant</span>
                <span className="block text-[11px] text-slate-500">Dining &amp; Coffee Space Modern</span>
              </li>
            </ul>
          </div>

          {/* Investor & Governance */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Tata Kelola &amp; Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#hubungan-investor" className="hover:text-amber-400 transition-colors">Laporan Keuangan Diaudit</a></li>
              <li><a href="#hubungan-investor" className="hover:text-amber-400 transition-colors">Laporan Tahunan &amp; Keberlanjutan</a></li>
              <li><a href="#hubungan-investor" className="hover:text-amber-400 transition-colors">Piagam Komite Audit &amp; GCG</a></li>
              <li><a href="#hubungan-investor" className="hover:text-amber-400 transition-colors">Keterbukaan Informasi BEI</a></li>
              <li><a href="#hubungan-investor" className="hover:text-amber-400 transition-colors">Sistem Pelaporan Pelanggaran (WBS)</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 py-6 bg-black/40">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} <strong>PT Nusantara Satu Properti Tbk</strong>. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-6">
            <span>Emiten BEI: NUSA</span>
            <span>&bull;</span>
            <Link href="#beranda" className="hover:text-slate-300">Kembali ke Atas &uarr;</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
