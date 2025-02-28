// ... (Existing code)
// Add percentage change functionality
const percentChangeButton = document.getElementById('percent-change') as HTMLButtonElement;
let previousValue = null;

percentChangeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (previousValue !== null) {
        const percentageChange = ((currentValue - previousValue) / previousValue) * 100;
        display.value = percentageChange.toString();
    }
    previousValue = currentValue;
});

// ... (Rest of the existing code)