export default function loadMenu() {
  const content = document.getElementById("content");

  const menuSection = document.createElement("div");
  menuSection.className = "menu";

  const heading = document.createElement("h2");
  heading.textContent = "Our Signature Dishes";

  const menuItems = [
    {
      name: "Truffle Risotto",
      price: "$32",
      desc: "Arborio rice with white truffle essence",
    },
    {
      name: "Wagyu Steak",
      price: "$65",
      desc: "A5 Japanese Wagyu with red wine reduction",
    },
    {
      name: "Lobster Thermidor",
      price: "$58",
      desc: "Canadian lobster with gruyère crust",
    },
  ];

  const menuList = document.createElement("div");
  menuList.className = "menu-items";

  menuItems.forEach((item) => {
    const div = document.createElement("div");
    div.className = "menu-item";

    div.innerHTML = `
        <h3>${item.name} <span>${item.price}</span></h3>
        <p>${item.desc}</p>
      `;

    menuList.appendChild(div);
  });

  menuSection.append(heading, menuList);
  content.appendChild(menuSection);
}
