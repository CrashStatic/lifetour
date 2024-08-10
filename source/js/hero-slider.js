import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
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
        allowTouchMove: false,
      }
    },

    breakpointsBase: 'window'
  });
};

export { initSwiperHero };
