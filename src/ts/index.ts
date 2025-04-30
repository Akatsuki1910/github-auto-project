// ... (Existing code)
const calculateExpressionButton = document.getElementById('calculate-expression') as HTMLButtonElement;
calculateExpressionButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        display.value = math.evaluate(display.value).toString();
    } catch (e) {
        display.value = "Invalid expression";
    }
});
const clearLastAnswerButton = document.getElementById('clear-last-answer') as HTMLButtonElement;
let lastAnswer = '';
clearLastAnswerButton.addEventListener('click', () => {
    lastAnswer = '';
});
// ... (Rest of existing code)