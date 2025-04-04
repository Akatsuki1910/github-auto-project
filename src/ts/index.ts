// ... (Existing code)
const gcdButton = document.getElementById('gcd') as HTMLButtonElement;
gcdButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const numbers = [12, 18, 24];
        currentExpressionDisplay.textContent = `gcd(${numbers.join(', ')})`;
        const gcdResult = math.gcd(...numbers);
        display.value = gcdResult.toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)