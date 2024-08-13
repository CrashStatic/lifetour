import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperTraining = () => {
  new Swiper('.training__swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.training__navigation-next',
      prevEl: '.training__navigation-prev',
    },

    loop: false,

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        initialSlide: 2,
        allowTouchMove: true
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,
        allowTouchMove: true
      },

      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        initialSlide: 0,
        allowTouchMove: false
      }
    },
  });
};

export { initSwiperTraining };
