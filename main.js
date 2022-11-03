'use strict';

for (let i = 1; i < 1001; i++) {
  const button = document.createElement('button');
  button.innerHTML += `${i} Botón`;

  button.addEventListener('mouseover', () => {
    button.innerHTML = `${i} BotóN`;
  });
  button.addEventListener('mouseout', () => {
    button.innerHTML = `${i} Botón`;
  });

  document.body.appendChild(button);
}
