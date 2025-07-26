document.addEventListener('DOMContentLoaded', function() {

    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    mobileMenuToggle.addEventListener('click', () => {
        // Toggle icon between bars and times (X)
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
        
        // Toggle mobile nav visibility
        if (mobileNav.style.display === 'flex') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'flex';
        }
    });
    
    // Close mobile menu when a link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
             mobileNav.style.display = 'none';
             const icon = mobileMenuToggle.querySelector('i');
             icon.classList.remove('fa-times');
             icon.classList.add('fa-bars');
        });
    });


    // 3. Animate on Scroll using Intersection Observer
    // This is more efficient than listening to the scroll event for animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When the element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it's visible
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});