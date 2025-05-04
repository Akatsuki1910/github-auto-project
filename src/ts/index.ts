// ... (Existing code)
const tripleButton = document.getElementById('triple') as HTMLButtonElement;
tripleButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue * 3).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of existing code)