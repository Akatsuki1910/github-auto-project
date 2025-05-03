// ... (Existing code)
const toggleFontSizeButton = document.getElementById('toggle-fontSize') as HTMLButtonElement;
const displayElement = document.getElementById('display') as HTMLInputElement;
toggleFontSizeButton.addEventListener('click', () => {
    if (displayElement.classList.contains('large-font')) {
        displayElement.classList.remove('large-font');
    } else {
        displayElement.classList.add('large-font');
    }
});
const toggleColorSchemeButton = document.getElementById('toggle-color-scheme') as HTMLButtonElement;
const bodyElement = document.body;
toggleColorSchemeButton.addEventListener('click', () => {
    if (bodyElement.classList.contains('dark-scheme')) {
        bodyElement.classList.remove('dark-scheme');
        bodyElement.classList.add('light-scheme');
    } else {
        bodyElement.classList.remove('light-scheme');
        bodyElement.classList.add('dark-scheme');
    }
});
const toggleHistoryDisplayButton = document.getElementById('toggle-history-display') as HTMLButtonElement;
const historyDisplayElement = document.getElementById('history-display') as HTMLDivElement;
toggleHistoryDisplayButton.addEventListener('click', () => {
    if (historyDisplayElement.style.display === 'none') {
        historyDisplayElement.style.display = 'block';
    } else {
        historyDisplayElement.style.display = 'none';
    }
});
const toggleCalculatorVisibilityButton = document.getElementById('toggle-calculator-visibility') as HTMLButtonElement;
const calculatorElement = document.getElementById('calculator') as HTMLDivElement;
toggleCalculatorVisibilityButton.addEventListener('click', () => {
    if (calculatorElement.style.display === 'none') {
        calculatorElement.style.display = 'block';
    } else {
        calculatorElement.style.display = 'none';
    }
});
// ... (Rest of existing code)