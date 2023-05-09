"use strict";

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

const dotsElt = document.querySelector(".dots");
const bannerElt = document.querySelector(".banner-img");
const textElt = bannerElt.nextElementSibling;

let positionDot = 0;

function navigArrows (event) {
  let className = event.target.className.split(' ')[1];
  console.log("click " + className);
  dotsElt.children[positionDot].classList.remove("dot_selected");

  if (className === "arrow_right") 
    positionDot = (positionDot + 1 > slides.length - 1) ? 0 : positionDot + 1;
  else
    positionDot = (positionDot - 1 < 0) ? positionDot = slides.length - 1 : positionDot - 1;

  dotsElt.children[positionDot].classList.add("dot_selected");
  bannerElt.src = "./assets/images/slideshow/"+ slides[positionDot].image;
  textElt.innerHTML = slides[positionDot].tagLine;
}

document.querySelectorAll(".arrow").forEach(arrow => {
  arrow.addEventListener("click", navigArrows);
});

for (let slide = 0; slide < slides.length; slide++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotsElt.appendChild(dot);
}

dotsElt.children[positionDot].classList.add("dot_selected");