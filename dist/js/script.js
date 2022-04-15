"use strict";

window.addEventListener('DOMContentLoaded', function () {
  // nav
  $('.dropdown').each(function (i, item) {
    item.firstChild.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
  $('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('active');

    if ($('.hamburger').hasClass('active')) {
      $('.menu .container').slideDown(500, function () {
        $(this).css('display', 'flex');
      });
    } else {
      $('.menu .container').slideUp(500);
    }
  }); // Owl carousel (sliders)

  var defaultAdaptiveSliders = {
    0: {
      items: 1,
      nav: true,
      dots: true
    }
  };

  function carousel(carouselSelector) {
    var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var adaptvie = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultAdaptiveSliders;
    $(carouselSelector).owlCarousel({
      loop: true,
      autoplay: true,
      margin: margin,
      navText: ["\n            <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n               <path d=\"M11 21L1 11L11 1\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n               <path d=\"M21 11H1\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            </svg>\n            ", "\n            <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n               <path d=\"M11 21L21 11L11 1\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n               <path d=\"M1 11H21\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            </svg>\n         "],
      responsive: adaptvie
    });
  }

  var adaptiveSlider = {
    0: {
      items: 1,
      dots: true,
      nav: false
    },
    500: {
      items: 2,
      dots: true,
      nav: false
    },
    768: {
      items: 3,
      dots: true,
      nav: false
    },
    992: {
      items: 4,
      nav: true,
      dots: false
    }
  };
  carousel('.s-main .owl-carousel');
  carousel('.s-news .owl-carousel', 20, adaptiveSlider);
  carousel('.s-sales .owl-carousel', 20, adaptiveSlider);
  $('.s-main .owl-nav').addClass('container'); // tabs

  var hideTabs = function hideTabs(tabHeaderSelector) {
    $(tabHeaderSelector).each(function (i, item) {
      $(item).removeClass('active');
      $(item).next().hide(400);
    });
  };

  var onTab = function onTab(tabHeaderSelector) {
    $(tabHeaderSelector).each(function (i, item) {
      $(item).on('click', function () {
        if ($(item).hasClass('active') === false) {
          hideTabs(tabHeaderSelector);
          $(item).addClass('active');
          $(this).next().show(400);
        } else hideTabs(tabHeaderSelector);
      });
    });
  };

  onTab('.faq__tab__header', '.faq__tab__content');
});