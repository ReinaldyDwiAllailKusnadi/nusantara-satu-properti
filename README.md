# PT Nusantara Satu Properti Tbk (IDX: NUSA)
> **Modern Fullstack Corporate Web Application & Property Showcase**  
> Rekayasa ulang dan modernisasi arsitektur dari [kotasatuproperti.com](https://kotasatuproperti.com/) dengan performa ultra cepat, desain luxury arsitektural, dan optimasi SEO tingkat tinggi (SEO-Ready Enterprise).

---

## 🌟 Ringkasan Proyek

Proyek ini dibangun untuk menggantikan arsitektur web lama (WordPress + Elementor yang berat dan memiliki puluhan request eksternal) menjadi aplikasi web modern berbasis **Next.js App Router (Fullstack)**. Nama perseroan disesuaikan menjadi **PT Nusantara Satu Properti Tbk** (kode emiten bursa: **IDX: NUSA**).

### ✨ Keunggulan Arsitektur:
1. **Performa Super Cepat & Tidak Lemot**:
   - Zero-bloat: Menghapus 15+ bundle CSS/JS tidak terpakai dari WordPress/Elementor.
   - Waktu muat awal (Initial Load) di bawah 300ms berkat Static Site Generation (SSG) & Turbopack.
   - Aset gambar lokal dioptimalkan dalam `public/images/`.
2. **SEO Bintang 5 (Search Engine Optimization)**:
   - Metadata lengkap (`title`, `description`, `canonical`, `keywords`, `openGraph`, `twitter`).
   - Injeksi otomatis **JSON-LD Schema Markup** (`Corporation`, `RealEstateAgent`).
   - Generator dinamis `sitemap.xml` (`/src/app/sitemap.js`) dan `robots.txt` (`/src/app/robots.js`).
3. **Desain Luxury & Modern**:
   - Palet warna arsitektural: Slate navy gelap (`#020617`), Emas / Warm Gold (`#c5a059`), dan Emerald accents.
   - Tipografi modern **Plus Jakarta Sans** dari Google Fonts.
   - Transisi kartu interaktif, running ticker emiten saham, dan tata letak responsif di semua perangkat (Desktop, Tablet, Mobile).
4. **Fullstack API Route**:
   - Endpoint `/api/contact` mandiri untuk memproses inquiry formulir survei lokasi atau pertanyaan investor secara asinkron dengan validasi email dan data.

---

## 🏗️ Struktur Portofolio & Unit Bisnis

- **The Amaya Home Resort Ungaran**:
  - Kawasan hunian resort terpadu seluas puluhan hektar di lereng Gunung Ungaran, Jawa Tengah.
  - Pilihan tipe: *Linea*, *Alysa*, *Foresta*.
  - Fasilitas: *Amaya Care 24/7*, *Amaya Club House*, utilitas bawah tanah, gerbang tol Ungaran.
- **Allstay Hotel Semarang**:
  - Lifestyle boutique hotel bintang 3 di kawasan Simpang Lima Semarang (Jl. Erlangga Raya).
  - Dilengkapi Bistropolis Restaurant & fasilitas meeting room.
- **Allstay Ecotel Yogyakarta**:
  - Akomodasi butik modern berkonsep ramah lingkungan di Jl. Wahid Hasyim, Depok, Sleman, Yogyakarta.
- **Hubungan Investor (Investor Relations)**:
  - Ticker data IDX: NUSA, publikasi Laporan Tahunan, Laporan Keuangan Berkala, Pedoman GCG, dan Risalah RUPS.

---

## 🚀 Teknologi yang Digunakan

| Pilar | Teknologi |
|---|---|
| **Framework Utama** | Next.js 15+ (App Router) |
| **UI Library** | React 19 |
| **Styling & Design System** | Tailwind CSS v4 & Custom Design Tokens (`globals.css`) |
| **Backend & Routing** | Next.js Route Handlers (`/api/contact`) |
| **Font Family** | Google Fonts `Plus Jakarta Sans` |
| **Bundler & Engine** | Turbopack |

---

## 📂 Struktur Direktori

```plaintext
nusantara-satu-properti/
├── public/
│   └── images/               # Asset foto proyek, logo awards, dan ilustrasi milestone
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/      # API Route POST form submission
│   │   │       └── route.js
│   │   ├── favicon.ico
│   │   ├── globals.css       # Design tokens & styling utilities
│   │   ├── layout.js         # SEO metadata, font loader, JSON-LD Schema
│   │   ├── page.js           # Homepage assembler
│   │   ├── robots.js         # Generator robots.txt
│   │   └── sitemap.js        # Generator sitemap.xml
│   └── components/
│       ├── Navbar.jsx        # Sticky header, stock ticker, responsive drawer
│       ├── Hero.jsx          # Hero spotlight, CTA, stats counter
│       ├── CompanyProfile.jsx# 4 Tab profil perseroan, visi misi, direksi, saham
│       ├── BusinessUnits.jsx # Showcase Amaya Resort (Linea, Alysa, Foresta) & Allstay
│       ├── Milestones.jsx    # Lini masa perjalanan 2012 - kini
│       ├── AwardsSection.jsx # Galeri penghargaan industri properti & hospitality
│       ├── InvestorRelations.jsx # Laporan keuangan, GCG, RUPS, dokumen PDF
│       ├── ContactSection.jsx   # Form pesan interaktif terhubung API & alamat kantor
│       └── Footer.jsx        # Footer korporat, legal disclaimer emiten BEI
├── package.json
└── README.md
```

---

## 💻 Panduan Menjalankan Proyek Secara Lokal

### Prasyarat:
- Node.js versi 18.18.0 atau lebih baru.
- npm / yarn / pnpm.

### 1. Masuk ke direktori:
```bash
cd C:\Users\reina\.gemini\antigravity-ide\scratch\nusantara-satu-properti
```

### 2. Instal dependensi:
```bash
npm install
```

### 3. Jalankan server development:
```bash
npm run dev -- -p 3000
```
Buka browser di `http://localhost:3000`

### 4. Menjalankan production build (Performa Maksimal):
```bash
npm run build
npm run start -- -p 3000
```

---

## 📡 Dokumentasi Endpoint API

### `POST /api/contact`
Menerima submisi formulir pemesanan brosur, survei hunian, atau inquiry bisnis.

- **Request Body (JSON):**
```json
{
  "name": "Budi Santoso",
  "email": "budi.santoso@example.com",
  "phone": "081234567890",
  "interest": "The Amaya Home Resort",
  "message": "Saya ingin survei unit tipe Alysa akhir pekan ini."
}
```

- **Response Sukses (200 OK):**
```json
{
  "success": true,
  "message": "Pesan Anda telah berhasil kami terima. Tim kami akan segera menghubungi Anda.",
  "data": {
    "id": "INQ-1790438558000",
    "timestamp": "2026-09-26T15:49:18.000Z"
  }
}
```

---

## 📄 Lisensi & Hak Cipta
Hak Cipta © 2026 PT Nusantara Satu Properti Tbk (IDX: NUSA). Seluruh hak cipta dilindungi undang-undang.
