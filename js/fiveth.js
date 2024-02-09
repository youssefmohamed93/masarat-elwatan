// Navbar Menu Icon //
let menu = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar ul');
menu.onclick = () => {
    menu.classList.toggle('menu-box')
    navbar.classList.toggle('open')
}

// Course Details //
let onTab = document.querySelectorAll('.course-buttons button');
let onTabArray = Array.from(onTab);

let content = document.querySelectorAll('.course-desription > div');
let contentArray = Array.from(content);

onTabArray.forEach((ele) => {
  ele.addEventListener("click" , function (event) {
    onTabArray.forEach((ele) => {
      ele.classList.remove("active_button");
    });
    event.currentTarget.classList.add("active_button");
    contentArray.forEach((div) => {
      div.style.display = 'none';
    });
    document.querySelector(event.currentTarget.dataset.cont).style.display = 'block';
  });
});

$(document).ready( function () {
  $('#show_and_hide').click(function (){
    $('.course_hide').toggle();
  });
});

$(document).ready( function () {
  $('#show_and_hide_two').click(function (){
    $('.course_hide_two').toggle();
  });
});

// Change Icon Course Details //

let iconChange = document.getElementById("iconOne");
iconChange.addEventListener("click" , () => {
    if (iconChange.getAttribute("class") === "fa-solid fa-minus") {
        iconChange.setAttribute("class" , "fa-solid fa-plus");
    }
    else {
        iconChange.setAttribute("class" , "fa-solid fa-minus");
    }
});


let iconChange2 = document.getElementById("iconTwo");
iconChange2.addEventListener("click" , () => {
    if (iconChange2.getAttribute("class") === "fa-solid fa-minus") {
        iconChange2.setAttribute("class" , "fa-solid fa-plus");
    }
    else {
        iconChange2.setAttribute("class" , "fa-solid fa-minus");
    }
});