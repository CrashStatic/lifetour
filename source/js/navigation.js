const bodeElement = document.querySelector('.page__body');
const headerElement = document.querySelector('.header__container');
const navButton = headerElement.querySelector('.header__nav-toggle');
const navLink = headerElement.querySelector('.navigation__link');

const initNav = () => {
  if (!headerElement || !navButton || !navLink) {
    return;
  }

  navButton.addEventListener('click', () => {
    if (headerElement.classList.contains('header__container--open')) {
      headerElement.classList.remove('header__container--open');
      bodeElement.classList.remove('scroll-lock');
    } else {
      headerElement.classList.add('header__container--open');
      bodeElement.classList.add('scroll-lock');
    }
  });

  navLink.addEventListener('click', () => {
    headerElement.classList.remove('header__container--open');
    bodeElement.classList.remove('scroll-lock');
  });

};

export { initNav };
