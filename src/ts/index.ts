window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let history = [];
  let memory = 0;
  let isDarkMode = false;
  let isScientificMode = false;

  const switchThemeButton = document.getElementById("switchTheme");
  switchThemeButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
  });

  const toggleScientificButton = document.getElementById("toggleScientific");
  toggleScientificButton.addEventListener("click", () => {
    isScientificMode = !isScientificMode;
    // Add logic here to show/hide scientific buttons or change layout
    // Example: you could add a 'scientific' class to the buttons and toggle its visibility
  });

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (buttonText === "=") {
        try {
          const result = eval(currentInput);
          display.value = result.toString();
          history.push(currentInput + " = " + result);
          currentInput = result.toString(); // Update currentInput with the result
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "C") {
        currentInput = "";
        display.value = "";
      } else if (buttonText === "AC"){
          currentInput = "";
          history = [];
          display.value = "";
          document.getElementById("history").innerHTML = "";
       } else if (buttonText === "History") {
        const historyContainer = document.getElementById("historyContainer");
        historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
        document.getElementById("history").innerHTML = history.join("\n");
      } else if (buttonText === "Clear History"){
            history = [];
            document.getElementById("history").innerHTML = "";
      } else if (buttonText === "←") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
        } else if (buttonText === "Copy Result") {
            navigator.clipboard.writeText(display.value);
      } else if (buttonText === "MR") {
        display.value = memory.toString();
        currentInput = memory.toString();
      } else if (buttonText === "MC") {
          memory = 0; // Clear memory
      } else if (buttonText === "M+") {
        memory += parseFloat(display.value);
      } else {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });
});
