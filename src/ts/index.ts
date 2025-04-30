// ... (Existing code)
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
const clearLastHistoryButton = document.getElementById('clear-last-history') as HTMLButtonElement;
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let historyArr:string[] = [];
const display = document.getElementById('display') as HTMLInputElement;
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    historyArr = [];
    historyDisplay.innerHTML = '';
});
clearLastHistoryButton.addEventListener('click', () => {
    historyArr.pop();
    historyDisplay.innerHTML = historyArr.join('<br>');
});
calculateExpressionButton.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value).toString();
        display.value = result;
        historyArr.push(display.value);
        historyDisplay.innerHTML = historyArr.join('<br>');
    } catch (e) {
        display.value = "Invalid expression";
    }
});
duplicateButton.addEventListener('click', () => {
    if (historyArr.length > 0) {
        display.value = historyArr[historyArr.length - 1];
    }
});
// ... (Rest of existing code)