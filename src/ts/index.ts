// ... (Existing code)
let history: string[] = [];
const historyButton = document.getElementById('history');
if (historyButton) {
    historyButton.addEventListener('click', () => {
        alert(history.join('\n'));
    });
}
const display = document.getElementById('display') as HTMLInputElement;
const equalsButton = document.querySelector('.equals');
if (equalsButton && display) {
    equalsButton.addEventListener('click', () => {
        try {
            const result = math.evaluate(display.value);
            display.value = result.toString();
            history.push(display.value);
            // 追加機能：計算結果をcurrentExpressionDisplayに表示
            const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
            if (currentExpressionDisplay) {
                currentExpressionDisplay.textContent = display.value;
            }
        }
        catch (error) {
            display.value = 'Error';
        }
    });
}