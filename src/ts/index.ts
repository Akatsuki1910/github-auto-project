// ... (Existing code)
const squareButton = document.getElementById('square');
if (squareButton) {
    squareButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display && display.value) {
            const num = parseFloat(display.value);
            display.value = (num * num).toString();
        }
    });
}
// ... (Existing code)