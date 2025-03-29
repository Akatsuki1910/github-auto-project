// ... (Existing code)
const signButton = document.getElementById('sign') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
signButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.sign(currentValue).toString();
    }
});