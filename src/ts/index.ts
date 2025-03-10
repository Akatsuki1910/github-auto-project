// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});
const toggleScientificButton = document.getElementById('toggle-scientific') as HTMLButtonElement;
const calculatorContainer = document.getElementById('calculator') as HTMLDivElement;
toggleScientificButton.addEventListener('click', () => {
    calculatorContainer.classList.toggle('scientific-layout');
});
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
    display.value = '0';
    currentExpression = '';
    currentExpressionDisplay.textContent = '';
});
// ... (rest of the code)