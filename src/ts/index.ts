// ... (Existing code)
const asinhButton = document.getElementById('asinh') as HTMLButtonElement;
asinhButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.asinh(currentValue).toString();
    }
});
// ... (Rest of existing code)