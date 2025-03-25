// ... (Existing code)
const factButton = document.getElementById('fact');
if (factButton) {
    factButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = math.factorial(currentValue).toString();
        }
    });
}
// ... (Existing code)