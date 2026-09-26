'use client';

const awards = [
  {
    title: 'Penghargaan Kinerja Keuangan & Tata Kelola Perusahaan',
    issuer: 'Lembaga Apresiasi Emiten Indonesia',
    year: '2023',
    img: '/images/Web_Award_KSP.jpg',
    desc: 'Pengakuan atas konsistensi perseroan dalam menjaga transparansi tata kelola Good Corporate Governance (GCG) dan kepatuhan regulasi pasar modal.'
  },
  {
    title: 'The Best Resort Concept Housing in Central Java',
    issuer: 'Indonesia Property & Housing Excellence Awards',
    year: '2022',
    img: '/images/Web_Award_1_KSP.jpg',
    desc: 'Apresiasi tertinggi untuk The Amaya Home Resort sebagai kawasan perumahan resort terbaik dengan integrasi lanskap hijau terpadu.'
  },
  {
    title: 'Best Boutique Hotel Performance — Allstay Semarang',
    issuer: 'Hospitality & Tourism Choice Awards',
    year: '2021',
    img: '/images/Web_Award_2_KSP.jpg',
    desc: 'Penghargaan atas keunggulan layanan, kepuasan tamu, dan inovasi operasional Allstay Hotel Semarang di kelas hotel bintang tiga.'
  },
  {
    title: 'Green Development Initiative of The Year',
    issuer: 'Sustainable Architecture & Living Forum',
    year: '2020',
    img: '/images/Web_Award_3_KSP.jpg',
    desc: 'Penganugerahan inisiatif ramah lingkungan terdepan pada proyek The Amaya dan efisiensi energi di Allstay Ecotel Yogyakarta.'
  },
  {
    title: 'Top Developer for Sustainable Community Living',
    issuer: 'Regional Property Leadership',
    year: '2019',
    img: '/images/Web_Award-copy_KSP.jpg',
    desc: 'Penghargaan dedikasi perseroan dalam membangun komunitas hunian yang asri, nyaman, dan bernilai investasi tinggi.'
  }
];

export default function AwardsSection() {
  return (
    <section id="penghargaan" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            Prestasi &amp; Apresiasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
            Penghargaan &amp; Pengakuan Industri
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Bukti nyata dedikasi dan standar mutu PT Nusantara Satu Properti Tbk dalam industri pengembang properti dan perhotelan nasional.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              <div className="relative aspect-[16/10] bg-slate-800 overflow-hidden">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md shadow">
                  {award.year}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-amber-400 mb-2">
                    {award.issuer}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {award.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 011.342 1.342l-.8 1.599L18.677 11H20a1 1 0 110 2h-1.323l-1.582 3.954.8 1.599a1 1 0 01-1.342 1.342l-1.599-.8L11 18.677V20a1 1 0 11-2 0v-1.323l-3.954-1.582-1.599.8a1 1 0 01-1.342-1.342l.8-1.599L1.323 13H0a1 1 0 110-2h1.323l1.582-3.954-.8-1.599a1 1 0 011.342-1.342l1.599.8L9 4.323V3a1 1 0 011-1zm-1 6a2 2 0 102 0 2 2 0 00-2 0z" clipRule="evenodd" />
                  </svg>
                  <span>Terverifikasi Sertifikasi Industri</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
