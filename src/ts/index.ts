// ... (Existing code)
const quarterButton = document.getElementById('quarter') as HTMLButtonElement;
quarterButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue / 4).toString();
    }
    catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)