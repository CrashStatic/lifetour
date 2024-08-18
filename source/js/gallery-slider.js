import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

let gallerySwiper;

const initSwiperGallery = () => {
  gallerySwiper = new Swiper('.gallery__swiper', {

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
        // slidesPerGroup: 1,
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

const convertSwiper = () => {
  if (window.matchMedia > 1439 && gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = '';
  } else if (gallerySwiper && !gallerySwiper.initialized) {
    initSwiperGallery();
  }
};

window.addEventListener('resize', convertSwiper);

export { initSwiperGallery };
