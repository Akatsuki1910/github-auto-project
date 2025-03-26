// ... (Existing code)
const sinButton = document.getElementById('sin');
if (sinButton) {
    sinButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                const num = parseFloat(display.value);
                if (isNaN(num)) {
                    display.value = 'Error';
                } else {
                    const result = math.sin(num);
                    display.value = result.toString();
                }
            } catch (error) {
                display.value = 'Error';
            }
        }
    });
}