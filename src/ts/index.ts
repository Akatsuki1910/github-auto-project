// ... (Existing code)

// Add sign change functionality

// ... (Existing variable declarations)

// ... (Existing Event Listeners)

const calculatePercentageButton = document.getElementById('calculate-percentage') as HTMLButtonElement;

calculatePercentageButton.addEventListener('click', () => {
    // ... existing code
});

// ... other button event listeners

const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (-currentValue).toString();
});

// ... (Rest of the existing code)