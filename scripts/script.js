// script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Dark Mode Toggle
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            body.classList.toggle("dark-mode");
            toggleButton.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
        });
    } else {
        console.warn("Theme toggle button not found");
    }

    // Dynamic Greeting
    const greeting = document.getElementById("greeting");
    if (greeting) {
        const hour = new Date().getHours();
        let timeGreeting = "Good evening!";

        if (hour < 12) {
            timeGreeting = "Good morning!";
        } else if (hour < 18) {
            timeGreeting = "Good afternoon!";
        }

        greeting.textContent = `${timeGreeting} I'm Adam Morrissey`;
    } else {
        console.warn("Greeting element not found");
    }

    // Hamburger Menu Functionality
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const sidebarMenu = document.getElementById("sidebar-menu");

    if (hamburgerMenu && sidebarMenu) {
        console.log("Hamburger menu elements found");

        hamburgerMenu.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent click event from bubbling up
            sidebarMenu.classList.toggle("visible");
        });

        // Close sidebar menu when clicking outside of it
        document.addEventListener("click", function(event) {
            if (!sidebarMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                sidebarMenu.classList.remove("visible");
            }
        });

        // Close sidebar menu when a link is clicked
        const sidebarLinks = sidebarMenu.querySelectorAll("a");
        sidebarLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                sidebarMenu.classList.remove("visible");
            });
        });
    } else {
        console.warn("Hamburger menu or sidebar menu elements not found");
    }

    // Form Validation (on the Contact page)
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                alert("Please fill out all fields.");
                event.preventDefault();
            } else if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
            }
        });
    }
});