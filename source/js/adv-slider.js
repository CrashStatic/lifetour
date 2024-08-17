import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

const slider = document.querySelector('.adv__wrapper');

const fragment = document.createDocumentFragment();
const slides = document.querySelectorAll('.adv__slide');
// const doubleSlider = slides.forEach((slide) => {
//   const doubleSlide = slide.cloneNode(true);
//   fragment.appendChild(doubleSlide);
// });

const renderSlider = (container, sliders) => {
  sliders.forEach((slide) => {
    const doubleSlide = slide.cloneNode(true);
    fragment.appendChild(doubleSlide);
  });

  container.appendChild(fragment);
};

renderSlider(slider, slides);

// const newSlider = document.querySelector('.adv__wrapper').appendChild(document.querySelector('.adv__slide').cloneNode(true));


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
        // freeMode: true,
        centeredSlides: true,
        slidesPerGroup: 2,
        initialSlide: 2,
        // slidesPerView: 3,
        slidesPerView: 'auto',
        // loopAddBlankSlides: true,
        // loopAdditionalSlides: 0.25,
        spaceBetween: 30,
        allowTouchMove: false
      }
    },
  });
};

export { initSwiperAdv };
