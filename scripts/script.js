"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
// const slider = document.querySelector('.sliderd');
// const slider2 = document.querySelector('.sliderd2');
// const slider3 = document.querySelector('.sliderd3');
// const slider4 = document.querySelector('.sliderd4');
// const slider5 = document.querySelector('.sliderd5');
// const slider6 = document.querySelector('.sliderd6');
const prevButton1 = document.querySelector('.prev-button1');
const nextButton1 = document.querySelector('.next-button1');
const prevButton2 = document.querySelector('.prev-button2');
const nextButton2 = document.querySelector('.next-button2');
const prevButton3 = document.querySelector('.prev-button3');
const nextButton3 = document.querySelector('.next-button3');
const prevButton4 = document.querySelector('.prev-button4');
const nextButton4 = document.querySelector('.next-button4');
const prevButton5 = document.querySelector('.prev-button5');
const nextButton5 = document.querySelector('.next-button5');
const prevButton6 = document.querySelector('.prev-button6');
const nextButton6 = document.querySelector('.next-button6');
const slides = document.querySelectorAll('.sliderd1 .iml');
const slides2 = document.querySelectorAll('.sliderd2 .iml');
const slides3 = document.querySelectorAll('.sliderd3 .iml');
const slides4 = document.querySelectorAll('.sliderd4 .iml');
const slides5 = document.querySelectorAll('.sliderd5 .iml');
const slides6 = document.querySelectorAll('.sliderd6 .iml');
const indicatorDots = document.querySelector('div.sim-slider-dots');
const menuQ = document.querySelectorAll('.menuitem');
let menuIndex = 0;

const mnu1 = document.querySelectorAll('.menu1');
const mnu2 = document.querySelectorAll('.menu2');
const mnu3 = document.querySelectorAll('.menu3');
const mnu4 = document.querySelector('.menu4');
const mnu5 = document.querySelector('.menu5');
const mnu6 = document.querySelectorAll('.menu6');
const mnu7 = document.querySelector('.menu7');
const mnu8 = document.querySelector('.menu8');
const mnu9 = document.querySelector('.menu9');

mnu1.forEach(menu1 => {
    menu1.addEventListener('click', showMenu1);
});
mnu2.forEach(menu2 => {
    menu2.addEventListener('click', showMenu2);
});
mnu3.forEach(menu3 => {
    menu3.addEventListener('click', showMenu3);
});
mnu4.addEventListener('click', showMenu4);
mnu5.addEventListener('click', showMenu5);
mnu6.forEach(menu6 => {
  menu6.addEventListener('click', showMenu6);
});
mnu7.addEventListener('click', showMenu7);
mnu8.addEventListener('click', showMenu8);
mnu9.addEventListener('click', showMenu9);

