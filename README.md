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

## Meeting 9: DOM, Events, and Interactivity

### AI Disclosure
- **Assisted by AI:** Konsultasi struktur logika DOM, penanganan event delegation, serta format validasi form.
- **Done by Myself:** Mengetik seluruh kode, menyesuaikan struktur HTML/CSS dengan project Meeting 8, menguji selector di console, serta mengunggah kode ke repository GitHub.

# Meeting 10 - Asynchronous JavaScript: fetch, Promise, and JSON
**Nama:** Satrio Damar Ramadhan  
**NIM:** 21523080  
**Kelas:** PABW  

---

## 📌 Deskripsi Tugas
Modul ini berfokus pada implementasi *Asynchronous JavaScript* menggunakan `fetch`, `Promise`, `async/await`, dan penanganan data `JSON`. Aplikasi dipisahkan menjadi dua *layer*:
1. **Data Layer (`js/api.js`)**: Bertanggung jawab melakukan pemanggilan `fetch` ke API publik, memeriksa `response.ok`, dan mengembalikan data JSON.
2. **Presentation Layer (`js/app.js`)**: Bertanggung jawab memanggil fungsi dari `api.js` dan merender data ke halaman web profil beserta penanganan 4 *interface states*.

---

## API yang Digunakan
* **Endpoint:** `https://jsonplaceholder.typicode.com/posts`
* **Deskripsi:** API publik tanpa *access key* yang mengembalikan daftar objek postingan/artikel.

---

## Empat Interface States
Aplikasi ini menangani 4 *interface states* pada halaman web:
1. **Loading State:** Menampilkan pesan `"Memuat data..."` di container sebelum data dari jaringan diterima.
2. **Success State:** Merender elemen kartu (`<article>`) dari data JSON secara dinamis.
3. **Failure State:** Menangkap error jaringan (*offline* / 404) menggunakan `try/catch` dan menampilkan pesan kegagalan di halaman.
4. **Empty State:** Menampilkan pesan `"Belum ada data yang tersedia."` jika API mengembalikan array kosong (`[]`).

---

## AI Disclosure
* **Bagian yang dibuat dengan bantuan AI:**
  * Diskusi dan alur pemecahan masalah *error handling* (`try/catch` & `response.ok`).
  * Penyusunan template *layouting* CSS kartu berita/proyek agar responsif dan rapi.
  * Penyusunan dokumentasi `README.md` dan panduan pengisian laporan *worksheet*.
* **Bagian yang ditulis dan diuji sendiri:**
  * Struktur HTML `profil.html`, konfigurasi variabel token CSS, pemisahan modul ES (`export/import`), serta pengujian *interface states* langsung di browser DevTools.

---

## Cara Menjalankan
1. Buka folder `Worksheet p10` di VS Code.
2. Jalankan server lokal (misalnya menggunakan *Live Server* atau `python3 -m http.server`).
3. Buka halaman di browser dan amati proses pemuatan data di bagian **Katalog Proyek & Data**.