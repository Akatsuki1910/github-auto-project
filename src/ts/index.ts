// ... (Existing code)
const asinButton = document.getElementById('asin') as HTMLButtonElement;
asinButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.asin(currentValue).toString();
    }
});
// ... (Rest of existing code)