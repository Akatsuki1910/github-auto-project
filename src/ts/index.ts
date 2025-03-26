// ... (Existing code)
const expButton = document.getElementById('exp');
if (expButton) {
    expButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                const num = parseFloat(display.value);
                if (isNaN(num)) {
                    display.value = 'Error';
                } else {
                    const result = math.exp(num);
                    display.value = result.toString();
                }
            } catch (error) {
                display.value = 'Error';
            }
        }
    });
}