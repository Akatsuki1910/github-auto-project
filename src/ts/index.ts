// ... (Existing code)
const atanhButton = document.getElementById('atanh') as HTMLButtonElement;
atanhButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > -1 && currentValue < 1) {
        display.value = Math.atanh(currentValue).toString();
    } else {
        display.value = "Error: Input must be between -1 and 1";
    }
});
// ... (Rest of existing code)