// Функция работы ibg
function ibg() {

  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

// Функция активации меню-бургера и избавление от возможности скролла при его открытом состоянии
$(document).ready(function () {
  $('.menu__icon').click(function (event) {
    $('.menu__icon, .menu__body, .header').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

if ($('.slider__body').length > 0) {
  $('.slider__body').slick({
    autoplay: true,
    infinite: true,
    dots: true,
    arrows: false,
    accessibility: false,
    slidesToShow: 1,
    autoplaySpeed: 10000,
    adaptiveHeight: true,
    prevArrow: '<button class="slick-prev" type="button"></button>',
    nextArrow: '<button class="slick-next" type="button"></button>',
    responsive: [{
      breakpoints: 768,
      settings: {}
    }]
  });
}


