// ... (Existing code)
const tripleButton = document.getElementById('triple');
if (tripleButton) {
    tripleButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                const currentValue = parseFloat(display.value);
                display.value = (currentValue * 3).toString();
            }
            catch (error) {
                display.value = 'Error';
            }
        }
    });
}