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
img.src = 'https://raw.githubusercontent.com/CleoMenezes/WhatsApp-GNOME-theme/4519a137d43071579dd73811643ef1719d2b0f7e/assets/icons/menu-large-symbolic.svg';
img.style = 'height: 24px; width: 24px'
antiga.appendChild(img);
document.querySelectorAll('svg')[3].style = 'display: none'

let antige = document.querySelectorAll('span')[12]
var img = document.createElement('img');
img.src = 'https://raw.githubusercontent.com/CleoMenezes/WhatsApp-GNOME-theme/4519a137d43071579dd73811643ef1719d2b0f7e/assets/icons/subtitles-symbolic.svg';
img.style = 'height: 24px; width: 24px'
antige.appendChild(img);
document.querySelectorAll('svg')[2].style = 'display: none'

let antigi = document.querySelectorAll('span')[10]
var img = document.createElement('img');
img.src = 'https://raw.githubusercontent.com/CleoMenezes/WhatsApp-GNOME-theme/4519a137d43071579dd73811643ef1719d2b0f7e/assets/icons/navigate-symbolic.svg';
img.style = 'height: 24px; width: 24px'
antigi.appendChild(img);
document.querySelectorAll('svg')[1].style = 'display: none'
