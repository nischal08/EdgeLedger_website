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

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

$('#navbar a').on('click', function (event) {
  if (this.hash !== '');
  event.preventDefault();
  const hash = this.hash;
  $('html,body').animate(
    {
      scrollTop: $(hash).offset().top - 65,
    },
    800
  );
});
