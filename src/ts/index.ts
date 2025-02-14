// ... (Existing code)
//Triple Function
document.getElementById("calculate-triple")?.addEventListener("click", () => {
    const num = parseFloat(currentInput);
    currentInput = (num * 3).toString();
    display.value = currentInput;
});
// ... (Rest of the code)