document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for reveal animations
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal-text, .reveal-img').forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            } else if (targetId.includes('index.html#')) {
                // If on another page and going to a section on index.html
                // Standard link behavior is fine, or we could handle it via JS
            }
        });
    });

    // Navbar behavior
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    const updateNavbar = () => {
        const currentScrollY = window.scrollY;

        // Hide/Show on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down & past threshold - hide navbar
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up or at top - show navbar
            navbar.classList.remove('navbar-hidden');
        }

        // Transparency/Padding on scroll
        if (currentScrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }

        lastScrollY = currentScrollY;
    };

    // Initialize state on load
    updateNavbar();

    // Listen for scroll events
    window.addEventListener('scroll', updateNavbar);

    // Log for verification
    console.log('Portfolio initialized');
});
