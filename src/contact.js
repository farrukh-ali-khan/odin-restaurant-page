export default function loadContact() {
  const content = document.getElementById("content");

  const contactSection = document.createElement("div");
  contactSection.className = "contact";

  contactSection.innerHTML = `
      <h2>Visit Us</h2>
      <div class="contact-info">
        <p>📞 (555) 123-4567</p>
        <p>📍 123 Gourmet Street, Food City FC 12345</p>
        <p>📧 info@gourmethaven.com</p>
      </div>
      <div class="hours">
        <h3>Opening Hours</h3>
        <p>Mon-Fri: 11:30 AM - 10:00 PM</p>
        <p>Weekends: 11:00 AM - 11:00 PM</p>
      </div>
    `;

  content.appendChild(contactSection);
}
