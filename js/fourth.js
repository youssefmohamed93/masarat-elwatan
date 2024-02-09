// الدورات //

let activeBtn = document.querySelectorAll(".course-btns button");
let activBtnArray = Array.from(activeBtn);

activBtnArray.forEach( ( ele ) => {
    ele.addEventListener("click" , function ( event ) {
        activBtnArray.forEach( ( ele ) => {
            ele.classList.remove("activBtn");
        });
        event.currentTarget.classList.add("activBtn");
    });
});

let bttnOne = document.getElementById("btttn1");
let bttnTwo = document.getElementById("btttn2");
let bttnThree = document.getElementById("btttn3");
let bttnFour = document.getElementById("btttn4");

let allElements = document.querySelectorAll(".bigggggg-container .section-3-container");

function createEventFunction ( parent,type ) {
    parent.addEventListener("click" , () => {
        allElements.forEach(allCourseElement => {
            if (allCourseElement.dataset.type != type) {
                allCourseElement.classList.add("hiddenBtn");
            }
            else {
                allCourseElement.classList.remove("hiddenBtn");
            }
        });
    });
};

createEventFunction(bttnOne,"courseNumOne");
createEventFunction(bttnTwo,"courseNumTwo");
createEventFunction(bttnThree,"courseNumThree");
createEventFunction(bttnFour,"courseNumFour");

bttnOne.click();
