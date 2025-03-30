import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// Initialize first page load
loadHome();

// Tab switching functionality
const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Set active state and load content
    tab.classList.add("active");
    const tabId = tab.dataset.tab;

    // Clear existing content
    content.innerHTML = "";

    // Load corresponding module
    switch (tabId) {
      case "home":
        loadHome();
        break;
      case "menu":
        loadMenu();
        break;
      case "contact":
        loadContact();
        break;
    }
  });
});

// Add this to index.js after tab switching logic
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking outside on mobile
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 768 &&
    !e.target.closest(".hamburger") &&
    !e.target.closest(".nav-links")
  ) {
    navLinks.classList.remove("active");
  }
});

// Update menu state on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
  }
});
