import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperGallery = () => {
  new Swiper('.gallery__swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.gallery__navigation-next',
      prevEl: '.gallery__navigation-prev',
    },

    loop: true,

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
        allowTouchMove: true
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 5,
        allowTouchMove: true
      },

      1440: {
        enabled: false
      }
    },
  });
};

export { initSwiperGallery };