function showMenu1() {
    menuIndex = 0;
    updateMenu();
  }
  function showMenu2() {
    menuIndex = 1;
    updateMenu();
  }
  function showMenu3() {
    menuIndex = 2;
    updateMenu();
  }
  function showMenu4() {
    menuIndex = 3;
    updateMenu();
  }
  function showMenu5() {
    menuIndex = 4;
    updateMenu();
  }
  function showMenu6() {
    menuIndex = 5;
    updateMenu();
  }
  function showMenu7() {
    menuIndex = 6;
    updateMenu();
  }
  function showMenu8() {
    menuIndex = 7;
    updateMenu();
  }
  function showMenu9() {
    menuIndex = 8;
    updateMenu();
  }

  function updateMenu() {
    menuQ.forEach((menu, index) => {
      if (index === menuIndex) {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
      // let dotscount = slides.length;
      // console.log(dotscount);
    });
  }




  const slideCount1 = slides.length;
  let slideIndex1 = 0;
// Функция для показа предыдущего слайда
function showPreviousSlide1() {
	slideIndex1 = (slideIndex1 - 1 + slideCount1) % slideCount1;
	updateSlider1();
  }
  
  // Функция для показа следующего слайда
  function showNextSlide1() {
	slideIndex1 = (slideIndex1 + 1) % slideCount1;
	updateSlider1();
  }

// Устанавливаем обработчики событий для кнопок
prevButton1.addEventListener('click', showPreviousSlide1);
nextButton1.addEventListener('click', showNextSlide1);

// Функция для обновления отображения слайдера
function updateSlider1() {
  slides.forEach((slide, index) => {	
    if (index === slideIndex1) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
	// let dotscount = slides.length;
	// console.log(dotscount);
  });
}

const slideCount2 = slides2.length;
let slideIndex2 = 0;
// Функция для показа предыдущего слайда
function showPreviousSlide2() {
	slideIndex2 = (slideIndex2 - 1 + slideCount2) % slideCount2;
	updateSlider2();
  }
  
  // Функция для показа следующего слайда
  function showNextSlide2() {
	slideIndex2 = (slideIndex2 + 1) % slideCount2;
	updateSlider2();
  }

// Устанавливаем обработчики событий для кнопок
prevButton2.addEventListener('click', showPreviousSlide2);
nextButton2.addEventListener('click', showNextSlide2);

// Функция для обновления отображения слайдера
function updateSlider2() {
  slides2.forEach((slide, index) => {	
    if (index === slideIndex2) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
	// let dotscount = slides.length;
	// console.log(dotscount);
  });
}


const slideCount3 = slides3.length;
let slideIndex3 = 0;
// Функция для показа предыдущего слайда
function showPreviousSlide3() {
	slideIndex3 = (slideIndex3 - 1 + slideCount3) % slideCount3;
	updateSlider3();
  }
  
  // Функция для показа следующего слайда
  function showNextSlide3() {
	slideIndex3 = (slideIndex3 + 1) % slideCount3;
	updateSlider3();
  }

// Устанавливаем обработчики событий для кнопок
prevButton3.addEventListener('click', showPreviousSlide3);
nextButton3.addEventListener('click', showNextSlide3);

// Функция для обновления отображения слайдера
function updateSlider3() {
  slides3.forEach((slide, index) => {	
    if (index === slideIndex3) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
	// let dotscount = slides.length;
	// console.log(dotscount);
  });
}



const slideCount4 = slides4.length;
let slideIndex4 = 0;
// Функция для показа предыдущего слайда
function showPreviousSlide4() {
	slideIndex4 = (slideIndex4 - 1 + slideCount4) % slideCount4;
	updateSlider4();
  }
  
  // Функция для показа следующего слайда
  function showNextSlide4() {
	slideIndex4 = (slideIndex4 + 1) % slideCount4;
	updateSlider4();
  }

// Устанавливаем обработчики событий для кнопок
prevButton4.addEventListener('click', showPreviousSlide4);
nextButton4.addEventListener('click', showNextSlide4);

// Функция для обновления отображения слайдера
function updateSlider4() {
  slides4.forEach((slide, index) => {	
    if (index === slideIndex4) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
	// let dotscount = slides.length;
	// console.log(dotscount);
  });
}



const slideCount5 = slides5.length;
let slideIndex5 = 0;
// Функция для показа предыдущего слайда
function showPreviousSlide5() {
	slideIndex5 = (slideIndex5 - 1 + slideCount5) % slideCount5;
	updateSlider5();
  }
  
  // Функция для показа следующего слайда
  function showNextSlide5() {
	slideIndex5 = (slideIndex5 + 1) % slideCount5;
	updateSlider5();
  }

// Устанавливаем обработчики событий для кнопок
prevButton5.addEventListener('click', showPreviousSlide5);
nextButton5.addEventListener('click', showNextSlide5);

// Функция для обновления отображения слайдера
function updateSlider5() {
  slides5.forEach((slide, index) => {	
    if (index === slideIndex5) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
	// let dotscount = slides.length;
	// console.log(dotscount);
  });
}



const slideCount6 = slides6.length;
let slideIndex6 = 0;
// Функция для показа предыдущего слайда
function showPreviousSlide6() {
	slideIndex6 = (slideIndex6 - 1 + slideCount6) % slideCount6;
	updateSlider6();
  }
  
  // Функция для показа следующего слайда
  function showNextSlide6() {
	slideIndex6 = (slideIndex6 + 1) % slideCount6;
	updateSlider6();
  }

// Устанавливаем обработчики событий для кнопок
prevButton6.addEventListener('click', showPreviousSlide6);
nextButton6.addEventListener('click', showNextSlide6);

// Функция для обновления отображения слайдера
function updateSlider6() {
  slides6.forEach((slide, index) => {	
    if (index === slideIndex6) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
	// let dotscount = slides.length;
	// console.log(dotscount);
  });
}



// Инициализация слайдера
updateMenu();
updateSlider1();
updateSlider2();
updateSlider3();
updateSlider4();
updateSlider5();
updateSlider6();
});
