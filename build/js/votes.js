function myGetCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function updateLikes() {
  var json_str = myGetCookie("LIKES");

  if(json_str) {
    var arr = JSON.parse(json_str);
  }

  if (arr) {
    for (var i = 0; i < arr.length; i++) {
      $('.catalog-item__add-cart[data-pid='+arr[i]+']').addClass('disabled').find('span').html('Мне нравится');
      $('.fast-view__add-cart[data-pid='+arr[i]+']').addClass('disabled').find('span').html('Мне нравится');
    }
  }
}

$(document).on('click', '.catalog-item__add-cart, .fast-view__add-cart', function (e) {
  var pid = $(this).data('pid');

  var json_str_curr = myGetCookie("LIKES");

  var arr = [];

  if(json_str_curr) {
    arr = JSON.parse(json_str_curr);
  }

  if(arr.indexOf(pid) == -1) {
    arr.push(pid);
  }

  var json_str = JSON.stringify(arr);

  var date = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);
  document.cookie = 'LIKES='+ json_str +'; path=/; expires=' + date.toUTCString();

  $('.catalog-item__add-cart[data-pid='+pid+']').addClass('disabled').find('span').html('Мне нравится');
  $('.fast-view__add-cart[data-pid='+pid+']').addClass('disabled').find('span').html('Мне нравится');
});

$(document).ready(function () {
  updateLikes();

  $('.js-popup-slider').slick({
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button" title="Назад"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button" title="Вперед"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
    dots: false
  });
});

$(document).on('click', '.catalog-item__link', function (e) {
	var id = $(this).data('pid');
	$.fancybox.open( {
    //тут загружаем инфу аяксом
		src  : '#votes',
		type : 'inline'
	}, {
		'afterShow': function() {
      //рефреш слайдера
      $('.js-popup-slider').slick('setPosition');
      //апдейт лайков
      updateLikes();
		}
	});

	e.preventDefault();
});
