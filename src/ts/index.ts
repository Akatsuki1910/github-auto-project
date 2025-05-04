// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue % 2).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of existing code)