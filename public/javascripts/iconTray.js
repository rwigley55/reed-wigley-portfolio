const icons = [
  { filename: "./assets/icons/html.svg", title: "HTML" },
  { filename: "./assets/icons/css.svg", title: "CSS" },
  { filename: "./assets/icons/bootstrap.svg", title: "Bootstrap" },
  { filename: "./assets/icons/tailwind.svg", title: "Tailwind" },
  { filename: "./assets/icons/javascript.svg", title: "JavaScript" },
  { filename: "./assets/icons/react.svg", title: "React" },
  { filename: "./assets/icons/wordpress.svg", title: "WordPress" },
  { filename: "./assets/icons/ga.svg", title: "Google Analytics" },
  { filename: "./assets/icons/gtm.svg", title: "Google Tag Manager" },
];

const iconTray = document.querySelector("#icon-tray");

for (const icon of icons) {
  const span = document.createElement("span");

  const img = document.createElement("img");
  img.src = `${icon.filename}`;
  img.alt = icon.title;

  const p = document.createElement("p");
  p.textContent = icon.title;
  p.classList.add("fs-sm", "align-text-center");

  span.appendChild(img);
  span.appendChild(p);

  iconTray.appendChild(span);
}
