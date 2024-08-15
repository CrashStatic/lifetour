import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperReviews = () => {
  new Swiper('.reviews__swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__navigation-next',
      prevEl: '.reviews__navigation-prev',
    },

    loop: false,
    slidesPerView: 1,

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        // autoHeight: true,
        allowTouchMove: true
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true
      },

      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        allowTouchMove: false
      }
    },
  });
};

export { initSwiperReviews };
