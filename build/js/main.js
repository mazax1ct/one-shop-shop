//переопределение дефолтных настроек fancybox
//$.fancybox.defaults.hash = false;

/*tippy('.js-tippy-1', {
  allowHTML: true,
  theme: 'white',
  maxWidth: 275,
  placement: 'top-start',
  trigger: 'mouseenter click',
  zIndex: 1
});

tippy('.js-tippy-2', {
  allowHTML: true,
  theme: 'white',
  maxWidth: 345,
  placement: 'top',
  trigger: 'mouseenter',
  zIndex: 1
});*/

//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > h.height()) {
    $('.page__layout').addClass("scrolled");
  } else {
    $('.page__layout').removeClass("scrolled");
  }
};

$(document).ready(function () {
  resize_scroll();

  //кнопка наверх
  var btn = $('.to-top');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('is-active');
    } else {
      btn.removeClass('is-active');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие/закрытие меню
$(document).on('click', '.js-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $('body').addClass('overflow');
    $(this).addClass("is-active");
    $('.page__layout').addClass('menu-open');
    $('.page__menu').addClass('is-open');
    document.addEventListener('click', closeMenu);
  }else{
    $('body').removeClass('overflow');
    $(this).removeClass("is-active");
    $('.page__layout').removeClass('menu-open');
    $('.page__menu').removeClass('is-open');
    document.removeEventListener('click', closeMenu);
  }
  return false;
});

function closeMenu(evt) {
  if (!$('.page__menu').is(evt.target) && $('.page__menu').has(evt.target).length === 0) {
    $('body').removeClass('overflow');
    $('.js-menu-toggler').removeClass("is-active");
    $('.page__layout').removeClass('menu-open');
    $('.page__menu').removeClass('is-open');
    document.removeEventListener('click', closeMenu);
	}
}
