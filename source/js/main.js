// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { initNav } from './navigation.js';
import { initSwiperHero } from './hero-slider.js';
import { initSwiperTours } from './tours-slider.js';
import { initSwiperTraining } from './training-slider.js';
import { initSwiperReviews } from './reviews-slider.js';

initNav();
initSwiperHero();
initSwiperTours();
initSwiperTraining();
initSwiperReviews();
