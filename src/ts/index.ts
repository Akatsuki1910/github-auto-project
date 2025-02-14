// ... (Existing code)
//Sixteenth Function
document.getElementById("calculate-sixteenth")?.addEventListener("click", () => {
    const num = parseFloat(currentInput);
    currentInput = (num / 16).toString();
    display.value = currentInput;
});
// ... (Rest of the code)