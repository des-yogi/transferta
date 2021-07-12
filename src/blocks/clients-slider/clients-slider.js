document.addEventListener('DOMContentLoaded', function () {

  var elem = document.querySelector('.clients-slider__container');
  if (!elem) { return; }

  var clientSlider = new Flickity( elem, {
    lazyLoad: 5,
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false
  });

});
