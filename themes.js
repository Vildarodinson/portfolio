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

      break;
    case 2:
      root.style.setProperty("--primary-color", "#2c3e50");
      root.style.setProperty("--secondary-color", "#6b63c9");
      root.style.setProperty("--background-color", "#ecf0f1");
      root.style.setProperty("--text-color", "#333");
      root.style.setProperty("--work-bg", "#dcdcdc");
      root.style.setProperty("--home-bg", "#456");

      break;
    case 3:
      root.style.setProperty("--primary-color", "#007ea7");
      root.style.setProperty("--secondary-color", "#00a8e8");
      root.style.setProperty("--background-color", "#90e0ef");
      root.style.setProperty("--text-color", "#555");
      root.style.setProperty("--work-bg", "#b3e3ff");
      root.style.setProperty("--home-bg", "#789");
      break;
  }
}
