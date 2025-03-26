// ... (Existing code)
const meanButton = document.getElementById('mean');
if (meanButton) {
    meanButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        try {
            const result = math.evaluate('mean(' + display.value + ')');
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    });
}
// ... (Existing code)