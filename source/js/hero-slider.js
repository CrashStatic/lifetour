import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

const swiperContainer = document.querySelector('.swiper-wrapper');
const swiperLinks = swiperContainer.querySelectorAll('a[href]');

const initSwiperHero = () => {
  const swiper = new Swiper('.hero__swiper', {
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

    breakpointsBase: 'window',
  });

  function setTabIndex() {
    swiper.slides[swiper.activeIndex].querySelector('a').setAttribute('tabindex', '0');
  }

  for (const link of swiperLinks) {
    link.setAttribute('tabindex', '-1');
    setTabIndex();
  }

  swiper.on('activeIndexChange', () => {
    for (const link of swiperLinks) {
      link.setAttribute('tabindex', '-1');
    }

    setTabIndex();
  });
};


export { initSwiperHero };
