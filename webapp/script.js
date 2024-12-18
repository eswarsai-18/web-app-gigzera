let slideIndex = 1; // Start with the first slide (index is 1-based)
let slideTimer; // Store the timeout reference for auto-slide
let isNavigating = false; // Prevent rapid navigation

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const counter = document.querySelector('.counter');

    // Ensure slideIndex wraps around
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;

    // Hide all slides
    slides.forEach(slide => (slide.style.display = 'none'));

    // Show the current slide
    slides[slideIndex - 1].style.display = 'block';

    // Update the counter
    counter.textContent = `${slideIndex.toString().padStart(2, '0')}/${slides.length.toString().padStart(2, '0')}`;

    // Automatically switch to the next slide after 10 seconds
    slideTimer = setTimeout(() => {
        slideIndex++;
        showSlides();
    }, 4000); // 10-second interval
}

function changeSlide(direction) {
    if (isNavigating) return; // Prevent rapid navigation

    isNavigating = true; // Set navigation lock
    clearTimeout(slideTimer); // Stop the automatic slideshow

    slideIndex += direction; // Adjust the slide index based on direction
    showSlides(); // Show the new slide immediately

    // Allow new navigation after a short delay (to prevent rapid clicking)
    setTimeout(() => {
        isNavigating = false; // Release the navigation lock
    }, 300); // 300ms lock duration
}

// Initialize the slideshow on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});
