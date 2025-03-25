// ... (Existing code)
const squareButton = document.getElementById('square');
if (squareButton) {
    squareButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (currentValue * currentValue).toString();
        }
    });
}
// ... (Existing code)