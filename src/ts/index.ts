// ... (Existing code)
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const openHistoryButton = document.getElementById('open-history') as HTMLButtonElement;
let history: string[] = [];
openHistoryButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none') {
        historyDisplay.style.display = 'block';
        historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join(''); // Display history items with <p> tags for better formatting
    }
    else {
        historyDisplay.style.display = 'none';
    }
});
const equalsButton = document.getElementById('=') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const display = document.getElementById('display') as HTMLInputElement;
        // ... existing calculation logic (replace with actual calculation)
        const lastAnswer = eval(display.value); // Example calculation. Replace with your actual logic
        display.value = lastAnswer.toString();
        history.push(display.value); // Add to history
    }
    catch (error) {
        // ... existing error handling
    }
});
//Existing code ...
const exponentButton = document.getElementById('exponent') as HTMLButtonElement;
exponentButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += '**';
});
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
factorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = factorial(currentValue);
        display.value = result.toString();
    }
});
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.abs(parseFloat(display.value)).toString();
});
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * -1).toString();
});
const squareButton = document.getElementById('square') as HTMLButtonElement;
squareButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * currentValue).toString();
});
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * currentValue * currentValue).toString();
});
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.log(currentValue).toString();
});
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.exp(currentValue).toString();
});