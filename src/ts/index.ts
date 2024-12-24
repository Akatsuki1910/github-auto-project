window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let history = [];
  let memory = 0;
  let isDarkMode = false;
  let isScientificMode = false; // Added for scientific mode toggle

  const switchThemeButton = document.getElementById("switchTheme");
  switchThemeButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
  });

  // Scientific mode toggle
  const toggleScientificButton = document.getElementById("toggleScientific");
  toggleScientificButton.addEventListener("click", () => {
    isScientificMode = !isScientificMode;
    // Add logic here to show/hide scientific buttons or change layout
    // Example: you could add a 'scientific' class to the buttons and toggle its visibility
  });

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      // ... (rest of the button click logic)
    });
  });

  // ... (rest of the code)
});
