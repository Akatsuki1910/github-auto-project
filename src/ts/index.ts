// ... (Existing code)
const squaredButton = document.getElementById('squared') as HTMLButtonElement;
squaredButton.addEventListener('click', () => {
    if (display.value) {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(currentValue, 2).toString();
    }
});