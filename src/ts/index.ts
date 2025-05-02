// ... (Existing code)
const calculateNinthRootButton = document.getElementById('calculate-ninth-root') as HTMLButtonElement;
calculateNinthRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for x⅑:') || '0');
    if (!isNaN(value)) {
        display.value = Math.pow(value, 1/9).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)