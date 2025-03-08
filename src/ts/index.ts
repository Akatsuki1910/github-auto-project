// ... (Existing code)
//Added Feature: Degree/Radian Toggle
let isDegreeMode = true;
const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
degRadButton.addEventListener('click', () => {
    isDegreeMode = !isDegreeMode;
    degRadButton.textContent = isDegreeMode ? 'Deg' : 'Rad';
});
// ... other code
// Added Feature: Factorial Calculation
const calculateFactorialButton = document.getElementById('calculateFactorial') as HTMLButtonElement;
calculateFactorialButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = factorial(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `${currentValue}! = ${result}`;
        historyArr.push(`${currentValue}! = ${result}`);
        updateHistory();
    }
});
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else if (n < 0 || !Number.isInteger(n)) {
        return "undefined";
    }
    else {
        return n * factorial(n - 1);
    }
}
//Added Feature: Clear History Button
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    historyArr = [];
    updateHistory();
});
const updateHistory = () => {
    const historyDisplay = document.getElementById('history-display');
    historyDisplay.innerHTML = ''; // Clear existing history
    historyArr.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        historyDisplay.appendChild(p);
    });
};
//Added Feature: Show/Hide Scientific Buttons
const scientificSection = document.querySelector('.scientific-section');
const openCloseScientificButton = document.getElementById('open-close-scientific') as HTMLButtonElement;
let isScientificOpen = true; // Initially open
openCloseScientificButton.addEventListener('click', () => {
    isScientificOpen = !isScientificOpen;
    if (isScientificOpen) {
        scientificSection.style.display = 'grid';
        openCloseScientificButton.textContent = 'Close Scientific';
    }
    else {
        scientificSection.style.display = 'none';
        openCloseScientificButton.textContent = 'Open Scientific';
    }
});
// ... rest of the code