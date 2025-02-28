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

// ... (Rest of the existing code)