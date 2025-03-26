// ... (Existing code)
const powerButton = document.getElementById('power');
if (powerButton) {
    powerButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                const currentExpression = display.value;
                display.value += '**';
            }
            catch (error) {
                display.value = 'Error';
            }
        }
    });
}