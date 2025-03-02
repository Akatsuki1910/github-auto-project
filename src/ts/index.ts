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
// ... existing code

//Added Cube Root Functionality
// ... existing code

// Add night mode toggle
// ... existing code

// Add high contrast toggle
// ... existing code

//Added Font Size Toggle
// ... existing code

// Add screen brightness toggle
// ... existing code

//Added color scheme toggle
// ... existing code

const display = document.getElementById('display') as HTMLInputElement;

// ... other code

//Added Scientific Notation Toggle
let scientificNotation = false;
const toggleScientificNotationButton = document.getElementById('toggle-scientific-notation') as HTMLButtonElement;
toggleScientificNotationButton.addEventListener('click', () => {
    scientificNotation = !scientificNotation;
    if(scientificNotation){
        if (display.value) {
          display.value = Number(display.value).toExponential();
        }
    }
    else{
        if (display.value) {
          display.value = Number(display.value).toString();
        }
    }
});

// Added Deg/Rad toggle functionality
let isDeg = true;
const toggleDegRad = document.getElementById('toggle-deg-rad') as HTMLButtonElement;
toggleDegRad.addEventListener('click', () => {
    isDeg = !isDeg;
    toggleDegRad.textContent = isDeg ? 'Deg' : 'Rad';
});