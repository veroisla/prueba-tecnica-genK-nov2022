'use strict';

const button = document.createElement('button');
button.innerHTML = '1 botón';

console.log(button);

document.body.appendChild(button);

function mouseOver() {
  button.innerHTML = '1 botóN';
}

function mouseOut() {
  button.innerHTML = '1 botón';
}

button.addEventListener('mouseover', mouseOver);
button.addEventListener('mouseout', mouseOut);
