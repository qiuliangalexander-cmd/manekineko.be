// ===========================
// NAVIGATION HAMBURGER
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(212, 175, 55, 0.3)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.borderBottomColor = '#404040';
        navbar.style.backdropFilter = 'none';
    }
});

// ===========================
// FORM HANDLING
// ===========================

const reservationForm = document.querySelector('.reservation-form form');
if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(reservationForm);
        const guests = reservationForm.querySelector('select').value;
        const date = reservationForm.querySelector('input[type="date"]').value;
        const time = reservationForm.querySelector('input[type="time"]').value;
        
        if (guests && date && time) {
            alert(`Réservation confirmée !\n\nNombre de personnes: ${guests}\nDate: ${date}\nHeure: ${time}\n\nMerci de votre réservation !`);
            reservationForm.reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
}

// ===========================
// ANIMATION ON SCROLL
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe menu items, review items, and gallery items
const animatedElements = document.querySelectorAll('.menu-item, .review-item, .gallery-item, .feature-item');
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===========================
// ACTIVE NAV LINK
// ===========================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary)';
        }
    });
});

// ===========================
// MODAL/LIGHTBOX FOR GALLERY
// ===========================

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const emoji = this.textContent;
        alert(`Image: ${emoji}\n\nCliquez pour agrandir`);
    });
});

// ===========================
// MENU ITEM HOVER EFFECT
// ===========================

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// SMOOTH COUNTER ANIMATION
// ===========================

function animateCounter(element, start, end, duration = 2000) {
    let current = start;
    const increment = (end - start) / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Initialize on page load
window.addEventListener('load', () => {
    console.log('Maneki Neko website loaded successfully!');
});