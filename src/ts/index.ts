// ... (Existing code)
const exp2Button = document.getElementById('exp2');
if (exp2Button) {
    exp2Button.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const result = math.pow(2, parseFloat(display.value));
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
// ... (Existing code)