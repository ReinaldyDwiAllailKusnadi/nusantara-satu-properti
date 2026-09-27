'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const [loginForm, setLoginForm] = useState({ username: 'admin', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // CMS State
  const [activeTab, setActiveTab] = useState('berita'); // 'berita' | 'csr' | 'karir' | 'tataKelola' | 'investor' | 'inquiries'
  const [data, setData] = useState({ berita: [], csr: [], karir: [], tataKelola: [], investor: [] });
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [notification, setNotification] = useState(null);

  // Check login on mount
  useEffect(() => {
    const savedToken = sessionStorage.getItem('ksp_admin_token');
    if (savedToken) {
      setAuthToken(savedToken);
      setIsAuthenticated(true);
      fetchData();
      fetchInquiries();
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, []);

  const showToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });
      const json = await res.json();
      if (json.success && json.token) {
        sessionStorage.setItem('ksp_admin_token', json.token);
        setAuthToken(json.token);
        setIsAuthenticated(true);
        fetchData();
        fetchInquiries();
        showToast('Login berhasil! Selamat datang di Panel Admin.');
      } else {
        setLoginError(json.message || 'Login gagal. Periksa kembali username dan password Anda.');
      }
    } catch (err) {
      setLoginError('Koneksi ke server gagal. Silakan coba lagi.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem('ksp_admin_token');
    setAuthToken('');
    setIsAuthenticated(false);
    showToast('Anda telah berhasil keluar (Logged out).');
  };

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
      showToast('Gagal memuat data CMS!', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Fetch Inquiries
  const fetchInquiries = async () => {
    try {
      const res = await fetch('/api/inquiries');
      const json = await res.json();
      if (json.success && json.data) {
        setInquiries(json.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Update inquiry status
  const handleUpdateInquiryStatus = async (id, newStatus) => {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({ id, status: newStatus })
      });
      const json = await res.json();
      if (json.success) {
        showToast(`Status pesan diubah ke ${newStatus}`);
        fetchInquiries();
      }
    } catch (err) {
      showToast('Gagal mengubah status', 'error');
    }
  };

  // Delete inquiry
  const handleDeleteInquiry = async (id) => {
    if (!confirm('Hapus pesan pertanyaan ini?')) return;
    try {
      const res = await fetch(`/api/inquiries?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${authToken}` }
      });
      const json = await res.json();
      if (json.success) {
        showToast('Pesan berhasil dihapus');
        fetchInquiries();
      }
    } catch (err) {
      showToast('Gagal menghapus pesan', 'error');
    }
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
    } else if (activeTab === 'investor') {
      setFormData({
        title: '',
        category: 'Laporan Tahunan',
        downloadUrl: 'https://kotasatuproperti.com/wp-content/uploads/2026/05/SATU-Annual-Report-Sustainability-ESG-2025.pdf',
        buttonText: 'Download >',
        image: 'https://kotasatuproperti.com/wp-content/uploads/2026/04/Kota-Satu-24-September-2024.png',
        date: '2026',
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
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
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

      // Formatting for Tata Kelola sections array
      if (activeTab === 'tataKelola') {
        payloadData.sections = [
          {
            heading: formData.sectionHeading || 'Pedoman Organ Perseroan',
            content: formData.sectionContent || '',
            items: []
          }
        ];
        delete payloadData.sectionHeading;
        delete payloadData.sectionContent;
      }

      if (modalMode === 'add') {
        const res = await fetch('/api/cms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify({
            type: activeTab,
            data: payloadData
          })
        });
        const json = await res.json();
        if (json.success) {
          showToast('Data baru berhasil ditambahkan!');
          setIsModalOpen(false);
          fetchData();
        } else {
          showToast(json.error || 'Gagal menambah data!', 'error');
        }
      } else {
        const res = await fetch('/api/cms', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify({
            type: activeTab,
            id: editItem.id,
            data: payloadData
          })
        });
        const json = await res.json();
        if (json.success) {
          showToast('Perubahan data berhasil disimpan!');
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

  const filteredInquiries = inquiries.filter((inq) => {
    const text = `${inq.name} ${inq.email} ${inq.phone} ${inq.interest} ${inq.message}`;
    return text.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const newInquiriesCount = inquiries.filter((i) => i.status === 'BARU').length;

  // -------------------------------------------------------------
  // RENDER: LOGIN SCREEN IF NOT AUTHENTICATED
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#183054] to-[#22406F] flex items-center justify-center p-4 font-sans">
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 max-w-md w-full border border-white/20">
          <div className="text-center mb-8">
            <img
              src="/images/orig-logo.png"
              alt="Kota Satu Properti"
              className="h-10 mx-auto object-contain mb-4"
            />
            <h2 className="text-2xl font-black text-[#22406F] uppercase tracking-wide">
              Admin CMS Panel
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Portal Manajemen Konten Resmi PT Kota Satu Properti Tbk
            </p>
          </div>

          {loginError && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-700 flex items-center gap-2">
              <span className="text-base">⚠️</span>
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                Username
              </label>
              <input
                type="text"
                required
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                placeholder="admin"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#007BBB] text-slate-900 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                placeholder="Masukkan password admin"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#007BBB] text-slate-900 font-medium"
              />
            </div>

            <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100 text-[11px] text-blue-900 space-y-1">
              <p className="font-bold">🔐 Kredensial Default Sistem:</p>
              <p>Username: <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold">admin</code></p>
              <p>Password: <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold">AdminKotaSatu2026!</code></p>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 bg-[#007BBB] hover:bg-[#006296] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50 mt-2"
            >
              {loginLoading ? 'Memverifikasi...' : 'Masuk ke Dashboard'}
            </button>
          </form>

          <div className="text-center mt-6 pt-5 border-t border-slate-100">
            <Link href="/" className="text-xs text-slate-500 hover:text-[#007BBB] font-bold">
              &larr; Kembali ke Beranda Situs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: MAIN ADMIN DASHBOARD
  // -------------------------------------------------------------
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
                PT Kota Satu Properti Tbk &bull; <span className="text-emerald-400 font-bold">Terkoneksi Aman</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors"
            >
              Lihat Website ↗
            </Link>
            <button
              onClick={handleLogout}
              className="px-3.5 py-2 bg-red-600/80 hover:bg-red-600 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
              title="Keluar dari Panel Admin"
            >
              Logout 🔒
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-8 flex-1 w-full space-y-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#22406F] flex items-center justify-center text-xl font-bold">
              📰
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Berita</p>
              <h3 className="text-xl font-extrabold text-[#22406F]">{data.berita?.length || 0}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-bold">
              🤝
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">CSR</p>
              <h3 className="text-xl font-extrabold text-[#22406F]">{data.csr?.length || 0}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-xl font-bold">
              💼
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Karir</p>
              <h3 className="text-xl font-extrabold text-[#22406F]">{data.karir?.length || 0}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-xl font-bold">
              🏛️
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tata Kelola</p>
              <h3 className="text-xl font-extrabold text-[#22406F]">{data.tataKelola?.length || 0}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center text-xl font-bold">
              📈
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Investor</p>
              <h3 className="text-xl font-extrabold text-[#22406F]">{data.investor?.length || 0}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center text-xl font-bold relative">
              📩
              {newInquiriesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                  {newInquiriesCount}
                </span>
              )}
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Pesan Masuk</p>
              <h3 className="text-xl font-extrabold text-[#22406F]">{inquiries.length}</h3>
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
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'berita'
                    ? 'bg-[#22406F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                📰 Berita ({data.berita?.length || 0})
              </button>

              <button
                onClick={() => { setActiveTab('csr'); setSearchTerm(''); }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'csr'
                    ? 'bg-[#22406F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                🤝 CSR ({data.csr?.length || 0})
              </button>

              <button
                onClick={() => { setActiveTab('karir'); setSearchTerm(''); }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'karir'
                    ? 'bg-[#22406F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                💼 Karir ({data.karir?.length || 0})
              </button>

              <button
                onClick={() => { setActiveTab('tataKelola'); setSearchTerm(''); }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'tataKelola'
                    ? 'bg-[#22406F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                🏛️ Tata Kelola ({data.tataKelola?.length || 0})
              </button>

              <button
                onClick={() => { setActiveTab('investor'); setSearchTerm(''); }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'investor'
                    ? 'bg-[#22406F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                📈 Investor ({data.investor?.length || 0})
              </button>

              <button
                onClick={() => { setActiveTab('inquiries'); setSearchTerm(''); }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'inquiries'
                    ? 'bg-[#22406F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>📩 Pesan Masuk</span>
                {newInquiriesCount > 0 && (
                  <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    {newInquiriesCount}
                  </span>
                )}
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

              {activeTab !== 'inquiries' && (
                <button
                  onClick={handleOpenAdd}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>+</span>
                  <span>Tambah Baru</span>
                </button>
              )}

              {/* View Public Page Link */}
              <Link
                href={
                  activeTab === 'berita'
                    ? '/berita'
                    : activeTab === 'csr'
                    ? '/csr'
                    : activeTab === 'karir'
                    ? '/career'
                    : activeTab === 'investor'
                    ? '/informasi-investor'
                    : activeTab === 'inquiries'
                    ? '/#kontak'
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

          {/* TABLE FOR INQUIRIES TAB */}
          {activeTab === 'inquiries' ? (
            <div>
              {filteredInquiries.length === 0 ? (
                <div className="py-16 text-center text-slate-400">
                  Belum ada pesan pertanyaan yang masuk dari formulir kontak.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                        <th className="py-3 px-4">Pengirim & Kontak</th>
                        <th className="py-3 px-4">Unit Minat & Waktu</th>
                        <th className="py-3 px-4">Isi Pesan</th>
                        <th className="py-3 px-4 text-center">Status</th>
                        <th className="py-3 px-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredInquiries.map((inq) => (
                        <tr key={inq.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-bold text-[#22406F] text-base">{inq.name}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{inq.email}</div>
                            <div className="text-xs text-slate-500">{inq.phone}</div>
                          </td>
                          <td className="py-4 px-4 text-xs">
                            <div className="font-bold text-slate-700">{inq.interest}</div>
                            <div className="text-slate-400 mt-0.5">
                              {new Date(inq.timestamp).toLocaleString('id-ID')}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-xs text-slate-700 max-w-xs">
                            <p className="line-clamp-3 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                              {inq.message}
                            </p>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
                                inq.status === 'BARU'
                                  ? 'bg-rose-100 text-rose-700'
                                  : inq.status === 'DIHUBUNGI'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              {inq.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {inq.phone && (
                                <a
                                  href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-2.5 py-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-colors"
                                  title="Balas via WhatsApp"
                                >
                                  WA
                                </a>
                              )}
                              <button
                                onClick={() => handleUpdateInquiryStatus(inq.id, inq.status === 'BARU' ? 'DIHUBUNGI' : 'SELESAI')}
                                className="px-2.5 py-1 bg-blue-50 text-[#007BBB] hover:bg-blue-100 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                              >
                                {inq.status === 'BARU' ? 'Tandai Dihubungi' : 'Selesai'}
                              </button>
                              <button
                                onClick={() => handleDeleteInquiry(inq.id)}
                                className="px-2 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                              >
                                ✕
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
          ) : (
            /* REGULAR CMS ITEMS TABLE */
            <div>
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
                                  onError={(e) => { e.currentTarget.src = '/images/orig-logo.png'; }}
                                  className="w-12 h-12 object-cover rounded-lg flex-shrink-0 bg-slate-100"
                                />
                              )}
                              <div>
                                <h4 className="font-bold text-[#22406F] line-clamp-1">
                                  {item.title || item.tabTitle || item.documentTitle}
                                </h4>
                                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                  {item.excerpt || item.summary || item.description || item.downloadUrl || item.pdfUrl}
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
                            {item.category && <div className="font-semibold text-slate-700">📁 {item.category}</div>}
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
                            {activeTab === 'investor' && (
                              <span className="px-2.5 py-1 bg-cyan-50 text-cyan-800 font-bold text-xs rounded-full">
                                {item.category || 'Dokumen'}
                              </span>
                            )}
                          </td>

                          {/* Action Buttons (Edit / Delete) */}
                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleOpenEdit(item)}
                                className="px-3 py-1.5 bg-slate-100 hover:bg-[#22406F] hover:text-white rounded-lg text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="px-3 py-1.5 bg-red-50 hover:bg-red-600 hover:text-white rounded-lg text-xs font-bold text-red-600 transition-colors cursor-pointer"
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
          )}
        </div>
      </main>

      {/* ========================================================= */}
      {/* MODAL: ADD / EDIT DIALOG                                  */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <h3 className="text-lg font-extrabold text-[#22406F] uppercase tracking-wide">
                {modalMode === 'add' ? `Tambah Data Baru (${activeTab})` : `Edit Data (${activeTab})`}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 font-bold text-lg cursor-pointer"
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
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Deskripsi Kegiatan</label>
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
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Posisi / Judul Lowongan</label>
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
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Divisi</label>
                      <input
                        type="text"
                        value={formData.division || ''}
                        onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Lokasi</label>
                      <input
                        type="text"
                        value={formData.location || ''}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Tipe Kerja</label>
                      <select
                        value={formData.type || 'Full Time'}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20 bg-white"
                      >
                        <option value="Full Time">Full Time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Status Rekrutmen</label>
                      <select
                        value={formData.status || 'Open'}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20 bg-white"
                      >
                        <option value="Open">Open (Menerima Pelamar)</option>
                        <option value="Closed">Closed (Ditutup)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Deskripsi Singkat Pekerjaan</label>
                    <textarea
                      rows={2}
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Kualifikasi Persyaratan (Pisahkan tiap poin dengan baris baru / Enter)
                    </label>
                    <textarea
                      rows={4}
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

              {/* Form Fields: Investor */}
              {activeTab === 'investor' && (
                <>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Judul Dokumen</label>
                    <input
                      type="text"
                      required
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Laporan Tahunan 2026"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Kategori Dokumen</label>
                      <select
                        value={formData.category || 'Laporan Tahunan'}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20 bg-white"
                      >
                        <option value="Prospektus">Prospektus</option>
                        <option value="Laporan Tahunan">Laporan Tahunan</option>
                        <option value="Informasi Keuangan">Informasi Keuangan</option>
                        <option value="Rapat Pemegang Saham">Rapat Pemegang Saham</option>
                        <option value="Public Expose">Public Expose</option>
                        <option value="Keterbukaan Informasi Lainnya">Keterbukaan Informasi Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Tahun / Periode</label>
                      <input
                        type="text"
                        value={formData.date || '2026'}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        placeholder="2026"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Link File / URL PDF</label>
                    <input
                      type="text"
                      required
                      value={formData.downloadUrl || ''}
                      onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                      placeholder="https://kotasatuproperti.com/.../document.pdf"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Teks Tombol</label>
                      <input
                        type="text"
                        value={formData.buttonText || 'Download >'}
                        onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                        placeholder="Download >"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1">URL Gambar Cover</label>
                      <input
                        type="text"
                        value={formData.image || ''}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="https://.../cover.png"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22406F]/20"
                      />
                    </div>
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
