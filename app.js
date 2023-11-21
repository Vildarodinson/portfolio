const root = document.documentElement;
const themeSwitcher = document.getElementById("themeSwitcher");

let currentTheme = 1; // Initial theme (1, 2, or 3)

themeSwitcher.addEventListener("click", () => {
  currentTheme = (currentTheme % 3) + 1; // Cycle through themes 1, 2, 3
  applyTheme(currentTheme);
});

function applyTheme(theme) {
  switch (theme) {
    case 1:
      root.style.setProperty("--primary-color", "#1c1c1c");
      root.style.setProperty("--secondary-color", "#f76c6c");
      root.style.setProperty("--background-color", "#fff");
      root.style.setProperty("--text-color", "#555");
      root.style.setProperty("--work-bg", "#f4f4f4");
      root.style.setProperty("--home-bg", "#333");
      root.style.setProperty("--skills-bg", "#fff");
      root.style.setProperty("--contact-bg", "#f4f4f4");
      root.style.setProperty("--gradient1", "#451f1c");
      root.style.setProperty("--gradient2", "#000000");
      root.style.setProperty("--background-text-color", "#fff");
      break;
    case 2:
      root.style.setProperty("--primary-color", "#2c3e50");
      root.style.setProperty("--secondary-color", "#6b63c9");
      root.style.setProperty("--background-color", "#ecf0f1");
      root.style.setProperty("--text-color", "#333");
      root.style.setProperty("--work-bg", "#ecf0f1");
      root.style.setProperty("--home-bg", "#456");
      root.style.setProperty("--skills-bg", "#ecf0f1");
      root.style.setProperty("--contact-bg", "#ecf0f1");
      root.style.setProperty("--gradient1", "#362c52");
      root.style.setProperty("--gradient2", "#000000");
      root.style.setProperty("--background-text-color", "#ecf0f1");
      break;
    case 3:
      root.style.setProperty("--primary-color", "#123a54");
      root.style.setProperty("--secondary-color", "#1399f2");
      root.style.setProperty("--background-color", "#0b202e");
      root.style.setProperty("--text-color", "#fff");
      root.style.setProperty("--work-bg", "#123a54");
      root.style.setProperty("--home-bg", "#1a374a");
      root.style.setProperty("--skills-bg", "#39818f");
      root.style.setProperty("--contact-bg", "#53758c");
      root.style.setProperty("--gradient1", "#1d3240");
      root.style.setProperty("--gradient2", "#000000");
      root.style.setProperty("--background-text-color", "#b5e2ff");
      break;
  }
}
