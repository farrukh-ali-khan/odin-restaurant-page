// src/home.js
import restaurantImg from "./images/restaurant.jpg"; // Updated path

export default function loadHome() {
  const content = document.getElementById("content");

  // Create elements
  const hero = document.createElement("div");
  hero.className = "hero";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Restaurant";

  const image = new Image();
  image.src = restaurantImg;
  image.alt = "Restaurant interior";

  const description = document.createElement("p");
  description.textContent =
    "Experience culinary excellence with our award-winning chefs and premium ingredients. Established in 2010, we continue to deliver unforgettable dining experiences.";

  // Assemble components
  hero.append(heading, image, description);
  content.appendChild(hero);
}
