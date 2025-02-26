// ... (Existing code)
// ... (Existing functions)

// ... existing functions

// ... (Other existing functions)
// ... (Existing code)
// ... (Existing variables)

// ... (Existing Event Listeners)

// ... (Existing functions and event listeners)

// Calculate Median
document.getElementById('calculate-median')?.addEventListener('click', () => {
    try {
        const numbers = currentExpression.split(',').map(Number).sort((a, b) => a - b);
        if (numbers.some(isNaN)) {
            display.value = "Invalid input. Enter comma-separated values.";
        } else {
            const mid = Math.floor(numbers.length / 2);
            const median = numbers.length % 2 !== 0 ? numbers[mid] : (numbers[mid - 1] + numbers[mid]) / 2;
            display.value = median.toString();
            currentExpression = display.value;
        }
    } catch (error) {
        display.value = "Error";
    }
});

// ... (Other existing functions)

//Sign Functionality
document.getElementById('sign')?.addEventListener('click', () => {
    try {
        const num = parseFloat(display.value);
        if (isNaN(num)) {
            display.value = "Invalid input";
        } else if (num > 0) {
            display.value = "+" + num;
        } else if (num < 0) {
            display.value = "-" + Math.abs(num);
        } 
        currentExpression = display.value;
    }
    catch (error) {
        display.value = "Error";
    }
});

// ... (Rest of the existing code)

//Function for handling key presses
function handleKeyPress(event: KeyboardEvent): void {
    // ... (rest of your existing handleKeyPress logic)
}

const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    // Insert the value of pi into the display
    display.value += Math.PI.toString();
    currentExpression += Math.PI.toString();
});
