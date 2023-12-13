
// Enter Animation
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

const animatedElements = document.querySelectorAll('.animation-enter');
animatedElements.forEach(el => observer.observe(el));


