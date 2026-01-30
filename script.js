// URL Firebase Realtime Database Zakia
const firebaseURL = "https://bat-rapeller-default-rtdb.asia-southeast1.firebasedatabase.app/.json";

async function updateDashboard() {
    try {
        const response = await fetch(firebaseURL);
        const data = await response.json();
        
        if (data) {
            // Update Angka Baterai dari Firebase
            const batteryElement = document.getElementById('batteryLevel');
            if (batteryElement) {
                batteryElement.innerText = (data.baterai || 0) + "%";
                // Ubah warna jika baterai rendah
                batteryElement.style.color = (data.baterai < 20) ? "#e74c3c" : "#2d5a27";
            }
            
            // Update Jumlah Deteksi dari Firebase
            const countElement = document.getElementById('batCount');
            if (countElement) countElement.innerText = data.deteksi || 0;
            
            // Update Status Pengisian
            const batStatus = document.getElementById('batteryStatus');
            if (batStatus) batStatus.innerText = (data.baterai < 100) ? "Status: Mengisi Daya" : "Status: Penuh";
        }
    } catch (error) {
        console.error("Gagal sinkronisasi dengan Firebase:", error);
    }
}

// Kontrol On/Off Lokal
const remoteSwitch = document.getElementById('remoteSwitch');
const statusText = document.getElementById('statusText');
if (remoteSwitch) {
    remoteSwitch.addEventListener('change', function() {
        statusText.innerText = this.checked ? "Sistem: AKTIF" : "Sistem: NONAKTIF";
        statusText.style.color = this.checked ? "#2d5a27" : "#e74c3c";
    });
}

// Cek data secara rutin
setInterval(updateDashboard, 2000);
updateDashboard();
