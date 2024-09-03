// ################## TOGGLE MENU ANIMATION 

var menuBtn = document.querySelector("#menu");
var toggleMenu =document.querySelector("#toggle_menu");
var click = document.querySelector("html");

menuBtn.addEventListener("mouseover", function(){
  toggleMenu.style.top = "60px";
});

toggleMenu.addEventListener("mouseleave", function(){
  toggleMenu.style.top = "-110%";
});

click.addEventListener("click", function(){
  toggleMenu.style.top = "-110%";
})