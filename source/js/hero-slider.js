import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initSwiperHero = () => {
  new Swiper('.hero__swiper', {
    modules: [ Pagination ],

    // If we need pagination
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },

    loop: true,

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 40,

    breakpoints: {
      1440: {
        allowTouchMove: false
      }
    },

    breakpointsBase: 'container'
  });
};

export { initSwiperHero };
