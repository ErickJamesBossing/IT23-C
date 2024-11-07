// Select the .about-image element
const aboutImage = document.querySelector('.about-image');

// Create an IntersectionObserver to watch when the element enters the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class to start the animation
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after animation starts
        }
    });
}, {
    threshold: 0.5 // The animation triggers when 50% of the image is in the viewport
});

// Start observing the .about-image element
observer.observe(aboutImage);
