'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'The Amaya Home Resort',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: 'The Amaya Home Resort',
          message: ''
        });
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Gagal mengirim pesan' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Terjadi kendala jaringan. Silakan hubungi kami via WhatsApp.' });
    }
  };

  return (
    <section id="kontak" className="py-20 bg-slate-900 text-white relative">
      <div className="site-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            Hubungi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 tracking-tight">
            Pusat Informasi &amp; Pemasaran
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Tim profesional kami siap melayani pertanyaan seputar unit hunian The Amaya, reservasi Allstay Hotel, atau keperluan investor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Office Details & Addresses */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                Kantor Pusat (Head Office)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                <strong>PT Nusantara Satu Properti Tbk</strong><br />
                Jl. Erlangga Raya No. 14, Pleburan, Semarang Selatan, Kota Semarang, Jawa Tengah 50241
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                <p className="flex items-center gap-2">
                  <span className="text-amber-400 font-semibold">Telepon:</span> (024) 841 8888
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-amber-400 font-semibold">Email Corsec:</span> corsec@nusantarasatuproperti.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-amber-400 font-semibold">Jam Kerja:</span> Senin - Jumat: 08.30 - 17.00 WIB
                </p>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                Marketing Gallery The Amaya Home Resort
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Jl. MT Haryono No. 1, Ungaran, Kab. Semarang, Jawa Tengah 50511 (Dekat Gerbang Tol Ungaran)
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                <p className="flex items-center gap-2">
                  <span className="text-emerald-400 font-semibold">Hotline Sales:</span> (024) 692 8888
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-400 font-semibold">WhatsApp Official:</span> 0812-3456-7890
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-400 font-semibold">Show Unit:</span> Buka Setiap Hari (09.00 - 17.30 WIB)
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Satu%20Properti,%20saya%20ingin%20jadwal%20survey%20unit%20ke%20The%20Amaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.983.536 1.794.814 2.791.814 3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.505-4.475 9.97-9.969 9.97-1.748 0-3.385-.453-4.81-1.244l-5.221 1.369 1.393-5.093c-.9-1.488-1.431-3.23-1.431-5.002 0-5.505 4.475-9.969 9.969-9.969 5.505 0 10.069 4.464 10.069 9.969z" />
                  </svg>
                  <span>Chat WhatsApp Tim Sales (Respon Cepat)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Kirim Pesan / Permintaan Informasi</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Isi formulir di bawah ini, perwakilan resmi kami akan menghubungi Anda dalam 1x24 jam kerja.
              </p>

              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-sm flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Terima kasih! Pesan Anda telah berhasil terkirim. Tim Nusantara Satu Properti akan segera menghubungi Anda.</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-sm flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Nama Lengkap <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Nomor WhatsApp / HP <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0812xxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Alamat Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="budi@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Kategori Minat
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                    >
                      <option value="The Amaya Home Resort">The Amaya Home Resort (Hunian)</option>
                      <option value="Allstay Hotel Semarang">Allstay Hotel Semarang (Hospitality)</option>
                      <option value="Allstay Ecotel Yogyakarta">Allstay Ecotel Yogyakarta (Hospitality)</option>
                      <option value="Hubungan Investor / IDX: NUSA">Hubungan Investor / Pasar Modal</option>
                      <option value="Kerjasama Strategis & Karir">Kerjasama Bisnis &amp; Rekrutmen</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Pesan atau Pertanyaan Anda <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan kebutuhan Anda, misalnya ingin mengetahui pricelist Tipe Alysa atau survei lokasi akhir pekan..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  {status.loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Mengirim Formulir...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirim Pesan Sekarang</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
