// ... (Existing code)
const doubleNegativeButton = document.getElementById('double_negative') as HTMLButtonElement;
doubleNegativeButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-(-currentValue)).toString();
    }
});
// ... (Rest of existing code)