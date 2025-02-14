// ... (Existing code)
//x^n Function
document.getElementById("calculate-x-to-the-power-n")?.addEventListener("click", () => {
    const base = parseFloat(currentInput);
    const exponent = parseFloat(prompt("Enter the exponent:", "2") || "2");
    currentInput = Math.pow(base, exponent).toString();
    display.value = currentInput;
});
//Square Root Function
document.getElementById("sqrt")?.addEventListener("click", () => {
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    display.value = currentInput;
});
//Percentage function
document.getElementById('percentage')?.addEventListener('click', () => {
    currentInput = (parseFloat(currentInput) / 100).toString();
    display.value = currentInput;
});
//Pi function
document.getElementById('pi')?.addEventListener('click', () => {
    currentInput = Math.PI.toString();
    display.value = currentInput;
});
//Factorial function
document.getElementById('factorial')?.addEventListener('click', () => {
    const num = parseInt(currentInput);
    if (isNaN(num)) {
        currentInput = "Error";
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        currentInput = result.toString();
    }
    display.value = currentInput;
});
//Parenthesis function
let parenthesisOpen = false;
document.getElementById('parenthesis')?.addEventListener('click', () => {
  if (!parenthesisOpen) {
    currentInput += '(';
    parenthesisOpen = true;
  } else {
    currentInput += ')';
    parenthesisOpen = false;
  }
  display.value = currentInput;
});
// ... (Rest of the code)