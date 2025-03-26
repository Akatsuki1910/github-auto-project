// ... (Existing code)
const tanButton = document.getElementById('tan');
if (tanButton) {
    tanButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                const num = parseFloat(display.value);
                if (isNaN(num)) {
                    display.value = 'Error';
                } else {
                    const result = math.tan(num);
                    display.value = result.toString();
                }
            } catch (error) {
                display.value = 'Error';
            }
        }
    });
}