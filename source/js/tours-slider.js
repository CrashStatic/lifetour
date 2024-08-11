import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperTours = () => {
  new Swiper('.tours__swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.tours__navigation-next',
      prevEl: '.tours__navigation-prev',
    },

    loop: false,
    slidesPerView: 1,

    // Responsive breakpoints
    breakpoints: {
      290: {
        slidesPerView: 1,
        spaceBetween: 15,
        allowTouchMove: true
      },

      678: {
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: true
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false
      }
    },

    breakpointsBase: 'container'
  });
};


export { initSwiperTours };
