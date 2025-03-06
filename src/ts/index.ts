// ... (Existing code)
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const openHistoryButton = document.getElementById('open-history') as HTMLButtonElement;
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
let history: string[] = [];
let ans = 0;

openHistoryButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none') {
        historyDisplay.style.display = 'block';
        historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    }
    else {
        historyDisplay.style.display = 'none';
    }
});

clearHistoryButton.addEventListener('click', () => {
    history = [];
    historyDisplay.innerHTML = '';
});

const equalsButton = document.getElementById('=') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const display = document.getElementById('display') as HTMLInputElement;
        ans = eval(display.value);
        display.value = ans.toString();
        history.push(display.value);
    }
    catch (error) {
        // ... existing error handling
    }
});
const ansButton = document.getElementById('toggle-ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += ans;
});

// ... other existing code

const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const inputValue = parseInt(display.value);
    if (isNaN(inputValue)){
        display.value = "Invalid input for factorial";
    }else{
        let result = 1;
        for(let i = 2; i <= inputValue; i++){
            result *= i;
        }
        display.value = result.toString();
    }
});

const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += Math.PI;
});

const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  display.value += '**';
});

const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.log10(parseFloat(display.value)).toString();
});

const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.exp(parseFloat(display.value)).toString();
});

const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.round(parseFloat(display.value)).toString();
});
