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
