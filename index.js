$(document).ready(function() {
  $('#play-video').on('click', function(ev) {
    $("#vid")[0].style.display = "block";
    $("#vid")[0].src += "?autoplay=1&mute=1";
    ev.preventDefault();
  });
});
