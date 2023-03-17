var button = document.querySelector('.form__button');
var input = document.querySelectorAll('.form__text');

button.addEventListener('click', function() {
  for (var i = 0; i < input.length; i++) {
    input[i].classList.add('form__error');
  }
});
