let map, infoWindow;

window.initMap = function () {
  const uluru = { lat: 46.650452, lng: 32.608181 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru,
  });

let iconBase = src="https://maps.gstatic.com/mapfiles/";
const marker = new google.maps.Marker({
  position: uluru,
  map: map,
});
}
