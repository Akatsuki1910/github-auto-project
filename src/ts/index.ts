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

// ... (Rest of the existing code)