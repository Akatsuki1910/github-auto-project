// ... (Existing code)
// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
// ... (Existing code)
// ... (Existing variables)

// ... (Existing Event Listeners)

// ... (Existing functions and event listeners)

// ... (Existing Functions)

//Squared Sum Functionality

// ... (Other existing functions)

// Add power of two functionality
// ... existing code

//Add ln functionality
// ... existing code

// Add e functionality

//Add Mod functionality

// Add expm1 functionality

//Add sign change functionality

//Add Sum functionality

//Add Product functionality

// Add Average functionality

// Add Square Root functionality

// Add Cube Root functionality

// Add x^y functionality

//Add log2 functionality

// Add log1p functionality

const numpadToggle = document.getElementById('numpad-toggle') as HTMLButtonElement;
const numpad = document.getElementById('numpad') as HTMLDivElement;

// ... (Existing variable declarations)
const cubedButton = document.getElementById('cubed') as HTMLButtonElement;
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
const squareButton = document.getElementById('square') as HTMLButtonElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;

// ... (Existing Event Listeners)

// ... existing event listeners

// ... (Existing event listeners)

cubedButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.pow(currentValue, 3).toString();
});

nthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentDisplay = display.value;
    if (currentDisplay.includes('√')) {
      const parts = currentDisplay.split('√');
      const x = parseFloat(parts[0]);
      const y = parseFloat(parts[1]);
      display.value = Math.pow(y, 1/x).toString();
    } else {
      display.value += '√';
    }
});
duplicateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += display.value;
});

squareButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.pow(currentValue, 2).toString();
});

resetButton.addEventListener('click', () => {
  (document.getElementById('display') as HTMLInputElement).value = '';
});

// ... (Rest of the existing code)