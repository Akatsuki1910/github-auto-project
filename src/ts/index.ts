// ... (Existing code)

// Add sign change functionality

// ... (Existing variable declarations)

// ... (Existing Event Listeners)

const calculatePercentageButton = document.getElementById('calculate-percentage') as HTMLButtonElement;

calculatePercentageButton.addEventListener('click', () => {
    // ... existing code
});

// ... other button event listeners

const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (-currentValue).toString();
});

const reciprocalButton = document.getElementById('reciprocal') as HTMLButtonElement;
reciprocalButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (currentValue !== 0) {
        display.value = (1/currentValue).toString();
    } else {
      display.value = "Error";
    }
});

const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = display.value.slice(0, -1);
});

const clearButton = document.getElementById('clear') as HTMLButtonElement;
clearButton.addEventListener('click', () => {
  (document.getElementById('display') as HTMLInputElement).value = '';
});

//Added feature: Keyboard support for digits and operators
document.addEventListener('keydown', (event) => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (/^[0-9]$/.test(event.key)) {
        display.value += event.key;
    } else if (['+', '-', '*', '/', '.'].includes(event.key)) {
        display.value += event.key;
    } else if (event.key === 'Enter' || event.key === '=') {
       try{
        display.value = eval(display.value);
       }catch(e){
        display.value = "Error";
       }
    }
});

// Added parentheses buttons
const openParenthesisButton = document.getElementById('open-parenthesis') as HTMLButtonElement;
openParenthesisButton.addEventListener('click', () => {
    (document.getElementById('display') as HTMLInputElement).value += '(';
});

const closeParenthesisButton = document.getElementById('close-parenthesis') as HTMLButtonElement;
closeParenthesisButton.addEventListener('click', () => {
    (document.getElementById('display') as HTMLInputElement).value += ')';
});

// ... (Rest of the existing code)