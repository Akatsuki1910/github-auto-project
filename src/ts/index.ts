// ... (Existing code)
const calculateTwelfthRootButton = document.getElementById('twelfth-root') as HTMLButtonElement;
calculateTwelfthRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for x⅒:') || '0');
    if (!isNaN(value)) {
        display.value = Math.pow(value, 1/12).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)