// ... (Existing code)
const maxButton = document.getElementById('max');
if (maxButton) {
    maxButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const result = math.evaluate('max(' + display.value + ')');
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
// ... (Existing code)