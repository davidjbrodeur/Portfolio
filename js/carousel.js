//create variables to work with from the document
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const previousButton = document.querySelector('.carousel__button--left'); 
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px'; 
}
slides.forEach(setSlidePosition); 

//function for moving slides
const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
}

//when I click left, move slides to the left
prevButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;
	moveToSlide(track, currentSlide, prevSlide); 

	//TODO: When using button, IF slide is the last, put it back to last index on the other side
})

//when I click right, move slides to the right
nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling; 
	moveToSlide(track, currentSlide, nextSlide);

	//TODO: When using button, IF slide is the last, put it back to last index on the other side
})

//when I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
	const targetDot = e.target.closest('button');
	if(!targetDot) return; 
	const currentSlide = track.querySelector('.current-slide');
	const currentDot = dotsNav.querySelector('.current-slide');
	const targetIndex = dots.findIndex(dot => dot === targetDot); 
}