// ... (Existing code)
const oneOverXButton = document.getElementById('oneOverX') as HTMLButtonElement;
oneOverXButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const result = 1 / parseFloat(display.value);
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of existing code)