document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const themeSwitcher = document.getElementById("themeSwitcher");

  applyTheme(themeSwitcher.value);

  themeSwitcher.addEventListener("change", () => {
    const selectedTheme = themeSwitcher.value;
    applyTheme(selectedTheme);
  });

  function applyTheme(theme) {
    body.className = theme;
  }
});
