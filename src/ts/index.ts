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
    }
    else {
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
// ... existing functionalities
// Added gravitational acceleration constant
const gButton = document.getElementById('gravitational-acceleration') as HTMLButtonElement;
gButton.addEventListener('click', () => {
    display.value += '9.80665';
});
let lastAnswer = 0;
const equalsButton = document.getElementById('=') as HTMLButtonElement; // Get the equals button
equalsButton.addEventListener('click', () => {
    try {
        lastAnswer = eval(display.value);
        display.value = String(lastAnswer);
        ans = lastAnswer;
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... existing code
//Added copy functionality
const copyButton = document.getElementById('copy') as HTMLButtonElement;
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value);
});
