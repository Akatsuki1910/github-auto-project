window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display") as HTMLInputElement;
  const buttons = document.querySelectorAll("#calculator button");
  let currentInput = "";
  const historyElement = document.getElementById("history") as HTMLParagraphElement;
  let calculationHistory = [];

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      if (buttonText === "C") {
        currentInput = "";
      } else if (buttonText === "=") {
        try {
          currentInput = eval(currentInput).toString();
          calculationHistory.push(currentInput);
          historyElement.textContent = calculationHistory.join(", ");
        } catch (error) {
          currentInput = "Error";
        }
      } else if (buttonText === "←" || buttonText === "&larr;" ) {
        currentInput = currentInput.slice(0, -1);
      } else if (buttonText === "x<sup>y</sup>") {
        currentInput += "**";
      } else if (buttonText === "+/-") {
        currentInput = (parseFloat(currentInput) * -1).toString();
      }else if (buttonText === "%") {
          try{
            currentInput = (parseFloat(currentInput) /100).toString();
          }catch(error){
            currentInput = "Error";
          }
      } else if (buttonText === "π"){
          currentInput += Math.PI;
      } else {
        currentInput += buttonText;
      }

      display.value = currentInput;
    });
  });
});
