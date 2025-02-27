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
const expButton = document.getElementById('exp') as HTMLButtonElement;
const lnButton = document.getElementById('ln') as HTMLButtonElement;
const log10Button = document.getElementById('log10') as HTMLButtonElement;
const absButton = document.getElementById('abs') as HTMLButtonElement;
const floorButton = document.getElementById('floor') as HTMLButtonElement;
const roundButton = document.getElementById('round') as HTMLButtonElement;
const signButton = document.getElementById('sign') as HTMLButtonElement;
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
const randomButton = document.getElementById('random') as HTMLButtonElement;

// ... (Existing Event Listeners)

signButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const currentValue = parseFloat(display.value);
  display.value = Math.sign(currentValue).toString();
});

cbrtButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.cbrt(currentValue).toString();
});

inverseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (1/currentValue).toString();
});

randomButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.random().toString();
});

numpadToggle.addEventListener('click', () => {
  if (numpad.style.display === 'none') {
    numpad.style.display = 'grid';
  } else {
    numpad.style.display = 'none';
  }
});
// ... (Rest of the existing code)