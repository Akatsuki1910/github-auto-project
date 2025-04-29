// ... (Existing code)
const fixButton = document.getElementById('fix') as HTMLButtonElement;
fixButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const result = math.fix(parseFloat(display.value));
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)