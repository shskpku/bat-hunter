const remoteSwitch = document.getElementById('remoteSwitch');
const statusText = document.getElementById('statusText');

remoteSwitch.addEventListener('change', function() {
    if (this.checked) {
        statusText.innerText = "Sistem: AKTIF";
        statusText.style.color = "#2d5a27";
        alert("Sistem Pengusir Diaktifkan!");
    } else {
        statusText.innerText = "Sistem: NONAKTIF";
        statusText.style.color = "red";
        alert("Sistem Pengusir Dimatikan!");
    }
});
