var button = document.querySelector('.form__button');
var inputName = document.querySelector('.form__text--name');
var inputWeight = document.querySelector('.form__text--weight');
var inputEmail = document.querySelector('.form__text--email');
var inputTel = document.querySelector('.form__text--tel');


button.addEventListener('click', function() {
  if(!inputName.value) {
    inputName.classList.add('form__error');
  }
  else {
    inputName.classList.remove('form__error');
  };
  if(!inputWeight.value) {
    inputWeight.classList.add('form__error');
  }
  else {
    inputWeight.classList.remove('form__error');
  };
  if(!inputEmail.value) {
    inputEmail.classList.add('form__error');
  }
  else {
    inputEmail.classList.remove('form__error');
  };
  if(!inputTel.value) {
    inputTel.classList.add('form__error');
  }
  else {
    inputTel.classList.remove('form__error');
  }
});
