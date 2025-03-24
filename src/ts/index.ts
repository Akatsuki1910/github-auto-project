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
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', () => {
    const display = document.getElementById('display');
    navigator.clipboard.writeText(display.value);
});
const ansButton = document.getElementById('ans');
let lastAnswer = '';
ansButton.addEventListener('click', () => {
  const display = document.getElementById('display');
  display.value += lastAnswer;  
});
