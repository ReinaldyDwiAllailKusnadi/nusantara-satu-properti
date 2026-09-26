'use client';

const awardImages = [
  { img: '/images/Web_Award-copy_KSP.jpg', alt: 'Indonesia Best Property Awards - The Amaya Luxury Home Resort' },
  { img: '/images/Web_Award_1_KSP.jpg', alt: 'Tiket.com Platinum Partner' },
  { img: '/images/Web_Award_2_KSP.jpg', alt: 'Hospitality Recognition Award' },
  { img: '/images/Web_Award_3_KSP.jpg', alt: 'Gold Winner Award' },
  { img: '/images/Web_Award_KSP.jpg', alt: 'Tripadvisor Certificate of Excellence - Allstay Hotel' }
];

export default function AwardsSection() {
  return (
    <section id="penghargaan" className="pt-16 sm:pt-20 pb-8 sm:pb-10 bg-[#FDFDFD]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Centered Heading with #22406F divider matching original */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#22406F] uppercase tracking-[1.5px]">
            PENGHARGAAN
          </h2>
          <div className="w-[70px] h-[3.5px] bg-[#22406F] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 5-Columns Gallery - Clean, no borders, exact aspect ratio matching user screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-[15px]">
          {awardImages.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden aspect-[4/5] bg-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover block hover:scale-103 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
