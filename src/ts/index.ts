// ... (Existing code)

//Added feature: Toggle Error Messages
// ... existing code

// Add other functionalities
// ... existing code

//Added Scientific Notation Toggle
// ... existing code

// Added Deg/Rad toggle functionality
// ... existing code

const display = document.getElementById('display') as HTMLInputElement;
let ans = 0;
let bracketsEnabled = true;
let keyboardEnabled = true;
const toggleBasicAdvancedButton = document.getElementById('toggle-basic-advanced') as HTMLButtonElement;
const scientificSection = document.querySelector('.scientific-section') as HTMLDivElement;
let isAdvancedMode = false;
toggleBasicAdvancedButton.addEventListener('click', () => {
    isAdvancedMode = !isAdvancedMode;
    scientificSection.style.display = isAdvancedMode ? 'grid' : 'none';
    toggleBasicAdvancedButton.textContent = isAdvancedMode ? 'Advanced' : 'Basic';
    if (isAdvancedMode) {
        // ... existing advanced mode button creation
    } else {
        scientificSection.innerHTML = '';
    }
});
document.addEventListener('keydown', (event) => {
    // ... (Existing Keydown logic)
});
// ... (Existing button event listeners)
const eulerButton = document.getElementById('euler') as HTMLButtonElement;
eulerButton.addEventListener('click', () => {
    display.value += Math.E.toString();
});
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue) && currentValue > 0) {
    display.value = Math.log10(currentValue).toString();
  } else {
    display.value = "Error"; 
  }
});
const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    } else {
        display.value = "Error";
    }
});
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
  if (display.value !== '' && display.value !== '0') {
    if (display.value.startsWith('-')) {
      display.value = display.value.slice(1);
    } else {
      display.value = '-' + display.value;
    }
  }
});
const cubeRootButton = document.getElementById('cube-root') as HTMLButtonElement;
cubeRootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.cbrt(currentValue).toString();
    } else {
        display.value = "Error";
    }
});
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
  display.value = '0';
  ans = 0;
//  Here you can reset any other variables or states related to your calculator
});
const copyButton = document.getElementById('copy') as HTMLButtonElement;
copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(display.value);
});
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    display.value = Math.abs(parseFloat(display.value)).toString();
});
let memory = 0;
const mcButton = document.getElementById('mc') as HTMLButtonElement;
mcButton.addEventListener('click', () => {
    memory = 0;
});
const mrButton = document.getElementById('mr') as HTMLButtonElement;
mrButton.addEventListener('click', () => {
    display.value = memory.toString();
});
const msButton = document.getElementById('ms') as HTMLButtonElement;
msButton.addEventListener('click', () => {
    memory = parseFloat(display.value);
});
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    display.value = Math.round(parseFloat(display.value)).toString();
});
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    display.value = Math.floor(parseFloat(display.value)).toString();
});
// ... existing code