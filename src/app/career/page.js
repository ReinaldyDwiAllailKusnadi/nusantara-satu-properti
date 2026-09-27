'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch('/api/cms?type=karir')
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setJobs(res.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const openJobs = jobs.filter((j) => j.status === 'Open');

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* SECTION 1: Hero Banner "CAREER"                           */}
        {/* ========================================================= */}
        <section 
          className="relative py-24 sm:py-32 bg-[#183156] text-white flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/scott-graham-5fNmWej4tAA-unsplash-1-1-1024x683.jpg')",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-[#22406F]/[0.88] backdrop-blur-[1px]"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3">
            <h1 className="text-[34px] sm:text-[50px] font-extrabold uppercase tracking-[2.5px] text-white font-sans drop-shadow-md">
              Grow Your Career With Kota Satu
            </h1>
            <p className="text-[17px] sm:text-[21px] text-white/90 font-medium tracking-wide">
              Bergabunglah bersama kami membangun masa depan properti dan perhotelan terbaik
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: Career Overview & Openings                     */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16">
            
            {/* Culture / Value Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
              <div className="lg:col-span-6 space-y-4">
                <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#22406F] uppercase tracking-wide leading-tight">
                  Budaya Kerja Profesional &amp; Inovatif
                </h2>
                <div className="w-[18%] max-w-[80px] h-[4px] bg-[#22406F] my-2"></div>
                <p className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed text-justify">
                  Di PT Kota Satu Properti Tbk, kami percaya bahwa sumber daya manusia adalah aset terpenting. Kami menyediakan lingkungan kerja yang inklusif, kolaboratif, serta mendukung perkembangan karir setiap individu melalui pelatihan berkala dan jenjang karir yang terukur.
                </p>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-slate-100">
                <img
                  src="/images/orva-studio-YC8qqp50BdA-unsplash-scaled.jpg"
                  alt="Suasana Kerja"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Job Openings Section */}
            <div className="pt-6">
              <div className="text-center mb-12">
                <h3 className="text-[26px] sm:text-[34px] font-extrabold uppercase tracking-[2px] text-[#22406F]">
                  Lowongan Pekerjaan Tersedia
                </h3>
                <div className="w-[18%] max-w-[100px] h-[4px] bg-[#22406F] mx-auto mt-3"></div>
              </div>

              {loading ? (
                <div className="py-16 text-center text-[#22406F] font-bold">
                  Memuat data lowongan...
                </div>
              ) : openJobs.length === 0 ? (
                /* No Openings State matching kotasatuproperti.com */
                <div className="bg-[#22406F]/[0.05] border border-dashed border-[#22406F]/30 rounded-2xl p-10 sm:p-14 text-center max-w-2xl mx-auto space-y-4 shadow-xs">
                  <div className="w-16 h-16 rounded-full bg-[#22406F]/10 text-[#22406F] flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-[20px] font-bold text-[#22406F]">
                    Saat Ini Belum Ada Lowongan Terbuka
                  </h4>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 max-w-md mx-auto leading-relaxed">
                    Kami selalu terbuka terhadap talenta berprestasi. Silakan kirimkan CV dan portofolio Anda untuk kesempatan di masa mendatang ke:
                  </p>
                  <div className="pt-2">
                    <a
                      href="mailto:info@kotasatuproperti.com"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-[#22406F] hover:bg-[#183054] text-white font-bold text-[15px] rounded-full transition-colors shadow-md cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Kirim CV ke Email</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* List of Available Jobs */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {openJobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] font-bold text-[#007BBB] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                            {job.division}
                          </span>
                          <span className="text-[12px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                            {job.type}
                          </span>
                        </div>
                        <h4 className="text-[20px] font-extrabold text-[#22406F] pt-1">
                          {job.title}
                        </h4>
                        <p className="text-[13px] text-slate-400 font-medium">
                          📍 {job.location} • Diposting {job.postedDate}
                        </p>
                        <p className="text-[14px] text-slate-600 pt-2 leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedJob(job)}
                        className="w-full mt-4 py-2.5 bg-[#22406F] hover:bg-[#183054] text-white font-bold text-[14px] rounded-xl transition-colors cursor-pointer"
                      >
                        Lihat Kualifikasi &amp; Lamar
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Modal Detail Lowongan */}
        {selectedJob && (
          <div 
            onClick={() => setSelectedJob(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in duration-200 cursor-default space-y-5"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Tutup"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-1 pr-6">
                <span className="text-[12px] font-bold text-[#007BBB] uppercase tracking-wider">
                  {selectedJob.division} • {selectedJob.location}
                </span>
                <h3 className="text-[22px] font-extrabold text-[#22406F]">
                  {selectedJob.title}
                </h3>
              </div>

              <div className="space-y-3 text-[15px] text-slate-700">
                <h4 className="font-bold text-[#22406F]">Deskripsi Pekerjaan:</h4>
                <p className="leading-relaxed">{selectedJob.description}</p>
              </div>

              {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                <div className="space-y-2 text-[15px] text-slate-700">
                  <h4 className="font-bold text-[#22406F]">Kualifikasi:</h4>
                  <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
                    {selectedJob.requirements.map((req, rIdx) => (
                      <li key={rIdx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`mailto:info@kotasatuproperti.com?subject=Lamaran%20Pekerjaan%20-%20${encodeURIComponent(selectedJob.title)}`}
                  className="w-full inline-flex items-center justify-center py-3 bg-[#22406F] hover:bg-[#183054] text-white font-bold text-[15px] rounded-xl transition-colors shadow-md cursor-pointer"
                >
                  Kirim Lamaran Sekarang
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
