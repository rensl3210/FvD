// JavaScript Document
let menu = document.querySelector("header > button:nth-of-type(1)");
let cartKnop = document.querySelector("header > button:nth-of-type(2)");
let navigatie = document.querySelector("header > section:nth-of-type(1)");
let cart = document.querySelector("header > section:nth-of-type(2)")
let verduister = document.querySelector("main > div:nth-of-type(1)")

window.addEventListener("keydown", keyPress);

menu.addEventListener("click", function() {
  openMenu();
});

cartKnop.addEventListener("click", function() {
  openCart();
});

verduister.addEventListener("click", function() {
  if (navigatie.classList.contains("open")) {
    openMenu();
  }
  else{
    openCart();
  }
})

function openMenu(){
  navigatie.classList.toggle("open");
  verduister.classList.toggle("open");
  if (menu.innerHTML == "Menu") menu.innerHTML = "Close";
  else menu.innerHTML = "Menu";
  if (navigatie.classList.contains("open")) {
    cartCheck();
  }
}

function openCart(){
  console.log("menu gaat gewoon open")
  cart.classList.toggle("open");
  verduister.classList.toggle("open");
  if (cartKnop.innerHTML == "Cart(0)") cartKnop.innerHTML = "Close";
  else cartKnop.innerHTML = "Cart(0)";
  if (cart.classList.contains("open")) {
    menuCheck();
  }
}

function menuCheck(){
  if (navigatie.classList.contains("open")) {
    openMenu();
    return true;
  }
}

function cartCheck(){
  if (cart.classList.contains("open")) {
    openCart();
    return true;
  }
}

//bron 2
function keyPress(e) {
  if (e.key === "Escape") {
    console.log("hoi");
    menuCheck();
    cartCheck();
  }
}

