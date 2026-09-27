'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BeritaDetailPage({ params }) {
  const resolvedParams = use(params);
  const articleId = resolvedParams.id;

  const [article, setArticle] = useState(null);
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/api/cms?type=berita')
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setAllNews(res.data);
          const found = res.data.find((n) => n.id === articleId);
          setArticle(found || null);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [articleId]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const relatedNews = allNews
    .filter((n) => n.id !== articleId)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {loading ? (
          <div className="py-32 text-center">
            <div className="w-10 h-10 border-4 border-[#007BBB] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-sm font-semibold text-slate-500">Memuat artikel berita...</p>
          </div>
        ) : !article ? (
          <div className="py-32 text-center max-w-xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Artikel Tidak Ditemukan</h2>
            <p className="text-slate-500 mb-6 text-sm">
              Artikel yang Anda cari mungkin telah dipindahkan atau dihapus oleh administrator.
            </p>
            <Link
              href="/berita"
              className="px-6 py-2.5 bg-[#007BBB] text-white font-bold text-sm rounded-lg hover:bg-[#000077] transition-colors"
            >
              &larr; Kembali ke Daftar Berita
            </Link>
          </div>
        ) : (
          <article>
            {/* Hero Header */}
            <div className="bg-[#183156] text-white py-16 sm:py-20 relative overflow-hidden">
              <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <Link
                    href="/berita"
                    className="text-xs font-bold text-cyan-300 hover:text-white uppercase tracking-wider"
                  >
                    &larr; Warta & Berita
                  </Link>
                  <span className="text-white/40">&bull;</span>
                  <span className="px-2.5 py-0.5 bg-[#007BBB] text-white font-extrabold text-[11px] rounded-full uppercase">
                    {article.tag || 'NEWS'}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold leading-snug tracking-wide text-white">
                  {article.title}
                </h1>

                <div className="flex items-center gap-4 text-xs text-slate-300 pt-2 border-t border-white/10">
                  <span>📅 {article.date}</span>
                  <span>✍️ Oleh {article.author || 'Admin Korporat'}</span>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto px-6 py-12">
              {/* Featured Image */}
              {article.image && (
                <div className="mb-10 rounded-2xl overflow-hidden shadow-md bg-slate-100 max-h-[500px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/ahs-thumb.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Share Bar */}
              <div className="flex items-center justify-between border-y border-slate-100 py-3.5 mb-8 text-xs font-bold text-slate-600">
                <span className="uppercase tracking-wider">Bagikan Artikel:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' - ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#0077b5] hover:bg-[#005f93] text-white rounded-lg transition-colors"
                  >
                    LinkedIn
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? '✓ Tersalin!' : 'Salin Tautan'}
                  </button>
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700 space-y-5">
                <p className="text-lg font-medium text-slate-900 leading-relaxed border-l-4 border-[#007BBB] pl-4 italic">
                  {article.excerpt}
                </p>
                
                <p>
                  PT Kota Satu Properti Tbk (“Perseroan”) terus berkomitmen menghadirkan keunggulan operasional dan nilai tambah yang berkelanjutan bagi seluruh pemangku kepentingan. Inisiatif ini merupakan bagian integral dari strategi jangka panjang perseroan dalam memperkuat daya saing di sektor properti dan perhotelan nasional.
                </p>

                <p>
                  Dengan mengedepankan filosofi SATU (Solid, Adaptable, Trustworthy, United), seluruh jajaran direksi, manajemen, dan staf secara konsisten menerapkan tata kelola perusahaan yang baik (*Good Corporate Governance*) serta standar mutu keselamatan kerja di setiap unit bisnis.
                </p>
              </div>

              {/* Related Articles */}
              {relatedNews.length > 0 && (
                <div className="mt-16 pt-10 border-t border-slate-200">
                  <h3 className="text-xl font-extrabold text-[#22406F] uppercase tracking-wide mb-6">
                    Berita Terkait Lainnya
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {relatedNews.map((rn) => (
                      <Link
                        key={rn.id}
                        href={`/berita/${rn.id}`}
                        className="group flex flex-col bg-slate-50 rounded-xl overflow-hidden hover:shadow-md transition-all border border-slate-100"
                      >
                        <div className="h-36 bg-slate-200 overflow-hidden">
                          <img
                            src={rn.image || '/images/ahs-thumb.jpg'}
                            alt={rn.title}
                            onError={(e) => { e.currentTarget.src = '/images/ahs-thumb.jpg'; }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#007BBB] transition-colors line-clamp-2">
                            {rn.title}
                          </h4>
                          <span className="text-[11px] text-slate-400 mt-2 font-medium">
                            {rn.date}
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
