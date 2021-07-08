(function(){

  // Добавление/удаление модификаторов при клике на переключение видимости
  var toggler = document.getElementById('main-nav-toggler');
  var body = document.querySelector('body');
  var mobMenu = document.getElementById('mobile-menu');

  if(toggler){
    toggler.addEventListener('click', mainNavVisibleToggle);

    function mainNavVisibleToggle(e) {
      e.preventDefault();
      toggler.classList.toggle('burger--close'); // модификатор иконки (должен быть .burger)
      body.classList.toggle('noscroll');
      mobMenu.classList.toggle('mobile-menu--open');
      if (mobMenu.classList.contains('mobile-menu--open')) {
        console.log('1');
        mobMenu.removeAttribute('aria-hidden');
        mobMenu.focus();
        mobMenu.removeAttribute('tabindex');
      } else {
        mobMenu.setAttribute('aria-hidden', true);
        mobMenu.setAttribute('tabindex', '-1');
        mobMenu.blur();
        console.log('2');
        return;
      }
    }
  }

}());
