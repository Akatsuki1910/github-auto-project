// ... (Existing code)
const msButton = document.getElementById('ms') as HTMLButtonElement;
msButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        memoryRecallValue = currentValue; // Store the current value for MRC
    }
    catch (error) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)