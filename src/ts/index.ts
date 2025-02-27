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
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid input";
        } else {
            display.value = Math.sin(num).toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

// Add cos functionality
const cosButton = document.getElementById('cos') as HTMLButtonElement;
cosButton?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid input";
        } else {
            display.value = Math.cos(num).toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

// ... (Rest of the existing code)