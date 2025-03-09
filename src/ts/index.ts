// ... (Existing code)
//Added Feature: Reset Button
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
    display.value = '';
    currentExpression = '';
    currentExpressionDisplay.textContent = '';
});

//Added Feature: Switch Notation
const switchNotationButton = document.getElementById('switch-notation') as HTMLButtonElement;
let currentNotation = 10; // Start with decimal
switchNotationButton.addEventListener('click', () => {
    currentNotation = currentNotation === 10 ? 2 : (currentNotation === 2 ? 16 : 10);
    switchNotationButton.textContent = `Switch Notation (${currentNotation === 10 ? 'Dec' : (currentNotation === 2 ? 'Bin' : 'Hex')})`;
    // Convert and display based on current notation
    // ... (Implementation for converting and displaying)
});

// ... (Rest of the existing code)