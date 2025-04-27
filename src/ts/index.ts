// ... (Existing code)
const percentageButton = document.getElementById('percentage-button');
const display = document.getElementById('display') as HTMLInputElement;
percentageButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});
// ... (Rest of the existing code)