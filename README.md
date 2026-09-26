# PABW - SATRIO DAMAR RAMADHAN - [21523080]

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web.

## Pertemuan 3: Halaman profil saya
- **Topik halaman saya:** Koleksi buku di rak saya
- **Judul halaman:** Rak Buku Saya
- **Deskripsi:** Daftar koleksi buku yang saya miliki beserta status bacanya
- **Tautan navigasi:** Daftar Buku, Tambah Buku, Tentang Saya
- **Dua bagian utama:** Daftar Koleksi Buku, Tambah Buku Baru
- **Kolom tabel:** Judul Buku, Penulis, Tahun Terbit, Status Baca
- **Kolom form:** Judul Buku, Penulis, Status Baca
- **Gambar:** koleksi-buku.webp

## Catatan penggunaan AI
Bagian penyiapan kerangka semantik HTML5, dan contoh elemen form dibantu oleh AI (Gemini). Pengisian data pribadi, pemilihan topik, penyesuaian ID/href, struktur tabel, serta uji coba mandiri dilakukan sendiri.

## Pertemuan 4: CSS Fundamental dan Design Token

- **Topik Halaman**: Halaman profil pribadi terintegrasi dengan design token CSS
- **Judul Halaman**: Profil Satrio Damar Ramadhan
- **Arsitektur CSS (5 File)**:
  1. `tokens.css` - Variabel warna, tipografi, dan spasi
  2. `base.css` - Reset CSS dasar dan elemen umum
  3. `layout.css` - Tata letak utama menggunakan Flexbox
  4. `komponen.css` - Styling kartu, tombol, dan form dengan pseudo-class (`:user-invalid`)
  5. `tema.css` - Fitur Dark Mode berbasis custom property dan `:has()`
- **Fitur Spesial**: Toggle tema gelap/terang tanpa JavaScript, responsif Flexbox, dan validasi form
- **Gambar**: `gambar-saya.svg`
