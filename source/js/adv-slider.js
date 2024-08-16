import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
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
        freeMode: true,
        centeredSlides: true,
        slidesPerGroup: 1,
        initialSlide: 2,
        // slidesPerView: 3.75,
        slidesPerView: 'auto',
        // loopAddBlankSlides: true,
        // loopAdditionalSlides: 4,
        spaceBetween: 30,
        allowTouchMove: false
      }
    },
  });
};

export { initSwiperAdv };
