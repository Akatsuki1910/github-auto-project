// ... (Existing code)
const calculateSeventhRootButton = document.getElementById('calculate-seventh-root') as HTMLButtonElement;
calculateSeventhRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for x⅐:') || '0');
    if (!isNaN(value)) {
        display.value = Math.pow(value, 1/7).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)