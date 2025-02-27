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
const powerOfTwoButton = document.getElementById('power-of-two') as HTMLButtonElement;
powerOfTwoButton?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid input";
        } else {
            display.value = Math.pow(2, num).toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

// Add sin functionality
// ... (Existing sin, cos, tan functions)

// Add asin functionality
const asinButton = document.getElementById('asin') as HTMLButtonElement;
asinButton?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid input";
        } else if (num < -1 || num > 1) {
          display.value = "Out of range";
        }
         else {
            display.value = Math.asin(num).toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

// Add acos functionality
const acosButton = document.getElementById('acos') as HTMLButtonElement;
acosButton?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid input";
        } else if (num < -1 || num > 1) {
            display.value = "Out of range";
        } else {
            display.value = Math.acos(num).toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

// ... (Rest of the existing code)