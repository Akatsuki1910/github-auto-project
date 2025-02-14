// ... (Existing code)
//Half Function
document.getElementById("calculate-half")?.addEventListener("click", () => {
    const num = parseFloat(currentInput);
    currentInput = (num / 2).toString();
    display.value = currentInput;
});
// ... (Rest of the code)