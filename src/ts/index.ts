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
const modButton = document.getElementById('mod') as HTMLButtonElement;
const exp2Button = document.getElementById('exp2') as HTMLButtonElement;
const calculateSumButton = document.getElementById('calculate-sum') as HTMLButtonElement;
const calculateProductButton = document.getElementById('calculate-product') as HTMLButtonElement;
const calculateAverageButton = document.getElementById('calculate-average') as HTMLButtonElement;


// ... (Existing Event Listeners)

// ... existing event listeners

// ... (Existing event listeners)

exp2Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.pow(2, currentValue).toString();
});


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

modButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += '%';
});

calculateSumButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const numbers = display.value.split('+').map(Number);
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  display.value = sum.toString();
});

calculateProductButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const numbers = display.value.split('*').map(Number);
  const product = numbers.reduce((acc, num) => acc * num, 1);
  display.value = product.toString();
});

calculateAverageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number);  // Split by comma
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    display.value = average.toString();
});
// ... (Rest of the existing code)