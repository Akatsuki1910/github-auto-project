// ... (Existing code)
const tenPowerButton = document.getElementById('ten-power');
if (tenPowerButton) {
    tenPowerButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                const num = parseFloat(display.value);
                if (isNaN(num)) {
                    display.value = 'Error';
                } else {
                    const result = math.pow(10, num);
                    display.value = result.toString();
                }
            } catch (error) {
                display.value = 'Error';
            }
        }
    });
}