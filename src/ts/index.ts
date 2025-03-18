// ... (Existing code)
const integerDivisionButton = document.getElementById('integer-division') as HTMLButtonElement;
integerDivisionButton.addEventListener('click', () => {
    if (display.value) {
        const currentValue = parseFloat(display.value);
        const result = Math.floor(currentValue);
        display.value = result.toString();
    }
});