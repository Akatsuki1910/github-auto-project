// ... (Existing code)
let history: string[] = [];
const historyButton = document.getElementById('history') as HTMLButtonElement;
historyButton.addEventListener('click', () => {
    alert(history.join('\n'));
});
const ansButton = document.getElementById('ans') as HTMLButtonElement;
let ans = 0;
ansButton.addEventListener('click', () => {
    display.value = ans.toString();
    history.push(`Ans = ${ans}`);
});
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
expm1Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = math.expm1(currentValue);
        display.value = ans.toString();
        history.push(`expm1(${currentValue}) = ${ans}`);
    }
});
// ... (rest of the code)
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    history = [];
});
const parenthesesOpenButton = document.getElementById('parentheses-open') as HTMLButtonElement;
parenthesesOpenButton.addEventListener('click', () => {
    display.value += '(';
});
const parenthesesCloseButton = document.getElementById('parentheses-close') as HTMLButtonElement;
parenthesesCloseButton.addEventListener('click', () => {
    display.value += ')';
});