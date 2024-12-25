window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let history = [];
  let memory = 0;
  let isDarkMode = false;
  let isScientificMode = false;
  let lastAnswer = 0; 

  const copyDisplayButton = document.getElementById("copy-display");
  copyDisplayButton.addEventListener("click", () => {
    navigator.clipboard.writeText(display.value).then(() => {
      alert("Copied to clipboard!");
    }, () => {
      alert("Failed to copy to clipboard.");
    });
  });

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (buttonText === "=") {
        try {
          const result = eval(currentInput);
          display.value = result.toString();
          history.push(currentInput + " = " + result);
          currentInput = result.toString(); 
          lastAnswer = result; 
          const historyElement = document.getElementById("history") as HTMLParagraphElement; 
          historyElement.textContent = history.join("\n");
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "C") {
        currentInput = "";
        display.value = "";
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
      } else if (buttonText === "Ans") {
        currentInput += lastAnswer;
        display.value = currentInput;
      } else if (buttonText === "!") {
        try {
          const num = parseInt(currentInput);
          if (isNaN(num)) throw new Error("Invalid input for factorial");
          if (num < 0) throw new Error("Factorial of negative number is not defined");
          let result = 1;
          for (let i = 2; i <= num; i++) {
            result *= i;
          }
          display.value = result.toString();
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error: " + error.message;
        }
      } else if (buttonText === "Round") {
        try {
          const num = parseFloat(currentInput);
          if (isNaN(num)) throw new Error("Invalid input for round");
          const result = Math.round(num);
          display.value = result.toString();
          currentInput = result.toString();
        } catch (error) {
          display.value = "Error: " + error.message;
        }
      } else {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });
});
