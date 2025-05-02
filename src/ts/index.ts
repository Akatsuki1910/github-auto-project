// ... (Existing code)
const atanButton = document.getElementById('atan') as HTMLButtonElement;
atanButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.atan(currentValue).toString();
    }
});
// ... (Rest of existing code)