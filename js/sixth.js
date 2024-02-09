// Navbar Menu Icon //
let menu = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar ul');
menu.onclick = () => {
    menu.classList.toggle('menu-box')
    navbar.classList.toggle('open')
}

$(document).ready( function () {
    $('#show_and_hide').click(function (){
      $('.course_hide').toggle();
    });
});
$(document).ready( function () {
    $('#show_and_hide2').click(function (){
      $('.course_hide2').toggle();
    });
});
$(document).ready( function () {
    $('#show_and_hide3').click(function (){
      $('.course_hide3').toggle();
    });
});
$(document).ready( function () {
    $('#show_and_hide4').click(function (){
      $('.course_hide4').toggle();
    });
});
$(document).ready( function () {
    $('#show_and_hide5').click(function (){
      $('.course_hide5').toggle();
    });
});
$(document).ready( function () {
    $('#show_and_hide6').click(function (){
      $('.course_hide6').toggle();
    });
});

let iconChange = document.getElementById("iconN");
iconChange.addEventListener("click" , () => {
    if (iconChange.getAttribute("class") === "fa-solid fa-plus") {
        iconChange.setAttribute("class" , "fa-solid fa-minus");
    }
    else {
        iconChange.setAttribute("class" , "fa-solid fa-plus");
    }
});

let iconChange2 = document.getElementById("icoNOne");
iconChange2.addEventListener("click" , () => {
    if (iconChange2.getAttribute("class") === "fa-solid fa-plus") {
        iconChange2.setAttribute("class" , "fa-solid fa-minus");
    }
    else {
        iconChange2.setAttribute("class" , "fa-solid fa-plus");
    }
});
let iconChange3 = document.getElementById("iconN3");
iconChange3.addEventListener("click" , () => {
    if (iconChange3.getAttribute("class") === "fa-solid fa-plus") {
        iconChange3.setAttribute("class" , "fa-solid fa-minus");
    }
    else {
        iconChange3.setAttribute("class" , "fa-solid fa-plus");
    }
});

let iconChange4 = document.getElementById("iconN4");
iconChange4.addEventListener("click" , () => {
    if (iconChange4.getAttribute("class") === "fa-solid fa-plus") {
        iconChange4.setAttribute("class" , "fa-solid fa-minus");
    }
    else {
        iconChange4.setAttribute("class" , "fa-solid fa-plus");
    }
});

let iconChange5 = document.getElementById("iconN5");
iconChange5.addEventListener("click" , () => {
    if (iconChange5.getAttribute("class") === "fa-solid fa-plus") {
        iconChange5.setAttribute("class" , "fa-solid fa-minus");
    }
    else {
        iconChange5.setAttribute("class" , "fa-solid fa-plus");
    }
});
let iconChange6 = document.getElementById("iconN6");
iconChange6.addEventListener("click" , () => {
    if (iconChange6.getAttribute("class") === "fa-solid fa-plus") {
        iconChange6.setAttribute("class" , "fa-solid fa-minus");
    }
    else {
        iconChange6.setAttribute("class" , "fa-solid fa-plus");
    }
});