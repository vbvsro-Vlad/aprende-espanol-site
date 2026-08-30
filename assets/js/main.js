/**
 * ==========================================================
 * Aprende Español
 * Main JavaScript
 * Version: 1.0
 * ==========================================================
 */

"use strict";

/**
 * ==========================================================
 * DOM READY
 * ==========================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("🇪🇸 Aprende Español loaded");

    initApp();
});

/**
 * ==========================================================
 * APPLICATION
 * ==========================================================
 */

function initApp() {
    initNavigation();
    initAnimations();
    initPhraseOfDay();
}

/**
 * ==========================================================
 * NAVIGATION
 * ==========================================================
 */

function initNavigation() {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (!menuToggle || !nav) return;

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
}

/**
 * ==========================================================
 * ANIMATIONS
 * ==========================================================
 */

function initAnimations() {
    const elements = document.querySelectorAll(".appear");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(element => observer.observe(element));
}

/**
 * ==========================================================
 * PHRASE OF THE DAY
 * ==========================================================
 */

function initPhraseOfDay() {
    // Будет подключён позже
}
