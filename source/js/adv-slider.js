import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

const sliderElement = document.querySelector('.adv__wrapper');
const fragment = document.createDocumentFragment();
const slides = document.querySelectorAll('.adv__slide');

const renderSlider = (container, slider) => {
  if (window.innerWidth > 1439) {
    slider.forEach((slide) => {
      const doubleSlide = slide.cloneNode(true);
      fragment.appendChild(doubleSlide);
    });

    container.appendChild(fragment);
  }
};

let advantagesSwiper;

const initSwiperAdv = () => {
  renderSlider(sliderElement, slides);
  advantagesSwiper = new Swiper('.adv__swiper', {
  // new Swiper('.adv__swiper', {

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
        // freeMode: true,
        centeredSlides: true,
        slidesPerGroup: 2,
        initialSlide: 3,
        // slidesPerView: 3,
        slidesPerView: 'auto',
        // loopAddBlankSlides: true,
        // loopAdditionalSlides: 0.25,
        spaceBetween: 30,
        allowTouchMove: false,

      }
    },
  });
};

const convertSwiper = () => {
  if (window.matchMedia <= 1439 && advantagesSwiper) {
    advantagesSwiper.destroy();
    advantagesSwiper = '';
  } else if (advantagesSwiper && !advantagesSwiper.initialized) {
    initSwiperAdv();
  }
};

window.addEventListener('resize', convertSwiper);

export { initSwiperAdv };
