// ... (Existing code)
const inverseButton = document.getElementById('inverse');
if (inverseButton) {
    inverseButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                const currentValue = parseFloat(display.value);
                if (currentValue === 0) {
                    display.value = 'Error: Division by zero';
                }
                else {
                    display.value = (1 / currentValue).toString();
                }
            }
            catch (error) {
                display.value = 'Error';
            }
        }
    });
}