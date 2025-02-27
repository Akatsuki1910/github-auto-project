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

const powerOfTwoButton = document.getElementById('power-of-two') as HTMLButtonElement;
const cubeRootButton = document.getElementById('cube-root') as HTMLButtonElement;
const tenPowerButton = document.getElementById('ten-power') as HTMLButtonElement;

powerOfTwoButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const currentValue = parseFloat(display.value);
  const result = Math.pow(currentValue, 2);
  display.value = result.toString();
});

cubeRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    const result = Math.cbrt(currentValue);
    display.value = result.toString();
});

tenPowerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    const result = Math.pow(10, currentValue);
    display.value = result.toString();
});

numpadToggle.addEventListener('click', () => {
  if (numpad.style.display === 'none') {
    numpad.style.display = 'grid';
  } else {
    numpad.style.display = 'none';
  }
});
// ... (Rest of the existing code)