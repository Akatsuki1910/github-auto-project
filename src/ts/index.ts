// ... (Existing code)
const medianButton = document.getElementById('median');
if (medianButton) {
    medianButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const result = math.evaluate('median(' + display.value + ')');
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
// ... (Existing code)