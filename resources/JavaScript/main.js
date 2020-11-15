const figNico = document.getElementById('figNico');
const imgNico = document.getElementById('imgNico');
const buttonStyleRadius = document.createElement('button');
const buttonBorderStyle = document.createElement('button');
const br = document.createElement('br');
let compteur = 0;
buttonStyleRadius.setAttribute('id', 'button-style');
buttonBorderStyle.setAttribute('id', 'btn-border-style');

/**
 * Change the style of the border
 * @param {Number} number Each number have a property min value 1 max value 5
 */
function changeBorderStyle(number) {
  switch (number) {
    case 1:
      imgNico.style.border = '3px solid black';
      break;
    case 2:
      imgNico.style.border = '3px dotted brown';
      break;
    case 3:
      imgNico.style.border = '3px groove cyan';
      break;
    case 4:
      imgNico.style.border = '3px double violet';
      break;
    case 5:
      imgNico.style.border = '3px ridge gray';
      break;
    default:
      imgNico.style.borderStyle = 'none';
  }
}

/**
 * Change the border radius to the image
 * @param {Number} number Each number have a property min value 1 max value 3
*/
function changeBorderRadius(number) {
  switch (number) {
    case 1:
      imgNico.style.borderRadius = '8px';
      break;
    case 2:
      imgNico.style.borderRadius = '25px';
      break;
    case 3:
      imgNico.style.borderRadius = '40px';
      break;
    default:
      imgNico.style.borderRadius = '50px';
  }
}

/**
 * Function when the cursor passed over the image
 */
imgNico.onmouseover = function() {
  figNico.appendChild(br);
  figNico.appendChild(buttonStyleRadius);
  figNico.appendChild(buttonBorderStyle);
  buttonStyleRadius.textContent = 'Changer la bordure !';
  buttonBorderStyle.textContent = 'Changer le style de bordure';
};

buttonStyleRadius.onclick = function() {
  if (compteur > 3) {
    compteur = 0;
  }
  compteur++;
  changeBorderRadius(compteur);
};

buttonBorderStyle.onclick = () => {
  if (compteur > 5) {
    compteur = 0;
  }
  compteur++;
  changeBorderStyle(compteur);
};
