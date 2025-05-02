// ... (Existing code)
const calculateTenthRootButton = document.getElementById('tenth-root') as HTMLButtonElement;
calculateTenthRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for x⅒:') || '0');
    if (!isNaN(value)) {
        display.value = Math.pow(value, 1/10).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)