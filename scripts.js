// Form submission handling
const form = document.getElementById('hireForm');
const response = document.getElementById('formResponse');

form.addEventListener('submit', e => {
    e.preventDefault();
    const { name, email, message } = form.elements;
    
    if (name.value && email.value && message.value) {
        response.innerText = `Thank you for considering me, ${name.value}! I will get back to you soon.`;
        form.reset();
    } else {
        response.innerText = 'Please fill in all fields.';
    }
});

// Menu toggling
document.getElementById('menuIcon').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('show');
});

// Collapse menu on link click
const navLinks = document.querySelectorAll('#navLinks li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('show');
    });
});

// Header transparency on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
