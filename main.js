'use strict';

for (let i = 1; i < 1001; i++) {
  const button = document.createElement('button');
  button.innerHTML += `${i} Botón`;

  button.addEventListener('mouseover', () => {
    button.innerHTML.replace('n', 'N');
  });

  document.body.appendChild(button);
}
