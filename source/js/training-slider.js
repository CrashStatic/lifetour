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
    // observer: true,
    // observeParents: true,
    // updateOnWindowResize: true,
    // rebuildOnUpdate: true,

    // Responsive breakpoints
    breakpoints: {
      320: {
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 15,
        allowTouchMove: true
      },

      768: {
        initialSlide: 0,
        slidesPerView: 3,
        spaceBetween: 20,
        allowTouchMove: true
      },

      1440: {
        initialSlide: 0,
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false
      }
    },
  });

  // window.addEventListener('resize', () => {
  //   // trainingSwiper.destroy(true, true);
  //   // trainingSwiper.init();
  //   // trainingSwiper.updateSize();
  //   // trainingSwiper.reInit();
  // });

  // window.addEventListener('resize', () => {
  //   // trainingSwiper.destroy(true, true);
  //   // trainingSwiper.init();
  //   // trainingSwiper.updateSize();
  //   trainingSwiper.destroy(true, true);
  //   trainingSwiper = new Swiper('.training__swiper', settings);
  // });
};

// window.addEventListener('resize', () => {
//   trainingSwiper.destroy();
//   trainingSwiper.init();
// });

// const changeDirection = (slider) => {
//   window.innerWidth <== 1024 ? trainingSwiper.destroy(false, true) : trainingSwiper.init();
// };

// window.addEventListener("resize", () => {
//   changeDirection(mainSwiper);
//   mainSwiper.updateSize();

// });

// changeDirection(mainSwiper);

// window.addEventListener('change', initSwiperTraining);
// window.addEventListener('resize', () => {
//   initSwiperTraining();
// }, true);

// const initSwiperTraining = () => {
//   const swiper = createAdvSlider();

//   window.addEventListener('resize', () => {
//     swiper.destroy();
//     createAdvSlider();
//   });
// };

export { initSwiperTraining };
