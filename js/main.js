// variables
let $ = document;
let navLink = $.querySelectorAll("a.nav-link.text-secondary");
let drop3 = $.querySelectorAll(".drop3 .col-12");
let help = "";
let openBtn = $.getElementsByClassName("open")[0];
let closeBtn = $.getElementsByClassName("close-btn")[0];
let btnRight = $.getElementsByClassName("btn-right")[0];
let btnLeft = $.getElementsByClassName("btn-left")[0];
let imgSlider = $.getElementsByClassName("img-slider")[0];
let svgOne = $.getElementsByClassName("svg-one")[0];
let svgTwo = $.getElementsByClassName("svg-two")[0];
let pSlider = $.getElementsByClassName("p-slider")[0];
let spanSlider = $.querySelector(".span-slider");
let helpSlider = 0;

// Evants 
window.addEventListener("resize" , () => {
    if(window.innerWidth > 992){
        navLink.forEach((item) => {
            item.addEventListener("mouseover" , function () {
                showDropDownMenu(item);
            });
        
            item.nextElementSibling.addEventListener("mouseover" , function () {
                showDropDownMenu(item);
            })
        
            item.nextElementSibling.addEventListener("mouseout" , function () {
                hiddenDropDownMenu(item);
            })
        
            item.addEventListener("mouseout" , function () {
                hiddenDropDownMenu(item);
            });
        })
        
        drop3.forEach((item) => {
            item.addEventListener("mouseover" , function() {
                showDropDownMenuChild(item);
            })
        })
    }
})

openBtn.addEventListener("click" , openMenu);
closeBtn.addEventListener("click" , () => {
    setTimeout(closeMenu , 900);
});

btnRight.addEventListener("click" , btnRightFunc);
btnLeft.addEventListener("click" , btnLeftFunc);


// functions
function showDropDownMenu(item) {
   let dropDown = item.nextElementSibling;
   dropDown.classList.remove("d-none");  
}

function hiddenDropDownMenu(item) {
    let dropDown = item.nextElementSibling;
    dropDown.classList.add("d-none");
    if(help != ""){
        help.classList.replace("d-flex" , "d-none");
        help = "";
    }
}

function showDropDownMenuChild(item) {
    let dropDown = item.lastElementChild;
    if(help != ""){
        help.classList.replace("d-flex" , "d-none");
        help = dropDown;
    } else{
        help = dropDown;
    }
    dropDown.classList.replace("d-none" , "d-flex");
}

function openMenu() {
    $.body.classList.add("overflow-hidden");
}

function closeMenu() {
    $.body.classList.remove("overflow-hidden");
}

function btnLeftFunc() {
    if(helpSlider == 0){
        btnRightFunc();
        helpSlider++;
    } else {
        spanSlider.innerHTML = "Peyman Rahmani";
        svgOne.classList.remove("d-none");
        svgTwo.classList.add("d-none");
        imgSlider.src = "photo-1.jpg";
        pSlider.innerHTML = "“Landkit is hands down the most useful front end Bootstrap theme I've ever used. I can't wait to use it again for my next project.”";
        helpSlider = 0;
    }
}

function btnRightFunc() {
    if(helpSlider == 0){
        spanSlider.innerHTML = "Bill Gates";
        svgOne.classList.add("d-none");
        svgTwo.classList.remove("d-none");
        imgSlider.src = "photo-26.jpg";
        pSlider.innerHTML = "“I've never used a theme as versatile and flexible as Landkit. It's my go to for building landing sites on almost any project.”";
        helpSlider++;
    } else {
        btnLeftFunc();
        helpSlider = 0;
    }
}

