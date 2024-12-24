window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let history = [];
  let memory = 0;
  let isDarkMode = false;
  let isScientificMode = false;
  let lastAnswer = 0; // Store the last answer

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
          lastAnswer = result; // Store the last answer
          console.log("Calculation History:", history);
          const historyElement = document.getElementById("history") as HTMLParagraphElement; 
          historyElement.textContent = history.join("\n");
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
          (document.getElementById("history") as HTMLParagraphElement).textContent = "";
       } else if (buttonText === "History") {
        const historyContainer = document.getElementById("historyContainer");
        historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
        (document.getElementById("history") as HTMLParagraphElement).textContent = history.join("\n");
      } else if (buttonText === "Clear History"){
            history = [];
            (document.getElementById("history") as HTMLParagraphElement).textContent = "";
      } else if (buttonText === "⌫") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
        } else if (buttonText === "Copy Result") {
            navigator.clipboard.writeText(display.value);
      } else if (buttonText === "MR") {
        display.value = memory.toString();
        currentInput = memory.toString();
      } else if (buttonText === "MC") {
          memory = 0; 
      } else if (buttonText === "M+") {
        memory += parseFloat(display.value);
      } else if (buttonText === "+/-") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;      
      } else if (buttonText === "Ans") { // Added Ans functionality
        currentInput += lastAnswer;
        display.value = currentInput;
      } else {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });
});
