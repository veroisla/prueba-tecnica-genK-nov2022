'use strict';

// Apartado 1a
// Escribe el código javascript necesario para pintar un botón en el body y que el botón tenga el texto "1 botón"

const button = document.querySelector('.js__button');

button.innerHTML += '<button type="button">1 botón</button>';
