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

const initSwiperAdv = () => {
  renderSlider(sliderElement, slides);
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
        centeredSlides: true,
        slidesPerGroup: 2,
        initialSlide: 3,
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: false,

      }
    },
  });
};

export { initSwiperAdv };
