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
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton?.addEventListener('click', () => {
    display.value = Math.E.toString();
    currentExpression = display.value;
});

//Add Mod functionality
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton?.addEventListener('click', () => {
    currentExpression += '%';
    display.value = currentExpression;
});

// Add expm1 functionality
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.expm1(currentValue).toString();
        currentExpression = display.value;
    }
});

//Add sign change functionality
const signChangeButton = document.getElementById('sign-change') as HTMLButtonElement;
signChangeButton?.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = (-currentValue).toString();
    currentExpression = display.value;
  }
});

//Add Sum functionality
const calculateSumButton = document.getElementById('calculate-sum') as HTMLButtonElement;
calculateSumButton?.addEventListener('click', () => {
    const numbers = display.value.split('+').map(Number);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
  display.value = sum.toString();
  currentExpression = display.value;

});

//Add Product functionality
const calculateProductButton = document.getElementById('calculate-product') as HTMLButtonElement;
calculateProductButton?.addEventListener('click', () => {
    const numbers = display.value.split('*').map(Number);
    const product = numbers.reduce((acc, num) => acc * num, 1);
    display.value = product.toString();
    currentExpression = display.value;
});

// Add Average functionality
const calculateAverageButton = document.getElementById('calculate-average') as HTMLButtonElement;
calculateAverageButton?.addEventListener('click', () => {
    const numbers = display.value.split('+').map(Number); // Assumes numbers are separated by '+'
    if (numbers.length > 0) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      const average = sum / numbers.length;
      display.value = average.toString();
      currentExpression = display.value;
    }
});

// Add Square Root functionality
const calculateSquareRootButton = document.getElementById('calculate-square-root') as HTMLButtonElement;
calculateSquareRootButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 0) {
      display.value = Math.sqrt(currentValue).toString();
      currentExpression = display.value;
    }
});
// ... (Rest of the existing code)