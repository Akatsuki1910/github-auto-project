window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let history = [];
  let memory = 0;
  let isDarkMode = false;

  const switchThemeButton = document.getElementById("switchTheme");
  switchThemeButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
  });

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      switch (buttonText) {
        case "=":
          // 以下略
          break;
        case "log<sub>10</sub>":
            // 以下略
            break;        
        case "New Window":
            window.open('https://www.google.com', '_blank');
            break;  
        case "Dup":
            currentInput = display.value + display.value;
            display.value = currentInput;
            break;        
        default:
          currentInput += buttonText;
          display.value = currentInput;
      }
    });
  });

  // History button functionality
  // 以下略
});
