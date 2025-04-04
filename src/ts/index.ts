// ... (Existing code)
const lcmButton = document.getElementById('lcm') as HTMLButtonElement;
lcmButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const numbers = [12, 18, 24];
        currentExpressionDisplay.textContent = `lcm(${numbers.join(', ')})`;
        const lcmResult = math.lcm(...numbers);
        display.value = lcmResult.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)