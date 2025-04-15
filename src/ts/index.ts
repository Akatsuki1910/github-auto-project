// ... (Existing code)
const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    display.value += Math.PI.toString();
});
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
const display = document.getElementById('display') as HTMLInputElement;
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        ans = math.exp(currentValue);
        display.value = ans.toString();
        history.push(`exp(${currentValue}) = ${ans}`);
    }
});
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
// ... (rest of the code)