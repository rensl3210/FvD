// JavaScript Document
let carousel = document.querySelector("main > section:nth-child(6)")
let carouselLinks = document.querySelector("main > section:nth-child(6) button:nth-of-type(1)")
let carouselRechts = document.querySelector("main > section:nth-child(6) button:nth-of-type(2)")

carouselLinks.addEventListener("click", function() {
  var schermBreedte = window.innerWidth;
  if (schermBreedte > 960) {
    carousel.scrollLeft -= (schermBreedte / 4);
  }
  else if (schermBreedte > 640 && schermBreedte < 960){
    carousel.scrollLeft -= (schermBreedte / 2);
  }
  else {
    carousel.scrollLeft -= schermBreedte;
  }
})

carouselRechts.addEventListener("click", function() {
  var schermBreedte = window.innerWidth;
  if (schermBreedte > 960) {
    carousel.scrollLeft += (schermBreedte / 4);
  }
  else if (schermBreedte > 640 && schermBreedte < 960){
    carousel.scrollLeft += (schermBreedte / 2);
  }
  else {
    carousel.scrollLeft += schermBreedte;
  }
})




