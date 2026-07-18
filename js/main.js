/*=========================================
 ZAWADI EVENT
 main.js
==========================================*/

// ================================
// Sticky Navigation
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ================================
// Scroll Reveal Animation
// ================================

const reveals = document.querySelectorAll(
    ".card, .speaker-card, .timeline-item, .venue-grid, .faq-item, .register form"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < triggerBottom) {

            item.classList.add("active");

            item.classList.add("reveal");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ================================
// Active Navigation Highlight
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Smooth Button Hover Effect
// ================================

const buttons = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .btn-register, .btn-nav"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});


// ================================
// Registration Form
// ================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "2px solid red";

            } else {

                input.style.border = "none";

            }

        });

        if (valid) {

            alert("🎉 Thank you for registering for Zawadi June Conference!");

            form.reset();

        }

    });

}


// ================================
// Hero Fade on Scroll
// ================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    hero.style.opacity = 1 - scroll / 1200;

});


// ================================
// Speaker Hover Glow
// ================================

const speakers = document.querySelectorAll(".speaker-card");

speakers.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 25px 60px rgba(0,74,152,.35)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});


// ================================
// Page Loader (Optional)
// ================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ================================
// Console Welcome
// ================================

console.log(
`=================================

 ZAWADI JUNE CONFERENCE

 Professional & Corporate Workshops

 Website Loaded Successfully

=================================`);