// ... (Existing code)
const sumButton = document.getElementById('sum');
if (sumButton) {
    sumButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const result = math.evaluate('sum(' + display.value + ')');
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
// ... (Existing code)