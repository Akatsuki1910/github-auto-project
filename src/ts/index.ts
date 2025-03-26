// ... (Existing code)
const lnButton = document.getElementById('ln');
if (lnButton) {
    lnButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                const num = parseFloat(display.value);
                if (isNaN(num)) {
                    display.value = 'Error';
                } else if (num <= 0) {
                    display.value = 'Error: ln(x) for x <= 0 is undefined';
                }
                 else {
                    const result = math.log(num);
                    display.value = result.toString();
                }
            } catch (error) {
                display.value = 'Error';
            }
        }
    });
}