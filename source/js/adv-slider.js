import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperAdv = () => {
  new Swiper('.adv__swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.adv__navigation-next',
      prevEl: '.adv__navigation-prev',
    },

    enabled: false,
    loop: true,

    // Responsive breakpoints
    breakpoints: {
      1440: {
        enabled: true,
        // centeredSlides: true,
        slidesPerGroup: 2,
        initialSlide: 3,
        // slidesPerView: 1,
        slidesPerView: 'auto',
        spaceBetween: 120,
        allowTouchMove: false
      }
    },
  });
};

export { initSwiperAdv };
