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
// ... existing code
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    display.value += '**';
});
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
    display.value += 'sin('; // Append "sin(" to the display
});
const cosButton = document.getElementById('cos') as HTMLButtonElement;
cosButton.addEventListener('click', () => {
  display.value += 'cos('; //Append "cos(" to the display
});
