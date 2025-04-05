// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        const divisor = parseFloat(prompt('Enter the divisor:', '2'));
        if (isNaN(divisor)) {
            display.value = "Invalid divisor";
        } else {
            display.value = (currentValue % divisor).toString();
        }
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)