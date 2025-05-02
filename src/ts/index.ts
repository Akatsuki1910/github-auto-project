// ... (Existing code)
const calculateSixthRootButton = document.getElementById('calculate-sixth-root') as HTMLButtonElement;
calculateSixthRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for x⅙:') || '0');
    if (!isNaN(value)) {
        display.value = Math.pow(value, 1/6).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)