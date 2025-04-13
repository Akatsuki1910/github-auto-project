// ... (Existing code)
const calculateSignButton = document.getElementById('calculate-sign') as HTMLButtonElement;
calculateSignButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        alert('Invalid input for sign.');
        return;
    }
    display.value = Math.sign(value).toString();
});