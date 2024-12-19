window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  let bracketOpen = false;
  const historyElement = document.getElementById("history") as HTMLParagraphElement;
  let calculationHistory = [];
  let memory = 0;
  const historyContainer = document.getElementById("historyContainer");
  const historyBtn = document.getElementById("historyBtn");
  const clearHistoryBtn = document.getElementById("clearHistory") as HTMLButtonElement;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // ... (rest of the button click logic)

            } else if (buttonText === "History"){
                historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
            }
    });
  });

  clearHistoryBtn.addEventListener("click", () => {
      calculationHistory = [];
      historyElement.textContent = "";
  });

  historyBtn.addEventListener("click", () => {
      historyContainer.style.display = historyContainer.style.display === "none" ? "block" : "none";
      historyElement.textContent = calculationHistory.join(", ");
  });

  // ... (rest of the code)
});
