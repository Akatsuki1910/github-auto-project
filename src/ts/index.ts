// ... (Existing code)
const tripleButton = document.getElementById('triple') as HTMLButtonElement;
tripleButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue * 3).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)