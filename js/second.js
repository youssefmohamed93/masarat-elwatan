// Navbar Menu Icon //
let menu = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar ul');
menu.onclick = () => {
    menu.classList.toggle('menu-box')
    navbar.classList.toggle('open')
}

// الرحلات التعليمية //
let tabActivBtn = document.querySelectorAll('.course-btns button');
let tabActivBtnArray = Array.from(tabActivBtn);

tabActivBtnArray.forEach( ( ele ) => {
    ele.addEventListener("click" , function ( event ) {
        tabActivBtnArray.forEach( ( ele ) => {
            ele.classList.remove("activBtn");
        });
        event.currentTarget.classList.add("activBtn");
    });
});

// المقالات //
let button_One = document.getElementById("btnOne");
let button_Two = document.getElementById("btnTwo");
let button_Three = document.getElementById("btnThree");
let button_Four = document.getElementById("btnFour");

let allCoursesElements = document.querySelectorAll(".bigg-container .section-4-container");

function newCreateEvent( parent,type ) {
    parent.addEventListener("click" , () => {
        allCoursesElements.forEach(allCourseElement => {
            if (allCourseElement.dataset.type != type) {
                allCourseElement.classList.add("hiddenBtn");
            }
            else {
                allCourseElement.classList.remove("hiddenBtn");
            }
        });
    });
};

newCreateEvent(button_One,"courses1");
newCreateEvent(button_Two,"courses2");
newCreateEvent(button_Three,"courses3");
newCreateEvent(button_Four,"courses4");

button_One.click();

// الرحلات التعليمية //
let btn_One = document.getElementById("one");
let btn_Two = document.getElementById("two");
let btn_Three = document.getElementById("three");
let btn_Four = document.getElementById("four");

let coursesElements = document.querySelectorAll('.section-three-big-container .section-3-container');

function newEvent( parent , type ) {
    parent.addEventListener('click' , () => {
        coursesElements.forEach(courseElement => {
            if (courseElement.dataset.type != type) {
                courseElement.classList.add('btn-hide');
            }
            else {
                courseElement.classList.remove('btn-hide');
            };
        });
    });
};

newEvent(btn_One,"course1");
newEvent(btn_Two,"course2");
newEvent(btn_Three,"course3");
newEvent(btn_Four,"course4");

