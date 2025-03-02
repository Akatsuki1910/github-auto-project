// ... (Existing code)

//Added feature: Toggle Error Messages
let showErrorMessages = true;
const toggleErrorMessagesButton = document.getElementById('toggle-error-messages') as HTMLButtonElement;
toggleErrorMessagesButton.addEventListener('click', () => {
    showErrorMessages = !showErrorMessages;
});
function displayError(message: string) {
    if (showErrorMessages) {
        // Existing error display logic
        console.error(message); // Example: Log to console
        alert(message); //Added alert for error message
    }
}

//Add clearAll functionality
// ... existing code

//Added current date functionality
// ... existing code

// Added exit functionality
// ... existing code

//Added reset functionality
// ... existing code

//Added Duplicate Functionality
// ... existing code

//Added Inverse Functionality
// ... existing code

// Added Mod functionality
// ... existing code

//Added Sign Change Functionality
// ... existing code

//Added evaluate functionality
// ... existing code

//Added Square Root Functionality
const squareRootButton = document.getElementById('square-root') as HTMLButtonElement;
squareRootButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        if (currentValue < 0) {
            displayError('Cannot calculate square root of a negative number');
        } else {
            display.value = Math.sqrt(currentValue).toString();
        }
    } catch (error) {
        displayError('Invalid input for square root operation');
    }
});

//Added Cube Root Functionality
const cubeRootButton = document.getElementById('cube-root') as HTMLButtonElement;
cubeRootButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.cbrt(currentValue).toString();
    } catch (error) {
        displayError('Invalid input for cube root operation');
    }
});

// Add night mode toggle
const toggleNightModeButton = document.getElementById('toggle-night-mode') as HTMLButtonElement;
toggleNightModeButton.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
});

// Add high contrast toggle
const toggleHighContrastButton = document.getElementById('toggle-high-contrast') as HTMLButtonElement;
toggleHighContrastButton.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

//Added Font Size Toggle
const toggleFontSizeButton = document.getElementById('toggle-fontsize') as HTMLButtonElement;
let currentFontSize = 16;
toggleFontSizeButton.addEventListener('click', () => {
  currentFontSize += 2;
  document.body.style.fontSize = currentFontSize + 'px';
});

// Add screen brightness toggle
const toggleScreenBrightnessButton = document.getElementById('toggle-screen-brightness') as HTMLButtonElement;
let screenBrightness = 1.0;
toggleScreenBrightnessButton.addEventListener('click', () => {
    screenBrightness -= 0.1; 
    if(screenBrightness < 0) screenBrightness = 1.0;
    document.body.style.filter = `brightness(${screenBrightness})`;
});