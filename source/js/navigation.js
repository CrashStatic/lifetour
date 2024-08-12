const bodeElement = document.querySelector('.page');
const headerElement = bodeElement.querySelector('.header__container');
const navButton = headerElement.querySelector('.header__nav-toggle');
const navLinks = headerElement.querySelectorAll('.navigation__link');

const initNav = () => {
  if (!headerElement || !navButton || !navLinks) {
    return;
  }

  const toggleMenu = () => {
    headerElement.classList.toggle('header__container--open');
    bodeElement.classList.toggle('scroll-lock');
  };

  navButton.addEventListener('click', toggleMenu);

  navLinks.forEach((item) => {
    item.addEventListener('click', () => {
      if (headerElement.classList.contains('header__container--open')) {
        toggleMenu();
      }
    });
  });
};

export { initNav };
