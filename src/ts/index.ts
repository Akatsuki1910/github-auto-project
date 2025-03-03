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
// ... existing code