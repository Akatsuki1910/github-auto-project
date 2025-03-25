// ... (Existing code)
const squaredButton = document.getElementById('squared');
if (squaredButton) {
    squaredButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (currentValue * currentValue).toString();
        }
    });
}
// ... (Existing code)