// ... (Existing code)

//Added feature: Toggle Error Messages
// ... existing code

// Add other functionalities
// ... existing code

//Added Scientific Notation Toggle
// ... existing code

// Added Deg/Rad toggle functionality
let isDegrees = true;
const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
degRadButton.addEventListener('click', () => {
    isDegrees = !isDegrees;
    degRadButton.textContent = isDegrees ? 'Deg' : 'Rad';
});

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
// ... existing code
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    display.value += '**';
});
// ... existing code for other buttons

//Added log10 functionality
const log10Button = document.getElementById('log10') as HTMLButtonElement;
log10Button.addEventListener('click', () => {
    display.value = String(Math.log10(Number(display.value)));
});

//Added cbrt functionality
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
cbrtButton.addEventListener('click', () => {
    display.value = String(Math.cbrt(Number(display.value)));
});

//Added 2^x functionality
const exp2Button = document.getElementById('exp2') as HTMLButtonElement;
exp2Button.addEventListener('click', () => {
    display.value = String(2**(Number(display.value)));
});
//Added sinh functionality
const sinhButton = document.getElementById('sinh') as HTMLButtonElement;
sinhButton.addEventListener('click', () => {
  display.value = String(Math.sinh(Number(display.value)));
});
//Added cosh functionality
const coshButton = document.getElementById('cosh') as HTMLButtonElement;
coshButton.addEventListener('click', () => {
  display.value = String(Math.cosh(Number(display.value)));
});
//Added tanh functionality
const tanhButton = document.getElementById('tanh') as HTMLButtonElement;
tanhButton.addEventListener('click', () => {
  display.value = String(Math.tanh(Number(display.value)));
});
//Added expm1 functionality
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    display.value = String(Math.expm1(Number(display.value)));
});
//Added asinh functionality
const asinhButton = document.getElementById('asinh') as HTMLButtonElement;
asinhButton.addEventListener('click', () => {
    display.value = String(Math.asinh(Number(display.value)));
});
//Added acosh functionality
const acoshButton = document.getElementById('acosh') as HTMLButtonElement;
acoshButton.addEventListener('click', () => {
    display.value = String(Math.acosh(Number(display.value)));
});
//Added atanh functionality
const atanhButton = document.getElementById('atanh') as HTMLButtonElement;
atanhButton.addEventListener('click', () => {
    display.value = String(Math.atanh(Number(display.value)));
});