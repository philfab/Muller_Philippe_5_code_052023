"use strict";
var positionDot = 0;

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//container .dots
const divDotsElt = document.querySelector('.dots');
const banniereElt = document.querySelector('.banner-img');
const texteElt = banniereElt.nextElementSibling;

// Event sur les deux fleches avec msg
document.querySelectorAll('.arrow').forEach(arrow => {
  arrow.addEventListener('click', () => {
    const className = arrow.className.split(' ')[1];
    console.log('click ' + className);
    divDotsElt.children[positionDot].classList.remove('dot_selected');

    if (className =='arrow_right')
    {
      positionDot+=1;
      if (positionDot > 3) positionDot = 0;
    }
    else
    {
      positionDot-=1;
      if (positionDot < 0) positionDot = 3;
    }

    divDotsElt.children[positionDot].classList.add('dot_selected');
    banniereElt.src = './assets/images/slideshow/'+ slides[positionDot].image;
    texteElt.innerHTML =slides[positionDot].tagLine;
  });
});

for (let dot = 0; dot < slides.length; dot++) {
  const span = document.createElement('span');
  span.classList.add('dot');
  divDotsElt.appendChild(span);
}

//on selectiuonne le 1er point
divDotsElt.children[positionDot].classList.add('dot_selected');




