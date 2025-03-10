// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
// ... (Other existing code)
const lastAnswerButton = document.getElementById('last-answer') as HTMLButtonElement;
lastAnswerButton.addEventListener('click', () => {
    currentExpression += lastAnswer.toString();
    currentExpressionDisplay.textContent = currentExpression;
});
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        lastAnswer = eval(currentExpression);
        display.value = lastAnswer.toString();
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
    }
    catch (error) {
        display.value = 'Error';
    }
});