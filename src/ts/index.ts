// ... (Existing code)
const signChangeButton = document.getElementById('sign-change');
if (signChangeButton) {
    signChangeButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const currentValue = parseFloat(display.value);
            display.value = (-currentValue).toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
const clearHistoryButton = document.getElementById('clear-history');
if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', () => {
        const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
        if (currentExpressionDisplay) {
            currentExpressionDisplay.textContent = '';
        }
    });
}
const historyButton = document.getElementById('history');
let history = [];
if (historyButton) {
    historyButton.addEventListener('click', () => {
        alert(history.join('\n'));
    });
}
const ansButton = document.getElementById('ans');
let lastAnswer = 0;
if (ansButton) {
    ansButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = lastAnswer.toString();
    });
}
// ... (Existing code)