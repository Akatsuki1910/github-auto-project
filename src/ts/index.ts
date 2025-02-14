// ... (Existing code)
//Quarter Function
document.getElementById("calculate-quarter")?.addEventListener("click", () => {
    const num = parseFloat(currentInput);
    currentInput = (num / 4).toString();
    display.value = currentInput;
});
// ... (Rest of the code)