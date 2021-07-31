const backgrounds = [
  'full-bleed',
  'right',
  'left',
  'top',
  'bottom',
  'triangle-left',
  'triangle-right',
  
];
const backgroundElem = document.querySelector('.container__background');

let currentBackgroundString = createBackgroundString(currentBackgroundIndex);
let currentBackgroundIndex = 0;
window.alert(createBackgroundString(currentBackgroundIndex));
backgroundElem.classList.add(createBackgroundString(currentBackgroundIndex));
backgroundElem.addEventListener('click', changeBackground);


function createBackgroundString(dex){
  return `container__background--${backgrounds[dex]}`;
};

function changeBackground(){
  backgroundElem.classList.remove(createBackgroundString( currentBackgroundIndex));
  currentBackgroundIndex = currentBackgroundIndex + 1;
  if(currentBackgroundIndex >= backgrounds.length){
    currentBackgroundIndex = 1;
  }
  backgroundElem.classList.add(createBackgroundString(currentBackgroundIndex)); 
}








