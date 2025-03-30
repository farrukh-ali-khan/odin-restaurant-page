import restaurantImg from "./restaurant.jpg";

export default function loadHome() {
  const content = document.getElementById("content");

  // Create elements
  const hero = document.createElement("div");
  hero.className = "hero";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Gourmet Haven";

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
