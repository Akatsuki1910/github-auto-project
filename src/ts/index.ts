// ... (Existing code)
const modeButton = document.getElementById('mode');
if (modeButton) {
    modeButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const result = math.evaluate('mode(' + display.value + ')');
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
// ... (Existing code)