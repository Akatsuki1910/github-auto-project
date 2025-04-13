// ... (Existing code)
const calculateCeilButton = document.getElementById('calculate-ceil') as HTMLButtonElement;
calculateCeilButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        alert('Invalid input for ceil.');
        return;
    }
    display.value = Math.ceil(value).toString();
});