const VALID_NUMBER = /^[0-9+()\s-]*$/i;
const VALID_EMAIL = /([a-zA-Z0-9а-яА-ЯёЁ._-]+@[a-zA-Z0-9а-яА-ЯёЁ._-]+\.[a-zA-Z0-9а-яА-ЯёЁ_-]+)/;

const form = document.querySelector('.form__form-container');
const inputPhone = form.querySelector('.form__input--phone');
const inputEmail = form.querySelector('.form__input--email');
const errorElement = form.querySelector('.form__error');

//Проверка телефона регулярным выражением
const isValidPhone = (value) => VALID_NUMBER.test(value);

//Проверка email регулярным выражением
const isValidEmail = (value) => VALID_EMAIL.test(value);

const initForm = () => {
  if (!form) {
    return;
  }

  function isNumericKeyEvent(event) {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Цифры
      (key >= 96 && key <= 109) || // Numpad
      (key === 8 || key === 9 || key === 187 || key === 189 || key === 32 || key === 37 || key === 39)); // Backspace, Tab, +, -, стрелки
  }

  inputPhone.addEventListener('keydown', (evt) => {
    if (!isNumericKeyEvent(evt)) {
      evt.preventDefault();
    }
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    //Получаем значения полей ввода
    const userPhone = inputPhone.value;
    const userEmail = inputEmail.value;

    const resetInput = (input) => {
      input.classList.remove('form__input--invalid');
      input.value = '';
    };

    inputEmail.addEventListener('input', () => {
      if (!inputEmail.value.length) {
        resetInput(inputEmail);
      }
      errorElement.classList.add('visually-hidden');
    });

    inputPhone.addEventListener('input', () => {
      if (!inputPhone.value.length) {
        resetInput(inputPhone);
      }
    });

    // Проверяем, что номер пользователя содержит только цифры
    if (!isValidPhone(userPhone)) {
      inputPhone.classList.add('form__input--invalid');
    } else {
      inputPhone.classList.remove('form__input--invalid');
    }

    //Проверяем, что email корректный
    if(!isValidEmail(userEmail)) {
      inputEmail.classList.add('form__input--invalid');
      errorElement.classList.remove('visually-hidden');
    } else {
      inputEmail.classList.remove('form__input--invalid');
      errorElement.classList.add('visually-hidden');
    }

    //Прописываем условия валидности формы
    const validForm = !inputPhone.classList.contains('form__input--invalid') && !inputEmail.classList.contains('form__input--invalid');

    // Если всё в порядке, отправляем форму
    if (validForm) {
      form.submit();
      form.reset();
    }
  });
};

export { initForm };
