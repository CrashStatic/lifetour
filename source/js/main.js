// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { initNav } from './navigation.js';
import { initSwiperHero } from './hero-slider.js';
import { initSwiperTours } from './tours-slider.js';
import { initSwiperTraining } from './training-slider.js';
import { initSwiperReviews } from './reviews-slider.js';
import { initSwiperAdv } from './adv-slider.js';
import { initSwiperGallery } from './gallery-slider.js';
import { initForm } from './valid-form.js';

initNav();
initSwiperHero();
initSwiperTours();
initSwiperTraining();
initSwiperReviews();
initSwiperAdv();
initSwiperGallery();
initForm();


// window.onresize = function() {
//   initSwiperTraining();
//   initSwiperAdv();
// };

// window.addEventListener('resize', () => {
//   initSwiperTraining();
//   initSwiperAdv();
// }, true);

// window.addEventListener('resize', initSwiperTraining);
