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
const clearAllButton = document.getElementById('clearAll') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;

clearAllButton.addEventListener('click', () => {
    display.value = '';
    currentExpressionDisplay.textContent = '';
});

//Added current date functionality
const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click',()=>{
    const currentDate = new Date().toLocaleDateString();
    display.value = currentDate;
});

// Added exit functionality
const exitButton = document.getElementById('exit') as HTMLButtonElement;
exitButton.addEventListener('click', () => {
  window.close();
});

//Added reset functionality
const resetButton = document.getElementById('reset') as HTMLButtonElement;
resetButton.addEventListener('click', () => {
    location.reload();
});

//Added Duplicate Functionality
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    display.value = display.value + display.value;
});

//Added Inverse Functionality
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (1/currentValue).toString();
    } catch (error) {
        displayError('Invalid input for inverse operation');
    }
});