var images = document.querySelectorAll('.slider .slide');
var current = 1;
var timer;

//burger-,enu
document.querySelector('.burger-menu').onclick = function menuToggle(){
	document.querySelector('.header-nav').classList.toggle('header-nav__active');
};
//слайдер
function autoSlider(){
	timer = setTimeout(slider, 4000);
}

function slider() {
	for (var i = 0; i < images.length; i++){
		images[i].classList.add('active');
	}
	images[current].classList.remove('active');
	if (current + 1 == images.length) {
		current = 0;
	}
	else {
		current++;
	}
	autoSlider();
}

slider();

//кнопки слайдера
var prev = document.querySelector('.slider_prev');
var next = document.querySelector('.slider_next');
prev.onclick = function(){
	for (var i = 0; i < images.length; i++){
		images[i].classList.add('active');
	}
	images[current].classList.remove('active');
	if (current == 0) {
		current = images.length - 1;
	}
	else {
		current--;
	}
}
next.onclick = function(){
	for (var i = 0; i < images.length; i++){
		images[i].classList.add('active');
	}
	images[current].classList.remove('active');
	if (current + 1 == images.length) {
		current = 0;
	}
	else {
		current++;
	}
}

// REFERENCE SLIDDER

var refCurrent = 0;
var refCurrentR = 0;
var refImagesLeft = document.querySelectorAll('.ref-slide_left img');
var refImagesRight = document.querySelectorAll('.ref-slide_right img');
var refNext = document.querySelector('.ref-slide__next');
var refCountSlide = document.querySelector('.ref-slide__count');

	//вставляю счётчик в html
	function reSlideCounter(){
		var refCurrentValue = refCurrent + 1;
		refCountSlide.innerHTML = '0' + refCurrentValue;
	}
reSlideCounter();

	//слайдер
refNext.onclick = function(){
	var refCurrentNext;
	if (refCurrent + 1 == refImagesLeft.length) {
		refCurrentNext = 0;
	} else {
		refCurrentNext = refCurrent + 1;
	}
	refImagesLeft[refCurrentNext].classList.add('ref__active');
	refImagesLeft[refCurrent].classList.remove('ref__active');
	if (refCurrent + 1 == refImagesLeft.length) {
		refCurrent = 0;
	}
	else {
		refCurrent++;
	}

	var refCurrentNextR;
	if (refCurrentR + 1 == refImagesRight.length) {
		refCurrentNextR = 0;
	} else {
		refCurrentNextR = refCurrentR + 1;
	}
	refImagesRight[refCurrentNextR].classList.add('ref__active');
	refImagesRight[refCurrentR].classList.remove('ref__active');
	if (refCurrentR + 1 == refImagesRight.length) {
		refCurrentR = 0;
	}
	else {
		refCurrentR++;
	}
	reSlideCounter();
}


