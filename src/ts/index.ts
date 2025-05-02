// ... (Existing code)
const calculateSquareRootButton = document.getElementById('calculate-square-root') as HTMLButtonElement;
calculateSquareRootButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter value for √x:') || '0');
    if (!isNaN(value)) {
        display.value = Math.sqrt(value).toString();
    }
    else {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)