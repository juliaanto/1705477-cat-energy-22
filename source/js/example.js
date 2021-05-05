var exampleToggle = document.querySelector('.toggle__button');
var photoBefore = document.querySelector('.example__photo-before');
var photoAfter = document.querySelector('.example__photo-after');

exampleToggle.addEventListener('click', function() {
  if (exampleToggle.classList.contains('toggle__button--before')) {
    photoAfter.classList.remove('hidden');
    photoBefore.classList.add('hidden');
    exampleToggle.classList.remove('toggle__button--before');
    exampleToggle.classList.add('toggle__button--after');
  } else if (exampleToggle.classList.contains('toggle__button--after')) {
    photoAfter.classList.add('hidden');
    photoBefore.classList.remove('hidden');
    exampleToggle.classList.remove('toggle__button--after');
    exampleToggle.classList.add('toggle__button--before');
  }
});
