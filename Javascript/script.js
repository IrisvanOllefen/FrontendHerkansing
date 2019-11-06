/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/* de zoek functie .*/

var input = document.getElementById("search-input");
var searchBtn = document.getElementById("search-btn");

function expand() {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
}

searchBtn.addEventListener("click", expand);

/* de log in overlay functie */

var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var loginButton = document.querySelector(".login-button");

function openModal() {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
}

loginButton.addEventListener("click", openModal);

var ButtonForLogin = document.querySelector(".button");

function closeModal() {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
}

ButtonForLogin.addEventListener("click", closeModal);

/* de overzichtpagina blokjes */

//var knop;
//knop = document.querySelector(".info");
//var foto;
//foto = document.querySelector(".notransform");
//
//function beweeg() {
//    foto.classList.toggle(".transform");
//    console.log("Deze functie doet het");
//}
//
//knop.addEventListener("mouseover", beweeg);


