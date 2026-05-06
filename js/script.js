const musik = new Audio('assets/music/lagu.mp3');
const btnBuka = document.querySelector('.btn-buka');
const cover = document.querySelector('.cover');
const mainContent = document.getElementById('main-content');
// Mengambil nama tamu dari URL
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');

if (namaTamu) {
    document.getElementById('nama-tamu').innerText = namaTamu;
}

btnBuka.addEventListener('click', function() {
    musik.play();
    musik.loop = true;

    // Animasi menghilangkan cover
    cover.style.opacity = "0";
    cover.style.transition = "1s ease";

    setTimeout(() => {
        cover.style.display = "none";
        // Munculkan isi undangan
        mainContent.style.display = "block";
    }, 1000);
});

document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari form
    const nama = document.getElementById('nama').value;
    const status = document.getElementById('status').value;
    const pesan = document.getElementById('pesan').value;
    
    // Nomor WhatsApp Anda (Gunakan kode negara 62, tanpa tanda + atau 0 di depan)
    // Contoh: 628123456789
    const nomorWA = "6285180833928"; 

    // Susun teks pesan
    const teks = `Masya Allah, saya *${nama}*.\n\nKonfirmasi Kehadiran: *${status}*\nUcapan: ${pesan}`;

    // Buat link WhatsApp
    const linkWA = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${encodeURIComponent(teks)}`;

    // Buka WhatsApp di tab baru
    window.open(linkWA, '_blank');
});