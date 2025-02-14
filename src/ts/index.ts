// ... (Existing code)
//Eighth Function
document.getElementById("calculate-eighth")?.addEventListener("click", () => {
    const num = parseFloat(currentInput);
    currentInput = (num / 8).toString();
    display.value = currentInput;
});
// ... (Rest of the code)