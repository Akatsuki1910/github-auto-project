// ... (Existing code)
const halfButton = document.getElementById('half');
if (halfButton) {
    halfButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = (currentValue / 2).toString();
        }
    });
}
// ... (Existing code)