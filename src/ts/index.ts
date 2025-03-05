// ... (Existing code)
//Added feature: Toggle Error Messages
// ... existing code
// Add other functionalities
// ... existing code
//Added Scientific Notation Toggle
let isScientificNotation = false;
// ... existing code
// Added Deg/Rad toggle functionality
let isDegrees = true;
const degRadButton = document.getElementById('toggle-deg-rad') as HTMLButtonElement;
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
        let expression = display.value;
        if (!isDegrees && expression.includes('sin') || expression.includes('cos') || expression.includes('tan')) {
            expression = expression.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan');
        }
        lastAnswer = eval(expression);
        if (isScientificNotation) {
            display.value = lastAnswer.toExponential();
        }
        else {
            display.value = String(lastAnswer);
        }
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
const switchNotationButton = document.getElementById('switch-notation') as HTMLButtonElement;
switchNotationButton.addEventListener('click', () => {
    isScientificNotation = !isScientificNotation;
    switchNotationButton.textContent = isScientificNotation ? 'Scientific' : 'Standard';
    if (display.value) {
        const currentValue = parseFloat(display.value);
        display.value = isScientificNotation ? currentValue.toExponential() : String(currentValue);
    }
});
const secondDisplay = document.getElementById('second-display') as HTMLInputElement;
const toggleSecondDisplayButton = document.getElementById('toggle-second-display') as HTMLButtonElement;
toggleSecondDisplayButton.addEventListener('click', () => {
    const isSecondDisplayVisible = secondDisplay.style.display === 'block';
    secondDisplay.style.display = isSecondDisplayVisible ? 'none' : 'block';
});
const clearDisplayButton = document.getElementById('clear-display') as HTMLButtonElement;
clearDisplayButton.addEventListener('click', () => {
    display.value = '';
});
//Added nth-root functionality
const nthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
nthRootButton.addEventListener('click', () => {
    display.value += 'nthroot('; // Placeholder for nth root function
});
//Added modulo operator functionality
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    display.value += '%';
});