// Ambil elemen video dan audio backsound
const video = document.getElementById("motivationVideo");
const backsound = document.getElementById("backsound");

// Saat video mulai diputar, matikan backsound
video.addEventListener("play", function () {
    backsound.pause();
});

// Saat video berhenti, nyalakan backsound lagi
video.addEventListener("pause", function () {
    backsound.play();
});

// Fungsi untuk menampilkan kata & foto setelah video
function showMotivation() {
    const messages = [
        { text: "Kakak Infokom hebat kok pasti bisa melewati semuanya! 💪", image: "/img/a1.jpg" },
        { text: "Kalau mau cerita atau ngeluh apapun ada abg kok ya dekk🌞", image: "/img/a2.jpg" },
        { text: "Kasih tagline kita Kakak MC 🌞", image: "/img/a3.jpg" },
        { text: "INI LAH KAKAK UNP ITU! 😊", image: "/img/a4.jpg" }
    ];

    // Pilih indeks acak
    const randomIndex = Math.floor(Math.random() * messages.length);

    // **PAUSE VIDEO & RESET KE AWAL**
    video.pause();
    video.currentTime = 0;

    // **PUTAR BACKSOUND KETIKA VIDEO BERHENTI**
    backsound.play();

    // Sembunyikan video
    video.style.display = "none";

    // Tampilkan kata motivasi & foto
    document.getElementById("motivationContent").style.display = "block";
    document.getElementById("message").innerText = messages[randomIndex].text;
    document.getElementById("randomPhoto").src = messages[randomIndex].image;

    // Fungsi untuk kembali ke halaman awal
function goToStart() {
    window.location.href = "/awal.html";
}

}
