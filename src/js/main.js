//переопределение дефолтных настроек fancybox
$.fancybox.defaults.hash = false;
$.fancybox.defaults.smallBtn = false;
$.fancybox.defaults.toolbar = false;
$.fancybox.defaults.touch = false;

if($('body').width() > 767) {
  tippy('.js-dropdown-menu', {
    arrow: false,
    allowHTML: true,
    content(reference) {
      const id = reference.getAttribute('data-template');
      const template = document.getElementById(id);
      return template.innerHTML;
    },
    interactive: true,
    appendTo: document.body,
    interactiveBorder: 20,
    interactiveDebounce: 75,
    theme: 'white',
    maxWidth: 240,
    placement: 'right',
    trigger: 'mouseenter focus',
    zIndex: 1
  });
}

//функция навешивания класса меню
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

//перезапуск функции навешивания класса на меню при скролле и ресайзе
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

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});
