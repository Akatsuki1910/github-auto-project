// ... (Existing code)
const calculateTipButton = document.getElementById('calculate-tip');
const display = document.getElementById('display') as HTMLInputElement;
calculateTipButton?.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (!isNaN(num)) {
        const tip = num * 0.15;
        display.value = (num + tip).toFixed(2).toString();
    }
});
// ... (Rest of the existing code)