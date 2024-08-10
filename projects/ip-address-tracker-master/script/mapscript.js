let map;
let marker;
function mapscript(lat,lng){
    map =  L.map('map').setView([lat, lng], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    marker= L.marker([lat,lng]).addTo(map);
}

function changeLocation(lat , lng ){
    map.setView([lat,lng],13);
    marker= L.marker([lat,lng]).addTo(map);
}

export default {mapscript, changeLocation}