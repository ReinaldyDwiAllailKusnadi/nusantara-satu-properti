'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CSRDetailPage({ params }) {
  const resolvedParams = use(params);
  const csrId = resolvedParams.id;

  const [csrItem, setCsrItem] = useState(null);
  const [allCsr, setAllCsr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/api/cms?type=csr')
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setAllCsr(res.data);
          const found = res.data.find((c) => c.id === csrId);
          setCsrItem(found || null);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [csrId]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const relatedCsr = allCsr
    .filter((c) => c.id !== csrId)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {loading ? (
          <div className="py-32 text-center">
            <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-sm font-semibold text-slate-500">Memuat detail kegiatan CSR...</p>
          </div>
        ) : !csrItem ? (
          <div className="py-32 text-center max-w-xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Kegiatan CSR Tidak Ditemukan</h2>
            <p className="text-slate-500 mb-6 text-sm">
              Kegiatan yang Anda cari mungkin telah dipindahkan atau dihapus.
            </p>
            <Link
              href="/csr"
              className="px-6 py-2.5 bg-emerald-600 text-white font-bold text-sm rounded-lg hover:bg-emerald-700 transition-colors"
            >
              &larr; Kembali ke Daftar CSR
            </Link>
          </div>
        ) : (
          <article>
            {/* Hero Header */}
            <div className="bg-[#1b3e2b] text-white py-16 sm:py-20 relative overflow-hidden">
              <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <Link
                    href="/csr"
                    className="text-xs font-bold text-emerald-300 hover:text-white uppercase tracking-wider"
                  >
                    &larr; Corporate Social Responsibility
                  </Link>
                  <span className="text-white/40">&bull;</span>
                  <span className="px-2.5 py-0.5 bg-emerald-500 text-white font-extrabold text-[11px] rounded-full uppercase">
                    CSR PERSEROAN
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold leading-snug tracking-wide text-white">
                  {csrItem.title}
                </h1>

                <div className="flex items-center gap-4 text-xs text-emerald-200 pt-2 border-t border-white/10">
                  <span>📅 {csrItem.date}</span>
                  <span>📍 {csrItem.location || 'Semarang, Jawa Tengah'}</span>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto px-6 py-12">
              {/* Featured Image */}
              {csrItem.image && (
                <div className="mb-10 rounded-2xl overflow-hidden shadow-md bg-slate-100 max-h-[500px]">
                  <img
                    src={csrItem.image}
                    alt={csrItem.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/Web_Award_1_KSP.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Share Bar */}
              <div className="flex items-center justify-between border-y border-slate-100 py-3.5 mb-8 text-xs font-bold text-slate-600">
                <span className="uppercase tracking-wider">Bagikan Kegiatan:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(csrItem.title + ' - ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? '✓ Tersalin!' : 'Salin Tautan'}
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700 space-y-5">
                <p className="text-lg font-medium text-slate-900 leading-relaxed border-l-4 border-emerald-600 pl-4 italic">
                  {csrItem.summary}
                </p>
                
                <p>
                  Sebagai wujud kepedulian terhadap lingkungan hidup dan pemberdayaan masyarakat di sekitar unit usaha, PT Kota Satu Properti Tbk senantiasa mengintegrasikan program Tanggung Jawab Sosial dan Lingkungan (TJSL) ke dalam operasional bisnis.
                </p>

                <p>
                  Melalui kolaborasi berkelanjutan dengan warga setempat, instansi terkait, dan mitra strategis, perseroan berharap inisiatif ini dapat memberikan dampak nyata yang harmonis bagi kesejahteraan sosial dan kelestarian ekosistem.
                </p>
              </div>

              {/* Related CSR */}
              {relatedCsr.length > 0 && (
                <div className="mt-16 pt-10 border-t border-slate-200">
                  <h3 className="text-xl font-extrabold text-[#22406F] uppercase tracking-wide mb-6">
                    Program CSR Lainnya
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {relatedCsr.map((rc) => (
                      <Link
                        key={rc.id}
                        href={`/csr/${rc.id}`}
                        className="group flex flex-col bg-slate-50 rounded-xl overflow-hidden hover:shadow-md transition-all border border-slate-100"
                      >
                        <div className="h-36 bg-slate-200 overflow-hidden">
                          <img
                            src={rc.image || '/images/Web_Award_1_KSP.jpg'}
                            alt={rc.title}
                            onError={(e) => { e.currentTarget.src = '/images/Web_Award_1_KSP.jpg'; }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <h4 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                            {rc.title}
                          </h4>
                          <span className="text-[11px] text-slate-400 mt-2 font-medium">
                            {rc.date} &bull; {rc.location}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
}
