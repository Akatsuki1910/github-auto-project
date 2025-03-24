// ... (Existing code)
const leftParenthesisButton = document.getElementById('left-parenthesis');
leftParenthesisButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    display.value += '(';
});
const rightParenthesisButton = document.getElementById('right-parenthesis');
rightParenthesisButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    display.value += ')';
});
const clearHistoryButton = document.getElementById('clear-history');
clearHistoryButton.addEventListener('click', () => {
    // Implement clear history functionality here
    console.log('Clear history clicked');
    localStorage.removeItem('calculatorHistory');
});