var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: { lat: 27.717245, lng: 85.323959 },
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: { lat: 27.717245, lng: 85.323959 },
    map: map,
  });
}
