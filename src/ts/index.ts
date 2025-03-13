// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
// ... (Other existing code and functions)
// ... existing filters
//Absolute Value
// ... (Existing functions)
//Floor function
// ... existing code
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
        display.value = Math.log(currentValue).toString();
    } else {
        display.value = "Error";
    }
});
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    currentExpression += '%';
    currentExpressionDisplay.textContent = currentExpression;
});
const memoryClearButton = document.getElementById('MC') as HTMLButtonElement;
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
const lastAnswerButton = document.getElementById('last-answer') as HTMLButtonElement;
lastAnswerButton.addEventListener('click', () => {
    display.value = lastAnswer.toString();
});
