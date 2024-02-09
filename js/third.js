// Navbar Menu Icon //
let menu = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar ul');
menu.onclick = () => {
    menu.classList.toggle('menu-box')
    navbar.classList.toggle('open')
}

// Section Five //
$('.responsive').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    dots:true,
    autoplay:true,
    autoplaySpeed: 1000,
    arrows: false,
    infinite:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1268,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1068,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

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
btn_One.click();