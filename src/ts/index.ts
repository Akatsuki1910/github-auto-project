// ... (Existing code)
const doubleButton = document.getElementById('double');
if (doubleButton) {
    doubleButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                const currentValue = parseFloat(display.value);
                display.value = (currentValue * 2).toString();
            }
            catch (error) {
                display.value = 'Error';
            }
        }
    });
}