'use strict';

const button = document.querySelector('.js__button');

button.innerHTML += '<button type="button" class="js__btn">1 botón</button>';

function changeTextHover() {
  button.innerHTML = '<button type="button">1 botóN</button>';
}

button.addEventListener('mouseover', changeTextHover);
