document.querySelectorAll('.inactive').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Mohon Maaf Menu pada website NOVI SALSYA ELINA Tidak Aktif");
    });
});