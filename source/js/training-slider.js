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

  // let oldWidth = window.innerWidth;
  // window.onresize = function () {
  //   const newWidth = window.innerWidth;
  //   if (newWidth !== oldWidth) {

  //     trainingSwiper.update();
  //     oldWidth = newWidth;
  //   }
  // };

  // window.addEventListener('resize', () => {
  //   trainingSwiper.destroy();
  //   trainingSwiper.init();
  // });
};

// window.addEventListener('resize', initSwiperTraining);

export { initSwiperTraining };
