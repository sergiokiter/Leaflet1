var map;
var plazaCatalunya = {
  lat: 41.38700,
  lng: 2.17004
};
var calleBalmes16 = {
  lat: 41.38686,
  lng: 2.16611,
}

$(document).ready(function() {
  setupMap();
  addMarker();
});

function setupMap() {
  map = L.map('map').setView([plazaCatalunya.lat, plazaCatalunya.lng], 18);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

function addMarker() {
  L.marker([calleBalmes16.lat, calleBalmes16.lng]).addTo(map)
    .bindPopup(`
      <h1>Restaurant Centfocs</h1>    
      <p>Resturante Mediterráneo</p>
      <p>Carrer de Balnes, 16, 08007 Barcelona</p>
    `)
    .openPopup();
}