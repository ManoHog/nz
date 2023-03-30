let stop_lat = -43.531111;
let stop_lng = 172.636667;
let zoom = 13;
let title = 'Christchurch';

let map = L.map('map').setView([stop_lat, stop_lng], zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([stop_lat, stop_lng]).addTo(map)
        .bindPopup(title)
        .openPopup();
        