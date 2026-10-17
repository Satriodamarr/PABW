console.log("Lembar A: Skrip berhasil tersambung!");

export const profil = {
    nama: "Satrio Damar Ramadhan",
    peran: "Mahasiswa Informatika Universitas Islam Indonesia",
    deskripsi: "Mahasiswa Informatika Universitas Islam Indonesia yang sedang menyelesaikan modul PABW Pertemuan 10 tentang Asynchronous JavaScript."
};

document.querySelector("h1").textContent = profil.nama;

export function buatPerkenalan(dataProfil) {
    return `Halo, saya ${dataProfil.nama}, seorang ${dataProfil.peran}.`;
}

export const formatKeahlian = (daftar) => daftar.join(" • ");

console.log(buatPerkenalan(profil));

export const daftarProyek = [
    { id: 1, judul: "SPK AHP & SAW", tahun: 2026, kategori: "Laravel", selesai: true },
    { id: 2, judul: "Web KKN Tematik", tahun: 2026, kategori: "Bootstrap", selesai: true },
    { id: 3, judul: "FPL Stat Ranker", tahun: 2026, kategori: "JavaScript", selesai: false }
];

const judulProyek = daftarProyek.map(proyek => proyek.judul);
console.log("Daftar Judul Proyek (.map):", judulProyek);

const proyekSelesai = daftarProyek.filter(proyek => proyek.selesai === true);
console.log("Proyek yang Sudah Selesai (.filter):", proyekSelesai);

const cariProyek = daftarProyek.find(proyek => proyek.id === 2);
console.log("Pencarian Proyek (.find):", cariProyek);

// --- BAGIAN ASYNC & RENDERING (P10) ---
import { fetchNews } from './api.js';

const container = document.querySelector('#list');

function render(list) {
  container.textContent = '';
  list.forEach(function (n) {
    const card = document.createElement('article');
    const heading = document.createElement('h3');
    heading.textContent = n.title;
    card.appendChild(heading);
    container.appendChild(card);
  });
}

async function initApp() {
  // 1. State: Loading
  container.textContent = 'Memuat data...';

  try {
    const data = await fetchNews();

    // 2. State: Empty
    if (!data || data.length === 0) {
      container.textContent = 'Belum ada data yang tersedia.';
      return;
    }

    // 3. State: Success
    console.log('Data berhasil dimuat di app.js:', data);
    render(data);

  } catch (error) {
    // 4. State: Failure
    console.error('Gagal memuat:', error);
    container.textContent = 'Gagal memuat data: ' + error.message;
  }
}

initApp();