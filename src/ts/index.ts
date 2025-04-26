// ... (Existing code)
let angleMode = 'deg'; // Initial mode is degrees
let ans = 0;
document.getElementById('deg-rad')?.addEventListener('click', () => {
    angleMode = angleMode === 'deg' ? 'rad' : 'deg';
    display.value = angleMode;
});
const ansButton = document.getElementById('ans');
ansButton?.addEventListener('click', () => {
    display.value += ans.toString();
});
const display = document.getElementById('display');
const equalsButton = document.querySelector('.equals');
equalsButton?.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toString();
        ans = result; // Store the result in the 'ans' variable
        // Added feature: Display calculation history and clear button
        const historyItem = document.createElement('p');
        historyItem.textContent = `${display.value}`;
        const currentExpressionDisplay = document.getElementById('currentExpressionDisplay');
        currentExpressionDisplay?.appendChild(historyItem);
        const clearHistoryButton = document.createElement('button');
        clearHistoryButton.textContent = 'Clear History';
        clearHistoryButton.addEventListener('click', () => {
            currentExpressionDisplay?.innerHTML = '';
        });
        currentExpressionDisplay?.appendChild(clearHistoryButton);
        //Added feature: copy to clipboard
        navigator.clipboard.writeText(result.toString());
    }
    catch (error) {
        display.value = 'Error';
    }
});