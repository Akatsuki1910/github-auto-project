// ... (Existing code)
const factorialButton = document.getElementById('factorial');
if (factorialButton) {
    factorialButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                const num = parseFloat(display.value);
                if (isNaN(num)) {
                    display.value = 'Error';
                } else {
                    const result = math.factorial(num);
                    display.value = result.toString();
                }
            } catch (error) {
                display.value = 'Error';
            }
        }
    });
}