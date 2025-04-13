/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* Close menu when clicking on a nav link */
const navLinks = document.querySelectorAll('.nav__link')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
})

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER POPULAR ===============*/
// const swiperPopular = new Swiper('.popular__swiper', {
//     loop: true,
//     grabCursor: true,
//     slidesPerView: 'auto',
//     centeredSlides: 'auto',
// })

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const scrollUpEl = document.getElementById('scroll-up');
if (scrollUpEl) {
  scrollUpEl.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  });
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SLIDESHOW ===============*/
let slideIndex = 1;
let slideInterval;

function initSlideshow() {
    const container = document.querySelector('.slideshow-container');
    if (!container) {
        console.error('Slideshow container not found');
        return;
    }

    const slides = container.querySelectorAll('.slide');
    if (!slides.length) {
        console.error('No slides found');
        return;
    }

    console.log('Slideshow initialized with', slides.length, 'slides');

    // Ensure navigation arrows are visible
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    if (prevButton) prevButton.style.display = 'block';
    if (nextButton) nextButton.style.display = 'block';

    // Create dots if they don't exist
    if (!container.querySelector('.slide-dots')) {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slide-dots';
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => currentSlide(index + 1));
            dotsContainer.appendChild(dot);
        });
        container.appendChild(dotsContainer);
    }

    // Add event listeners
    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    });

    // Show first slide and start interval
    showSlides(slideIndex);
    startSlideInterval();
}

function startSlideInterval() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    slideInterval = setInterval(() => changeSlide(1), 5000);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
    startSlideInterval(); // Reset interval when manually changing slides
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    startSlideInterval(); // Reset interval when manually changing slides
}

function showSlides(n) {
    const container = document.querySelector('.slideshow-container');
    if (!container) return;

    const slides = container.querySelectorAll('.slide');
    const dots = container.querySelectorAll('.dot');
    
    if (!slides.length) return;

    // Handle wrapping
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }

    // Hide all slides and remove active class from dots
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', initSlideshow);
