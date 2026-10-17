console.log("Lembar A: Skrip berhasil tersambung!");

export const profil = {
    nama: "Satrio Damar Ramadhan",
    peran: "Mahasiswa Informatika Universitas Islam Indonesia",
    deskripsi: "Mahasiswa Informatika Universitas Islam Indonesia yang sedang menyelesaikan modul PABW Pertemuan 8 tentang JavaScript Modern & Design Token."
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

export const projects = [
  {
    title: "Proyek 1: SPK AHP & SAW",
    category: "web",
  },
  {
    title: "Proyek 2: Web KKN Tematik",
    category: "web",
  },
];

const judulProyek = daftarProyek.map(proyek => proyek.judul);
console.log("Daftar Judul Proyek (.map):", judulProyek);

const proyekSelesai = daftarProyek.filter(proyek => proyek.selesai === true);
console.log("Proyek yang Sudah Selesai (.filter):", proyekSelesai);

const cariProyek = daftarProyek.find(proyek => proyek.id === 2);
console.log("Pencarian Proyek (.find):", cariProyek);

import { fetchNews } from './api.js';

const container = document.querySelector('#list');

function render(list) {
  container.textContent = '';
  
  list.forEach(function (n) {
    const card = document.createElement('article');
    card.classList.add('news-card');

    const heading = document.createElement('h3');
    heading.textContent = n.title;

    const bodyText = document.createElement('p');
    bodyText.textContent = n.body;

    card.appendChild(heading);
    card.appendChild(bodyText);
    container.appendChild(card);
  });
}

async function initApp() {
  container.textContent = 'Memuat data...';

  try {
    const data = await fetchNews();

    if (!data || data.length === 0) {
      container.textContent = 'Belum ada data yang tersedia.';
      return;
    }

    console.log('Data berhasil dimuat di app.js:', data);
    render(data);

  } catch (error) {
    console.error('Gagal memuat:', error);
    container.textContent = 'Gagal memuat data: ' + error.message;
  }
}

initApp();