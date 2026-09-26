'use client';

export default function Hero() {
  return (
    <section id="beranda" className="w-full relative bg-black overflow-hidden leading-none">
      {/* Full Width Video matching original kotasatuproperti.com */}
      <div className="w-full relative overflow-hidden">
        <video
          className="w-full h-auto max-h-[85vh] object-cover block"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
        />
      </div>
    </section>
  );
}
