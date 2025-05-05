// ... (Existing code)
const signChangeButton = document.getElementById('signChange') as HTMLButtonElement;
signChangeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});
// ... (Rest of existing code)