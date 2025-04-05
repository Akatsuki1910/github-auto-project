// ... (Existing code)
const radToDegButton = document.getElementById('radToDeg') as HTMLButtonElement;
radToDegButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = parseFloat(display.value);
        const result = math.unit(value, 'rad').to('deg');
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)