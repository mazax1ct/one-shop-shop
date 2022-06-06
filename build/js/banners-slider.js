$(document).ready(function () {
  if($('.js-banners-slider').length > 0) {
    $('.js-banners-slider').slick({
      mobileFirst: true,
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="icon" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="icon" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1439,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
  }
});
