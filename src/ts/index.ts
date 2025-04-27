// ... (Existing code)
const percentageButton = document.getElementById('percentage-button');
const display = document.getElementById('display') as HTMLInputElement;
percentageButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});
const taxExcludedButton = document.getElementById('calculate-tax-excluded');
taxExcludedButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 1.08).toFixed(2);
    }
});
// ... (Rest of the existing code)