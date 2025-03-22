// Fungsi untuk menampilkan kata, foto, dan video penyemangat
function showMotivation() {
    const messages = [
        { text: "Kakak Infokom hebat kok pasti bisa melewati semuanya! 💪", image: "/img/a6.jpg", },
        { text: "Kalau mau cerita atau ngeluh apapun ada abg kok ya dekk🌞", image: "/img/a2.jpg",  },
        { text: "Kasih tagline kita Kakak MC 🌞", image: "/img/a3.jpg" },
        { text: "Jangan lupa tersenyum, kamu sangat cantik, sayang kalau gk senyum! 😊", image: "/img/a4.jpg", }
    ];

    // Pilih indeks acak
    const randomIndex = Math.floor(Math.random() * messages.length);

    // Debugging: Cek apakah gambar & video ditemukan
    console.log("Pesan:", messages[randomIndex].text);
    console.log("Gambar:", messages[randomIndex].image);
    console.log("Video:", messages[randomIndex].video);

    // Ganti teks motivasi
    document.getElementById("message").innerText = messages[randomIndex].text;

    // Ganti foto motivasi
    document.getElementById("randomPhoto").src = messages[randomIndex].image;

   
}
