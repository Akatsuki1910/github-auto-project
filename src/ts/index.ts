// ... (Existing code)
const calculateNthRootButton = document.getElementById('nth-root') as HTMLButtonElement;
calculateNthRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for x:') || '0');
    const root = parseFloat(prompt('Enter value for n:') || '0');
    if (!isNaN(value) && !isNaN(root)) {
        display.value = Math.pow(value, 1/root).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)