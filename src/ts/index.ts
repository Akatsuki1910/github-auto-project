// ... (Existing code)
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    // Implement nth-root logic. This is a placeholder and requires additional implementation for a functional nth-root.
    currentExpressionDisplay.textContent = `${display.value}^(1/y)`;
    // Placeholder for the actual calculation.  This needs more complex logic for user input of y.
    display.value = Math.pow(parseFloat(display.value), 1/2).toString();
});
// ... (Rest of the code)