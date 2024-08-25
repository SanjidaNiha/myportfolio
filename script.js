document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.5s ease';
        setTimeout(() => el.style.opacity = '1', 300);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add Dynamic Highlight on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${id}"]`);

            if (scrollPos > sectionTop && scrollPos < sectionBottom) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    });
});
