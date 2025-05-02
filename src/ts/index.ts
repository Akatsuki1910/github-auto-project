// ... (Existing code)
const calculateEighthRootButton = document.getElementById('calculate-eighth-root') as HTMLButtonElement;
calculateEighthRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for x⅛:') || '0');
    if (!isNaN(value)) {
        display.value = Math.pow(value, 1/8).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)