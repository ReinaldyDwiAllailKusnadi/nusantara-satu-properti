'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('berita'); // 'berita' | 'csr' | 'karir' | 'tataKelola'
  const [data, setData] = useState({ berita: [], csr: [], karir: [], tataKelola: [] });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [notification, setNotification] = useState(null);

  // Fetch all CMS data
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/cms');
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      }
    } catch (err) {
      console.error(err);
      showToast('Gagal memuat data!', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  // Open modal for adding
  const handleOpenAdd = () => {
    setModalMode('add');
    setEditItem(null);
    if (activeTab === 'berita') {
      setFormData({
        title: '',
        date: new Date().toISOString().split('T')[0],
        tag: 'NEWS',
        image: '/images/ahs-thumb.jpg',
        excerpt: '',
      });
    } else if (activeTab === 'csr') {
      setFormData({
        title: '',
        date: new Date().toISOString().split('T')[0],
        location: 'Semarang',
        image: '/images/Web_Award_1_KSP.jpg',
        summary: '',
      });
    } else if (activeTab === 'karir') {
      setFormData({
        title: '',
        division: 'Property Development',
        location: 'Ungaran, Semarang',
        type: 'Full Time',
        status: 'Open',
        postedDate: new Date().toISOString().split('T')[0],
        description: '',
        requirementsText: '',
      });
    } else if (activeTab === 'tataKelola') {
      setFormData({
        tabKey: `tab-${Date.now()}`,
        tabTitle: '',
        documentTitle: '',
        pdfUrl: 'https://kotasatuproperti.com/wp-content/uploads/2021/04/Pedoman_Direksi_dan_Komisaris_Perseroan.pdf',
        sectionHeading: '',
        sectionContent: '',
      });
    }
    setIsModalOpen(true);
  };

  // Open modal for editing
  const handleOpenEdit = (item) => {
    setModalMode('edit');
    setEditItem(item);
    if (activeTab === 'karir') {
      setFormData({
        ...item,
        requirementsText: item.requirements ? item.requirements.join('\n') : '',
      });
    } else if (activeTab === 'tataKelola') {
      const firstSec = item.sections && item.sections[0] ? item.sections[0] : {};
      setFormData({
        ...item,
        sectionHeading: firstSec.heading || '',
        sectionContent: firstSec.content || '',
      });
    } else {
      setFormData({ ...item });
    }
    setIsModalOpen(true);
  };

  // Delete item
  const handleDelete = async (id) => {
    if (!confirm('Apakah Anda yakin ingin menghapus item ini?')) return;
    try {
      const res = await fetch(`/api/cms?type=${activeTab}&id=${id}`, {
        method: 'DELETE',
      });
      const json = await res.json();
      if (json.success) {
        showToast('Item berhasil dihapus!');
        fetchData();
      } else {
        showToast(json.error || 'Gagal menghapus!', 'error');
      }
    } catch (err) {
      showToast('Terjadi kesalahan!', 'error');
    }
  };

  // Save (Create or Update)
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      let payloadData = { ...formData };
      
      // Formatting for Karir requirements array
      if (activeTab === 'karir' && typeof formData.requirementsText === 'string') {
        payloadData.requirements = formData.requirementsText
          .split('\n')
          .map((s) => s.trim())
          .filter(Boolean);
        delete payloadData.requirementsText;
      }

      // Formatting for Tata Kelola sections
      if (activeTab === 'tataKelola') {
        if (!payloadData.sections) {
          payloadData.sections = [
            {
              heading: formData.sectionHeading || formData.tabTitle,
              content: formData.sectionContent || '',
              duties: [],
            },
          ];
        }
        delete payloadData.sectionHeading;
        delete payloadData.sectionContent;
      }

      if (modalMode === 'add') {
        const res = await fetch('/api/cms', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: activeTab, data: payloadData }),
        });
        const json = await res.json();
        if (json.success) {
          showToast('Item baru berhasil ditambahkan!');
          setIsModalOpen(false);
          fetchData();
        } else {
          showToast(json.error || 'Gagal menyimpan!', 'error');
        }
      } else {
        // Edit mode
        const res = await fetch('/api/cms', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: activeTab,
            id: editItem.id,
            data: payloadData,
          }),
        });
        const json = await res.json();
        if (json.success) {
          showToast('Perubahan berhasil disimpan!');
          setIsModalOpen(false);
          fetchData();
        } else {
          showToast(json.error || 'Gagal menyimpan!', 'error');
        }
      }
    } catch (err) {
      showToast('Terjadi kesalahan!', 'error');
    }
  };

  // Filter current tab items by search term
  const currentItems = (data[activeTab] || []).filter((item) => {
    const text = (item.title || item.tabTitle || item.documentTitle || '') + (item.excerpt || item.summary || item.description || '');
    return text.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-xl shadow-xl text-white font-bold text-sm transition-all duration-300 animate-in fade-in slide-in-from-top-4 ${
            notification.type === 'error' ? 'bg-red-600' : 'bg-emerald-600'
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* Admin Top Header */}
      <header className="bg-[#22406F] text-white border-b border-[#183054] shadow-md sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            <div>
              <h1 className="text-lg font-extrabold uppercase tracking-wider leading-none">
                Admin CMS Panel
              </h1>
              <p className="text-[12px] text-slate-300">
                PT Kota Satu Properti Tbk
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors"
            >
              Lihat Website ↗
            </Link>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-8 flex-1 w-full space-y-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#22406F] flex items-center justify-center text-2xl font-bold">
              📰
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Berita</p>
              <h3 className="text-2xl font-extrabold text-[#22406F]">{data.berita?.length || 0}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold">
              🤝
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Kegiatan CSR</p>
              <h3 className="text-2xl font-extrabold text-[#22406F]">{data.csr?.length || 0}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl font-bold">
              💼
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lowongan Karir</p>
              <h3 className="text-2xl font-extrabold text-[#22406F]">{data.karir?.length || 0}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-2xl font-bold">
              🏛️
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tata Kelola</p>
              <h3 className="text-2xl font-extrabold text-[#22406F]">{data.tataKelola?.length || 0}</h3>
            </div>
          </div>
        </div>

        {/* Tab Navigation & Controls */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            {/* Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => { setActiveTab('berita'); setSearchTerm(''); }}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'berita'
                    ? 'bg-[#22406F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                📰 Berita ({data.berita?.length || 0})
              </button>

              <button
                onClick={() => { setActiveTab('csr'); setSearchTerm(''); }}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'csr'
                    ? 'bg-[#22406F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                🤝 CSR ({data.csr?.length || 0})
              </button>

              <button
                onClick={() => { setActiveTab('karir'); setSearchTerm(''); }}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'karir'
                    ? 'bg-[#22406F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                💼 Karir ({data.karir?.length || 0})
              </button>

              <button
                onClick={() => { setActiveTab('tataKelola'); setSearchTerm(''); }}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'tataKelola'
                    ? 'bg-[#22406F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                🏛️ Tata Kelola ({data.tataKelola?.length || 0})
              </button>
            </div>

            {/* Actions: Search & Add Button */}
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Cari item..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#22406F]/20 w-44 sm:w-56"
              />

              <button
                onClick={handleOpenAdd}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>+</span>
                <span>Tambah Baru</span>
              </button>

              {/* View Public Page Link */}
              <Link
                href={
                  activeTab === 'berita'
                    ? '/berita'
                    : activeTab === 'csr'
                    ? '/csr'
                    : activeTab === 'karir'
                    ? '/career'
                    : '/tata-kelola'
                }
                target="_blank"
                className="p-2 border border-slate-300 text-slate-600 hover:text-[#22406F] hover:bg-slate-50 rounded-xl transition-colors"
                title="Buka Halaman Publik"
              >
                ↗
              </Link>
            </div>
          </div>

          {/* Table List of Items */}
          {loading ? (
            <div className="py-20 text-center font-bold text-slate-500">
              Memuat data tabel...
            </div>
          ) : currentItems.length === 0 ? (
            <div className="py-16 text-center text-slate-400">
              Tidak ada data ditemukan di kategori ini.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                    <th className="py-3 px-4">Item / Judul</th>
                    <th className="py-3 px-4">Info Tambahan</th>
                    <th className="py-3 px-4 text-center">Status / Tag</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {currentItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                      {/* Main Title & Image */}
                      <td className="py-4 px-4 max-w-md">
                        <div className="flex items-center gap-3.5">
                          {item.image && (
                            <img
                              src={item.image}
                              alt=""
                              className="w-12 h-12 object-cover rounded-lg flex-shrink-0 bg-slate-100"
                            />
                          )}
                          <div>
                            <h4 className="font-bold text-[#22406F] line-clamp-1">
                              {item.title || item.tabTitle || item.documentTitle}
                            </h4>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {item.excerpt || item.summary || item.description || item.pdfUrl}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Extra info */}
                      <td className="py-4 px-4 text-xs text-slate-500">
                        {item.date && <div>📅 {item.date}</div>}
                        {item.location && <div>📍 {item.location}</div>}
                        {item.postedDate && <div>📅 {item.postedDate}</div>}
                        {item.documentTitle && <div>📄 {item.documentTitle}</div>}
                      </td>

                      {/* Status / Tag */}
                      <td className="py-4 px-4 text-center">
                        {item.tag && (
                          <span className="px-2.5 py-1 bg-blue-50 text-[#007BBB] font-bold text-xs rounded-full">
                            {item.tag}
                          </span>
                        )}
                        {item.status && (
                          <span
                            className={`px-2.5 py-1 font-bold text-xs rounded-full ${
                              item.status === 'Open'
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {item.status}
                          </span>
                        )}
                        {activeTab === 'tataKelola' && (
                          <span className="px-2.5 py-1 bg-purple-50 text-purple-700 font-bold text-xs rounded-full">
                            Charter
                          </span>
                        )}
                      </td>

                      {/* Action Buttons (Edit / Delete) */}
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Modal Form Add / Edit */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in duration-200 cursor-default"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <h3 className="text-xl font-extrabold text-[#22406F]">
                {modalMode === 'add' ? 'Tambah Data Baru' : 'Edit Data'} ({activeTab.toUpperCase()})
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-full text-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-sm font-medium">
              {/* Form Fields: Berita */}
              {activeTab === 'berita' && (
                <>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Judul Berita</label>
                    <input
                      type="text"
                      required
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Tanggal</label>
                      <input
                        type="date"
                        required
                        value={formData.date || ''}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Tag / Kategori</label>
                      <input
                        type="text"
                        value={formData.tag || 'NEWS'}
                        onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">URL Gambar</label>
                    <input
                      type="text"
                      value={formData.image || ''}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="/images/ahs-thumb.jpg"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Ringkasan / Isi Berita</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.excerpt || ''}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20 leading-relaxed"
                    ></textarea>
                  </div>
                </>
              )}

              {/* Form Fields: CSR */}
              {activeTab === 'csr' && (
                <>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Judul Kegiatan CSR</label>
                    <input
                      type="text"
                      required
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Tanggal</label>
                      <input
                        type="date"
                        required
                        value={formData.date || ''}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Lokasi Kegiatan</label>
                      <input
                        type="text"
                        value={formData.location || ''}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Semarang"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">URL Gambar</label>
                    <input
                      type="text"
                      value={formData.image || ''}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="/images/Web_Award_1_KSP.jpg"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Deskripsi Kegiatan CSR</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.summary || ''}
                      onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20 leading-relaxed"
                    ></textarea>
                  </div>
                </>
              )}

              {/* Form Fields: Karir */}
              {activeTab === 'karir' && (
                <>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Posisi Lowongan</label>
                    <input
                      type="text"
                      required
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Project Architect"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Divisi / Unit</label>
                      <input
                        type="text"
                        value={formData.division || ''}
                        onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                        placeholder="Property / Hospitality"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Lokasi</label>
                      <input
                        type="text"
                        value={formData.location || ''}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Semarang"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Tipe Pekerjaan</label>
                      <input
                        type="text"
                        value={formData.type || 'Full Time'}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Status Lowongan</label>
                      <select
                        value={formData.status || 'Open'}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20 bg-white"
                      >
                        <option value="Open">Open (Terbuka)</option>
                        <option value="Closed">Closed (Ditutup)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Deskripsi Pekerjaan</label>
                    <textarea
                      rows={3}
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20 leading-relaxed"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Kualifikasi (1 baris per poin)</label>
                    <textarea
                      rows={3}
                      value={formData.requirementsText || ''}
                      onChange={(e) => setFormData({ ...formData, requirementsText: e.target.value })}
                      placeholder="Pendidikan minimal S1&#10;Pengalaman 2 tahun"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20 leading-relaxed"
                    ></textarea>
                  </div>
                </>
              )}

              {/* Form Fields: Tata Kelola */}
              {activeTab === 'tataKelola' && (
                <>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Nama Tab Menu</label>
                    <input
                      type="text"
                      required
                      value={formData.tabTitle || ''}
                      onChange={(e) => setFormData({ ...formData, tabTitle: e.target.value })}
                      placeholder="e.g. Pedoman Direksi"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Judul Dokumen Resmi</label>
                    <input
                      type="text"
                      value={formData.documentTitle || ''}
                      onChange={(e) => setFormData({ ...formData, documentTitle: e.target.value })}
                      placeholder="Pedoman Direksi dan Komisaris Perseroan"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">URL File PDF</label>
                    <input
                      type="text"
                      value={formData.pdfUrl || ''}
                      onChange={(e) => setFormData({ ...formData, pdfUrl: e.target.value })}
                      placeholder="https://.../document.pdf"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Judul Bagian / Bab</label>
                    <input
                      type="text"
                      value={formData.sectionHeading || ''}
                      onChange={(e) => setFormData({ ...formData, sectionHeading: e.target.value })}
                      placeholder="Pedoman Kerja (Charter) Dewan Komisaris"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Deskripsi Ringkas</label>
                    <textarea
                      rows={3}
                      value={formData.sectionContent || ''}
                      onChange={(e) => setFormData({ ...formData, sectionContent: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20 leading-relaxed"
                    ></textarea>
                  </div>
                </>
              )}

              {/* Submit / Cancel Buttons */}
              <div className="flex items-center justify-end gap-3 pt-5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-600 font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#22406F] hover:bg-[#183054] text-white font-bold rounded-xl transition-colors shadow-md cursor-pointer"
                >
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
