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
// ... (Existing asin function)

// Add acos functionality
// ... (Existing acos function)

// Add atan functionality
const atanButton = document.getElementById('atan') as HTMLButtonElement;
atanButton?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid input";
        } else {
            display.value = Math.atan(num).toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

//Add log10 functionality
const log10Button = document.getElementById('log10') as HTMLButtonElement;
log10Button?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid input";
        } else if (num <= 0) {
            display.value = "Invalid input for log10";
        }
        else{
            display.value = Math.log10(num).toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

//Add ln functionality
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid input";
        } else if (num <= 0) {
            display.value = "Invalid input for ln";
        } else {
            display.value = Math.log(num).toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

// ... (Rest of the existing code)