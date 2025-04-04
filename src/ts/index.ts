// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const currentValue = parseFloat(display.value);
        const modulo = parseFloat(prompt("Enter the modulo value:", "2") || "2");
        const result = currentValue % modulo;
        currentExpressionDisplay.textContent = `${currentValue} % ${modulo}`;
        display.value = result.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)