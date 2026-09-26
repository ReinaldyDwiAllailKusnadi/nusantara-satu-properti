'use client';

const awardImages = [
  { img: '/images/Web_Award-copy_KSP.jpg', alt: 'Penghargaan 1' },
  { img: '/images/Web_Award_1_KSP.jpg', alt: 'Penghargaan 2' },
  { img: '/images/Web_Award_2_KSP.jpg', alt: 'Penghargaan 3' },
  { img: '/images/Web_Award_3_KSP.jpg', alt: 'Penghargaan 4' },
  { img: '/images/Web_Award_KSP.jpg', alt: 'Penghargaan 5' }
];

export default function AwardsSection() {
  return (
    <section id="penghargaan" className="py-16 sm:py-20 bg-[#f8f9fa] border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#19375e] uppercase tracking-tight mb-3">
            PENGHARGAAN
          </h2>
          <div className="w-16 h-1 bg-[#19375e]"></div>
        </div>

        {/* 5-Columns Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">
          {awardImages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-2 rounded border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden rounded bg-slate-50 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
