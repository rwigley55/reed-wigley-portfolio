const icons = [
  { filename: "../data/html.svg", title: "HTML" },
  { filename: "../data/css.svg", title: "CSS" },
  { filename: "../data/bootstrap.svg", title: "Bootstrap" },
  { filename: "../data/tailwind.svg", title: "Tailwind" },
  { filename: "../data/javascript.svg", title: "JavaScript" },
  { filename: "../data/react.svg", title: "React" },
  { filename: "../data/wordpress.svg", title: "WordPress" },
  { filename: "../data/ga.svg", title: "Google Analytics" },
  { filename: "../data/gtm.svg", title: "Google Tag Manager" },
];

const iconTray = document.querySelector("#icon-tray");

for (const icon of icons) {
  const span = document.createElement("span");

  const img = document.createElement("img");
  img.src = `data/${icon.filename}`;
  img.alt = icon.title;

  const p = document.createElement("p");
  p.textContent = icon.title;
  p.classList.add("fs-sm", "align-text-center");

  span.appendChild(img);
  span.appendChild(p);

  iconTray.appendChild(span);
}
