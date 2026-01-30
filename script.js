// URL Firebase Zakia
const firebaseURL = "https://bat-rapeller-default-rtdb.asia-southeast1.firebasedatabase.app/.json";

const remoteSwitch = document.getElementById('remoteSwitch');
const statusText = document.getElementById('statusText');

// 1. Fungsi Mengambil Data dari Firebase
async function fetchData() {
    try {
        const response = await fetch(firebaseURL);
        const data = await response.json();
        
        if (data) {
            // Update Angka Baterai & Counter Deteksi
            document.querySelector('.battery-level').innerText = (data.baterai || 0) + "%";
            document.getElementById('batCount').innerText = data.deteksi || 0;
            
            // Logika Warna Baterai
            const batEl = document.querySelector('.battery-level');
            if (data.baterai < 20) batEl.style.color = "red";
            else batEl.style.color = "#2d5a27";
        }
    } catch (error) {
        console.error("Gagal sinkronisasi Firebase:", error);
    }
}

// 2. Kontrol On/Off (Simulasi)
remoteSwitch.addEventListener('change', function() {
    if (this.checked) {
        statusText.innerText = "Sistem: AKTIF";
        statusText.style.color = "#2d5a27";
    } else {
        statusText.innerText = "Sistem: NONAKTIF";
        statusText.style.color = "red";
    }
});

// Jalankan update setiap 2 detik
setInterval(fetchData, 2000);
fetchData();// URL Firebase Zakia
const firebaseURL = "https://bat-rapeller-default-rtdb.asia-southeast1.firebasedatabase.app/.json";

const remoteSwitch = document.getElementById('remoteSwitch');
const statusText = document.getElementById('statusText');

// 1. Fungsi Mengambil Data dari Firebase
async function fetchData() {
    try {
        const response = await fetch(firebaseURL);
        const data = await response.json();
        
        if (data) {
            // Update Angka Baterai & Counter Deteksi
            document.querySelector('.battery-level').innerText = (data.baterai || 0) + "%";
            document.getElementById('batCount').innerText = data.deteksi || 0;
            
            // Logika Warna Baterai
            const batEl = document.querySelector('.battery-level');
            if (data.baterai < 20) batEl.style.color = "red";
            else batEl.style.color = "#2d5a27";
        }
    } catch (error) {
        console.error("Gagal sinkronisasi Firebase:", error);
    }
}

// 2. Kontrol On/Off (Simulasi)
remoteSwitch.addEventListener('change', function() {
    if (this.checked) {
        statusText.innerText = "Sistem: AKTIF";
        statusText.style.color = "#2d5a27";
    } else {
        statusText.innerText = "Sistem: NONAKTIF";
        statusText.style.color = "red";
    }
});

// Jalankan update setiap 2 detik
setInterval(fetchData, 2000);
fetchData();
