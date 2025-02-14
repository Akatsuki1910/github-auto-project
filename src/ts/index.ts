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
// ... (Rest of the code)