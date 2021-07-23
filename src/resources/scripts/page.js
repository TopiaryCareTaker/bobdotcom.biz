const backgrounds = [
  'full-bleed',
  'right',
  'left',
  'top',
  'bottom'
];

let currentBackgroundIndex = 0;

let currentBackgroundString =
`container__background--${backgrounds[currentBackgroundIndex]}`;

let nextBackgroundString = `container__background--${backgrounds[currentBackgroundIndex + 1]}`;

const backgroundElem = document.querySelector('.container__background');

backgroundElem.classList.add(currentBackgroundString);

const changeBackground = (e)=>{
  backgroundElem.classList.remove(currentBackgroundString);
  backgroundElem.classList.add(nextBackgroundString);
  
  currentBackgroundIndex = currentBackgroundIndex + 1;
  window.alert(currentBackgroundIndex)
}

backgroundElem.addEventListener('click', changeBackground);