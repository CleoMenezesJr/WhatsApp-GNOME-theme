//Barra de busca
document.getElementsByClassName('_1Jn3C')[0].style = 'border-radius: 0.4rem; background: #E5E2E1'
document.getElementsByClassName('_3Qnsr')[0]. style = 'color: #2E3436'
document.getElementsByClassName('_13NKt copyable-text selectable-text')[0]. style = 'color: #2E3436'
document.getElementsByClassName('_3yWey')[0]. style ='background: #F8F7F7'
//Header acima da busca
document.getElementsByClassName('_1G3Wr')[0].style = 'background: #F8F7F7'
// remover icones e agregar outros
let antiga = document.querySelectorAll('span')[14]
var img = document.createElement('img');
img.src = 'https://duckduckgo.com/assets/onboarding/bathroomguy/teaser-2@2x.png';
img.style = 'height: 24px'
antiga.appendChild(img);
document.querySelectorAll('svg')[3].style = 'display: none'
document.getElementsByClassName('_3Qnsr')[0].innerHTML = "Image Element Added.";

