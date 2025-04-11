// ... (Existing code)
const calculateLog2Button = document.getElementById('calculate-log2') as HTMLButtonElement;
calculateLog2Button.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = math.log2(currentValue).toString();
    }
});