// URL Firebase Realtime Database milik Zakia
const firebaseURL = "https://bat-rapeller-default-rtdb.asia-southeast1.firebasedatabase.app/.json";

const batCountElement = document.getElementById('batCount');
const batteryLevelElement = document.querySelector('.battery-level');
const statusText = document.getElementById('statusText');
const remoteSwitch = document.getElementById('remoteSwitch');

// 1. Fungsi Utama: Mengambil data dari Firebase
async function updateDashboard() {
    try {
        const response = await fetch(firebaseURL);
        const data = await response.json();
        
        if (data) {
            // Update jumlah deteksi di Dashboard (Angka 6 di gambar kamu)
            if (batCountElement) batCountElement.innerText = data.deteksi || 0;
            
            // Update persentase baterai di Dashboard (35% di gambar kamu)
            if (batteryLevelElement) {
                batteryLevelElement.innerText = (data.baterai || 0) + "%";
                
                // Indikator Warna: Merah jika baterai kritis (< 20%)
                if (data.baterai < 20) {
                    batteryLevelElement.style.color = "#e74c3c";
                } else {
                    batteryLevelElement.style.color = "#2d5a27";
                }
            }
            console.log("Data berhasil disinkronkan dari Firebase");
        }
    } catch (error) {
        console.error("Gagal mengambil data dari Firebase:", error);
    }
}

// 2. Kontrol On/Off (Interaksi lokal di Web)
if (remoteSwitch) {
    remoteSwitch.addEventListener('change', function() {
        if (this.checked) {
            statusText.innerText = "Sistem: AKTIF";
            statusText.style.color = "#2d5a27";
        } else {
            statusText.innerText = "Sistem: NONAKTIF";
            statusText.style.color = "#c0392b";
        }
    });
}

// Jalankan pengecekan data setiap 2 detik (Real-time Feel)
setInterval(updateDashboard, 2000);
updateDashboard(); // Panggil sekali saat halaman dimuat
