//ANIMAÇÃO BUTTON INICIO
var home = document.querySelector(".Inicio");

home.onclick = function efeito() {
   var e = document.getElementById("Inicio");
   e.style.animation = "none";
   setTimeout(function() {
      e.style.animation = "";
   }, 100);
}

var home = document.querySelector(".Antecedentes");

home.onclick = function efeito() {
   var e = document.getElementById("Antecedentes");
   e.style.animation = "none";
   setTimeout(function() {
      e.style.animation = "";
   }, 100);
}

var home = document.querySelector(".construcao");

home.onclick = function efeito() {
   var e = document.getElementById("Construção");
   e.style.animation = "none";
   setTimeout(function() {
      e.style.animation = "";
   }, 100);
}

var home = document.querySelector(".colonia");

home.onclick = function efeito() {
   var e = document.getElementById("Colônia-ao-Império");
   e.style.animation = "none";
   setTimeout(function() {
      e.style.animation = "";
   }, 100);
}

var home = document.querySelector(".periodo");

home.onclick = function efeito() {
   var e = document.getElementById("Periodo");
   e.style.animation = "none";
   setTimeout(function() {
      e.style.animation = "";
   }, 100);
}

var home = document.querySelector(".constituicao");

home.onclick = function efeito() {
   var e = document.getElementById("constituição");
   e.style.animation = "none";
   setTimeout(function() {
      e.style.animation = "";
   }, 100);
}

var home = document.querySelector(".caracter");

home.onclick = function efeito() {
   var e = document.getElementById("caracter");
   e.style.animation = "none";
   setTimeout(function() {
      e.style.animation = "";
   }, 100);
}

$('.btn-menu').on('click touchstart', function () {
   $('html').toggleClass('btn-menu-active');
});